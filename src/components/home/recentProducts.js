import { Col, Row, Button } from 'antd';

const products = [
    {
        key: '1',
        image: require('../../assets/images/sneakerShop.png'),
        title: 'From my point of view, this is my best website, of course I can make it better, but now I really love it. First react exp.',
        opisanie: 'Repo: frontend_learning_                                                                         javascript(react-start)'
    },
    {
        key: '2',
        image: require('../../assets/images/profile.png'),
        title: 'I did it for my friend, it was his diploma work, Im really pleased that they ask me to do that.',
        opisanie: 'Repo: frontend_learning_                                                         javascript(second_project)'
    },
    {
        key: '3',
        image: require('../../assets/images/animation.png'),
        title: 'This is just learning animations, it was cool exp, but not so hard as previous works. Animations can lag)',
        opisanie: 'Repo: frontend_learning_                                                               javascript(first_project)'
    },
    {
        key: '4',
        image: require('../../assets/images/cross.png'),
        title: 'The first website, no comments here. Its just for history',
        opisanie: 'Repo: frontend-learning-second-project'
    }
]

function RecentProducts() {
    return (
        <div className="block products">
            <h2>My WebSites</h2>
            <Row gutter={[24, 24]}>
                {
                    products.map(product => {
                        return (
                            <Col xs={24} sm={12} lg={6}>
                                <div className='content'>
                                <div className='image'>
                                    <img src={product.image} alt='idk' />
                                </div>
                                <h3>{product.title}</h3>
                                <div className='price'>{product.opisanie}</div>
                                <a href='https://github.com/rakhatprostakk228?tab=repositories'><Button type="primary">Check it</Button></a>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default RecentProducts;