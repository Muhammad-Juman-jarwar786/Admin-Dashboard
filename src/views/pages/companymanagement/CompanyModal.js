import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../components/updatingmodal/UpdatingModal.css';

const CompanyModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [company, setCompany] = useState(customer.company);
  const [contact, setContact] = useState(customer.contact);
  const [address, setAddress] = useState(customer.address);
  const [description, setDescription] = useState(customer.description);

  const handleSave = () => {
    onUpdate({ ...customer, company, contact, address, description});
  };

  return (
    <div className="updating-modal-container">
      <div className="updating-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Company</label>
          <input id="name-input" type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="phone-input">Contact No</label>
          <input id="contact-input" type="no" value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="address-input">Address</label>
          <textarea id="address-input" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="phone-input">Description</label>
          <textarea id="description-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="button-row">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
 
CompanyModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CompanyModal;
