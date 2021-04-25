import React from 'react'
import { Layout} from 'antd';
import './style.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Matches from '../matchesPage'
import PlayerSelect from '../playerSelectPage'

const { Header, Content} = Layout;
class Home extends React.Component {
  render() {
    return(
      <>
        <Layout className="layout">
          <Header>
            <div className="logo">Fantasy Cricket</div>
            <div className="authenticte-group">
              <a href="/login"><button className="btn btn-outline-light">Login</button></a>
              <a href="/register"><button className="btn btn-outline-light">Register</button></a>
            </div>
          </Header>
          <Content>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Matches/>
                </Route>
                <Route path="/matches/:id">
                  <PlayerSelect/>
                </Route>
              </Switch>
            </Router>
          </Content>
        </Layout>
      </>
    );
  }
}
export default Home