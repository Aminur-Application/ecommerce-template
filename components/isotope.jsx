import React from "react"
import Isotope from "isotope-layout"
import Product from "../components/Products"
import { useStateContext } from "../context/stateContext"
import {ButtonGroup, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';


const IsotopeComponent = ({products}) => {
  const {filterKey, setFilterKey, isotope, setIsotope, isActive, setActive} = useStateContext();
  React.useEffect(() => {
    setIsotope(
      new Isotope('.isotope', {itemSelector: '.grid-item', layoutMode: 'masonry', masonry: {gutter: 10 }})
    )
  },[])

  React.useEffect(() => {
    if (isotope) {
      // sanity check

      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}`});
    }
  }, [isotope, filterKey, isActive]);
  
  const toggleClass = (index) => {
    setActive((isActive) => (isActive === index ? 0 : index));
  }

  const products_list = products?.map((product) => product)
  const tags = ["*", ...new Set(products_list.map((tag) => tag.tags[0].value))]

  return (
    <>
      <Row>
        <ButtonToolbar className="justify-content-between">
          <ButtonGroup size="sm" >
            {tags.map((tag, index ) => {
              return (
                <button
                  key={index}
                  className={`filter-btn${isActive === index ? "-is-active" : ""}`} 
                  onClick={() => {
                    toggleClass(index)
                    isActive === index ? setFilterKey('*') : setFilterKey(tag)
                    }
                  }
                >
                  {index === 0? "show all" : tag}
                </button>
              )
            })
            }
          </ButtonGroup>
          <div className="box">
            <button className="btn-search"><i className="fas fa-search"></i></button>
              <input type="text" class="input-search" placeholder="Type to Search..." />
          </div>
        </ButtonToolbar>
            
      </Row>
    </>
  )
}

export default IsotopeComponent