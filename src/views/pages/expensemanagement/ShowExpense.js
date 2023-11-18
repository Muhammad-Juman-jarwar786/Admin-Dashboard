import React, { useState } from 'react';
import ListShow from '../../../components/listshow/ListShow';
import ExpenseModal from './ExpenseModal';

const initialCustomers = [
  {
    id: 1,
    expense: 'Jane Smith',
    type: 'Type 1',
    employee: 'David Smith',
    description: 'This is a description of the expense Type 1',
  },
  {
    id: 2,
    expense: 'John Doe',
    type: 'Type 2',
    employee:  'John Doe',
    description: 'This is a description of the expense Type 2' ,
  },
  {
    id: 3,
    expense: 'Sarah Lee',
    type: 'Type 3',
    employee: 'Sarah Lee',
    description: 'This is a description of the expense Type 3',
  },
];

const headers = ['Expense', 'Type', 'Employee', 'Description'];

const ShowExpense = () => {
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
        <ExpenseModal
          modaltitle='Update Expense'
          customer={selectedCustomer}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {!showEditModal && <ListShow title='Expense Table' headers={headers} items={customers} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ShowExpense;
