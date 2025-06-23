
import React from 'react';

function TransactionList({ transactions, categories, onEdit, onDelete, setActiveTab }) {
  const getCategoryName = (id) => {
    const category = categories.find(c => c.id === id);
    return category ? category.name : 'Uncategorized';
  };

  return (
    <div className="transaction-list">
      <h2>Financial Transactions</h2>
      <div className="summary-bar">
        <button onClick={() => setActiveTab('add')}>Add New Transaction</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className={transaction.type}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{getCategoryName(transaction.category)}</td>
              <td>
                <span className={`type-badge ${transaction.type}`}>
                  {transaction.type}
                </span>
              </td>
              <td className={transaction.type}>
                {transaction.type === 'income' ? '+' : '-'}ksh{transaction.amount.toFixed(2)}
              </td>
              <td>
                <button onClick={() => {
                  onEdit(transaction);
                  setActiveTab('edit');
                }}>Edit</button>
                <button onClick={() => onDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;