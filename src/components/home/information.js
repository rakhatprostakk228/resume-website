import { Col, Row } from 'antd';

import KMG from '..//../assets/images/kmg.jpg';
import Seed from '..//../assets/images/seed.jpg';

function Information() {
    return (
        <div className='block informationBlock'>
            <Row gutter={[40, 40]}>
                <Col xs={24} md={12}>
                    <div className='holder'>
                        <div className='project-info'>
                            <div className='project-image'>
                                <img src={KMG} alt='KazMunayGaz project' />
                            </div>
                            <div className='project-content'>
                                <h3>This website is for working with flowcharts. I created this website while I was working in KazMunayGaz.</h3>
                                <div className='price'></div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className='holder'>
                        <div className='project-info'>
                            <div className='project-image'>
                                <img src={Seed} alt='SeedSchool project' />
                            </div>
                            <div className='project-content'>
                                <h3>This website contains Kazakh language courses. I created this website while I was working in SeedSchool.</h3>
                                <div className='price'></div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Information;