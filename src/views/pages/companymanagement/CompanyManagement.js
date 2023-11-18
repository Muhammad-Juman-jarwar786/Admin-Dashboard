import React from 'react'
import { faBuildingUser, faBuilding } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'


const CompanyManagement = () => {
  return (
    <>
      <ManagementSystem 
        link1='/AddCompany'
        link2='/ShowCompany'
        icon1={faBuildingUser}
        icon2={faBuilding}
        value1='Add Company'
        value2='Show Company'
        title1='Company'
        title2='Company'
        />
    </>
  )
}

export default CompanyManagement
