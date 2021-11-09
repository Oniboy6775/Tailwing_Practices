import logo from "./logo.svg";
import "./App.css";

import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Template from "./Components/Template";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { Register } from "./Components/Register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
