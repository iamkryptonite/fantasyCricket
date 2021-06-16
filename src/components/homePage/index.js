import React from 'react'
import { Layout,Row,Col} from 'antd';
import './style.css'


const { Header, Content,Footer} = Layout;
class Home extends React.Component {
  render() {
    return(
      <>
        {/* <Header>
          <div className="logo">Fantasy Cricket</div>
          <div className="authenticte-group">
            <a href="/login"><button className="btn btn-outline-light">Login</button></a>
            <a href="/register"><button className="btn btn-outline-light">Register</button></a>
          </div>
        </Header> */}
        <div className="bg">
            <h1>Welcome to Fantasy Cricket</h1>
            {/* <h1>Create your team and start playing</h1> */}
        </div>
        <Content>
          <Row>
            <Col span={12}>
              <h4>Signup and start playing.Strategically create your create your team and earn</h4>
              <h4>Signup and start playing.Strategically create your create your team and earn</h4>
            </Col>
            {/* <Col span={12}><img src="../../assets/vkohli.png" alt=""></img></Col> */}
          </Row>
        </Content>
        <Footer>
          <div className="footer">footer</div>
        </Footer>
      </>
    );
  }
}
export default Home