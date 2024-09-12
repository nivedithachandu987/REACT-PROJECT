// src/pages/Recipes.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recipes() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(json => setData(json.recipes));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleViewRecipe = () => {
    alert('Our order is successful!');
  };

  const filteredRecipes = data.filter(recipe =>
    recipe.name.toLowerCase().includes(search)
  );

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">
                  <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
                </p>
                <p className="card-text">
                  <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
                </p>
                <p className="card-text">
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
                <button 
                  onClick={handleViewRecipe}
                  className="btn btn-primary"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
