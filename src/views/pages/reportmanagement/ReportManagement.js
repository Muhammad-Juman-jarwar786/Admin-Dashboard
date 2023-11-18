import React from 'react'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const CustomerManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/SalesReport'
        link2='/PurchaseReport'
        link3='/ExpenseReport'
        link4='/StockReport'
        link5='/SalaryReport'
        link6='/InvoiceReport'
        icon1={faFilePen}
        icon2={faFilePen}
        icon3={faFilePen}
        icon4={faFilePen}
        icon5={faFilePen}
        icon6={faFilePen}
        value1='Sales'
        value2='Purchase'
        value3='Expense'
        value4='Stock'
        value5='Salary'
        value6='Invoice'
        title1='Report'
        title2='Report'
        title3='Report'
        title4='Report'
        title5='Report'
        title6='Report'
      />
    </>
  )
}


export default CustomerManagement
