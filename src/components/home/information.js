import { Col, Row } from 'antd';

import ts from '..//../assets/images/ts.png';
import go from '..//../assets/images/golang.png';

function Information() {
    return (
        <div className='block informationBlock'>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                    <div className='holder' style={{
                        backgroundImage: `url(${go})`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3>Вот это реально нужно выучить(ну как пойдет)</h3>
                        <div className='price'>до лета</div>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className='holder' style={{
                        backgroundImage: `url(${ts})`,
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h3>Тоже очень полезная вещь</h3>
                        <div className='price'>до зимы</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Information;