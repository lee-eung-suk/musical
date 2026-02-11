import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const themeStyles = {
  blue: { border: 'border-blue-500', bg: 'bg-blue-500', lightBg: 'bg-blue-50', text: 'text-blue-700', iconBg: 'bg-blue-100' },
  green: { border: 'border-emerald-500', bg: 'bg-emerald-500', lightBg: 'bg-emerald-50', text: 'text-emerald-700', iconBg: 'bg-emerald-100' },
  yellow: { border: 'border-amber-500', bg: 'bg-amber-500', lightBg: 'bg-amber-50', text: 'text-amber-700', iconBg: 'bg-amber-100' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-500', lightBg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100' },
};

const Timeline = () => {
  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">연간 업무 흐름도</h2>
        <p className="text-slate-500">3월 기획부터 10월 공연까지, 시기별 핵심 업무를 확인하세요.</p>
      </div>
      
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {TIMELINE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            const theme = themeStyles[item.colorTheme];

            return (
              <div key={index} className={`relative flex items-center md:justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}>
                
                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-[45%] mb-4 md:mb-0 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className={`p-6 bg-white rounded-2xl shadow-sm border-l-4 ${theme.border} hover:shadow-lg transition-all duration-300 group`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white ${theme.bg}`}>
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${theme.text}`}>
                      {item.title}
                    </h3>

                    <ul className="space-y-3">
                      {item.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 group-hover:text-slate-800 transition-colors text-sm md:text-base">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 opacity-50 ${theme.text}`} />
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon Marker */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-slate-50 z-10 shadow-sm">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme.bg} shadow-inner`}>
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for the other side (desktop only) */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;