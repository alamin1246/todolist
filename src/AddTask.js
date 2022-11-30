import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function AddTask() {
  const [taskName, setTaskName] = useState("");
  const taskObj = useSelector((store) => store);
  const dispatch = useDispatch();
  function addTask() {
    dispatch({ type: "ADD_TASK", payload: taskName });
    console.log(taskObj.taskItems);
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div
          className="col-md-6 p-3"
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <h1>Add Task Component</h1>
          <input
            type="text"
            className="form-control w-75"
            style={{ display: "inline", borderColor: "black" }}
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            placeholder="Task Name"
          />
          <button className="btn btn-success m-3" onClick={addTask}>
            ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
