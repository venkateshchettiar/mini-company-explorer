import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const searchCompanies = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/companies?q=${encodeURIComponent(
          searchTerm
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      const data = await response.json();
      setCompanies(data);
    } catch (err) {
      setError("Error searching companies. Please try again.");
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCompanies();
  };

  const handleCompanyClick = (companyId) => {
    navigate(`/company/${companyId}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchCompanies();
    }
  };

  return (
    <div className="search-page">
      {/* Background gradient */}
      <div className="background-gradient"></div>
      <div className="background-texture"></div>

      {/* Top left decorative element - pencils */}
      <div className="pencils-container">
        <div className="pencil pencil-1"></div>
        <div className="pencil pencil-2"></div>
      </div>

      <div className="main-content">
        {/* Header/Branding Section */}
        <section className="header-section">
          <div className="header-container">
            <h1 className="main-title">COMPANY EXPLORER</h1>
            <p className="tagline">
              The search engine where you discover companies, not just data
            </p>
          </div>
        </section>

        {/* Search Interface - OMNIBLE Style */}
        <section className="search-section">
          <div className="search-container">
            <div className="search-form">
              <form onSubmit={handleSearch}>
                {/* Search Bar and Button - Inline like OMNIBLE */}
                <div className="search-input-container">
                  <div className="search-input-wrapper">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Search Companies"
                      className="search-input"
                    />
                    <button
                      type="submit"
                      className="search-button"
                      disabled={loading || !searchTerm.trim()}
                    >
                      {loading ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <div className="loading-spinner"></div>
                          <span>Searching...</span>
                        </div>
                      ) : (
                        "GO"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Error Message */}
        {error && (
          <section className="error-section">
            <div className="error-container">
              <div className="error-message">
                <div className="error-header">
                  <div className="error-icon">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="error-title">Search Error</span>
                </div>
                <p className="error-text">{error}</p>
              </div>
            </div>
          </section>
        )}

        {/* Results Section */}
        {hasSearched && companies.length > 0 && (
          <section className="results-section">
            <div className="results-container">
              <div className="results-card">
                <div className="results-header">
                  <h3 className="results-title">🎯 Search Results</h3>
                  <p className="results-subtitle">
                    Found {companies.length} matching companies
                  </p>
                  <div className="results-count">
                    {companies.length}{" "}
                    {companies.length === 1 ? "Company" : "Companies"}
                  </div>
                </div>

                <div className="company-grid">
                  {companies.map((company) => (
                    <div
                      key={company.id}
                      className="company-card"
                      onClick={() => handleCompanyClick(company.id)}
                    >
                      {/* Company info */}
                      <div>
                        <h4 className="company-name">{company.name}</h4>
                        <div className="company-industry">
                          🏢 {company.industry}
                        </div>

                        {/* Arrow indicator */}
                        <div className="arrow-indicator">→</div>

                        {/* Hover effect line */}
                        <div className="hover-line"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {hasSearched &&
          !loading &&
          !error &&
          companies.length === 0 &&
          searchTerm && (
            <section className="no-results-section">
              <div className="no-results-container">
                <div className="no-results-card">
                  <div className="emoji-icon">🔍</div>
                  <h3 className="no-results-title">No Companies Found</h3>
                  <p className="no-results-subtitle">
                    No companies found matching "
                    <span className="search-term-highlight">{searchTerm}</span>"
                  </p>
                  <p className="no-results-text">
                    Try a different search term or check your spelling.
                  </p>
                </div>
              </div>
            </section>
          )}

        {/* Empty State */}
        {!hasSearched &&
          !loading &&
          !error &&
          companies.length === 0 &&
          !searchTerm && (
            <section className="empty-state-section">
              <div className="empty-state-container">
                <div className="empty-state-card">
                  <div className="emoji-icon">🚀</div>
                  <h3 className="empty-state-title">Ready to Explore?</h3>
                  <p className="empty-state-text">
                    Start searching for companies above to discover amazing
                    organizations across various industries.
                  </p>
                </div>
              </div>
            </section>
          )}

        {/* Footer/Location Section - Like OMNIBLE */}
        <section className="footer-section">
          <div className="footer-container">
            <div className="footer-divider">
              <div className="footer-content">
                <div className="footer-info">
                  <div className="compass-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <span className="footer-text">
                    Search powered by Company Explorer
                  </span>
                </div>
                <button className="about-button">ABOUT US</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPage;
