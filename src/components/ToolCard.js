// src/components/ToolCard.js
// This component displays a single AI tool in a card format.

import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { categoryMap } from '../data';

export const ToolCard = ({ tool }) => {
    const categoryStyle = categoryMap[tool.category] || { color: 'gray' };
    const ref = useAnimateOnScroll({ threshold: 0.1 });
    
    return (
        <div 
            ref={ref}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 transition-all duration-500 ease-out opacity-0 translate-y-10"
        >
            <div className={`p-6 group relative overflow-hidden rounded-2xl`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-${categoryStyle.color}-500 transition-all duration-500 group-hover:h-full opacity-20 group-hover:opacity-30`}></div>
                <div className="relative z-10">
                    <div className="flex items-center space-x-4">
                        <img src={tool.logo} alt={`${tool.name} Logo`} className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-slate-600" />
                        <div>
                            <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                            <span className={`inline-block bg-${categoryStyle.color}-500/10 text-${categoryStyle.color}-400 text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1`}>
                                {tool.category}
                            </span>
                        </div>
                    </div>
                    <p className="mt-4 text-slate-300 h-24 text-sm">{tool.description}</p>
                    <a href="#" className={`mt-4 inline-block text-white bg-${categoryStyle.color}-600 hover:bg-${categoryStyle.color}-500 focus:ring-4 focus:ring-${categoryStyle.color}-300/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 w-full transform group-hover:scale-105 shadow-lg shadow-${categoryStyle.color}-900/50`}>
                        Visit Tool
                    </a>
                </div>
            </div>
        </div>
    );
};
