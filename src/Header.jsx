import React from "react";
import "./header.css";
import Box from "./Box";
const Header = () => {
  return (
    <>
      <div className="hdr" style={{ display: "flex", flexDirection: "column" }}>
        <h1>This is Header part</h1>
        <div className="boxContainer" style={{ display: "flex" }}>
          <Box boxName="BOX-1" colorName="yellow"/>
          <Box boxName="BOX-2"colorName="blue"/>
          <Box boxName="BOX-3" colorName="green"/>
          <Box/>
        </div>
      </div>
    </>
  );
};
export default Header;
