import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/homePage'
import Login from './components/loginPage'
import Register from './components/registerPage'
import Matches from './components/matchesPage'
import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/login"><Login/></Route>
                <Route path="/register"><Register/></Route>
                <Route path="/matches"><Matches/></Route>
                <Route path="/matches/:id"><Matches/></Route>
            </Switch>
        </Router>
    </>
  );
}
export default App;
