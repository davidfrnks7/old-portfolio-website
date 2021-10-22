const fieldsBackground = "gray.800";
const placeholderColor = "gray.200";

const fieldStyles = {
  // style object for base or default style
  baseStyle: {
    field: {
      bg: "#000",
      borderColor: "#000",
      borderWidth: 2,
      ":focus": {
        bg: "#000",
      },
      "::placeholder": {
        color: placeholderColor,
      },
    },
    input: {
      bg: fieldsBackground,
      borderColor: "white",
      borderWidth: 1,
      ":focus": {
        bg: "#000",
      },
      "::placeholder": {
        color: placeholderColor,
      },
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {},
};

export default fieldStyles;
