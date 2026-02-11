import React from 'react';
import { 
  Users, 
  Calendar, 
  FileSpreadsheet, 
  Music, 
  Gift, 
  CheckCircle,
  Megaphone,
  Palette
} from 'lucide-react';
import { TimelineItem, BudgetItem, Vendor, ChecklistCategory } from './types';

export const SHEET_LINK = "https://docs.google.com/spreadsheets/d/1TeSjEUw7x1rC4FU5HeFNo6Q5nPK5nOgKa46tpb1EwUk/edit?usp=sharing";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    period: "3월 ~ 6월",
    title: "사전 기획 및 예산 확보",
    icon: <Users className="w-6 h-6 text-white" />,
    tasks: [
      "강사님 통해 공연 감독(영상, 음향, 조명, 무대, 의상) 일정 및 견적 요청",
      "예산 확보 (2025년 기준 약 2,300만 원)",
      "공연 날짜 협의 및 확정"
    ],
    colorTheme: "blue"
  },
  {
    period: "7월",
    title: "일정 및 장소 확정",
    icon: <Calendar className="w-6 h-6 text-white" />,
    tasks: [
      "공연 스태프 일정 최종 확인",
      "공연장 예약 (공연 당일 + 사전 리허설 2~3일 포함)",
      "공연 시간 확정 및 예산 중간 점검"
    ],
    colorTheme: "green"
  },
  {
    period: "9월",
    title: "행정 처리 및 홍보 준비",
    icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
    tasks: [
      "공연장 예약 재확인",
      "학교 내부 기안 및 공문 발송",
      "팜플렛 디자인 및 제작 준비",
      "각 업체 견적서 수취 및 최종 계획서 기안"
    ],
    colorTheme: "yellow"
  },
  {
    period: "10월",
    title: "물품 구입 및 공연 실행",
    icon: <Music className="w-6 h-6 text-white" />,
    tasks: [
      "물품 구입: 현수막, 배너, 꽃다발, 풍선 장식, 안내 데스크 용품",
      "관내 학교 공문 발송 및 참가 학교 수합",
      "내빈 초청: 교육장, 시의회, 동창회, 교장 선생님 등",
      "홍보: 인근 유치원 방문 홍보 (간식 및 선물 준비)"
    ],
    colorTheme: "purple"
  }
];

export const BUDGET_DATA: BudgetItem[] = [
  { name: '조명/특수효과', value: 3500000, color: '#818cf8' }, // Indigo 400
  { name: '무대 설치', value: 6000000, color: '#34d399' }, // Emerald 400
  { name: '음향 시스템', value: 4500000, color: '#fbbf24' }, // Amber 400
  { name: '의상/분장', value: 4000000, color: '#fb7185' }, // Rose 400
  { name: '영상/중계', value: 3000000, color: '#60a5fa' }, // Blue 400
  { name: '운영비/기타', value: 2000000, color: '#a78bfa' }, // Violet 400
];

export const VENDORS: Vendor[] = [
  { type: "조명", name: "무브스테이지 라이트닝", item: "Move Stage Light, MA2 Light, Antari HZ-500 등", colorClass: "bg-indigo-500" },
  { type: "무대", name: "극단 안동", item: "무대 세트 및 설치", colorClass: "bg-emerald-500" },
  { type: "음향", name: "사운드 코리아 (예시)", item: "무선 마이크, 스피커 시스템", colorClass: "bg-amber-500" },
  { type: "영상", name: "미디어 팀 (예시)", item: "중계 및 기록 촬영", colorClass: "bg-blue-500" },
];

export const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    id: "admin",
    title: "행정 및 공문",
    icon: <FileSpreadsheet className="w-5 h-5" />,
    items: [
      "교내 기안 (예산 품의)",
      "관내 학교 공문 발송 (참가자 모집)",
      "교육장, 시의원, 동창회 초청장 발송",
      "인사말 섭외 (교장선생님, 학생 대표 등)"
    ],
    colorTheme: "blue"
  },
  {
    id: "promo",
    title: "홍보 및 의전",
    icon: <Gift className="w-5 h-5" />,
    items: [
      "팜플렛 디자인 선정 및 인쇄 의뢰",
      "현수막 및 배너 디자인/주문",
      "유치원 방문 홍보 (간식/선물 준비)",
      "내빈용 꽃다발 및 다과 준비"
    ],
    colorTheme: "pink"
  },
  {
    id: "field",
    title: "현장 준비",
    icon: <CheckCircle className="w-5 h-5" />,
    items: [
      "공연장 꾸미기 (풍선 장식 등)",
      "안내 데스크 설치 및 인원 배치",
      "참가 학교 기념품(간식) 포장",
      "리허설 일정 조율 및 안전 지도"
    ],
    colorTheme: "indigo"
  },
  {
    id: "creative",
    title: "공연/연출",
    icon: <Palette className="w-5 h-5" />,
    items: [
      "음원 파일 및 큐시트 최종 점검",
      "의상/소품 리스트 확인 및 수선",
      "분장팀 인원 및 동선 체크",
      "무대 동선 및 안전 테이핑 작업"
    ],
    colorTheme: "orange"
  }
];