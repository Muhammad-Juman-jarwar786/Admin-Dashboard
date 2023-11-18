import React, { useState } from 'react';
import ListShow from '../../../components/listshow/ListShow';
import ProductModal from './ProductModal';

const initialCustomers = [
  {
    id: 1,
    product: 'Product 1',
    category: 'category1',
    description: 'This is a detailed description of product 1.',
  },
  {
    id: 2,
    product: 'Product 2',
    category: 'category2',
    description: 'This is a detailed description of product 2.',
  },
  {
    id: 3,
    product: 'Product 3',
    category: 'category3',
    description: 'This is a detailed description of product 3.',
  },
];

const headers = ['Product', 'Category', 'Description'];

const ShowProduct = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (item) => {
    setSelectedCustomer(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.product}?`)) {
      const updatedCustomers = customers.filter((customer) => customer.id !== item.id);
      setCustomers(updatedCustomers);
    }
  };

  const handleUpdate = (updatedCustomer) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === updatedCustomer.id) {
        return updatedCustomer;
      }
      return customer;
    });
    setCustomers(updatedCustomers);
    setShowEditModal(false);
  };

  return (
    <div>
      {showEditModal && (
        <ProductModal
          modaltitle='Update Product'
          customer={selectedCustomer}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {!showEditModal && <ListShow title='Product Table' headers={headers} items={customers} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ShowProduct;