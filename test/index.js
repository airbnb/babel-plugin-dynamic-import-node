import test from 'tape';
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';
import templates from '@babel/plugin-transform-template-literals';

import testPlugin from './testPlugin';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH).filter(file => (
  statSync(join(FIXTURE_PATH, file)).isDirectory()
));

function normalize(output) {
  return output.replace(/function _interopRequireWildcard\(obj\) {.*}(\s*)/, 'function _interopRequireWildcard(obj) { [elided code] }$1').trim();
}

test('babel-plugin-dynamic-import-node', (t) => {
  testFolders.forEach((folderName) => {
    const actual = readFileSync(join(FIXTURE_PATH, folderName, 'actual.js'), 'utf8');
    const expected = readFileSync(join(FIXTURE_PATH, folderName, 'expected.js'), 'utf8');
    const expectedPresetEnv = readFileSync(join(FIXTURE_PATH, folderName, 'expected.es2015.js'), 'utf8');
    const expectedNoInterop = readFileSync(join(FIXTURE_PATH, folderName, 'expected.noInterop.js'), 'utf8');

    t.test(`works with ${folderName}`, (st) => {
      const result = testPlugin(actual);
      st.equal(normalize(result), normalize(expected));
      st.end();
    });

    t.test(`works with ${folderName} and the 'noInterop': true option`, (st) => {
      const result = testPlugin(actual, [], [], { noInterop: true });
      st.equal(normalize(result), normalize(expectedNoInterop));
      st.end();
    });

    t.test(`works with ${folderName} and the env preset`, (st) => {
      const result = testPlugin(
        actual,
        ['@babel/preset-env'],
        [[templates, { spec: true }]],
      );
      st.equal(normalize(result), normalize(expectedPresetEnv));
      st.end();
    });
  });

  t.end();
});
