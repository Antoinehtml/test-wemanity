import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import Button from "./Button";
import FormLabel from "./FormLabel";
import Heading from "./Heading";
import Input from "./Input";


// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {
  heading:
    'Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body: 'Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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
  primary: "white",
  secondary: "black",
  tertiary: "lightGrey",
  darkBlueBg: '#080817',
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
    mediumParagraph: {
      fontSize: "18px",
      lineHeight: "1.2",
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

      // ? nprogress
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "var(--nProgressColor)",
        position: "fixed",
        zIndex: "1000000",
        top: "0",
        left: "0",
        width: "100%",
        height: "4px",
      },
      "#nprogress .peg": {
        display: "block",
        position: "absolute",
        right: "0px",
        width: "100px",
        height: "100%",
        opacity: "1",
        transform: "rotate(3deg) translate(0px, -4px)",
      },
      "#nprogress .spinner": {
        display: "block",
        position: "fixed",
        zIndex: "1000000",
        top: "15px",
        right: "15px",
      },
      "#nprogress .spinner-icon": {
        width: "18px",
        height: "18px",
        boxSizing: "border-box",
        border: "solid 2px transparent",
        borderTopColor: "var(--nProgressColor)",
        borderLeftColor: "var(--nProgressColor)",
        borderRadius: "50%",
        animation: "nprogress-spinner 400ms linear infinite",
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "relative",
      },
      ".nprogress-custom-parent #nprogress .spinner": {
        position: "absolute",
      },
      ".nprogress-custom-parent #nprogress .bar": {
        position: "absolute",
      },
      "@keyframes nprogress-spinner": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    }),
  },
  components: { Button, Heading, Input, FormLabel },
});

export default theme;

// ? https://chakra-ui.com/docs/theming/customize-theme
