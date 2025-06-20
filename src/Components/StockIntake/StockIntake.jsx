// App.js
import React, { useState, useEffect } from 'react';
import StockList from './StockList';
import StockForm from './StockForm';
import StockMovement from './StockMovement';
import StockAlerts from './StockAlerts';


function StockIntake() {
  const [stocks, setStocks] = useState([]);
  const [activeTab, setActiveTab] = useState('list');
  const [editingStock, setEditingStock] = useState(null);

  // Load sample data or from API
  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        name: 'Widget A',
        quantity: 150,
        supplier: 'Acme Corp',
        lastDeliveryDate: '2023-05-15',
        price: 12.99,
        minLevel: 50
      },
      {
        id: 2,
        name: 'Gadget B',
        quantity: 75,
        supplier: 'Tech Supplies',
        lastDeliveryDate: '2023-06-01',
        price: 24.50,
        minLevel: 30
      }
    ];
    setStocks(sampleData);
  }, []);

  const addStock = (stock) => {
    const newStock = { ...stock, id: Date.now() };
    setStocks([...stocks, newStock]);
    setActiveTab('list');
  };

  const updateStock = (updatedStock) => {
    setStocks(stocks.map(stock => 
      stock.id === updatedStock.id ? updatedStock : stock
    ));
    setEditingStock(null);
    setActiveTab('list');
  };

  const deleteStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id));
  };

  const recordMovement = (id, amount, isDelivery) => {
    setStocks(stocks.map(stock => {
      if (stock.id === id) {
        return {
          ...stock,
          quantity: isDelivery ? 
            stock.quantity + amount : 
            Math.max(0, stock.quantity - amount)
        };
      }
      return stock;
    }));
  };

  return (
    <div className="app">
      <header>
        <h1>Stock Intake System</h1>
        <nav>
          <button onClick={() => setActiveTab('list')}>Stock List</button>
          <button onClick={() => {
            setEditingStock(null);
            setActiveTab('add');
          }}>Add Stock</button>
          <button onClick={() => setActiveTab('movement')}>Record Movement</button>
          <button onClick={() => setActiveTab('alerts')}>Stock Alerts</button>
        </nav>
      </header>

      <main>
        {activeTab === 'list' && (
          <StockList 
            stocks={stocks} 
            onEdit={setEditingStock} 
            onDelete={deleteStock}
            setActiveTab={setActiveTab}
          />
        )}
        
        {activeTab === 'add' && (
          <StockForm 
            onSubmit={addStock} 
            onCancel={() => setActiveTab('list')}
          />
        )}
        
        {activeTab === 'edit' && editingStock && (
          <StockForm 
            stock={editingStock} 
            onSubmit={updateStock} 
            onCancel={() => setActiveTab('list')}
          />
        )}
        
        {activeTab === 'movement' && (
          <StockMovement 
            stocks={stocks} 
            onRecordMovement={recordMovement}
          />
        )}
        
        {activeTab === 'alerts' && (
          <StockAlerts stocks={stocks} />
        )}
      </main>
    </div>
  );
}

export default StockIntake;