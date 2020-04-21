var _this = this;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

Promise.resolve("" + String(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

var i = 0;
Promise.resolve("" + i++).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

Promise.resolve("" + String(fn())).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = Promise;
          _context.t1 = String;
          _context.next = 4;
          return "x";

        case 4:
          _context.t2 = _context.sent;
          _context.t3 = (0, _context.t1)(_context.t2);
          _context.t4 = "" + _context.t3;

          _context.t5 = function (s) {
            return babelHelpers.interopRequireWildcard(require(s));
          };

          return _context.abrupt("return", _context.t0.resolve.call(_context.t0, _context.t4).then(_context.t5));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

function f() {
  return regeneratorRuntime.wrap(function f$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = Promise;
          _context2.t1 = String;
          _context2.next = 4;
          return "x";

        case 4:
          _context2.t2 = _context2.sent;
          _context2.t3 = (0, _context2.t1)(_context2.t2);
          _context2.t4 = "" + _context2.t3;

          _context2.t5 = function (s) {
            return babelHelpers.interopRequireWildcard(require(s));
          };

          _context2.t0.resolve.call(_context2.t0, _context2.t4).then(_context2.t5);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, this);
}
