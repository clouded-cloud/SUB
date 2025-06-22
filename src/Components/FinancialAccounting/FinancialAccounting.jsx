import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import FinancialDashboard from './FinancialDashboard';
import CategoryManagement from './CategoryManagement';
import './FinancialAccounting.css';

function FinancialAccounting() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingTransaction, setEditingTransaction] = useState(null);


  useEffect(() => {
  
    const sampleCategories = [
      { id: 1, name: 'Salary', type: 'income' },
      { id: 2, name: 'Sales', type: 'income' },
      { id: 3, name: 'Purchases', type: 'expense' },
      { id: 4, name: 'Rent', type: 'expense' },
      { id: 5, name: 'Utilities', type: 'expense' }
    ];
    setCategories(sampleCategories);

    // Sample transactions
    const sampleTransactions = [
      {
        id: 1,
        date: '2023-06-01',
        description: 'Monthly salary',
        amount: 5000,
        type: 'income',
        category: 1
      },
      {
        id: 2,
        date: '2023-06-02',
        description: 'Office supplies',
        amount: 250,
        type: 'expense',
        category: 3
      },
      {
        id: 3,
        date: '2023-06-05',
        description: 'Product sales',
        amount: 3200,
        type: 'income',
        category: 2
      }
    ];
    setTransactions(sampleTransactions);
  }, []);

  const addTransaction = (transaction) => {
    const newTransaction = { ...transaction, id: Date.now() };
    setTransactions([...transactions, newTransaction]);
    setActiveTab('list');
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(t => 
      t.id === updatedTransaction.id ? updatedTransaction : t
    ));
    setEditingTransaction(null);
    setActiveTab('list');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const addCategory = (category) => {
    const newCategory = { ...category, id: Date.now() };
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="app">
      <header>
        <h1>Financial Records Management</h1>
        <nav>
          <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
          <button onClick={() => setActiveTab('list')}>Transactions</button>
          <button onClick={() => {
            setEditingTransaction(null);
            setActiveTab('add');
          }}>Add Transaction</button>
          <button onClick={() => setActiveTab('categories')}>Categories</button>
        </nav>
      </header>

      <main>
        {activeTab === 'dashboard' && (
          <FinancialDashboard 
            transactions={transactions} 
            categories={categories} 
          />
        )}
        
        {activeTab === 'list' && (
          <TransactionList 
            transactions={transactions} 
            categories={categories}
            onEdit={setEditingTransaction} 
            onDelete={deleteTransaction}
            setActiveTab={setActiveTab}
          />
        )}
        
        {activeTab === 'add' && (
          <TransactionForm 
            categories={categories}
            onSubmit={addTransaction} 
            onCancel={() => setActiveTab('list')}
          />
        )}
        
        {activeTab === 'edit' && editingTransaction && (
          <TransactionForm 
            transaction={editingTransaction}
            categories={categories}
            onSubmit={updateTransaction} 
            onCancel={() => setActiveTab('list')}
          />
        )}
        
        {activeTab === 'categories' && (
          <CategoryManagement 
            categories={categories}
            onAddCategory={addCategory}
          />
        )}
      </main>
    </div>
  );
}

export default FinancialAccounting;