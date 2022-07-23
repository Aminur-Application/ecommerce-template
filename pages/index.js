import React,{useEffect} from 'react'
import { Product, FooterBanner, HeroBanner} from '../components';
import { client } from '../lib/client';

import dynamic from "next/dynamic"

const ClientComponent = dynamic(() => import("../plugins/isotope"), {
  // Do not import in server side
  ssr: false,
  suspense: false
  
})


const Home = ({ products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className = "products-heading">
        <h2> Best selling Products </h2>
        <p> Speakers of many variations</p>
      </div>
      <ClientComponent products={products}/>
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