import React, { useState } from 'react';
import './UpdateItem.css';

function UpdateItem({ inventory, setInventory }) {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');

  const handleUpdate = () => {
    const itemIndex = inventory.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedInventory = [...inventory];
      const oldValue = updatedInventory[itemIndex][field];
      updatedInventory[itemIndex][field] = Number(newValue);
      setInventory(updatedInventory);
      alert(`${field.charAt(0).toUpperCase() + field.slice(1)} of Item ${updatedInventory[itemIndex].name} is updated from ${oldValue} to ${newValue}`);
    } else {
      alert('Item not found!');
    }
  };

  return (
    <div className="update-item-container">
      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <select
        value={field}
        onChange={(e) => setField(e.target.value)}
      >
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input
        type="number"
        placeholder="New Value"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Item</button>
    </div>
  );
}

export default UpdateItem;
