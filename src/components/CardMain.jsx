import React from "react";
import UploadCard from "./UploadCard";
import CardList from "./CardTable";
const CardMain = () => {
  return (
    <div className="App">
      <h1>OCR Visiting Card Manager</h1>
      {/* <UploadCard /> */}
      <CardList />
    </div>
  );
};

export default CardMain;
