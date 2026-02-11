import React, { useState } from 'react';
import { CHECKLIST_DATA } from '../constants';
import { Check, CheckCircle2, Circle } from 'lucide-react';

const Checklist = () => {
  // Local state to track checked items (for demo purposes)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const themeStyles = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', icon: 'text-blue-500' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', icon: 'text-pink-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', icon: 'text-indigo-500' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', icon: 'text-orange-500' },
  };

  return (
    <div className="py-8 px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">상세 체크리스트</h2>
        <p className="text-slate-500">빠진 것은 없는지 꼼꼼하게 확인해보세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {CHECKLIST_DATA.map((category, catIdx) => {
          const theme = themeStyles[category.colorTheme];
          const completedCount = category.items.filter((_, itemIdx) => checkedItems[`${catIdx}-${itemIdx}`]).length;
          const totalCount = category.items.length;
          const progress = Math.round((completedCount / totalCount) * 100);

          return (
            <div 
              key={category.id} 
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.icon}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{completedCount} / {totalCount} 완료</p>
                  </div>
                </div>
                {/* Progress Circle */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className={`${theme.text} transition-all duration-500 ease-out`}
                      strokeDasharray={`${progress}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                  <span className={`absolute text-[10px] font-bold ${theme.text}`}>{progress}%</span>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const isChecked = checkedItems[`${catIdx}-${itemIdx}`] || false;
                  return (
                    <div 
                      key={itemIdx}
                      onClick={() => toggleItem(catIdx, itemIdx)}
                      className={`
                        group flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border
                        ${isChecked 
                          ? `${theme.bg} ${theme.border}` 
                          : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'}
                      `}
                    >
                      <div className={`mt-0.5 transition-colors ${isChecked ? theme.text : 'text-slate-300 group-hover:text-slate-400'}`}>
                        {isChecked ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </div>
                      <span className={`text-sm transition-all ${isChecked ? 'text-slate-500 line-through decoration-slate-400/50' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checklist;