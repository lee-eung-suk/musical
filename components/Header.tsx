import React from 'react';
import { ExternalLink, Music4 } from 'lucide-react';
import { SHEET_LINK } from '../constants';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-3 group cursor-default">
            <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
              <Music4 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                초등 뮤지컬 <span className="text-indigo-600">인수인계</span>
              </h1>
              <span className="text-xs text-slate-500 font-medium mt-1">
                업무 흐름도 & 예산 관리 시스템
              </span>
            </div>
          </div>

          <a
            href={SHEET_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full transition-all duration-200 font-bold text-sm shadow-sm hover:shadow-md border border-indigo-100"
          >
            <span>구글 시트 원본</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          {/* Mobile Icon Button */}
          <a
             href={SHEET_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="md:hidden p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;