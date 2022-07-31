import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { LoginTemplate } from "./templates/LoginTemplate/LoginTemplate";
import Login from "./components/Login/Login";
import { DashboardTemplate } from "./templates/DashboardTemplate/DashboardTemplate";
import Dashboard from "./components/Dashboard/Dashboard";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <LoginTemplate exact path='/login' Component={Login} />
        <DashboardTemplate exact path='/dashboard' Component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
