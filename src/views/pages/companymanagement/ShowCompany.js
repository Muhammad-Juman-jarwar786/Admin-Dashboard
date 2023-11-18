import React, { useState } from 'react';
import ListShow from '../../../components/listshow/ListShow';
import CompanyModal from './CompanyModal';

const initialCustomers = [
  {
    id: 1,
    company: 'Company A',
    contact: '(555) 123-4567',
    address: '123 Main St, Anytown USA',
    description: 'This is a description of the company A'
  },
  {
    id: 2,
    company: 'Company B',
    contact: '(555) 987-6543',
    address: '456 Elm St, Anytown USA',
    description: 'This is a description of the company B'
  },
  {
    id: 3,
    company: 'Company C',
    contact: '(555) 555-1212',
    address: '789 Oak St, Anytown USA',
    description: 'This is a description of the company C'
  },
];


const headers = ['Company', 'Contact', 'Address', 'Description'];

const ShowCompany = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (item) => {
    setSelectedCustomer(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.company}?`)) {
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
        <CompanyModal
          modaltitle='Update Company'
          customer={selectedCustomer}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {!showEditModal && <ListShow title='Company Table' headers={headers} items={customers} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ShowCompany;
