import React from 'react'
import { faUserPlus, faPersonCircleQuestion, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const CustomerManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/AddCustomer'
        link2='/CustomerType'
        link3='/ShowCustomer'
        icon1={faUserPlus}
        icon2={faPersonCircleQuestion}
        icon3={faUsersViewfinder}
        value1='Add'
        value2='Add Customer'
        value3='Show'
        title1='Customer'
        title2='Type'
        title3='Customer'
      />
    </>
  )
}


export default CustomerManagement
