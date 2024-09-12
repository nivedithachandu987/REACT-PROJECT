import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      .then(res => res.json())
      .then(json => {
        // Ensure that `json` is an array
        setData(Array.isArray(json) ? json : [json]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClick = () => {
    alert('Your tickets are booked successfully!');
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <input
              type="text"
              className='form-control'
              placeholder='Search'
              value={search}
              onChange={handler}
            />
          </div>
        </div>
        <div className='row'>
          {data
            .filter((x) => x.Title.toLowerCase().includes(search.toLowerCase())) // Changed `movie` to `Title`
            .map((item) => (
              <div key={item.Title} className='col-md-4'>
                <div className="card">
                  <img src={item.Poster} className="card-img-top" alt={item.Title} style={{ height: '800px', objectFit: 'cover' }} /> {/* Changed `image` to `Poster` */}
                  <div className="card-body">
                    <h4 className="card-title text-center">{item.Title}</h4> {/* Changed `movie` to `Title` */}
                    <h5 className='text-center'>
                      <button 
                        onClick={handleClick}
                        className='btn btn-outline-danger'
                      >
                        IMDb
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
