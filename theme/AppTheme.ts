import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import buttons from "./components/buttonStyles";

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
      danger: "#FC8181",
      valid: "#00c17c",
      footer: "#0097a7",
      footerText: "black",
      content: "#2d3748",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
      },
    },
  },
  components: {
    Button: buttons,
  },
});

export default AppTheme;
