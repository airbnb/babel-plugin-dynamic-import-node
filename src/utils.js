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
  const builders = {
    static: {
      interop: template('Promise.resolve().then(() => INTEROP(require(SOURCE)))'),
      noInterop: template('Promise.resolve().then(() => require(SOURCE))'),
    },
    dynamic: {
      interop: template('Promise.resolve(SOURCE).then(s => INTEROP(require(s)))'),
      noInterop: template('Promise.resolve(SOURCE).then(s => require(s))'),
    },
  };

  const visited = typeof WeakSet === 'function' && new WeakSet();

  const isString = (node) => t.isStringLiteral(node)
    || (t.isTemplateLiteral(node) && node.expressions.length === 0);

  return (context, path) => {
    if (visited) {
      if (visited.has(path)) {
        return;
      }
      visited.add(path);
    }

    const SOURCE = getImportSource(t, path.parent);

    const builder = isString(SOURCE) ? builders.static : builders.dynamic;

    const newImport = context.opts.noInterop
      ? builder.noInterop({ SOURCE })
      : builder.interop({ SOURCE, INTEROP: context.addHelper('interopRequireWildcard') });

    path.parentPath.replaceWith(newImport);
  };
}
