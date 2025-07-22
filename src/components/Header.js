// src/components/Header.js
// The main navigation header for the website.

import React from 'react';

export const Header = ({ setPage, page }) => (
    <header className="bg-black/30 backdrop-blur-lg shadow-cyan-500/10 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPage('home')}>
                    <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-3xl font-bold text-white tracking-wider" style={{textShadow: '0 0 8px rgba(0, 255, 255, 0.5)'}}>AI Tools</span>
                </div>
                <nav className="hidden md:flex items-center space-x-2">
                    <a href="#" onClick={() => setPage('home')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${page === 'home' ? 'text-white bg-cyan-500/20' : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}`}>Home</a>
                    <a href="#" onClick={() => setPage('all-tools')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${page === 'all-tools' ? 'text-white bg-cyan-500/20' : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'}`}>All Tools</a>
                </nav>
            </div>
        </div>
    </header>
);
