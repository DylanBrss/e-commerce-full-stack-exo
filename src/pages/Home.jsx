import React, { useState, useEffect } from 'react'
import "../styles/home.css";
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from "../assets/data/products";

const Home = () => {

    const [data, setData] = useState(products)
    const year = new Date().getFullYear()

    useEffect(() => {
        const filterdProducts = products.filter(
            (item) => item.category === 'chair'
        );

        setData(filterdProducts)
    }, []);

    return (
        <Helmet title={"Home"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending product in {year}</p>
                                <h2>Make Your Inerior More Minimalistic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Deleniti mollitia enim dicta! Totam, deleniti.
                                    Numquam incidunt repellat neque tempora laboriosam.</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                                    <Link to='/shop'>SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__image">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>

            <Services />
            <section className="trending__poducts">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Trending Products</h2>
                        </Col>
                        <ProductsList data={data} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home