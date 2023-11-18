import React from 'react'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const InvoiceManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/Invoice'
        icon1={faFileInvoiceDollar}
        value1='Generate'
        title1='Invoice'
      />
    </>
  )
}


export default InvoiceManagement
