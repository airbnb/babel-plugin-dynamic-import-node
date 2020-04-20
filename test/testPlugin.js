import * as babel6 from 'babel-core';

// This can't be imported in node 4.
// eslint-disable-next-line global-require
const babel7lazy = () => require('@babel/core');

export default function testPlugin(version, code, presets, plugins, options = {}) {
  const transform = version === 6 ? babel6.transform : babel7lazy().transformSync;
  const helpers = version === 6 ? 'external-helpers' : '@babel/external-helpers';

  const result = transform(code, {
    presets: [].concat(presets || []),
    plugins: [].concat(plugins || [], [['./src/index.js', options], helpers]),
  });

  return result.code;
}
