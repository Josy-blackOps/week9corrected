// Contacts.js
import { useState } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  const [newContactAddress, setNewContactAddress] = useState('');

  const handleNewContactName = (e) => {
    setNewContactName(e.target.value);
  };

  const handleNewContactEmail = (e) => {
    setNewContactEmail(e.target.value);
  };

  const handleNewContactPhone = (e) => {
    setNewContactPhone(e.target.value);
  };

  const handleNewContactAddress = (e) => {
    setNewContactAddress(e.target.value);
  };

  const addNewContact = () => {
    setContacts([
      ...contacts,
      {
        name: newContactName,
        email: newContactEmail,
        phone: newContactPhone,
        address: newContactAddress,
      },
    ]);
    setNewContactName('');
    setNewContactEmail('');
    setNewContactPhone('');
    setNewContactAddress('');
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email} - {contact.phone} -{' '}
            {contact.address}
          </li>
        ))}
      </ul>
      <div className="input-container">
      <input
        type="text"
        value={newContactName}
        onChange={handleNewContactName}
        placeholder="Enter a new Contact Name"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      />
      <input
        type="text"
        value={newContactEmail}
        onChange={handleNewContactEmail}
        placeholder="Enter a new Email"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      />
      <input
        type="text"
        value={newContactPhone}
        onChange={handleNewContactPhone}
        placeholder="Enter a new Phone Number"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      />
      <input
        type="text"
        value={newContactAddress}
        onChange={handleNewContactAddress}
        placeholder="Enter a new Address"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '2px',
        }}
      />
      <button onClick={addNewContact}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '5px',
        }}
        >Add</button>
    </div>
      </div>
  );
};

export default Contacts;
