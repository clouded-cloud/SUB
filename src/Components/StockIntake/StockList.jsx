// StockList.js
import React from 'react';

function StockList({ stocks, onEdit, onDelete, setActiveTab }) {
  const lowStockItems = stocks.filter(stock => stock.quantity < stock.minLevel);

  return (
    <div className="stock-list">
      <h2>Current Inventory</h2>
      
      {lowStockItems.length > 0 && (
        <div className="alert-banner" onClick={() => setActiveTab('alerts')}>
          {lowStockItems.length} item(s) below minimum level!
        </div>
      )}
      
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Supplier</th>
            <th>Last Delivery</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.id} className={stock.quantity < stock.minLevel ? 'low-stock' : ''}>
              <td>{stock.name}</td>
              <td>{stock.quantity} {stock.quantity < stock.minLevel && '⚠️'}</td>
              <td>{stock.supplier}</td>
              <td>{stock.lastDeliveryDate}</td>
              <td>ksh{stock.price.toFixed(2)}</td>
              <td>
                <button onClick={() => {
                  onEdit(stock);
                  setActiveTab('edit');
                }}>Edit</button>
                <button onClick={() => onDelete(stock.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;