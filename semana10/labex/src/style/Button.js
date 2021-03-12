const Button = {
  variants: {
    solid: {
      color: "lightBlue",
      bgColor: "mediumBlue",
      _hover: {
        bgColor: "violet",
      },
    },

    outline: {
      color: "lightBlue",
      border: "none",
      _hover: {
        bgColor: "mediumBlue",
      },
    },
  },
};

export default Button;
