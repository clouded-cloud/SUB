// StockMovement.js
import React, { useState } from 'react';

function StockMovement({ stocks, onRecordMovement }) {
  const [movementData, setMovementData] = useState({
    stockId: '',
    amount: 0,
    isDelivery: true,
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMovementData({
      ...movementData,
      [name]: type === 'checkbox' ? checked : 
              name === 'amount' ? parseFloat(value) || 0 : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movementData.stockId) return;
    
    onRecordMovement(
      parseInt(movementData.stockId), 
      movementData.amount, 
      movementData.isDelivery
    );
    
    // Reset form
    setMovementData({
      stockId: '',
      amount: 0,
      isDelivery: true,
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
  };

  return (
    <div className="stock-movement">
      <h2>Record Stock Movement</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Stock Item:</label>
          <select 
            name="stockId" 
            value={movementData.stockId} 
            onChange={handleChange} 
            required
          >
            <option value="">Select an item</option>
            {stocks.map(stock => (
              <option key={stock.id} value={stock.id}>
                {stock.name} (Current: {stock.quantity})
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Movement Type:</label>
          <label>
            <input 
              type="radio" 
              name="isDelivery" 
              checked={movementData.isDelivery} 
              onChange={() => setMovementData({...movementData, isDelivery: true})} 
            />
            Delivery (Increase)
          </label>
          <label>
            <input 
              type="radio" 
              name="isDelivery" 
              checked={!movementData.isDelivery} 
              onChange={() => setMovementData({...movementData, isDelivery: false})} 
            />
            Usage (Decrease)
          </label>
        </div>
        
        <div className="form-group">
          <label>Amount:</label>
          <input 
            type="number" 
            name="amount" 
            value={movementData.amount} 
            onChange={handleChange} 
            min="0" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Date:</label>
          <input 
            type="date" 
            name="date" 
            value={movementData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Notes:</label>
          <textarea 
            name="notes" 
            value={movementData.notes} 
            onChange={handleChange} 
          />
        </div>
        
        <button type="submit">Record Movement</button>
      </form>
    </div>
  );
}

export default StockMovement;