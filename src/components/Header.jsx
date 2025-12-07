import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Campaign Manager</h2>
                <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
                    <span className="text-sm text-slate-500 font-medium">AI Engine Live • Refreshing in 21s</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-colors shadow-sm">
                    <RefreshCw size={18} />
                </button>
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm shadow-md shadow-brand-primary/20">
                    VA
                </div>
            </div>
        </header>
    );
}