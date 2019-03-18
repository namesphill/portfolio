const computeBreakpintsToRanges = breakpoints =>
  [-1, ...breakpoints, 12000]
    .map((el, i, arr) => (arr[i + 1] ? [el + 1, arr[i + 1]] : false))
    .filter(el => Boolean(el));
export default (width, breakpoints) => {
  let index;
  computeBreakpintsToRanges(breakpoints).forEach(([start, end], i) => {
    if (width <= end && width >= start) index = i;
  });
  return index;
};
