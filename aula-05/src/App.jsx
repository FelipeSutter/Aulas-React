import "./App.css";
import { Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <Routes>
      <Route path="/tasklist" element={<TaskList />}></Route>
    </Routes>
  );
}

export default App;
