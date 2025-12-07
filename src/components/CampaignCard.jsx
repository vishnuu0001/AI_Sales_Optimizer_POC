import React from 'react';
import { MessageSquare, MessageCircle } from 'lucide-react';

export default function CampaignCard({ title, status, openRate, roi, type }) {
    // Styles based on status/type to match screenshot nuances
    const isGreenIcon = type === 'ev';
    const isOptimizing = status === 'Optimizing';

    return (
        <div className="bg-white rounded-xl p-6 mb-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
            <div className="flex items-center gap-5">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isGreenIcon ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-500'}`}>
                    {isGreenIcon ? <MessageSquare size={22} fill="currentColor" className="opacity-20" /> : <MessageCircle size={22} />}
                    {isGreenIcon && <div className="absolute"><MessageSquare size={22} /></div>}
                </div>

                {/* Text Content */}
                <div>
                    <h3 className="font-bold text-slate-900 text-[17px] mb-0.5">{title}</h3>
                    <p className={`text-sm font-medium ${isOptimizing ? 'text-slate-500' : 'text-slate-500'}`}>
                        {status}
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="flex items-center gap-16 text-right pr-4">
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Open Rate</div>
                    <div className="text-xl font-bold text-slate-900">{openRate}</div>
                </div>
                <div className="w-16"> {/* Fixed width for alignment */}
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">ROI</div>
                    <div className={`text-xl font-bold ${roi === 'Pending' ? 'text-green-600' : 'text-green-600'}`}>
                        {roi}
                    </div>
                </div>
            </div>
        </div>
    );
}