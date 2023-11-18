import React from 'react'
import { faUserPlus, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const EmployeeManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1="/AddEmployee" 
        icon1={faUserPlus} 
        value1="Add" 
        title1="Employee" 
        link2="/ShowEmployee" 
        icon2={faUsersViewfinder} 
        value2="Show"
        title2="Employee" 
      />
    </>
  )
}

export default EmployeeManagement
