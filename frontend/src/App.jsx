import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import CompanyDetail from "./components/CompanyDetail";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
