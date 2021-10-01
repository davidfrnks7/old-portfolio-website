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
      bg: "transparent",
      fontSize: "md",
      px: "2",
      _hover: {
        textDecoration: "underline",
      },
    }),
    credits: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "brand.main",
      fontSize: "lg",
      p: 3,
      color: "whiteAlpha",
      _hover: {
        bg: mode(whiten("brand.main", 20), darken("brand.main", 20))(props),
      },
    }),
    backToTop: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "rgba(23, 25, 35, 0.5)",
      fontSize: "lg",
      py: 2,
      px: 4,
      color: "rgba(0, 134, 255, 0.6)",
      boxShadow:
        "rgba(0, 134, 255, 0.05) 0px 0px 15px, rgba(0, 134, 255, 0.1) 0px 0px 3px 1px",
      _hover: {
        bg: mode(
          whiten("brand.secondary", 20),
          darken("brand.secondary", 20)
        )(props),
        boxShadow:
          "rgba(0, 104, 255, 0.2) 0px 0px 15px, rgba(0, 104, 255, 0.15) 0px 0px 3px 1px",
        color: "whiteAlpha.900",
      },
    }),
    collapse: (props: Dict<never> | StyleFunctionProps) => ({
      bg: "transparent",
      fontSize: "md",
      p: 2,
      h: 8,
      color: "brand.hover",
      textDecoration: "underline",
      _hover: {
        bg: mode(
          whiten("brand.secondary", 20),
          darken("brand.secondary", 20)
        )(props),
        color: "whiteAlpha.900",
        textDecoration: "none",
      },
    }),
    submit: (props: Dict<never> | StyleFunctionProps) => ({
      fontSize: "lg",
      py: 2,
      px: 4,
      type: "submit",
      _hover: {
        color: "whiteAlpha.900",
        bg: mode(whiten("brand.valid", 20), darken("brand.valid", 20))(props),
        _disabled: {
          color: mode(
            whiten("brand.danger", 20),
            darken("brand.danger", 20)
          )(props),
          boxShadow:
            "rgba(252, 129, 129, 1) 0px 0px 15px, rgba(252, 129, 129, 0.8) 0px 0px 3px 1px",
        },
      },
    }),
    // default values for `size` and `variant`
    defaultProps: {},
  },
};
