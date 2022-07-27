import React from "react"
import Isotope from "isotope-layout"
import Product from "../components/Products"
import { useStateContext } from "../context/stateContext"


const IsotopeComponent = ({products}) => {
  const {filterKey, setFilterKey, isotope, setIsotope, isActive, setActive} = useStateContext();
  React.useEffect(() => {
    setIsotope(
      new Isotope('.isotope', {itemSelector: '.grid-item', layoutMode: 'masonry', masonry: {columnWidth: 1, gutter: 40 }})
    )
  },[])

  React.useEffect(() => {
    if (isotope) {
      // sanity check
      console.log(filterKey)
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
  console.log(isActive)
  return (
    <>
      <div className="row" style={{justifyContent: "space-between"}}>
        <div className="col">
          <div className="filter-btn-group">
            {tags.map((tag, index ) => {
              console.log(tag, index)
              return (
                <button
                  type="button" 
                  className={`filter-btn${isActive === index ? "-is-active" : ""}`} 
                  key={index}
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
          </div>
        </div>
        <div className="col">
          <div className="box">
            <button class="btn-search"><i class="fas fa-search"></i></button>
              <input type="text" class="input-search" placeholder="Type to Search..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default IsotopeComponent