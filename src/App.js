import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/main" component={Mainpage} />
    </div>
  );
}

export default App;
