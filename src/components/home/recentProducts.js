import { Col, Row, Button } from 'antd';

const products = [
    {
        key: '1',
        image: require('../../assets/images/sneakerShop.png'),
        title: 'From my point of view, this is my best website, of course I can make it better, but now I really love it. First react exp.',
        opisanie: '',
        link: 'https://rakhatprostakk228.github.io/sneakers_shop/'
    },
    {
        key: '2',
        image: require('../../assets/images/crypto.jpg'),
        title: 'I did it for one crypto company, just for sales and have a lot of animations.',
        opisanie: '',
        link: 'https://rakhatprostakk228.github.io/crypto_animation/'
    },
    {
        key: '3',
        image: require('../../assets/images/animation.png'),
        title: 'This is just learning animations, it was cool exp, but not so hard as previous works. Animations can lag)',
        opisanie: '',
        link: 'https://rakhatprostakk228.github.io/animation/'
    }
]

function RecentProducts() {
    return (
        <div className="block products">
            <h2>My WebSites</h2>
            <Row gutter={[32, 32]} justify="center">
                {
                    products.map(product => {
                        return (
                            <Col xs={24} sm={12} lg={8} key={product.key}>
                                <div className='content'>
                                    <div className='image'>
                                        <img src={product.image} alt={`Website ${product.key}`} />
                                        <div className='overlay'>
                                            <a href={product.link} target="_blank" rel="noopener noreferrer">
                                                <Button type="primary" size="large">Check it</Button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='text-content'>
                                        <h3>{product.title}</h3>
                                        <div className='price'>{product.opisanie}</div>
                                    </div>
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