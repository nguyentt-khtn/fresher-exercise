import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { LoginTemplate } from "./templates/LoginTemplate/LoginTemplate";
import Register from "./components/Register/Register";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <LoginTemplate exact path='/register' Component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
