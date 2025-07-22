// src/components/FloatingActionButton.js
// A floating button that appears on scroll to provide a quick navigation link.

import React, { useState, useEffect } from 'react';

export const FloatingActionButton = ({ setPage }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => setPage('all-tools')}
            className={`fixed bottom-24 right-5 md:right-10 bg-cyan-500 text-white rounded-full p-4 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300/50 transition-all duration-300 ease-in-out z-50 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            aria-label="See All Tools"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
    );
};
