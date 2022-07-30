import React, {useState} from 'react'
import Link from 'next/link';
import {Row, Col } from 'react-bootstrap';
import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner: {discount,largeText1,largeText2,
  saleTime,desc,smallText,midText,product,buttonText,image}}) => {
    const [index, setIndex] = useState(0)
  return (
    <div className='footer-banner-container'>
      
        <Row>
          <div className='footer-banner-image-container'>
            <img src={urlFor(image && image[index])}
                        className="footer-banner-image" />
          </div>
        </Row>
        <Row>
          <div className='banner-desc'>
            <Col>
            <div className='left'>
                <p>{discount}</p>
                <h3>{largeText1}</h3>
                <h3>{largeText2}</h3>
                <p>{saleTime}</p>
            </div>
            
              <div className='right'>
                <p>{smallText}</p>
                <h3>{midText}</h3>
                <p>{desc}</p>
                <Link href={`/product/${product}`}>
                  <button type="button">{buttonText}</button>
                </Link>
              </div>
            </Col>
          </div>
        </Row>
      </div>
  
  )
}

export default FooterBanner