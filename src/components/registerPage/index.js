import React from 'react'
import { Form, Input, Button, Checkbox, Row ,Col,Carousel,Space,Divider } from 'antd';
import './style.css'


const contentStyle = {
  height: '100vh',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
  margin: 0
};

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
        <Row>
          <Col span={16}>
            <Carousel autoplay>
              <div>
                <p style={contentStyle}>1</p>
              </div>
              <div>
                <p style={contentStyle}>1</p>
              </div>
              <div>
                <p style={contentStyle}>1</p>
              </div>
            </Carousel>
          </Col>
          <Col span={8}>
            <div className="div1 px-5">
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
                  <Button type="primary" htmlType="submit">Sign up</Button>
                </Form.Item>
                <Divider/>
                <Form.Item {...tailLayout}>
                  <Space direction="vertical">
                      <Button type="primary">Register with Facebook</Button>
                      <Button type="primary" href="/login">Existing user? Click here</Button>
                  </Space>
                </Form.Item>
              </Form>
            </div>
          </Col>
      </Row>
    </>
  )};
}
export default Register