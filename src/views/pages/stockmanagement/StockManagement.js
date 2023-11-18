import React from 'react'
import { faTruckRampBox, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const StockManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/AddStock'
        link2='/ShowStock'
        icon1={faTruckRampBox}
        icon2={faBoxesStacked}
        value1='Add'
        value2='Show'
        title1='Stock'
        title2='Stock'
        />
    </>
  )
}

export default StockManagement
