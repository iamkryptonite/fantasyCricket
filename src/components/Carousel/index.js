import { Carousel } from 'antd';
export default function ImageCarousel(){
    const contentStyle = {
        height: '100vh',
        color: '#fff',
        lineHeight: '500px',
        textAlign: 'center',
        background: '#364d79',
        margin: 0
    };
    return(
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
    )
}