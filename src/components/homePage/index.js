import React from 'react'
import { Layout, Menu, Card } from 'antd';
import './style.css'

const { Header, Content, Footer } = Layout;
class Home extends React.Component {
    render() {
      return(
        <>
          <Layout className="layout">
    <Header>
     
     
      <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">REGISTER  <a href="/register"></a></Menu.Item>
        <Menu.Item key="2">LOGIN <a href="/login"></a></Menu.Item>
       </Menu>
    </Header>
   
    
    <div className="bg">
      <Card className="card" style={{ width: 1000 }}>
        <p>Team 1 vs Team 2 </p>
        
  </Card></div>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
          </>
      );
    }
  }
export default Home