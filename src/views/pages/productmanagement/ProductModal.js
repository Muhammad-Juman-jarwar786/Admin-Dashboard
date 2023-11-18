import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductModal.css';

const ProductModal = ({ modaltitle,customer, onUpdate, onCancel }) => {
  const [product, setProduct] = useState(customer.product);
  const [category, setCategory] = useState(customer.category);
  const [description, setDescription] = useState(customer.description);
//   const [phone, setPhone] = useState(customer.phone);
//   const [address, setAddress] = useState(customer.address);
//   const [shop, setShop] = useState(customer.shop);

  const handleSave = () => {
    onUpdate({ ...customer, product, category, description });
  };

  return (
    <div className="updating-modal-container">
      <div className="updating-modal">
        <h2>{modaltitle}</h2>
        <div className="form-row">
          <label htmlFor="name-input">Product</label>
          <input id="name-input" type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="name-input">Category</label>
          <input id="type-input" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="description-input">Description</label>
          <textarea id="description-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        {/*<div className="form-row">
          <label htmlFor="phone-input">Phone</label>
          <input id="phone-input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="address-input">Address</label>
          <textarea id="address-input" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="phone-input">Shop</label>
          <input id="shop-input" type="text" value={shop} onChange={(e) => setShop(e.target.value)} />
        </div> */}
        <div className="button-row">
          <button onClick={handleSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
 
ProductModal.propTypes = {
  modaltitle: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ProductModal;
