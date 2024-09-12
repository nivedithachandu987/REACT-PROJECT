import React, { useState, useEffect, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsPage() {
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch news with search query and pagination
  const getNews = useCallback(() => {
    setLoading(true);
    setError(null);

    const url = `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json?page=${pageNumber}&q=${search}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let articles = json.articles;
        
        // Sort articles by relevance
        if (search) {
          articles = articles.sort((a, b) => {
            const aTitleIndex = a.title.toLowerCase().indexOf(search.toLowerCase());
            const bTitleIndex = b.title.toLowerCase().indexOf(search.toLowerCase());
            return aTitleIndex - bTitleIndex;
          });
        }

        setNews(articles);
        setTotalPages(Math.ceil(json.totalResults / 10)); // Assuming 10 articles per page
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      });
  }, [pageNumber, search]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  const handlePageChange = (pageNum) => {
    setPageNumber(pageNum);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPageNumber(1); // Reset to first page on search
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-12">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search" 
            value={search} 
            onChange={handleSearchChange} 
          />
          <h2>Health News</h2>
        </div>
      </div>
      {loading && <div className="text-center"><p>Loading...</p></div>}
      {error && <div className="text-center text-danger"><p>{error}</p></div>}
      <div className="row">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h4 className="card-title text-center">{article.title}</h4>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>No news available</p>
        )}
      </div>
      {totalPages > 1 && (
        <div className="row">
          <div className="col-md-12">
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${i + 1 === pageNumber ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
