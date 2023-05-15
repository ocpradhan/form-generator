/** @format */
import React from "react";
import Inputs from "./components/Inputs";
import Layout from "./components/Layout";
import Design from "./components/Design";

function App() {
  return (
    <div style={{display: "grid", gap: "1rem", gridTemplateColumns: "0.5fr 2fr 1fr"}}>
      <Inputs />
      <Layout />
      <Design />
    </div>
  );
}

export default App;
