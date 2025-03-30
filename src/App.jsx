import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsDesc from './components/ProjectsDesc.jsx'; // Ensure this file exists
import PortfolioDashboard from './components/PortfolioDashboard.jsx'; // Ensure this file exists

function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioDashboard />} />
          <Route path="/projects" element={<ProjectsDesc />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
