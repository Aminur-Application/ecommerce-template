import React, {useState} from 'react'
import Link from 'next/link'
import {Row, Col } from 'react-bootstrap';
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  const [index, setIndex] = useState(0)
  return (
    <div className="hero-banner-container">
     <Row>
      <Col sm={3} style={{height: "250px"}}>
        <p className='product-name'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
      </Col>
      <Col sm={8}>
        <Row>
          <Col sm={10}>
            <img src={urlFor(heroBanner.image && heroBanner.image[index])} alt='headphones' className='hero-banner-image'/>
          </Col>
          <Col sm={2}>
            <div className='hero-banner-small-images-container'>
                  {heroBanner.image?.map((item,i) => (
                      <img
                        key={i}
                        src={urlFor(item)}
                        className={i === index ? 'small-image selected-image': 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                      />
                  ))}
            </div>
          </Col>
        </Row>
      </Col>
     </Row>
     <Row>
    
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
        </div>
      </Row>
      <Row style={{justifyContent: "right"}}>
        <div className='desc'>
          <h5> Description </h5>
          <p>{heroBanner.desc}</p>
       </div>
     </Row>
    </div>
  )
}


export default HeroBanner