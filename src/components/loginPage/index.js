import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Layout, Menu, Card } from 'antd';
import { Row, Col } from 'antd';
import './style.css'
import { Carousel } from 'antd';

const contentStyle = {
  height: '90vh',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 12,
  },
};


class Login extends React.Component {
    render() {
      return(
        <>

    <Header classname="header" >
          <h1>LOGIN</h1>
    </Header>
    <Row>
    <Col span={16}>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,

    </Col>
    <Col span={8}>
    <div className="div1">
       <Form
         {...layout}
         name="basic"
         initialValues={{
         remember: true,
        }}
      >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      
     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
         
          Login
        </Button>
        <Button type="primary" href="/register">New user? Register here</Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
       
         <div className="or" > OR</div>
      
        <Button type="primary" >
          LOGIN WITH FACEBOOK
        </Button>
      </Form.Item>
      
    </Form>
    </div>
    </Col>
   </Row>
        </>
      );
    }
  }
export default Login