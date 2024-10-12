import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/add-item">Add Item</Link></li>
        <li><Link to="/update-item">Update Item</Link></li>
        <li><Link to="/remove-item">Remove Item</Link></li>
        <li><Link to="/display-items">Display All Items</Link></li>
        <li><Link to="/search-item">Search Item</Link></li>
        <li><Link to="/sort-items">Sort Items</Link></li>
        <li><Link to="/low-stock-items">Low Stock Items</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
