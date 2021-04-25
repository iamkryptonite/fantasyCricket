import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Layout, Menu, Card } from 'antd';

import './style.css'


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

class Register extends React.Component {
    render() {
        return(
            <>
            
              
              <Header classname="header" >
          <h1>NEW USER REGISTRATION</h1>
        </Header>
        <div className="div1"></div>
          <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      >
       <Form.Item
        label="Firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input />
      </Form.Item>



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
         
          Sign up
        </Button>
       </Form.Item>
      <Form.Item {...tailLayout}>
       
      <div className="or">OR</div>
      
        <Button type="primary" >
          Register with Facebook
        </Button>
        <Button type="primary" href="/login">Existing user? Click here</Button>
     
      </Form.Item>
      
    </Form>
            </>
          );
    }
  }
export default Register