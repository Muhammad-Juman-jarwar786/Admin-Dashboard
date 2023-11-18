import React from 'react'
import { faHandHoldingMedical, faCoins, faHandHolding } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const ExpenseManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/AddExpense'
        link2='/AddExpenseType'
        link3='/ShowExpense'
        icon1={faHandHoldingMedical}
        icon2={faCoins}
        icon3={faHandHolding}
        value1='Add'
        value2='Add Expense'
        value3='Show'
        title1='Expense'
        title2='Type'
        title3='Expense'
      />
    </>
  )
}


export default ExpenseManagement
