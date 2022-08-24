import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
