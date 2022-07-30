import React from "react"
import Product from "../components/Products"
import { useStateContext } from "../context/stateContext"
import {ButtonGroup, Row, Col, Button, ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';
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

  const filterBySort = (event) => {
    isotope.sort(event.target.value)
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
          <ButtonGroup >
          

              <div class="col-xs-7 col-sm-7">
                
                <input type="text" name="filtr-search" className="input-search"
                onChange={{} = event => {filterBySearch(event)}} data-filter={"all"} onFocus={() => setActive(0)} value={filterKey}
                placeholder="Type to Search..."  data-search/>
              </div>

              <div class="col-xs-2 col-sm-2">
                <select data-sortOrder onChange={{} = event => {filterBySort(event)}} class="sort-select">
                  <option value="">No Sort</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                </select>
              </div>
          
          </ButtonGroup>
            
        </ButtonToolbar>
      </Row> 
    </>
  )
}



export default FilterizrComponent