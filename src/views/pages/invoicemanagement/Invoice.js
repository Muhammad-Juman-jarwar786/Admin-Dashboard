import React, { useState } from 'react';
import '../productmanagement/ProductType.css'

const Invoice = () => {

  const [users, setUsers] = useState('');

  const handleUserChange = (event) => {
    setUsers(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();
    console.log(users);
    setUsers('');
  };

  return (
    <React.Fragment>
        <a href='/' className='btn-TopLeft-corner'>Home</a>
        <div className='customerType-input-btn'>
          <input className='Input-define-cutomer-type' value={users} onChange={handleUserChange} type="text" placeholder="Customer Name" />
          <button className='btn-Input-right-submit' onClick={addUser}>Generate Invoice</button>
        </div>
        <div>
        </div>
    </React.Fragment>
  );
};

export default Invoice;
