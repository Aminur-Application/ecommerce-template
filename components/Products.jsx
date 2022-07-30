import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import {Card} from 'react-bootstrap'
import { useStateContext } from '../context/stateContext';

const Products = ({product: { _id, image, name, slug, price, tags }, marquee = false }) => {
  const returnTags = tags?.map((tag) => tag.value).join(" ") || []
  const {track, setTrack} = useStateContext();
  return (
   
      <Card className={`grid-item ${returnTags} product-card`} 
            data-category={`${returnTags}`} 
            style={{marginTop: "25px", border: "none"}}
            data-price={price}
            data-name={name}
            onMouseOver={() => {marquee? setTrack(true): ""}}
            onMouseOut={()=> {marquee? setTrack(false): ""}}
            >
        <Link href={`/product/${slug.current}`}>
          <div>
            <Card.Img
                src={urlFor(image && image[0])}
                width={250}
                height={250}
                className="product-image"
                
                />
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
          </div>
        </Link>
      </Card> 
  )
}

export default Products