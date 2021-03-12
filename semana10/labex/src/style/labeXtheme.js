import { extendTheme } from "@chakra-ui/react";

const labeXtheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
        fontFamily: "Raleway, sans-serif",
        bgColor: "violet",
      },
    },
  },
  colors: {
    //option 1
    darkPurple: "#1C0221",
    lightPurple: "#7B5E7B",
    darkGreen: "#07393C",
    grey: "#828E82",
    lightGray: "#F0F0C9",

    //option2
    violet: "#0D0628",
    brightBlue: "#00A6FB",
    mediumBlue: "#0582CA",
    grayBlue: "#006494",
    lightBlue: "#D3F6DB",
  },
});

export default labeXtheme;
