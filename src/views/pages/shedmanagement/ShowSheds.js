import React, { useState } from 'react';
import ListShow from '../../../components/listshow/ListShow';
import UpdatingModal from 'src/components/updatingmodal/UpdatingModal';

const initialCustomers = [
  {
    id: 1,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown USA',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(555) 987-6543',
    address: '456 Elm St, Anytown USA',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    email: 'sarah.lee@email.com',
    phone: '(555) 555-1212',
    address: '789 Oak St, Anytown USA',
  },
];

const headers = ['Name', 'Email', 'Phone', 'Address'];

const ShowSheds = () => {
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
        <UpdatingModal
          modaltitle='Update Shed'
          customer={selectedCustomer}
          onUpdate={handleUpdate}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {!showEditModal && <ListShow title='Sheds Table' headers={headers} items={customers} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ShowSheds;
