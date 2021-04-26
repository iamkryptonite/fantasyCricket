import React from 'react'
import { Row ,Col} from 'antd';
import RegisterForm from './registerForm'
import ImageCarousel from '../Carousel'
import './style.css'

class Register extends React.Component {
  render() {
    return(
      <>
        <Row>
          <Col span={16}>
            <ImageCarousel/>
          </Col>
          <Col span={8}>
            <RegisterForm/>
          </Col>
      </Row>
    </>
  )};
}
export default Register