import "./App.css";
import Navbar from "./Navbar";
import { createStore } from "redux";
import { Provider } from "react-redux";
import taskReducer from "./taskReducer";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./AddTask";
import TodoList from "./TodoList";

function App() {
  const store = createStore(taskReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <AddTask />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
