import React from 'react';
import { ExternalLink, Music4 } from 'lucide-react';
import { SHEET_LINK } from '../constants';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-200">
              <Music4 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                초등 뮤지컬 <span className="text-indigo-600">인수인계 가이드</span>
              </h1>
              <p className="text-xs md:text-sm text-slate-500 hidden md:block">
                선생님들을 위한 연간 계획 & 예산 관리 도우미
              </p>
            </div>
          </div>

          <a
            href={SHEET_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-all duration-200 font-medium text-sm"
          >
            <span>구글 시트 원본</span>
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;