import {
  darken,
  mode,
  StyleFunctionProps,
  whiten,
} from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: Dict<any> | StyleFunctionProps) => ({
      bg: "primary", // Notice the use of color directly here
      color: "white",
      _hover: {
        // Notice the use of `mode` function to change color
        // based on theme color mode
        bg: mode(whiten("primary", 20), darken("primary", 20))(props),
        boxShadow: "md",
      },
    }),
    // default values for `size` and `variant`
    defaultProps: {},
  },
};
