import React from "react"
import Isotope from "isotope-layout"
import Product from "../components/Products"
import { useStateContext } from "../context/stateContext"


const ClientComponent = ({products}) => {
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
        : isotope.arrange({ filter: `.${filterKey}` });
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
      <div className="filter-btn-container">
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

      <div className = "isotope">
          {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}

export default ClientComponent