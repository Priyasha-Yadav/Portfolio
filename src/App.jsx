import './App.css';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import DelayedSuspense from "./components/DelayedSuspense";
import { Analytics } from '@vercel/analytics/react';
const PortfolioDashboard = lazy(() =>
  import('./components/PortfolioDashboard.jsx')
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <DelayedSuspense
          minDuration={1000}
          fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="font-mono text-sm text-gray-400 space-y-4">
                <p>Building full-stack experiences</p>
                <div className="h-[2px] w-56 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-indeterminate" />
                </div>
              </div>
            </div>
          }
        >
          <PortfolioDashboard />
        </DelayedSuspense>

      </Suspense>

      <Analytics />
    </ErrorBoundary>
  );
}

export default App;
