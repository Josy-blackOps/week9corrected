// Events.js
import { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEventName, setNewEventName] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');

  const handleNewEventName = (e) => {
    setNewEventName(e.target.value);
  };

  const handleNewEventLocation = (e) => {
    setNewEventLocation(e.target.value);
  };

  const addNewEvent = () => {
    setEvents([...events, { name: newEventName, location: newEventLocation }]);
    setNewEventName('');
    setNewEventLocation('');
  };

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name} - {event.location}
          </li>
        ))}
      </ul>
      <div className="input-container">
      <input type="text" value={newEventName} onChange={handleNewEventName} 
        placeholder="Enter a new Event Name"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
        />
      <input
        type="text"
        value={newEventLocation}
        onChange={handleNewEventLocation}
        placeholder="Enter a new Event Location"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      />
      <button onClick={addNewEvent}
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

export default Events;
