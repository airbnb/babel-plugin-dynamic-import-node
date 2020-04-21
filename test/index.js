import test from 'tape';
import { join } from 'path';
import {
  readdirSync, statSync, readFileSync, writeFileSync,
} from 'fs';

import testPlugin from './testPlugin';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH).filter((file) => (
  statSync(join(FIXTURE_PATH, file)).isDirectory()
));

// Babel 7 only supports node 6+
const versions = Number(process.version.match(/\d+/)[0]) >= 6 ? [6, 7] : [6];

const pkgs = {
  6: {
    env: 'env',
    es2015: 'es2015',
    templates: 'transform-es2015-template-literals',
  },
  7: {
    env: '@babel/env',
    templates: '@babel/transform-template-literals',
  },
};

function normalize(output) {
  return `${output.trim()}\n`;
}

function tryRead(folder, file) {
  try {
    return readFileSync(join(FIXTURE_PATH, folder, file), 'utf8');
  } catch (e) {
    return '';
  }
}

function assertOrWrite(st, result, expected, folder, file) {
  if (process.env.OVERWRITE) {
    writeFileSync(join(FIXTURE_PATH, folder, file), normalize(result));
  } else {
    st.equal(normalize(result), normalize(expected));
  }
}

test('babel-plugin-dynamic-import-node', (t) => {
  testFolders.forEach((folderName) => {
    const actual = tryRead(folderName, 'actual.js');

    versions.forEach((version) => {
      const expected = tryRead(folderName, `expected.${version}.js`);
      const expectedES2015 = tryRead(folderName, `expected.${version}.es2015.js`);
      const expectedNoInterop = tryRead(folderName, `expected.${version}.noInterop.js`);

      t.test(`babel ${version} - works with ${folderName}`, (st) => {
        const result = testPlugin(version, actual);
        assertOrWrite(st, result, expected, folderName, `expected.${version}.js`);
        st.end();
      });

      t.test(`babel ${version} - works with ${folderName} and the 'noInterop': true option`, (st) => {
        const result = testPlugin(version, actual, [], [], { noInterop: true });
        assertOrWrite(st, result, expectedNoInterop, folderName, `expected.${version}.noInterop.js`);
        st.end();
      });

      t.test(`babel ${version} - works with ${folderName} and the env preset`, (st) => {
        const result = testPlugin(
          version,
          actual,
          // Disable modules, otherwise it includes a different version of this plugin
          [[pkgs[version].env, { modules: false }]],
          [[pkgs[version].templates, { spec: true }]],
        );
        assertOrWrite(st, result, expectedES2015, folderName, `expected.${version}.es2015.js`);
        st.end();
      });

      if (version === 6 && !process.env.OVERWRITE
        // The es2015 and env presets have two different output with async functions
        && folderName !== 'dynamic-argument') {
        t.test(`babel ${version} - works with ${folderName} and the es2015 preset`, (st) => {
          const result = testPlugin(
            version,
            actual,
            [[pkgs[version].es2015, { modules: false }]],
            [[pkgs[version].templates, { spec: true }]],
          );
          st.equal(normalize(result), normalize(expectedES2015));
          st.end();
        });
      }
    });
  });

  t.end();
});
