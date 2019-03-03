import colors from "../../utils/ColorPallete";
export const main = {
  breakpoints: [
    0,
    //mobile
    600,
    //tablet portrait
    890,
    //tablet landscape
    1020,
    //laptop
    1280,
    //desktop
    1690
    //big desktop
  ],
  fontSizes: {
    xxs: 8,
    xs: 10,
    sm: 12,
    md: 16,
    lg: 22,
    xl: 32,
    xxl: 48,
    xxxl: 96
  },
  space: {
    xxs: 4,
    xs: 6,
    sm: 12,
    md: 16,
    lg: 22,
    xl: 32
  },
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
