// StockAlerts.js
import React from 'react';

function StockAlerts({ stocks }) {
  const lowStockItems = stocks.filter(stock => stock.quantity < stock.minLevel);

  return (
    <div className="stock-alerts">
      <h2>Low Stock Alerts</h2>
      
      {lowStockItems.length === 0 ? (
        <p>No items below minimum levels. Inventory is healthy.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Current Quantity</th>
              <th>Minimum Level</th>
              <th>Supplier</th>
              <th>Urgency</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map(stock => (
              <tr key={stock.id}>
                <td>{stock.name}</td>
                <td className="critical">{stock.quantity}</td>
                <td>{stock.minLevel}</td>
                <td>{stock.supplier}</td>
                <td>
                  {stock.quantity < stock.minLevel * 0.2 ? 'CRITICAL' : 
                   stock.quantity < stock.minLevel * 0.5 ? 'High' : 'Medium'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StockAlerts;