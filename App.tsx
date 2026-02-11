import React, { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Budget from './components/Budget';
import Checklist from './components/Checklist';
import { TabType } from './types';
import { CalendarRange, Coins, ListChecks } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>('timeline');

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'timeline', label: '타임라인', icon: <CalendarRange className="w-4 h-4" /> },
    { id: 'budget', label: '예산 관리', icon: <Coins className="w-4 h-4" /> },
    { id: 'checklists', label: '체크리스트', icon: <ListChecks className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 bg-slate-200/60 rounded-full backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="animate-fade-in-up">
          {activeTab === 'timeline' && <Timeline />}
          {activeTab === 'budget' && <Budget />}
          {activeTab === 'checklists' && <Checklist />}
        </div>

      </main>

      <footer className="border-t border-slate-200 bg-white mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 초등 뮤지컬 업무 인수인계 가이드 | Designed for Teachers
          </p>
        </div>
      </footer>
      
      {/* Global simple animation styles for transitions */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;