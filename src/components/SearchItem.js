import React, { useState } from 'react';
import './SearchItem.css'; 

function SearchItem({ inventory }) {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);

  const handleSearch = () => {
    const foundItem = inventory.find((item) => item.id === id);
    if (foundItem) {
      setItem(foundItem);
    } else {
      alert('Item not found!');
      setItem(null); 
    }
  };

  return (
    <div className="search-item-container">
      <h2>Search Item</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      {item && (
        <div className="search-result">
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
        </div>
      )}
    </div>
  );
}

export default SearchItem;
