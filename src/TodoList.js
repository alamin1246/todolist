import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const taskObj = useSelector((store) => store);
  const taskItems = taskObj.taskItems.map((task) => {
    return <TodoItem task={task} />;
  });
  return (
    <div className="row justify-content-center mt-5">
      <div
        className="col-md-6 p-3"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        {taskItems}
      </div>
    </div>
  );
}

export default TodoList;
