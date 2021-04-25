import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/homePage'
import Login from './components/loginPage'
import Register from './components/registerPage'
import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path="/login"><Login/></Route>
                <Route path="/register"><Register/></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </Router>
    </>
  );
}
export default App;
