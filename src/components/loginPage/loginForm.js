import { Form , Input , Button , Checkbox , Space , Divider } from 'antd';
export default function LoginForm(){
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

    return(
        <div className="div1 px-5">
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
                    <Space >
                        <Button type="primary" htmlType="submit">Sign up</Button>
                        <Button type="primary" href="/register">New user? Click here</Button>
                    </Space>
                </Form.Item>
                <Divider/>
                <Form.Item {...tailLayout}>
                    <Space direction="vertical">
                        <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                        <div id="my-signin2"></div>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}