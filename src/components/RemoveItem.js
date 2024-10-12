import React, { useState } from 'react';
import './RemoveItem.css';

function RemoveItem({ inventory, setInventory }) {
  const [id, setId] = useState('');

  const handleRemove = () => {
    const itemIndex = inventory.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const itemName = inventory[itemIndex].name;
      const updatedInventory = inventory.filter((item) => item.id !== id);
      setInventory(updatedInventory);
      alert(`Item ${itemName} has been removed from the inventory`);
    } else {
      alert('Item not found!');
    }
  };

  return (
    <div className="remove-item-container">
      <h2>Remove Item</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleRemove}>Remove Item</button>
    </div>
  );
}

export default RemoveItem;
