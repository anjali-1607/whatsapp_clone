import React from "react";

import ToggleColorMode from "./components/ToggleColorMode";
import Login from "./components/login/Login";

export default function Main() {
  return (
    <>
      <ToggleColorMode />
      <Login />
    </>
  );
}
