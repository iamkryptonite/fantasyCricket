import { Layout} from 'antd';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/homePage'
import Login from './components/loginPage'
import Register from './components/registerPage'
import Match from './components/matchPage'
import 'antd/dist/antd.css'
import './App.css'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">Fantasy Cricket</div>
          <div className="authenticte-group">
            <a href="/login"><button className="btn btn-outline-light">Login</button></a>
            <a href="/register"><button className="btn btn-outline-light">Register</button></a>
          </div>
        </Header>
        <Content style={{ padding: '10px 50px' }}>
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
              <Route path="/match/:id">
                <Match />
              </Route>
            </Switch>
          </Router>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
