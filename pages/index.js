import React,{useEffect} from 'react'
import { Product, FooterBanner, HeroBanner} from '../components';
import { client } from '../lib/client';
import Marquee from "react-marquee-slider";
import dynamic from "next/dynamic"
import { Button, Stack, Row, Col } from 'react-bootstrap';
import { useStateContext } from '../context/stateContext';

const IsotopeComponent = dynamic(() => import("../components/filterizr.jsx"), {
  // Do not import in server side
  ssr: false,
})

const Home = ({ products, bannerData}) => {
  const {track, setTrack} = useStateContext();

  return (
    <>
      <Row>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      </Row>
     
      <Row>
        <div className = "products-heading">
          <h2> Best selling Products </h2>
          <p> Speakers of many variations</p>
          <div className='products-container'>
            <Marquee velocity={track? 0: 40}>
              {products?.map((product) => 
                <div style={{marginLeft: "15px"}} key={product._id}>
                  <Product key={product._id} product={product} value={product._id} marquee={true}/>
                </div>
                )}
            </Marquee>
          </div>
        </div>
      </Row>
      <Row>
        <div className = "products-heading">
          <h2>All Products</h2>
          <p> Speakers of many variations</p>
          <IsotopeComponent products={products}/>
          <div className = "isotope">
              {products?.map((product) => <Product key={product._id} product={product} />)}
          </div>
        </div>
      </Row>
      <Row>
        <FooterBanner footerBanner = { bannerData && bannerData[0]} />
      </Row>
      

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  
  return {
    props: {products, bannerData}
  }
}

export default Home;