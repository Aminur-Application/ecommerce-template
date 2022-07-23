import React from "react"
import Isotope from "isotope-layout"
import react from "react"
import Product from "../components/Products"


const ClientComponent = ({products}) => {
  const [isotope, setIsotope] = react.useState(null)
  const [filterKey, setFilterKey] = React.useState('*')
  React.useEffect(() => {
    setIsotope(
      new Isotope('.products-container')
    )
  },[])
  
  const handleFilterKeyChange = (key) => {
    if (isotope) {
      // sanity check
      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
      setFilterKey(key)
    }
    
  }
  console.log(isotope)
  return (
    <>
      <ul>
        <li onClick={() => handleFilterKeyChange('*')}>Show Both</li>
        <li onClick={() => handleFilterKeyChange('Shampoo')}>Show Veges</li>
        <li onClick={() => handleFilterKeyChange('fruit')}>Show Fruits</li>
      </ul>
      <hr />

      <div className = "products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}

export default ClientComponent