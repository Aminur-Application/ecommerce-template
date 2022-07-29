import React from "react"
import Product from "../components/Products"
import { useStateContext } from "../context/stateContext"
import {ButtonGroup, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Filterizr from "filterizr";
import {FaSearch} from 'react-icons/fa';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


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

  const filterBySearch = (event) => {
    setFilterKey(event.target.value)
  }
  return (
    <>
      <Row>
        <ButtonToolbar style={{placeContent: "space-around"}}>
          <ButtonGroup size="sm" style={{display: "block"}}>
            {tags.map((tag, index ) => {
              return (
                <button
                  key={index}
                  className={`filter-btn${isActive === index ? "-is-active" : filterKey? "-is-disabled" : ""}`}          
                  size="sm"
                  disabled={filterKey? true: false}
                  data-filter={isActive === index ? "all" : tag}
                  onClick={() => {
                    toggleClass(index)
                    }
                  }
                >
                  {index === 0? "show all" : tag}
                </button>
              )
            })
            }
          </ButtonGroup>
           <div className="search-box">
            <span data-filter={"all"} onClick={() => {setActive(0)}}>
              <button className="btn-search"><i className="fa fa-search" ></i></button>
              <input type="text" name="filtr-search" className="input-search"
              onChange={{} = event => {filterBySearch(event)}} value={filterKey}
              placeholder="Type to Search..."  data-search/>
            </span>
          </div>
        </ButtonToolbar>
            
      </Row>
    </>
  )
}

export default FilterizrComponent