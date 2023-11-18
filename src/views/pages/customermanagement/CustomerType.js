import React, { useState } from 'react';
import './CustomerType.css'

const CustomerType = () => {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const handleUserChange = (event) => {
    setNewUser(event.target.value);
  };

  const addUser = (event) => {
    event.preventDefault();
    setUsers([...users, newUser]);
    setNewUser('');
  };

  return (
    <React.Fragment>
        <a href='#' className='btn-TopLeft-corner'>Home</a>
        <div className='customerType-input-btn'>
          <input className='Input-define-cutomer-type' value={newUser} onChange={handleUserChange} type="text" placeholder="Define Customer Type" />
          <button className='btn-Input-right-submit' onClick={addUser}>Add Type</button>
        </div>
        <div>
          <h2 className='heading-AddCustomerType'>Add Customer Types</h2>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Customer Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </React.Fragment>
  );
};

export default CustomerType;
