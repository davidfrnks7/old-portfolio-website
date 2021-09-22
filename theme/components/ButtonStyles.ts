/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
    primary: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "primary", // Notice the use of color directly here
      color: "white",
      _hover: {
        // Notice the use of `mode` function to change color
        // based on theme color mode
        bg: mode(whiten("primary", 20), darken("primary", 20))(props),
        boxShadow: "md",
      },
    }),
    contactPrimary: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "transparent",
      fontSize: "xl",
      p: "2",
      _hover: {
        bg: mode(
          whiten("brand.primary", 20),
          darken("brand.primary", 20)
        )(props),
      },
    }),
    contactSecondary: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "brand.primary",
      fontSize: "xl",
      p: "2",
      _hover: {
        bg: mode(
          whiten("brand.primary", 20),
          darken("brand.primary", 20)
        )(props),
      },
    }),
    // default values for `size` and `variant`
    defaultProps: {},
  },
};
