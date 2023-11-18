import React from 'react'
import { faCartPlus, faTags, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const ProductManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/AddProduct'
        link2='/ProductType'
        link3='/ShowProduct'
        value1='Add'
        value2='Add Product'
        value3='Show'
        title1='Product'
        title2='Category'
        title3='Products'
        icon1={faCartPlus}
        icon2={faTags}
        icon3={faCartArrowDown}
      />
    </>
  )
}


export default ProductManagement
