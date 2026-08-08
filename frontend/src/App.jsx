import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GraphProvider } from './context/GraphContext';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { InterviewPage } from './pages/InterviewPage';
import { SystemDesignPage } from './pages/SystemDesignPage';
import { LearningPage } from './pages/LearningPage';
import { ArraySearchPage } from './pages/ArraySearchPage';

export default function App() {
  return (
    <GraphProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/array-search" element={<ArraySearchPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </GraphProvider>
  );
}
