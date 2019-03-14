import colors from "../../utils/ColorPallete";
export const main = {
  breakpoints: [
    //mobile
    600,
    //phablet
    780,
    //phablet
    900,
    //tablet portrait
    860,
    //tablet landscape
    1020,
    //laptop
    1280,
    //desktop
    1690,
    //big desktop
    1800
  ],
  fontSizes: [8, 10, 12, 16, 22, 32, 48, 96],
  space: [8, 12, 24, 36, 58, 82, 126, 180, 230],
  fonts: {
    sans: "Josefin Sans",
    mono: "Menlo"
  },
  colors: colors.get("colorDictionary"),
  buttons: {
    primary: {
      color: colors.get("color", "gray"),
      backgroundColor: colors.get("color", "darknight")
    },
    outline: {
      color: colors.get("color", "lightred"),
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 2px"
    }
  }
};
