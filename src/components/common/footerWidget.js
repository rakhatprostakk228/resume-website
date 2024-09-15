import { Avatar, List } from 'antd';
import { Col, Row } from 'antd';

const other = [
    {
        image: require('../../assets/images/java.png'),
        title: "I can't say that I know it perfectly, but I know the base for sure"
    },
    {
        image: require('../../assets/images/postgre.png'),
        title: "I can't say that I know it perfectly, but I know the base for sure"
    }
];

const data = [
    "I'm always ready to learn",
    'I have a lot of free time',
    'My English level is B2',
    "I have no experience with companies"
];

function FooterWidget() {
    return (
        <div className='footerWidget'>
            <div className='container'>
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={6}>
                        <h3>Other</h3>
                        <List
                            itemLayout="horizontal"
                            dataSource={other}
                            renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src={item.image} />}
                                title={<span style={{color:'white'}}>{item.title}</span>}
                                />
                            </List.Item>
                            )}
                        />
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                        <h3>FACTS</h3>
                        <List
                            size='small'
                            className='recentPost'
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>} 
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FooterWidget;