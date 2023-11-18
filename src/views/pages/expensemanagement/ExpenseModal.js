import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../productmanagement/ProductModal.css';

const ExpenseModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [expense, setExpense] = useState(customer.expense);
  const [type, setType] = useState(customer.type);
  const [employee, setEmployee] = useState(customer.employee);
  const [description, setDescription] = useState(customer.description);

  const handleSave = () => {
    onUpdate({ ...customer, expense, type, employee, description });
  };

  return (
    <div className="updating-modal-container">
      <div className="updating-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Expense</label>
          <input id="name-input" type="text" value={expense} onChange={(e) => setExpense(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="name-input">Type</label>
          <select id="type-input" type="text" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
            <option value="Type 3">Type 3</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="name-input">Employee</label>
          <select id="type-input" type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} >
            <option value="David Smith">David Smith</option>
            <option value="John Doe">John Doe</option>
            <option value="Sarah Lee">Sarah Lee</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="description-input">Description</label>
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
 
ExpenseModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ExpenseModal;
