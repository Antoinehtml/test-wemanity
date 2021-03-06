import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import Button from "./Button";
import FormLabel from "./FormLabel";
import Heading from "./Heading";
import Input from "./Input";

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {
  heading:
    'Manrope, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body: 'Inter, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = createBreakpoints({
  base: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1440px",
  wide: "1920px",
});

// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {
  primary: "#fff",
  secondary: "#000",
  lightBlue: "#5c5c8b",
  mediumBlue: "#111144",
  darkBlue: "#080817",
  lightGreen: "#ECFDF3",
  mediumGreen: "#039855",
  lightGray: "#E4E7EC",
};

// ? I need to expose my variables to JS as well so I’m creating an object for it
export const cssVariables = {
  topBarHeight: 100,
};

const theme = extendTheme({
  fonts,
  breakpoints,
  colors,
  textStyles: {
    // ? https://chakra-ui.com/docs/features/text-and-layer-styles#text-styles
    smallText: {
      fontSize: ["12px", null, null, null, "14px"],
    },
    regularText: {
      fontSize: "14px",
    },
    mediumText: {
      fontSize: ["16px", null, null, null, "20px"],
    },
    underlined: {
      transition: "all 0.5s ease-in-out",
      w: "fit-content",

      position: "relative",

      _before: {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "4px",
        left: "0",
        borderRadius: "0",
        bg: "transparent",
        bgImage: "linear-gradient(currentColor, currentColor)",
        bgPosition: "0% 100%",
        bgSize: "0% 1px",
        bgRepeat: "no-repeat",
        pointerEvents: "none",
        transition: "background-size 0.3s ease-in-out",
      },

      _hover: {
        _before: {
          bgSize: "100% 1px",
          bgPosition: "100% 100%",
        },
      },
    },
    bold_underlined: {
      transition: "all 0.5s ease-in-out",
      w: "fit-content",

      position: "relative",

      _before: {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: "-10px",
        left: "0",
        borderRadius: "0",
        bg: "transparent",
        bgImage: "linear-gradient(currentColor, currentColor)",
        bgPosition: "0% 100%",
        bgSize: "0% 2px",
        bgRepeat: "no-repeat",
        pointerEvents: "none",
        transition: "background-size 0.3s ease-in-out",
      },

      _hover: {
        _before: {
          bgSize: "100% 2px",
          bgPosition: "100% 100%",
        },
      },
    },
    smallTextUnderlined: {
      fontSize: "12px",
      fontStyle: "italic",
      w: "fit-content",
      transition: "all 0.5s ease-in-out",

      position: "relative",

      _before: {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0",
        borderRadius: "0",
        bg: "transparent",
        bgImage: "linear-gradient(currentColor, currentColor)",
        bgPosition: "0% 100%",
        bgSize: "0% 1px",
        bgRepeat: "no-repeat",
        pointerEvents: "none",
        transition: "background-size 0.3s ease-in-out",
      },

      _hover: {
        _before: {
          bgSize: "100% 1px",
          bgPosition: "100% 100%",
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      ":root": {
        "--top-bar-height": `${cssVariables.topBarHeight}px`,
        "--nProgressColor": props.theme.colors.primary,
      },

      // ? global
      body: {
        height: "100%",
        fontSize: "14px",
        fontFamily: "body",
      },

      ".footer": {
        gridRowStart: "2",
        gridRowEnd: "3",
      },

      p: {
        fontFamily: "body",
        fontSize: "14px",
        lineHeight: "1.5",
      },

      "#__next": {
        maxWidth: "100vw",
        minHeight: "100%",
        display: "grid",
        gridTemplateRows: "1fr auto",
      },
    }),
  },
  components: { Button, Heading, Input, FormLabel },
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme
