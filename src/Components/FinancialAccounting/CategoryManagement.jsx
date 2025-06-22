
import React, { useState } from 'react';

function CategoryManagement({ categories, onAddCategory }) {
  const [newCategory, setNewCategory] = useState({
    name: '',
    type: 'expense'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCategory.name.trim()) return;
    
    onAddCategory(newCategory);
    setNewCategory({
      name: '',
      type: 'expense'
    });
  };

  return (
    <div className="category-management">
      <h2>Manage Categories</h2>
      
      <div className="existing-categories">
        <h3>Existing Categories</h3>
        <div className="category-list">
          {categories.map(category => (
            <div key={category.id} className={`category ${category.type}`}>
              <span>{category.name}</span>
              <span className="type-badge">{category.type}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="add-category">
        <h3>Add New Category</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category Name:</label>
            <input 
              type="text" 
              name="name" 
              value={newCategory.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Type:</label>
            <select 
              name="type" 
              value={newCategory.type} 
              onChange={handleChange} 
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          
          <button type="submit">Add Category</button>
        </form>
      </div>
    </div>
  );
}

export default CategoryManagement;