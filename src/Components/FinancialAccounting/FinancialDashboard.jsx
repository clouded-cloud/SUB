
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function FinancialDashboard({ transactions, categories }) {
//
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const balance = totalIncome - totalExpenses;

  // Prepare data for charts
  const incomeByCategory = {};
  const expensesByCategory = {};

  transactions.forEach(t => {
    const category = categories.find(c => c.id === t.category)?.name || 'Other';
    if (t.type === 'income') {
      incomeByCategory[category] = (incomeByCategory[category] || 0) + t.amount;
    } else {
      expensesByCategory[category] = (expensesByCategory[category] || 0) + t.amount;
    }
  });

  const incomeData = {
    labels: Object.keys(incomeByCategory),
    datasets: [{
      label: 'Income by Category',
      data: Object.values(incomeByCategory),
      backgroundColor: [
        '#4CAF50', '#2E7D32', '#81C784', '#A5D6A7', '#C8E6C9'
      ]
    }]
  };

  const expensesData = {
    labels: Object.keys(expensesByCategory),
    datasets: [{
      label: 'Expenses by Category',
      data: Object.values(expensesByCategory),
      backgroundColor: [
        '#F44336', '#C62828', '#E57373', '#EF9A9A', '#FFCDD2'
      ]
    }]
  };

  const monthlyTrends = {};
  transactions.forEach(t => {
    const month = t.date.substring(0, 7); // YYYY-MM
    if (!monthlyTrends[month]) {
      monthlyTrends[month] = { income: 0, expenses: 0 };
    }
    if (t.type === 'income') {
      monthlyTrends[month].income += t.amount;
    } else {
      monthlyTrends[month].expenses += t.amount;
    }
  });

  const months = Object.keys(monthlyTrends).sort();
  const trendData = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: months.map(m => monthlyTrends[m].income),
        backgroundColor: '#4CAF50'
      },
      {
        label: 'Expenses',
        data: months.map(m => monthlyTrends[m].expenses),
        backgroundColor: '#F44336'
      }
    ]
  };

  return (
    <div className="dashboard">
      <h2>Financial Overview</h2>
      
      <div className="summary-cards">
        <div className="card income">
          <h3>Total Income</h3>
          <p>ksh{totalIncome.toFixed(2)}</p>
        </div>
        <div className="card expenses">
          <h3>Total Expenses</h3>
          <p>ksh{totalExpenses.toFixed(2)}</p>
        </div>
        <div className={`card balance ${balance >= 0 ? 'positive' : 'negative'}`}>
          <h3>Balance</h3>
          <p>ksh{balance.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="chart-row">
        <div className="chart-container">
          <h3>Monthly Trends</h3>
          <Bar data={trendData} />
        </div>
      </div>
      
      <div className="chart-row">
        <div className="chart-container">
          <h3>Income Breakdown</h3>
          <Pie data={incomeData} />
        </div>
        <div className="chart-container">
          <h3>Expenses Breakdown</h3>
          <Pie data={expensesData} />
        </div>
      </div>
    </div>
  );
}

export default FinancialDashboard;