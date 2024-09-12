import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ProductsPage.css'; // Import the custom CSS

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then(json => setData(json.carts))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const handleAddToCart = () => {
    alert('Add to cart');
  };

  const filteredData = data.filter(cart =>
    cart.products.some(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-md-12'>
          <input
            type="text"
            className='form-control'
            placeholder='Search Products in Carts'
            value={search}
            onChange={handler}
          />
        </div>
      </div>
      <div className='row'>
        {filteredData.length > 0 ? (
          filteredData.map(cart => (
            <div className='col-md-12 mb-3' key={cart.id}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Cart ID: {cart.id}</h4>
                  <h5>Total Products: {cart.totalProducts}</h5>
                  <h5>Total Quantity: {cart.totalQuantity}</h5>
                  <h5>Total Price: ${cart.total.toFixed(2)}</h5>
                  <h5>Discounted Total: ${cart.discountedTotal.toFixed(2)}</h5>
                  <div className='row'>
                    {cart.products.map(product => (
                      <div className='col-md-4 mb-3' key={product.id}>
                        <div className="card">
                          <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                          <div className="card-body">
                            <h5 className="card-title text-center">{product.title}</h5>
                            <p className="text-center">Quantity: {product.quantity}</p>
                            <p className="text-center">Total: ${product.total.toFixed(2)}</p>
                            <p className="text-center">Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
                            <button 
                              className="redbutton"
                              onClick={handleAddToCart}
                            >
                              Price: ${product.price}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-12 text-center">
            <p>No carts found containing the searched product.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
