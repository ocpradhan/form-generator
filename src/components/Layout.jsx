/** @format */

import React from "react";
import GridLayout from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

const divStyles = {
  backgroundColor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const layout = [
  {i: "a", x: 0, y: 0, w: 1, h: 2},
  {i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  {i: "c", x: 4, y: 0, w: 1, h: 2},
  {i: "d", x: 4, y: 0, w: 1, h: 2},
];

function Layout() {
  return (
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200} style={{border: "2px solid red", height: "90vh"}}>
      <div key={"a"} style={{width: "20px", height: "auto", border: "2px solid pink"}}>
        Hello
      </div>
      <div key={"b"} style={{width: "20px", height: "auto", border: "2px solid pink"}}>
        Hello
      </div>
    </GridLayout>
  );
}

export default Layout;
