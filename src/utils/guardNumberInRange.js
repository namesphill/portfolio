function guardNumberInRange(
  num = 0.5,
  min = 0,
  max = 1,
  tolerance = 0.1,
  setting = "exclusive"
) {
  if (setting === "exclusive") {
    if (min < num && num < max) return num;
    if (num === min || num * 1 + tolerance > min)
      return min * (1 + tolerance) + tolerance * tolerance;
    if (num === max || num * 1 - tolerance < max) return max * (1 - tolerance);
    return ((max - min) * Math.random() + min) * 0.99;
  } else if (setting === "inclusive") {
    if (min < num && num < max) return num;
    if (num === min || num * 1 + tolerance > min) return min;
    if (num === max || num * 1 - tolerance < max) return max;
    return (max - min) * Math.random() + min;
  } else {
    throw new Error(
      "Not a valid configuration " +
        String(setting) +
        " Expected 'exclusive' or 'inclusive'"
    );
  }
}
export default guardNumberInRange;
