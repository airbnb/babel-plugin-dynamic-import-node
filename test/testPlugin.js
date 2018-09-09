import { transform } from '@babel/core';

export default function testPlugin(code, presets, plugins, options = {}) {
  const result = transform(code, {
    presets: [].concat(presets || []),
    plugins: [].concat(plugins || [], [['./src/index.js', options]]),
  });

  return result.code;
}
