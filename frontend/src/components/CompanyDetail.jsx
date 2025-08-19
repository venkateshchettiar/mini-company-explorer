import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CompanyDetail.css";

function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompany = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:5000/api/companies/${id}`
        );
        if (response.status === 404) {
          setCompany(null);
          setError("");
          return;
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCompany(data);
      } catch {
        setError("Failed to fetch company details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="company-detail-page">
        <section className="loading-section">
          <div className="loading-container">
            <div className="loading-spinner-large">
              <div className="loading-spinner-inner"></div>
            </div>
            <h3 className="loading-title">Loading Company Details</h3>
            <p className="loading-text">
              Please wait while we fetch the information...
            </p>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="company-detail-page">
        <section className="error-section">
          <div className="error-container">
            <div className="error-card">
              <div className="error-emoji">⚠️</div>
              <h3 className="error-title">Oops! Something went wrong</h3>
              <p className="error-text">{error}</p>
              <button onClick={handleBack} className="error-button">
                ← Back to Search
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="company-detail-page">
        <section className="not-found-section">
          <div className="not-found-container">
            <div className="not-found-card">
              <div className="not-found-emoji">🔍</div>
              <h3 className="not-found-title">Company Not Found</h3>
              <p className="not-found-text">
                The company you're looking for doesn't exist in our database.
              </p>
              <button onClick={handleBack} className="error-button">
                ← Back to Search
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="company-detail-page">
      {/* Header Section - Company Overview */}
      <section className="company-header-section">
        <div className="company-header-container">
          <div className="company-header-card">
            {/* Background decorations */}
            <div className="company-header-bg"></div>
            <div className="company-header-bg-2"></div>

            {/* Back Button */}
            <button onClick={handleBack} className="back-button">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Search
            </button>

            {/* Company Header */}
            <div className="company-header-content">
              <div className="company-avatar">{company.name.charAt(0)}</div>
              <div className="company-info">
                <h2 className="company-name-large">{company.name}</h2>
                <div className="company-tags">
                  <span className="company-tag company-tag-industry">
                    🏢 {company.industry}
                  </span>
                  {company.location && (
                    <span className="company-tag company-tag-location">
                      📍 {company.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information - Data Sources */}
      <section className="company-info-section">
        <div className="company-info-container">
          <div className="company-info-card">
            {/* Background decorations */}
            <div className="company-info-bg"></div>
            <div className="company-info-bg-2"></div>

            {/* Company Stats - Like OMNIBLE infographic data sources */}
            <div className="company-stats">
              <h3 className="company-stats-title">
                <span style={{ fontSize: "3.75rem" }}>📊</span>
                Company Data Sources
              </h3>

              <div className="company-stats-grid">
                {company.employees && (
                  <div className="stat-card">
                    <div className="stat-emoji">👥</div>
                    <div className="stat-value stat-value-employees">
                      {company.employees.toLocaleString()}
                    </div>
                    <div className="stat-label">Employees</div>
                    <div className="stat-source">From HR Database</div>
                  </div>
                )}

                {company.founded_year && (
                  <div className="stat-card">
                    <div className="stat-emoji">🎂</div>
                    <div className="stat-value stat-value-founded">
                      {company.founded_year}
                    </div>
                    <div className="stat-label">Founded</div>
                    <div className="stat-source">From Registry Data</div>
                  </div>
                )}

                <div className="stat-card">
                  <div className="stat-emoji">🏢</div>
                  <div className="stat-value stat-value-industry">
                    {company.industry}
                  </div>
                  <div className="stat-label">Industry</div>
                  <div className="stat-source">From Industry DB</div>
                </div>

                {company.location && (
                  <div className="stat-card">
                    <div className="stat-emoji">📍</div>
                    <div className="stat-value stat-value-location">
                      {company.location}
                    </div>
                    <div className="stat-label">Location</div>
                    <div className="stat-source">From Geo Data</div>
                  </div>
                )}
              </div>
            </div>

            {/* Company Description */}
            {company.description && (
              <div className="company-description">
                <h3 className="company-description-title">
                  <span style={{ fontSize: "3.75rem" }}>📝</span>
                  About {company.name}
                </h3>
                <div className="company-description-content">
                  <p className="company-description-text">
                    {company.description}
                  </p>
                  <div className="company-description-source">
                    <div className="company-description-source-dot"></div>
                    <span>
                      Data sourced from company profiles and industry databases
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="action-buttons-section">
        <div className="action-buttons-container">
          <div className="action-buttons-row">
            <button onClick={handleBack} className="action-button-secondary">
              ← Back to Search
            </button>
            <button
              onClick={() => window.location.reload()}
              className="action-button-primary"
            >
              🔄 Refresh Data
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyDetail;
