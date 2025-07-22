// src/components/Chatbot.js
// The chatbot component, powered by the Groq API.

import React, { useState, useEffect, useRef } from 'react';
import { aiTools } from '../data';

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: "I am an AI assistant. Ask me about the AI tools on this site!" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        const groqApiKey = "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"; // <-- IMPORTANT: PASTE YOUR GROQ API KEY HERE
        if (!groqApiKey) {
            setMessages(prev => [...prev, { role: "assistant", content: "Please add your Groq API key to the code to enable the chatbot." }]);
            return;
        }

        if (inputValue.trim() && !isLoading) {
            const userMessage = { role: "user", content: inputValue };
            const newMessages = [...messages, userMessage];
            setMessages(newMessages);
            setInputValue('');
            setIsLoading(true);

            const toolInfo = aiTools.map(t => `${t.name} (${t.category}): ${t.longDescription}`).join('\n');
            const systemPrompt = {
                role: "system",
                content: `You are a helpful AI assistant for a website called 'AI Tools'. Your purpose is to help users find the right AI tool for their needs from the list provided. Be friendly and conversational. Here is the list of available tools:\n\n${toolInfo}\n\nBased on this information, please answer the user's question.`
            };
            
            const payload = {
                messages: [systemPrompt, ...newMessages.slice(1)], // Exclude initial bot message
                model: "llama3-8b-8192", // Or another model like "mixtral-8x7b-32768"
            };

            const apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${groqApiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                
                if (!response.ok) {
                    const errorBody = await response.json();
                    throw new Error(`API request failed with status ${response.status}: ${errorBody.error.message}`);
                }

                const result = await response.json();
                const botResponse = result.choices[0]?.message?.content || "Sorry, I couldn't process that. Please try again.";
                setMessages(prev => [...prev, { role: "assistant", content: botResponse }]);

            } catch (error) {
                console.error("Groq API error:", error);
                setMessages(prev => [...prev, { role: "assistant", content: `There was an error connecting to the AI: ${error.message}` }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="fixed bottom-5 right-5 md:right-10 z-50">
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'w-80 h-[28rem]' : 'w-16 h-16'}`}>
                {isOpen ? (
                    <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-fuchsia-500/20 flex flex-col h-full border border-slate-700">
                        <div className="p-3 bg-fuchsia-600/50 text-white rounded-t-xl flex justify-between items-center">
                            <h3 className="font-bold">Groq Assistant</h3>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`rounded-lg px-3 py-2 max-w-xs text-sm ${msg.role === 'user' ? 'bg-fuchsia-500 text-white' : 'bg-slate-700 text-slate-200'}`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-700 rounded-lg px-3 py-2 flex items-center space-x-1">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-75"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>
                        <div className="p-2 border-t border-slate-700 flex">
                            <input
                                type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about AI tools..."
                                disabled={isLoading}
                                className="flex-1 px-3 py-2 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 disabled:opacity-50"
                            />
                            <button onClick={handleSend} disabled={isLoading} className="ml-2 bg-fuchsia-600 text-white rounded-lg p-2 hover:bg-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </button>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => setIsOpen(true)} className="bg-fuchsia-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-fuchsia-500/40 hover:bg-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-300/50 transform hover:scale-110 transition-transform duration-200" aria-label="Open Chat">
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </button>
                )}
            </div>
        </div>
    );
};
