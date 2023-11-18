import React from 'react'
import { faBuildingUser, faBuilding } from '@fortawesome/free-solid-svg-icons'
import ManagementSystem from 'src/components/managementsystem/ManagementSystem'

const CompanyManagement = () => {
  return (
    <>
      <ManagementSystem
        link1='/AddShed'
        link2='/ShowSheds'
        icon1={faBuildingUser}
        icon2={faBuilding}
        value1='Add Shed'
        value2='Show Sheds'
        title1='Add Shed'
        title2='Show Sheds'
      />
    </>
  )
}

export default CompanyManagement
