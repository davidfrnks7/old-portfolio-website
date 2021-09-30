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
    contactPrimary: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "rgba(255, 255, 255, .15)",
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
    project: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "transparent",
      fontSize: "lg",
      py: 2,
      px: 4,
      boxShadow:
        "rgba(0, 134, 255, 0.2) 0px 0px 15px, rgba(0, 134, 255, 0.15) 0px 0px 3px 1px",
      _hover: {
        bg: mode(
          whiten("brand.secondary", 20),
          darken("brand.secondary", 20)
        )(props),
        boxShadow:
          "rgba(0, 104, 255, 0.2) 0px 0px 15px, rgba(0, 104, 255, 0.15) 0px 0px 3px 1px",
      },
    }),
    nav: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "transparent",
      fontSize: "md",
      px: "2",
      _hover: {
        bg: mode(
          whiten("brand.secondary", 20),
          darken("brand.secondary", 20)
        )(props),
      },
    }),
    stickyNav: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "rgba(255, 255, 255, .15)",
      fontSize: "md",
      px: "2",
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
