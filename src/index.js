import { createDynamicImportTransform } from './utils';

export default function (api) {
  const transformImport = createDynamicImportTransform(api);

  return {
    // NOTE: Once we drop support for Babel <= v6 we should
    // update this to import from @babel/plugin-syntax-dynamic-import.
    // https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push('dynamicImport');
    },

    visitor: {
      Import(path) {
        transformImport(this, path);
      },
    },
  };
}
