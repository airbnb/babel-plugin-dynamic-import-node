function _templateObject() {
  var data = babelHelpers.taggedTemplateLiteral(["2"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require("1"));
});
Promise.resolve("".concat(tag(_templateObject()))).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve("3-".concat(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
