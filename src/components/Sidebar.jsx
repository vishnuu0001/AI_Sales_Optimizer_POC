import React from 'react';
import { BrainCircuit, Database, Users, Car, MessageSquare, ChevronRight } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-[280px] bg-dealer-dark h-screen flex flex-col p-5 text-white fixed left-0 top-0 border-r border-slate-800">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center text-brand-primary">
                    <BrainCircuit size={24} />
                </div>
                <div>
                    <h1 className="font-bold text-lg leading-none">DealerAI</h1>
                    <span className="text-xs text-slate-500 font-medium">Sales Optimizer</span>
                </div>
            </div>

            {/* Vector DB Status Card */}
            <div className="bg-dealer-card rounded-xl p-5 mb-10 border border-slate-800">
                <div className="flex items-center gap-2 text-green-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Database size={12} />
                    Vector DB Status
                </div>
                <div className="text-3xl font-bold text-white mb-1">569</div>
                <div className="text-xs text-slate-400">Profiles Analyzed</div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
                <NavItem icon={<Users size={20} />} label="Sales Predictions" />
                <NavItem icon={<Car size={20} />} label="Inventory Match" />
                <NavItem
                    icon={<MessageSquare size={20} />}
                    label="Campaigns"
                    active={true}
                />
            </nav>
        </aside>
    );
}

function NavItem({ icon, label, active = false }) {
    return (
        <div
            className={`
        flex items-center gap-3 px-4 py-3.5 rounded-lg cursor-pointer transition-all group
        ${active
                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }
      `}
        >
      <span className={active ? 'text-white' : 'text-slate-500 group-hover:text-white'}>
        {icon}
      </span>
            <span className="text-sm font-medium flex-1">{label}</span>
            {active && <ChevronRight size={16} className="text-white/50" />}
        </div>
    );
}