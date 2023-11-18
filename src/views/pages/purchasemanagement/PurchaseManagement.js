import React from 'react'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'

const PurchaseManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/MaterialPurchase'
        icon1={faBagShopping}
        value1='Purchase'
        title1='Material'
      />
    </>
  )
}


export default PurchaseManagement
