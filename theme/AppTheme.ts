import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const AppTheme = extendTheme({
  config,
  colors: {
    brand: {
      main: "#3138dc",
      primary: "#0068ff",
      secondary: "#0086ff",
      hover: "#00aec1",
      warning: "#ffbd48",
      danger: "#c50001",
    },
    gradient: {
      100: "#3138dc",
      200: "#0068ff",
      300: "#0086ff",
      400: "#009ced",
      500: "#00aec1",
      600: "#00bd8e",
    },
  },
  components: {
    Button,
  },
});

export default AppTheme;
