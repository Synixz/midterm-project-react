import React, { useState } from 'react';
import './SortItems.css'; 

function SortItems({ inventory, setInventory }) {
  const [sortField, setSortField] = useState('quantity');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sortedInventory, setSortedInventory] = useState([]);

  const handleSort = () => {
    const sorted = [...inventory].sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];
      return sortOrder === 'ascending' ? valueA - valueB : valueB - valueA;
    });
    setSortedInventory(sorted);
  };

  return (
    <div className="sort-items-container">
      <h2>Sort Items</h2>
      <div className="sort-controls">
        <select value={sortField} onChange={(e) => setSortField(e.target.value)} className="sort-select">
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="sort-select">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <button onClick={handleSort} className="sort-button">Sort</button>
      </div>

      {sortedInventory.length > 0 && (
        <table className="sorted-items-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {sortedInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SortItems;
