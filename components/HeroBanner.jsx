import React, {useState} from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  const [index, setIndex] = useState(0)
  return (
    <div className="hero-banner-container">
     <div>
      <p className='beats-solo'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <div className='image-container'>
        <img src={urlFor(heroBanner.image && heroBanner.image[index])} alt='headphones' className='hero-banner-image'/>
        <div className='small-images-container'>
              {heroBanner.image?.map((item,i) => (
                  <img
                    key={i}
                    src={urlFor(item)}
                    className={i === index ? 'small-image selected-image': 'small-image'}
                    onMouseEnter={() => setIndex(i)}
                  />
              ))}
        </div>
      </div>
      <div>
       <Link href={`/product/${heroBanner.product}`}>
         <button type='button'>{heroBanner.buttonText}</button>
       
       </Link>
       <div className='desc'>
        <h5> Description </h5>
        <p>{heroBanner.desc}</p>
       </div>
      </div>
     </div>
     
    </div>
  )
}


export default HeroBanner