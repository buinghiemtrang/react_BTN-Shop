import React from 'react'
// import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionTitle, SectionBody}  from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'
import { Link } from 'react-router-dom'

const Home = props => {
    return (
        <Helmet title="Trang chủ">
            {/* slider banner */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
            />

            {/* policy section */}
            <Section>
                <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        policy.map((item, index) => 
                            <PolicyCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                            />
                        )
                    }
                </Grid>
                </SectionBody>
            </Section>

            {/* selling section */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* banner */}
                <Section>
                    <SectionBody>
                        <Link to="/catalog">
                            <img src={banner} alt="" />
                        </Link>
                    </SectionBody>
                </Section>
                    

            {/* new products */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            
        </Helmet>
    )
}

export default Home
