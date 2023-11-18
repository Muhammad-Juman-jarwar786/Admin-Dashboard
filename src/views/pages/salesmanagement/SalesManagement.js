import React from 'react';
import ManagementSystem from '../../../components/managementsystem/ManagementSystem';
import { faEgg , faTruckFast} from '@fortawesome/free-solid-svg-icons';


const SalesManagement = () => {
  return (
    <React.Fragment>
      <ManagementSystem 
        link1='/EggSales'
        link2='/MaterialSales'
        icon1={faEgg}
        icon2={faTruckFast}
        value1='Egg'
        value2='Material'
        title1='Sales'
        title2='Sales'
      />
    </React.Fragment>
  );
};
export default SalesManagement;