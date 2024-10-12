import React, { useState } from 'react';
import './AddItem.css';

function AddItem({ inventory, setInventory }) {
  const [item, setItem] = useState({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });

  const handleAddItem = (e) => {
    e.preventDefault();
    setInventory([...inventory, { ...item, quantity: Number(item.quantity), price: Number(item.price) }]);
    alert('Item added successfully!');
    setItem({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });
  };

  return (
    <div className="add-item-container">
      <h2>Add Item</h2>
      <form className="add-item-form" onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="ID"
          value={item.id}
          onChange={(e) => setItem({ ...item, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={item.quantity}
          onChange={(e) => setItem({ ...item, quantity: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          required
        />
        <select
          value={item.category}
          onChange={(e) => setItem({ ...item, category: e.target.value })}
        >
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
