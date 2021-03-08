import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./styles/Buy.css";
import "./styles/Events.css";
import "./styles/Ticket.css";
import Events from "./components/Events";
import Ticket from "./components/Ticket";
import Buy from "./components/Buy";

function App() {
  return (
    <div className="main-wrapper">
      <Switch>
        <Route path="/" component={Events} exact />
        <Route path="/buy/:id" component={Buy} />
        <Route path="/ticket/:id" component={Ticket} />
      </Switch>
    </div>
  );
}

export default App;
