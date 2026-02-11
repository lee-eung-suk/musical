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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
                    : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content with Animation */}
        <div key={activeTab} className="animate-fade-in-up">
          {activeTab === 'timeline' && <Timeline />}
          {activeTab === 'budget' && <Budget />}
          {activeTab === 'checklists' && <Checklist />}
        </div>

      </main>

      <footer className="border-t border-slate-200 bg-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-medium">
            © 2024 초등 뮤지컬 업무 인수인계 가이드
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Designed for Teachers with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;