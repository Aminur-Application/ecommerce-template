import React from "react"
import Product from "../components/Products"
import { useStateContext } from "../context/stateContext"
import {ButtonGroup, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Filterizr from "filterizr";


const FilterizrComponent = ({products}) => {
  const {filterKey, setFilterKey, isotope, setIsotope, isActive, setActive} = useStateContext();
  React.useEffect(() => {
    setIsotope(
      new Filterizr('.isotope', {gridItemsSelector: '.grid-item', gutterPixels: 10})
    )
  },[])
  
  const toggleClass = (index) => {
    setActive((isActive) => (isActive === index ? 0 : index));
  }

  const products_list = products?.map((product) => product)
  const tags = ["all", ...new Set(products_list.map((tag) => tag.tags[0].value))]
  console.log(isActive)
  return (
    <>
      <Row>
        <ButtonToolbar className="justify-content-between">
          <ButtonGroup size="sm" style={{display: "block"}}>
            {tags.map((tag, index ) => {
              console.log(tag, index)
              return (
                <button
                  key={index}
                  className={`filter-btn${isActive === index ? "-is-active" : ""}`}          
                  size="sm"
                  data-filter={isActive === index ? "all" : tag}
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
            <button class="btn-search"><i class="fas fa-search"></i></button>
              <input type="text" class="input-search" placeholder="Type to Search..." />
          </div>
        </ButtonToolbar>
            
      </Row>
    </>
  )
}

export default FilterizrComponent