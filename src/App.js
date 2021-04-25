import 'antd/dist/antd.css'
import './App.css'
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import Home from './components/homePage'
import Login from './components/loginPage'
import Register from './components/registerPage'
import Match from './components/matchPage'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/match/:matchid">
            <Match />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
