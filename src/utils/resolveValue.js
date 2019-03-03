import _ from "lodash";
export default (element, ...args) =>
  _.isFunction(element) ? element(...args) : element;
