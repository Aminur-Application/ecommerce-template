import React from "react"
import Isotope from "isotope-layout"
import Filterizr from 'filterizr'
import Product from "../components/Products"


const ClientComponent = ({products}) => {
  const [isotope, setIsotope] = React.useState(null)
  const [filterKey, setFilterKey] = React.useState('*')
 

  React.useEffect(() => {
    setIsotope(
      new Isotope('.isotope', {itemSelector: '.grid-item', layoutMode: 'masonry', masonry: {columnWidth: 1, gutter: 40 }})
    )
  },[])

  React.useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  
  return (
    <>
      <div className="filter-btn-container">
        <button type="button" className="filter-btn" onClick={() => setFilterKey('*')}>Show Both</button>
        <button type="button" className="filter-btn" onClick={() => setFilterKey('Shampoo')}>Show Veges</button>
        <button type="button" className="filter-btn" onClick={() => setFilterKey('fruit')}>Show Fruits</button>
      </div>

      <div className = "isotope">
          {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}

export default ClientComponent