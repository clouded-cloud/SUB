// StockForm.js
import React, { useState, useEffect } from 'react';

function StockForm({ stock, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    supplier: '',
    lastDeliveryDate: new Date().toISOString().split('T')[0],
    price: 0,
    minLevel: 0
  });

  useEffect(() => {
    if (stock) {
      setFormData(stock);
    }
  }, [stock]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'name' || name === 'supplier' ? value : 
              name === 'quantity' || name === 'price' || name === 'minLevel' ? 
              parseFloat(value) || 0 : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="stock-form">
      <h2>{stock ? 'Edit Stock Item' : 'Add New Stock Item'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Current Quantity:</label>
          <input 
            type="number" 
            name="quantity" 
            value={formData.quantity} 
            onChange={handleChange} 
            min="0" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Supplier:</label>
          <input 
            type="text" 
            name="supplier" 
            value={formData.supplier} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Last Delivery Date:</label>
          <input 
            type="date" 
            name="lastDeliveryDate" 
            value={formData.lastDeliveryDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Price (ksh):</label>
          <input 
            type="number" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
            min="0" 
            step="0.01" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Minimum Level:</label>
          <input 
            type="number" 
            name="minLevel" 
            value={formData.minLevel} 
            onChange={handleChange} 
            min="0" 
            required 
          />
        </div>
        
        <div className="form-actions">
          <button type="submit">{stock ? 'Update' : 'Add'} Item</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default StockForm;