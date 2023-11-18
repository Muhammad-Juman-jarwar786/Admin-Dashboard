import React, { useState } from 'react';
import ListShow from '../../../components/listshow/ListShow';
import StockModal from './StockModal';

const initialCustomers = [
  {
    id: 1,
    product: 'Jane Smith',
    category: 'Category 1',
    quantity: '10',
    price: '100',
    shed: 'Shed 1',
  },
  {
    id: 2,
    product: 'John Doe',
    category: 'Category 2',
    quantity: '20',
    price: '200',
    shed: 'Shed 2',
  },
  {
    id: 3,
    product: 'Sarah Lee',
    category: 'Category 3',
    quantity: '30',
    price: '300',
    shed: 'Shed 3',
  },
];

const headers = ['Product', 'Category', 'Quantity', 'Price', 'Shed'];

const ShowStock = () => {
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
        <StockModal
          modaltitle='Update Stock'
          customer={selectedCustomer}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {!showEditModal && <ListShow title='Stock Table' headers={headers} items={customers} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ShowStock;
