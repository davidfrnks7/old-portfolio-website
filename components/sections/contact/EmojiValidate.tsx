const EmojiValidate = (emoji: "Required" | "Error" | "Valid"): JSX.Element => {
  interface Validations {
    "Required": JSX.Element,
    "Error": JSX.Element,
    "Valid": JSX.Element,
  }

  const validations: Validations = {
    "Required": <span role="img" aria-label="Explication Mark">❌</span>,
    "Error": <span role="img" aria-label="X">❌</span>,
    "Valid": <span role="img" aria-label="Check">✔</span>
  }

  return validations[`${emoji}`];
}

export default EmojiValidate;
