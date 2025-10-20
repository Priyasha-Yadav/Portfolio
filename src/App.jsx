import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const ProjectsDesc = lazy(() => import('./components/ProjectsDesc.jsx'));
const PortfolioDashboard = lazy(() => import('./components/PortfolioDashboard.jsx'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p>Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<PortfolioDashboard />} />
            <Route path="/projects" element={<ProjectsDesc />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
