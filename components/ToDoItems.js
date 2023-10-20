// ToDoItems.js
import { useState } from 'react';

const ToDoItems = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const [newToDoItem, setNewToDoItem] = useState('');

  const handleNewToDoItem = (e) => {
    setNewToDoItem(e.target.value);
  };

  const addNewToDoItem = () => {
    setToDoItems([...toDoItems, newToDoItem]);
    setNewToDoItem('');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>To Do Items:   </h2>
      <ul>
        {toDoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="input-container">
      <input type="text" value={newToDoItem} onChange={handleNewToDoItem} 
        placeholder="Enter a new item"
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
        />
      <button onClick={addNewToDoItem}
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

export default ToDoItems;
