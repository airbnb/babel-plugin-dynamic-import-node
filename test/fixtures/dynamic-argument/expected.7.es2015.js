var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

Promise.resolve("".concat(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
var i = 0;
Promise.resolve("".concat(i++)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve("".concat(fn())).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

/*#__PURE__*/
babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = Promise;
          _context.t1 = "";
          _context.next = 4;
          return "x";

        case 4:
          _context.t2 = _context.sent;
          _context.t3 = _context.t1.concat.call(_context.t1, _context.t2);
          return _context.abrupt("return", _context.t0.resolve.call(_context.t0, _context.t3).then(function (s) {
            return babelHelpers.interopRequireWildcard(require(s));
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

function f() {
  return regeneratorRuntime.wrap(function f$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = Promise;
          _context2.t1 = "";
          _context2.next = 4;
          return "x";

        case 4:
          _context2.t2 = _context2.sent;
          _context2.t3 = _context2.t1.concat.call(_context2.t1, _context2.t2);

          _context2.t0.resolve.call(_context2.t0, _context2.t3).then(function (s) {
            return babelHelpers.interopRequireWildcard(require(s));
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}
