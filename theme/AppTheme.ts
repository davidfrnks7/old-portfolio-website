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
  },
  components: {
    Button,
  },
});

export default AppTheme;
