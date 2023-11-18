import React from 'react';
import { faFileInvoiceDollar, faCommentDollar, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import ManagementSystem from 'src/components/managementsystem/ManagementSystem';

const SalaryManagement = () => {
  return (
    <React.Fragment>
      <ManagementSystem 
        link1="/PaySalary" 
        icon1={faCommentDollar} 
        value1="Pay" 
        title1="Salary" 
        link2="/SetSalary" 
        icon2={faMoneyCheckDollar} 
        value2="Set"
        title2="Salary" 
        link3="/ShowSetSalary" 
        icon3={faFileInvoiceDollar} 
        value3="Show Set"
        title3="Salary" 
      />
    </React.Fragment>
  );
};
export default SalaryManagement;