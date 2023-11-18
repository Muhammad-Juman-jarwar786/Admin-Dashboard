import React, { useState } from 'react';
import ListShow from '../../../components/listshow/ListShow';
import SalaryModal from './SalaryModal';

const initialCustomers = [
  {
    id: 1,
    name: 'Jane Smith',
    designation: 'Staff',
    amount: '10000',
  },
  {
    id: 2,
    name: 'John Doe',
    designation: 'manager',
    amount: '20000',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    designation: 'admin',
    amount: '30000',
  },
];

const headers = ['Name', 'Designation', 'Amount'];

const ShowSalary = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (item) => {
    setSelectedCustomer(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
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
        <SalaryModal
          modaltitle='Update Set Salary'
          customer={selectedCustomer}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {!showEditModal && <ListShow title='Set Sallary Table' headers={headers} items={customers} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ShowSalary;
