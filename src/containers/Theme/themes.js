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
    primaryLeft: {
      color: colors.get("color", "gray"),
      backgroundColor: colors.get("color", "black"),
      border: "1px solid",
      borderColor: colors.get("color", "gray"),
      transition: "padding color 0.15s",
      "&:active": {
        backgroundColor: colors.get("color", "gray"),
        color: colors.get("color", "black"),
        cursor: "pointer"
      },
      "&:hover": {
        paddingRight: 58,
        paddingLeft: 14,
        borderColor: colors.get("color", "darkgray")
      }
    },
    primaryRight: {
      color: colors.get("color", "gray"),
      backgroundColor: colors.get("color", "black"),
      border: "1px solid",
      borderColor: colors.get("color", "gray"),
      transition: "padding 0.3s, transform 0.15s",
      backgroundColor: colors.get("color", "gray"),
      color: colors.get("color", "black"),
      cursor: "pointer",
      "&:active": {
        transform: "scale(1.05)"
      },
      "&:hover": {
        paddingLeft: 58,
        paddingRight: 14,
        color: colors.get("color", "darkteal")
      }
    },
    outlineLeft: {
      paddingTop: 5,
      paddingBottom: 5,
      color: colors.get("color", "gray"),
      backgroundColor: colors.get("color", "black"),
      border: "1px solid",
      borderColor: colors.get("color", "gray"),
      transition: "padding 0.3s, transform 0.15s",
      cursor: "pointer",
      "&:active": {
        transform: "scale(1.05)"
      },
      "&:hover": {
        paddingRight: 58,
        paddingLeft: 14,
        borderColor: colors.get("color", "darkpink"),
        color: colors.get("color", "darkpink")
      }
    },
    outlineRight: {
      paddingTop: 5,
      paddingBottom: 5,
      color: colors.get("color", "gray"),
      backgroundColor: colors.get("color", "black"),
      border: "1px solid",
      borderColor: colors.get("color", "gray"),
      transition: "padding color 0.15s",
      cursor: "pointer",
      "&:active": {
        paddingLeft: 58,
        paddingRight: 14
      }
    }
  }
};
