import { extendTheme } from "@chakra-ui/react";

const astroTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Shippori Mincho",
        margin: 0,
        padding: 0,
        borderBox: "box-sizing",
      },
    },
  },
});

export default astroTheme;
