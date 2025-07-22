// src/pages/AllToolsPage.js
// This page displays all AI tools and includes filtering and search functionality.

import React, { useState, useEffect } from 'react';
import { ToolCard } from '../components/ToolCard';
import { aiTools, categories } from '../data';

export const AllToolsPage = ({ category, setPage }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(category || 'All');
    const pageTitle = category ? `${category}` : 'The Grid';

    useEffect(() => {
        setSelectedCategory(category || 'All');
    }, [category]);

    const filteredTools = aiTools.filter(tool => {
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white" style={{textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'}}>{pageTitle}</h1>
                <p className="mt-2 text-lg text-slate-300">Filter, search, and find the perfect tool for your needs.</p>
            </div>
            
            <div className="mb-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg border border-slate-700 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full md:w-auto">
                    <input
                        type="text" placeholder="Search by name or keyword..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-900 text-white"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                <select
                    value={selectedCategory}
                    onChange={e => {
                        const newCategory = e.target.value;
                        setPage(newCategory === 'All' ? 'all-tools' : { name: 'category', value: newCategory });
                    }}
                    className="w-full md:w-auto px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-900 text-white"
                >
                    <option value="All">All Categories</option>
                    {categories.map(cat => <option key={cat.name} value={cat.name}>{cat.name}</option>)}
                </select>
            </div>

            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-slate-300">No tools found</h3>
                    <p className="mt-2 text-slate-400">Try adjusting your search or filter.</p>
                </div>
            )}
        </div>
    );
};
