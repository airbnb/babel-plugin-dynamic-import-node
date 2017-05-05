import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';
import * as t from 'babel-types';

const TYPE_IMPORT = 'Import';

const buildImport = template(`
  Promise.resolve().then(() => require(SOURCE))
`);

export default () => ({
  inherits: syntax,

  visitor: {
    CallExpression(path) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const importArgument = path.node.arguments[0];
        const newImport = buildImport({
          SOURCE: (t.isStringLiteral(importArgument) || t.isTemplateLiteral(importArgument))
            ? path.node.arguments
            : t.templateLiteral([t.templateElement({ raw: '', cooked: '' }), t.templateElement({ raw: '', cooked: '' }, true)], path.node.arguments),
        });
        path.replaceWith(newImport);
      }
    },
  },
});
