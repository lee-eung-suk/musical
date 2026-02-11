import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const themeStyles = {
  blue: { border: 'border-blue-500', bg: 'bg-blue-500', lightBg: 'bg-blue-50', text: 'text-blue-700', iconBg: 'bg-blue-100', shadow: 'shadow-blue-100' },
  green: { border: 'border-emerald-500', bg: 'bg-emerald-500', lightBg: 'bg-emerald-50', text: 'text-emerald-700', iconBg: 'bg-emerald-100', shadow: 'shadow-emerald-100' },
  yellow: { border: 'border-amber-500', bg: 'bg-amber-500', lightBg: 'bg-amber-50', text: 'text-amber-700', iconBg: 'bg-amber-100', shadow: 'shadow-amber-100' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-500', lightBg: 'bg-purple-50', text: 'text-purple-700', iconBg: 'bg-purple-100', shadow: 'shadow-purple-100' },
};

const Timeline = () => {
  return (
    <div className="py-4 max-w-4xl mx-auto">
      <div className="mb-12 text-center space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">연간 업무 흐름도</h2>
        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
          3월 기획부터 10월 공연까지, 시기별 놓치지 말아야 할<br className="md:hidden"/> 핵심 업무를 정리했습니다.
        </p>
      </div>
      
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 transform -translate-x-1/2 rounded-full"></div>

        <div className="space-y-16">
          {TIMELINE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            const theme = themeStyles[item.colorTheme];

            return (
              <div 
                key={index} 
                className={`
                  relative flex items-center 
                  md:justify-between 
                  ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
              >
                
                {/* Content Card Side */}
                <div className={`ml-20 md:ml-0 w-full md:w-[45%]`}>
                  <div className={`
                    p-6 bg-white rounded-2xl shadow-sm border border-slate-100
                    border-l-4 ${theme.border} 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group
                  `}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white ${theme.bg} shadow-sm`}>
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-4 ${theme.text}`}>
                      {item.title}
                    </h3>

                    <ul className="space-y-3">
                      {item.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${theme.text} opacity-60 group-hover:opacity-100 transition-opacity`} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon Marker */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-50 border-4 border-white z-10 shadow-lg">
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${theme.bg} text-white shadow-inner transform transition-transform group-hover:scale-110 duration-300`}>
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