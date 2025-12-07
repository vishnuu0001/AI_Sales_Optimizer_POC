import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CampaignCard from './components/CampaignCard';

// Mock Data to match screenshot
const campaigns = [
    {
        id: 1,
        title: "End of Month EV Push",
        status: "Active",
        openRate: "68%",
        roi: "12x",
        type: "ev"
    },
    {
        id: 2,
        title: "SUV Loyalty Upgrade",
        status: "Optimizing",
        openRate: "42%",
        roi: "Pending",
        type: "suv"
    },
    {
        id: 3,
        title: "Service Reminder Q4",
        status: "Completed",
        openRate: "89%",
        roi: "5x",
        type: "service"
    }
];

function App() {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <Sidebar />
            <main className="ml-[280px] flex-1 p-10 max-w-6xl">
                <Header />

                <div className="space-y-4">
                    {campaigns.map((campaign) => (
                        <CampaignCard
                            key={campaign.id}
                            {...campaign}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;