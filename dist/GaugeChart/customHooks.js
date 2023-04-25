"use strict";

import _ from "lodash";
import React from "react";

var _react = React;

var isDeepEquals = function isDeepEquals(toCompare, reference) {
  return _.isEqual(toCompare, reference);
};

var useDeepCompareMemo = function useDeepCompareMemo(dependencies) {
  var ref = (0, _react.useRef)(null);

  if (isDeepEquals(dependencies, ref.current)) {
    ref.current = dependencies;
  }

  return ref.current;
}; // this function compares deeply new dependencies with old one
// It works like useEffect but we are using isEqual from lodash to compares deeply

var useDeepCompareEffect = function useDeepCompareEffect(
  callback,
  dependencies
) {
  (0, _react.useEffect)(callback, [useDeepCompareMemo(dependencies), callback]);
};

var _default = useDeepCompareEffect;
export default _default;
