import test from 'tape';
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';
import templates from 'babel-plugin-transform-es2015-template-literals';

import testPlugin from './testPlugin';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH).filter(file => (
  statSync(join(FIXTURE_PATH, file)).isDirectory()
));

test('babel-plugin-dynamic-import-node', (t) => {
  testFolders.forEach((folderName) => {
    const actual = readFileSync(join(FIXTURE_PATH, folderName, 'actual.js'), 'utf8');
    const expected = readFileSync(join(FIXTURE_PATH, folderName, 'expected.js'), 'utf8');
    const expectedES2015 = readFileSync(join(FIXTURE_PATH, folderName, 'expected.es2015.js'), 'utf8');

    t.test(`works with ${folderName}`, (st) => {
      const result = testPlugin(actual);
      st.equal(result.trim(), expected.trim());
      st.end();
    });

    t.test(`works with ${folderName} and the es2015 preset`, (st) => {
      const result = testPlugin(
        actual,
        ['es2015'],
        [[templates, { spec: true }]],
      );
      st.equal(result.trim(), expectedES2015.trim());
      st.end();
    });

    t.test(`works with ${folderName} and the env preset`, (st) => {
      const result = testPlugin(
        actual,
        ['env'],
        [[templates, { spec: true }]],
      );
      st.equal(result.trim(), expectedES2015.trim());
      st.end();
    });
  });

  t.end();
});
