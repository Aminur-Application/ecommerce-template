import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import {Card} from 'react-bootstrap'

const Products = ({product: { image, name, slug, price, tags }}) => {
  const returnTags = tags?.map((tag) => tag.value).join(" ") || []
  return (
   
      <Card className={`grid-item ${returnTags} product-card`} 
            data-category={`${returnTags}`} 
            style={{marginTop: "25px", border: "none"}}
            data-price={price}
            data-name={name}
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