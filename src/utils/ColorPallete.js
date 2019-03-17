import randomElement from "./randomElement";
class ColorPallete {
  constructor(colorDictionary) {
    this.colorDictionary = colorDictionary;
    this.colorsArray = Object.values(colorDictionary);
    this.colorGroups = {};
    Object.entries(colorDictionary).forEach(([name, code]) => {
      let baseColor = name.replace(
        /(light|dark|lighter|darker|medium|deep)|\d+/,
        ""
      );
      let shade = name.replace(baseColor, "")
        ? name.replace(baseColor, "")
        : "normal";
      baseColor = baseColor[0].toLowerCase() + baseColor.slice(1);
      if (!this.colorGroups[baseColor]) this.colorGroups[baseColor] = {};
      this.colorGroups[baseColor][shade] = code;
    });
  }
  get(petition, thing) {
    const petitions = [
      "colorGroup",
      "colorsArray",
      "randomColor",
      "randomColorFromGroup",
      "color",
      "colorGroupArray"
    ];
    if (this[petition]) return this[petition];
    switch (petition) {
      case "colorGroup":
        return this.colorGroups[thing];
      case "randomColor":
        return randomElement(this.colorsArray);
      case "randomColorFromGroup":
        return randomElement(this.colorGroups[thing]);
      case "color":
        return this.colorDictionary[thing];
      case "colorGroupArray":
        return Object.values(this.colorGroups[thing]);
      default:
        throw new Error(
          "Not a valid petition, try one of: " + petitions.join(", ")
        );
    }
  }
}
const colorPallete = new ColorPallete({
  pink: "#ef5777",
  darkpink: "#f53b57",
  orange: "#ffc048",
  darkorange: "#ffa801",
  purple: "#575fcf",
  darkpurple: "#3c40c6",
  yellow: "#ffdd59",
  darkYellow: "#ffd32a",
  blue: "#4bcffa",
  darkblue: "#0fbcf9",
  red: "#ff5e57",
  darkred: "#ff3f34",
  turquoise: "#34e7e4",
  darkturquoise: "#00d8d6",
  gray: "#d2dae2",
  darkgray: "#808e9b",
  teal: "#0be881",
  darkteal: "#05c46b",
  night: "#485460",
  darknight: "#1e272e",
  lightgray: "#fcfcfc",
  black: "#000"
});
export default colorPallete;
