const Button = {
  // Shared
  baseStyle: {
    textTransform: "none",
    transition: "all 0.3s ease-in-out",
    borderRadius: "none",
  },
  // Variants
  variants: {
    unstyled: {
      fontSize: "12px",
      bg: "transparent",
      h: "100%",

      py: 5,

      _hover: {
        border: "none",
      },

      _focus: {
        boxShadow: "none",
        outline: "none",
        border: "none",
      },
    },
    basic: {
      fontSize: "12px",

      bg: "transparent",

      justifyContent: "center",

      position: "relative",

      h: "100%",
      w: "100%",

      py: 5,
    },
    full_gradient: {
      fontSize: "12px",
      bg: "darkBlue",
      color: "primary",

      transition: "all 0.3s ease-in-out",

      justifyContent: "center",

      position: "relative",

      h: "100%",
      w: "150px",

      py: 5,

      _before: {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        bgImage: "linear-gradient(#111144, #111144)",
        bgPosition: "0% 100%",
        bgSize: "0% 100%",
        bgRepeat: "no-repeat",
        pointerEvents: "none",
        transition: "background-size 0.3s ease-in-out",
      },

      _hover: {
        _before: {
          bgSize: "100% 100%",
          bgPosition: "100% 100%",
        },

        "& p": {
          color: "lightGreen",
          zIndex: 1,
        },

        "& path": {
          filter: "invert(100%)",
        },
      },

      _focus: {
        boxShadow: "none",
        outline: "none",
      },
    },
  },
};

export default Button;
