import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import './App.css';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 100, description: 'Salary', category: 'Income',date: '2021-10-01' },
    { id: 2, amount: 50, description: 'Grocery', category: 'Expense',date: '2021-10-05' },
    { id: 3, amount: 20, description: 'Rent',category: 'Expense', date: '2021-10-10' },
    { id: 4, amount: 200, description: 'Mortgage', category: 'Income',date: '2021-10-01' },
    { id: 5, amount: 250, description: 'Movie', category: 'Expense',date: '2021-10-05' },
    { id: 6, amount: 240, description: 'Tuition',category: 'Expense', date: '2021-10-10' },
    { id: 7, amount: 300, description: 'Dinner', category: 'Income',date: '2021-10-01' },
    { id: 8, amount: 50, description: 'Kitchen', category: 'Expense',date: '2021-10-05' },
    { id: 9, amount: 20, description: 'Rails',category: 'Expense', date: '2021-10-10' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = newTransaction => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = inputValue => {
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchTerm(filteredTransactions);
  };

  return (
    <div className="app-container">
      <h1 className="App-header">The Royal Bank of Flatiron</h1>
      <SearchBar transactions={transactions} handleSearch={handleSearch} className="search-bar" />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable transactions={searchTerm.length > 0 ? searchTerm : transactions} className="transaction-table" />
      <p className="footer-text">© 2022 Flatiron Bank. All rights reserved.</p>
    </div>
  );
};

export default App;