// src/App.js
// This is the main application file that brings all the components together.

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActionButton } from './components/FloatingActionButton';
import { Chatbot } from './components/Chatbot';
import { HomePage } from './pages/HomePage';
import { AllToolsPage } from './pages/AllToolsPage';

export default function App() {
  const [page, setPage] = useState('home'); // 'home', 'all-tools', { name: 'category', value: '...' }

  // This function determines which page component to render based on the current state.
  const renderPage = () => {
    if (typeof page === 'object' && page.name === 'category') {
      return <AllToolsPage category={page.value} setPage={setPage} />;
    }
    switch (page) {
      case 'all-tools':
        return <AllToolsPage setPage={setPage} />;
      case 'home':
      default:
        return <HomePage setPage={setPage} />;
    }
  };
  
  const currentPageKey = typeof page === 'object' ? page.name : page;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* This is a hack to make sure Tailwind's Just-In-Time compiler 
        includes the dynamic color classes used in the components. 
        These classes are constructed from data, so Tailwind can't see them at build time.
      */}
      <div className="hidden bg-pink-500 bg-green-500 bg-cyan-500 bg-amber-500 bg-violet-500 text-pink-400 text-green-400 text-cyan-400 text-amber-400 text-violet-400 border-pink-500 border-green-500 border-cyan-500 border-amber-500 border-violet-500 group-hover:border-pink-500 group-hover:border-green-500 group-hover:border-cyan-500 group-hover:border-amber-500 group-hover:border-violet-500 bg-pink-600 hover:bg-pink-500 bg-green-600 hover:bg-green-500 bg-cyan-600 hover:bg-cyan-500 bg-amber-600 hover:bg-amber-500 bg-violet-600 hover:bg-violet-500 bg-pink-500/10 bg-green-500/10 bg-cyan-500/10 bg-amber-500/10 bg-violet-500/10 ring-pink-300/50 ring-green-300/50 ring-cyan-300/50 ring-amber-300/50 ring-violet-300/50 shadow-pink-900/50 shadow-green-900/50 shadow-cyan-900/50 shadow-amber-900/50 shadow-violet-900/50 from-pink-600 from-green-600 from-cyan-600 from-amber-600 from-violet-600"></div>
      
      <Header setPage={setPage} page={currentPageKey} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <FloatingActionButton setPage={setPage} />
      <Chatbot />
    </div>
  );
}
