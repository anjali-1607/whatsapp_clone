import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./Theme";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
