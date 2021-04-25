import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/homePage'
import Login from './components/loginPage'
import Register from './components/registerPage'
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
