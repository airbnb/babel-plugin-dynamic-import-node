import syntax from 'babel-plugin-syntax-dynamic-import';

function getStatement(sync = false) {
  if (sync) {
    return 'MODULE';
  }

  return 'Promise.resolve().then(() => MODULE)';
}

export default function ({ template, types: t }) {
  return {
    inherits: syntax,

    visitor: {
      Import(path) {
        const { noInterop, sync } = this.opts;
        const statement = getStatement(sync);
        const buildImport = template(statement);

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

        const MODULE = noInterop === true ? requireCall : t.callExpression(this.addHelper('interopRequireWildcard'), [requireCall]);
        const newImport = buildImport({
          MODULE,
        });
        path.parentPath.replaceWith(newImport);
      },
    },
  };
}
