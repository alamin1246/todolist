import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const taskObj = useSelector((store) => store);
  return (
    <div
      style={{ backgroundColor: "white", borderRadius: "10px" }}
      className="m-5"
    >
      <h1>TodoList, Total tasks remained : {taskObj.taskItems.length} </h1>
    </div>
  );
}

export default Navbar;
