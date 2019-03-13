import React from "react";
import { ThemeProvider } from "styled-components";
import * as Themes from "./themes";
export default ({ children, theme = "main" }) => {
  return (
    <ThemeProvider
      theme={typeof theme === "string" ? Themes[theme.toLowerCase()] : theme}
    >
      {children.length ? <>{children}</> : children}
    </ThemeProvider>
  );
};
