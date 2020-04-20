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
  const buildImport = template('Promise.resolve(SOURCE).then(s => INTEROP(require(s)))');
  const buildImportNoInterop = template('Promise.resolve(SOURCE).then(s => require(s))');

  return (context, path) => {
    const SOURCE = getImportSource(t, path.parent);

    const newImport = context.opts.noInterop
      ? buildImportNoInterop({ SOURCE })
      : buildImport({ SOURCE, INTEROP: context.addHelper('interopRequireWildcard') });

    path.parentPath.replaceWith(newImport);
  };
}
