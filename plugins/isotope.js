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
    setActive((isActive) => (isActive === index ? 1 : index));
  }
  return (
    <>
      <div className="filter-btn-container">
        <button type="button" className={`filter-btn${isActive === 1 ? "-is-active" : ""}`} key={1} onClick={() => {
          toggleClass(1)
          isActive === 1? setFilterKey('*') : setFilterKey('*')
          }
        }>Show All</button>
        <button type="button" className={`filter-btn${isActive === 2 ? "-is-active" : ""}`} key={2} onClick={() => {
          toggleClass(2)
          isActive === 2? setFilterKey('*') : setFilterKey('earphones')
          }}>Show earphones</button>
        <button type="button" className={`filter-btn${isActive === 3 ? "-is-active" : ""}`} key={3} onClick={() => {
          toggleClass(3)
          isActive === 3? setFilterKey('*') : setFilterKey('headphones')
          }}>Show headphones</button>
        <button type="button"className={`filter-btn${isActive === 4 ? "-is-active" : ""}`} key={4} onClick={() => {
          toggleClass(4)
          isActive === 4? setFilterKey('*') : setFilterKey('smartphones')
          }}>Show smartphones</button>
      </div>

      <div className = "isotope">
          {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}

export default ClientComponent