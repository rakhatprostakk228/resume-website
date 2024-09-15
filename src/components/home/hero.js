import { Col, Row } from 'antd';
import { Carousel } from 'antd';

import htmlCss from '../../assets/images/htmlAndCss.jpg';
import js from '../../assets/images/javaScript.jpg';
import react from '../../assets/images/react.jpg';

function Hero() {
    return (
        <div className='heroBlock'>
            <Row gutter={[24, 24]}>
                {/* carousel */}
                <Col xs={24} lg={18}>
                    <Carousel autoplay>
                        <div>
                            <img src={htmlCss} alt='banner 1' />
                        </div>
                        <div>
                            <img src={js} alt='banner 2' />
                        </div>
                        <div>
                            <img src={react} alt='banner 3' />
                        </div>
                    </Carousel>
                </Col>
                {/* information block */}
                <Col xs={24} lg={6}>
                    <div className='heroBlocks'>
                        <div className='holder'>
                            <div className='icon'>
                            <i class="fab fa-html5"></i>
                            </div>
                            <div className='content'>
                                <h3>Html and CSS</h3>
                                <p>yep, its base</p>
                            </div>
                        </div>
                        <div className='holder'>
                            <div className='icon'>
                            <i class="fab fa-js"></i>
                            </div>
                            <div className='content'>
                                <h3>JavaScript</h3>
                                <p>I closed the course, solved problems on the leetcode and exercism</p>
                            </div>
                        </div>
                        <div className='holder'>
                            <div className='icon'>
                            <i class="fab fa-react"></i>
                            </div>
                            <div className='content'>
                                <h3>React</h3>
                                <p>This site is written by this library</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Hero;