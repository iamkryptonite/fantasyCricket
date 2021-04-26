import React from 'react'
import { Row,Col} from 'antd';
import LoginForm from './loginForm'
import './style.css'
import ImageCarousel from '../Carousel';

class Login extends React.Component {
    render() {
      return(
        <>
          <Row>
            <Col span={16}>
              <ImageCarousel/>
            </Col>
            <Col span={8}>
              <LoginForm/>
            </Col>
          </Row>
        </>
      );
    }
  }
export default Login