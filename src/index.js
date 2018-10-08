export default function ({ template, types: t }) {
  const buildImport = template('Promise.resolve().then(() => MODULE)');

  return {
    // NOTE: Once we drop support for Babel <= v6 we should
    // update this to import from @babel/plugin-syntax-dynamic-import.
    // https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push('dynamicImport');
    },

    visitor: {
      Import(path) {
        const importArguments = path.parentPath.node.arguments;
        const [importPath] = importArguments;
        const isString = t.isStringLiteral(importPath) || t.isTemplateLiteral(importPath);
        if (isString) {
          t.removeComments(importPath);
        }
        const SOURCE = isString
          ? importArguments
          : t.templateLiteral([
            t.templateElement({ raw: '', cooked: '' }),
            t.templateElement({ raw: '', cooked: '' }, true),
          ], importArguments);
        const requireCall = t.callExpression(
          t.identifier('require'),
          [].concat(SOURCE),
        );

        const { noInterop = false } = this.opts;
        const MODULE = noInterop === true ? requireCall : t.callExpression(this.addHelper('interopRequireWildcard'), [requireCall]);
        const newImport = buildImport({
          MODULE,
        });
        path.parentPath.replaceWith(newImport);
      },
    },
  };
}
