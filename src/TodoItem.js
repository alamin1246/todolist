import React, { useState } from "react";
import { useDispatch } from "react-redux";

function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState("none");
  const [newTask, setNewTask] = useState("");
  function deleteTask() {
    dispatch({ type: "DELETE_TASK", payload: task });
  }
  function editTask() {
    setShow("inline");
  }
  function finalEdit(task) {
    dispatch({
      type: "EDIT_TASK",
      payload: { oldTask: task, newTask: newTask },
    });
    setShow("none");
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <h1 style={{ textAlign: "left" }}>{task}</h1>
        </div>
        <div className="col-md-1">
          <button className="btn btn-secondary" onClick={editTask}>
            EDIT
          </button>
        </div>
        <div className="col-md-1">
          <button className="btn btn-danger" onClick={() => deleteTask(task)}>
            DELETE
          </button>
        </div>
        <div className="justify-content-center">
          <input
            text="text"
            style={{ display: show }}
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <button
            style={{ display: show }}
            className="btn btn-success m-1"
            onClick={() => finalEdit(task)}
          >
            FINAL EDIT
          </button>
          <hr style={{ borderColor: "black" }} />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
