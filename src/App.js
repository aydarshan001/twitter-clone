import "./App.css";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed";
import { Rpost } from "./Rpost.js";

function App() {
  return (
    <div className="bigbox">
      <div className="App">
        <Sidebar> </Sidebar> <Feed> </Feed> <Rpost> </Rpost>{" "}
      </div>
    </div>
  );
}

export default App;
