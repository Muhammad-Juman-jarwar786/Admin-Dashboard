import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../customermanagement/CustomerModal.css';

const EmployeeModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [designation, setDesignation] = useState(customer.designation);
  const [joined, setJoined] = useState(customer.joined);

  const handleSave = () => {
    onUpdate({ ...customer, name, email, phone, address, designation, joined });
  };

  return (
    <div className="customer-modal-container">
      <div className="customer-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Name</label>
          <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="email-input">Email</label>
          <input id="email-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="phone-input">Phone</label>
          <input id="phone-input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="address-input">Address</label>
          <textarea id="address-input" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        {/* Please Make Drop down options for the designation so that one can only chose not wwrite */}
        <div className="form-row">
            <label htmlFor="designation-input">Designation</label>
            {/* Please Make Drop down options for the designation so that one can only chose not wwrite */}
            <select id="designation-input" value={designation} onChange={(e) => setDesignation(e.target.value)}>
                <option value="staff">Staff</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
                <option value="supervisor">supervisor</option>
            </select>
        </div>
        <div className="form-row">
            <label htmlFor="joined-input">Joined</label>
            <input id="joined-input" type="text" value={joined} onChange={(e) => setJoined(e.target.value)} />
        </div>
        <div className="button-row">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
 
EmployeeModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EmployeeModal;
