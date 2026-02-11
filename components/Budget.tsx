import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend, Sector } from 'recharts';
import { BUDGET_DATA, VENDORS } from '../constants';
import { DollarSign, TrendingUp, Users } from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(value);
};

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#334155" className="text-lg font-bold">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 16}
        outerRadius={outerRadius + 20}
        fill={fill}
      />
      <path d={`M${cx},${cy}L${cx},${cy}`} stroke="none" fill="none" />
      <text x={cx} y={cy + 30} dy={18} textAnchor="middle" fill="#999" className="text-sm">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const Budget = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const totalBudget = BUDGET_DATA.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="py-8 px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">예산 및 업체 관리</h2>
        <p className="text-slate-500">총 예산 {formatCurrency(totalBudget)}의 효율적인 배분과 협력 업체를 관리합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              예산 분포
            </h3>
            <span className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-medium">
              총액: {formatCurrency(totalBudget)}
            </span>
          </div>

          <div className="h-[400px] w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={BUDGET_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={4}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {BUDGET_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <RechartsTooltip 
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{paddingTop: '20px'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vendors List */}
        <div className="space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              주요 협력 업체
            </h3>
            
            <div className="space-y-4">
              {VENDORS.map((vendor, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-md hover:border-transparent"
                >
                  <div className={`absolute left-0 top-0 h-full w-1 ${vendor.colorClass} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0 ${vendor.colorClass}`}>
                      {vendor.type}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg leading-tight mb-1">{vendor.name}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{vendor.item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="flex gap-3">
                <div className="mt-1">
                  <DollarSign className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h5 className="font-bold text-amber-800 text-sm mb-1">예산 관리 Tip</h5>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    강사 선생님을 통해 각 공연 감독님 일정과 견적을 3월부터 미리 요청해야 예산 확보와 일정 조율이 수월합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;