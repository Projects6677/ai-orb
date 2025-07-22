// src/pages/HomePage.js
// The main landing page of the website.

import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { categories } from '../data';

export const HomePage = ({ setPage }) => {
    const titleRef = useAnimateOnScroll({ threshold: 0.5 });
    const buttonRef = useAnimateOnScroll({ threshold: 0.5 });

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 sm:py-48 min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(22,78,99,0.3)_0,_rgba(8,145,178,0)_60%)]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-tighter transition-all duration-1000 opacity-0 translate-y-10" style={{textShadow: '0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)'}}>
                        AI Tools
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
                        Your gateway to the future of creation.
                    </p>
                    <div ref={buttonRef} className="mt-10 transition-all duration-1000 delay-300 opacity-0 translate-y-10">
                        <button onClick={() => setPage('all-tools')} className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
                            Explore The Grid
                        </button>
                    </div>
                </div>
            </section>

            {/* Interactive Category Buttons Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-16" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.3)'}}>
                        Engage by Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {categories.map((category, index) => {
                             const ref = useAnimateOnScroll({ threshold: 0.2 });
                             const gridSpan = categories.length === 5 && index >= 3 ? `lg:col-start-${index-1}` : '';
                            return (
                                <div
                                    key={category.name}
                                    ref={ref}
                                    onClick={() => setPage({ name: 'category', value: category.name })}
                                    className={`group relative p-8 rounded-2xl shadow-2xl cursor-pointer transition-all duration-500 ease-out opacity-0 translate-y-10 ${gridSpan}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 group-hover:border-${category.color}-500 transition-colors duration-300`}></div>
                                    <div className={`absolute -inset-1 bg-gradient-to-r from-${category.color}-600 to-fuchsia-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                                    <div className="relative z-10 text-center">
                                        <div className={`inline-block p-4 bg-slate-900 rounded-full mb-4 border border-slate-700 text-${category.color}-400 group-hover:text-${category.color}-300 transition-colors`}>
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={category.icon}></path></svg>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
