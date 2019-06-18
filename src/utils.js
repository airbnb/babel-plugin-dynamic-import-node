export function getImportSource(t, callNode) {
  const importArguments = callNode.arguments;
  const [importPath] = importArguments;

  const isString = t.isStringLiteral(importPath) || t.isTemplateLiteral(importPath);
  if (isString) {
    t.removeComments(importPath);
    return importPath;
  }

  return t.templateLiteral([
    t.templateElement({ raw: '', cooked: '' }),
    t.templateElement({ raw: '', cooked: '' }, true),
  ], importArguments);
}

export function createDynamicImportTransform({ template, types: t }) {
  const buildImport = template('Promise.resolve().then(() => MODULE)');

  return (context, path) => {
    const requireCall = t.callExpression(
      t.identifier('require'),
      [getImportSource(t, path.parent)],
    );

    const { noInterop = false } = context.opts;
    const MODULE = noInterop === true ? requireCall : t.callExpression(context.addHelper('interopRequireWildcard'), [requireCall]);
    const newImport = buildImport({
      MODULE,
    });
    path.parentPath.replaceWith(newImport);
  };
}
