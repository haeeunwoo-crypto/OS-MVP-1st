import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Briefcase, 
  Settings, 
  Bell, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  ChevronLeft, 
  Flame, 
  Target, 
  Award, 
  LogOut, 
  Zap, 
  MessageCircle, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  MoreHorizontal, 
  FileText, 
  Calendar, 
  Layers, 
  Video, 
  MapPin, 
  Clock, 
  PieChart, 
  BarChart2, 
  Database, 
  UserPlus, 
  Filter, 
  Download, 
  Upload, 
  Plus, 
  Trash2, 
  GripVertical, 
  PlayCircle, 
  Folder, 
  File, 
  RefreshCw, 
  Save, 
  Shield, 
  Menu, 
  Bot, 
  Activity, 
  Link, 
  Smartphone, 
  CheckSquare, 
  ArrowRight, 
  Server, 
  ToggleLeft, 
  ToggleRight, 
  Globe, 
  Cpu, 
  Wifi, 
  CalendarDays, 
  ListChecks, 
  GraduationCap, 
  FileSpreadsheet, 
  UploadCloud, 
  Megaphone, 
  UserMinus, 
  ClipboardList, 
  Laptop, 
  CreditCard, 
  Send, 
  MessageSquare, 
  UserCheck, 
  Star, 
  ThumbsUp, 
  History, 
  FileSignature, 
  Gift, 
  HelpCircle, 
  Mail, 
  Edit3, 
  X, 
  User 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  BarChart, 
  Bar, 
  AreaChart, 
  Area, 
  Legend, 
  Cell 
} from 'recharts';

/**
 * --------------------------------------------------------------------------
 * SHARED COMPONENTS
 * --------------------------------------------------------------------------
 */

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ title, desc, action, badge, theme }) => (
  <div className="flex justify-between items-end mb-6">
    <div>
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
        {badge && (
          <span className={`px-2 py-1 text-[10px] font-bold rounded shadow-sm text-white ${
            theme === 'operator' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'
          }`}>
            {badge}
          </span>
        )}
      </div>
      {desc && <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">{desc}</p>}
    </div>
    {action && <div className="flex gap-2">{action}</div>}
  </div>
);

const ExcelUploadButton = () => (
  <button className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors">
    <FileSpreadsheet size={14} />
    기존 데이터 업로드 (Excel)
  </button>
);

const StatusBadge = ({ status, text }) => {
  const styles = {
    success: 'bg-green-100 text-green-700 border-green-200',
    warning: 'bg-orange-100 text-orange-700 border-orange-200',
    danger: 'bg-red-100 text-red-700 border-red-200',
    neutral: 'bg-gray-100 text-gray-700 border-gray-200',
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded border font-bold ${styles[status] || styles.neutral}`}>
      {text}
    </span>
  );
};

// Shared Invite Modal Component (Used in Student Management & Recruitment)
const InviteModal = ({ isOpen, onClose, initialData = {} }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-in fade-in">
      <div className="bg-white rounded-xl w-[500px] p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">신규 수강생 계정 생성</h3>
          <button onClick={onClose}><X size={18} className="text-gray-400 hover:text-red-500"/></button>
        </div>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">이름</label>
              <input type="text" className="w-full border-gray-300 rounded-lg p-2 text-sm" defaultValue={initialData.name || ''} placeholder="홍길동"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">연락처</label>
              <input type="text" className="w-full border-gray-300 rounded-lg p-2 text-sm" defaultValue={initialData.phone || ''} placeholder="010-0000-0000"/>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">이메일 (LMS ID)</label>
            <input type="email" className="w-full border-gray-300 rounded-lg p-2 text-sm" defaultValue={initialData.email || ''} placeholder="student@example.com"/>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">배정 프로그램</label>
            <select className="w-full border-gray-300 rounded-lg p-2 text-sm">
              <option>KDT 서비스 기획 5기</option>
              <option>데이터 분석 3기</option>
            </select>
          </div>
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-gray-700">임시 비밀번호</span>
              <button className="text-[10px] bg-teal-100 text-teal-700 px-2 py-1 rounded font-bold hover:bg-teal-200">랜덤 생성</button>
            </div>
            <div className="text-sm font-mono bg-white border border-gray-300 rounded p-2 text-center text-gray-600 tracking-wider">
              X7k9#m2P
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">초대 발송 채널 선택</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 p-3 border border-teal-200 bg-teal-50 rounded-lg cursor-pointer hover:bg-teal-100 transition-colors">
                <input type="checkbox" defaultChecked className="text-teal-600 rounded"/> 
                <span className="text-sm font-bold flex items-center gap-1"><MessageCircle size={14} className="text-yellow-600"/> 카카오 알림톡</span>
              </label>
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="text-teal-600 rounded"/> 
                <span className="text-sm font-bold flex items-center gap-1"><Smartphone size={14}/> SMS 문자</span>
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-2">* 초대 링크와 임시 비밀번호가 함께 발송됩니다.</p>
          </div>
          
          <button onClick={onClose} className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 mt-2 flex justify-center items-center gap-2 shadow-lg shadow-teal-100">
            <Send size={16}/> 계정 생성 및 초대 발송
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * --------------------------------------------------------------------------
 * PAGE: RECRUITMENT & SELECTION (ATS)
 * --------------------------------------------------------------------------
 */
const OperatorRecruitment = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const pipelines = [
    { id: 'applied', title: '지원 접수', count: 42, color: 'bg-gray-100' },
    { id: 'review', title: '서류 심사', count: 18, color: 'bg-blue-50' },
    { id: 'interview', title: '면접 전형', count: 8, color: 'bg-purple-50' },
    { id: 'final', title: '최종 합격', count: 5, color: 'bg-teal-50' },
  ];

  const candidates = [
    { id: 1, name: '김지원', stage: 'applied', score: '-', date: '방금', tags: ['비전공', '내일배움카드'] },
    { id: 2, name: '이코딩', stage: 'review', score: 'B+', date: '1일 전', tags: ['컴공전공', '포트폴리오'] },
    { id: 3, name: '박열정', stage: 'interview', score: 'A', date: '2일 전', tags: ['부트캠프경험'] },
    { id: 4, name: '최합격', stage: 'final', score: 'S', date: '3일 전', tags: ['조기수료가능'], email: 'choi@test.com', phone: '010-1111-2222' },
  ];

  const handleInvite = (candidate) => {
    setSelectedCandidate(candidate);
    setShowInviteModal(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <SectionHeader 
        title="모집 & 선발 (ATS)" 
        desc="지원자 파이프라인 관리 및 선발 자동화" 
        badge="Kanban View"
        theme="operator"
        action={<ExcelUploadButton />}
      />
      
      {showInviteModal && (
        <InviteModal 
          isOpen={showInviteModal} 
          onClose={() => setShowInviteModal(false)} 
          initialData={selectedCandidate} 
        />
      )}

      {/* Pipeline Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {pipelines.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
            <span className="font-bold text-gray-700">{p.title}</span>
            <span className="text-xl font-bold text-gray-900">{p.count}</span>
          </div>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 h-[600px] overflow-x-auto pb-4">
        {pipelines.map(col => (
          <div key={col.id} className={`flex-1 min-w-[280px] rounded-xl border border-gray-200 flex flex-col ${col.color}`}>
            <div className="p-3 font-bold text-gray-700 border-b border-gray-200/50 flex justify-between">
              {col.title}
              <span className="text-xs bg-white px-2 py-0.5 rounded text-gray-500">{col.count}</span>
            </div>
            <div className="p-3 space-y-3 flex-1 overflow-y-auto custom-scrollbar">
              {candidates.filter(c => c.stage === col.id).map((c, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md cursor-pointer transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{c.name}</h4>
                    {c.score !== '-' && <span className="text-xs font-bold text-teal-600">{c.score}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {c.tags.map(t => (
                      <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400 pt-2 border-t border-gray-100 mb-2">
                    <span>{c.date}</span>
                    <MoreHorizontal size={14} />
                  </div>
                  {/* 수정 5: 최종 합격 카드에 계정 생성 버튼 추가 */}
                  {col.id === 'final' && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleInvite(c); }}
                      className="w-full text-xs bg-teal-50 text-teal-700 border border-teal-200 py-1.5 rounded font-bold hover:bg-teal-100 flex items-center justify-center gap-1"
                    >
                      <UserPlus size={12}/> LMS 계정 생성
                    </button>
                  )}
                </div>
              ))}
              {/* Mock items to fill UI */}
              {col.id === 'applied' && [1,2,3].map(i => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 opacity-60">
                   <div className="h-4 bg-gray-100 rounded w-1/2 mb-2"></div>
                   <div className="h-3 bg-gray-50 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * --------------------------------------------------------------------------
 * PAGE: STUDENT MANAGEMENT
 * --------------------------------------------------------------------------
 */
const OperatorStudentManagement = () => {
  const [viewMode, setViewMode] = useState('active'); // active, dropout, templates
  const [selectedStudentId, setSelectedStudentId] = useState(null); // For detail view
  const [riskFilter, setRiskFilter] = useState('all');
  const [showInviteModal, setShowInviteModal] = useState(false);

  // Detail view state
  // 수정 8: 기본 탭을 'performance' -> 'admin'으로 변경
  const [detailTab, setDetailTab] = useState('admin');

  if (selectedStudentId) {
    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 fade-in">
        {/* Detail View Header */}
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setSelectedStudentId(null)} className="p-2 hover:bg-white rounded-full transition-colors">
            <ArrowRight size={20} className="transform rotate-180 text-gray-500"/>
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">김패스 수강생 상세정보</h2>
            <p className="text-sm text-gray-500">KDT 서비스 기획 5기 • A반 • 재학중</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
              <MessageCircle size={14}/> 1:1 채팅
            </button>
            <button className="px-3 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 flex items-center gap-2">
              <FileText size={14}/> 상담 기록 추가
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Left Sidebar Profile */}
          <Card className="col-span-1 p-6 h-fit">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-3xl font-bold mb-4">김</div>
              <h3 className="text-xl font-bold text-gray-900">김패스</h3>
              <p className="text-sm text-gray-500 mb-2">1998.05.21 (만 26세)</p>
              <StatusBadge status="success" text="재학중 (Active)" />
            </div>
            <div className="space-y-4 text-sm border-t border-gray-100 pt-6">
              <div className="flex justify-between">
                <span className="text-gray-500">연락처</span>
                <span className="font-medium text-gray-800">010-1234-5678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">이메일</span>
                <span className="font-medium text-gray-800">kim@fastcampus.co.kr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">거주지</span>
                <span className="font-medium text-gray-800">서울 강남구</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">전공여부</span>
                <span className="font-medium text-gray-800">컴퓨터공학 (전공)</span>
              </div>
            </div>
          </Card>

          {/* Right Content Area */}
          <div className="col-span-3 space-y-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {[
                { id: 'admin', label: '행정/결제', icon: <CreditCard size={16}/> },
                { id: 'performance', label: '학습 성과', icon: <Award size={16}/> },
                { id: 'roadmap', label: '로드맵/KPI', icon: <MapPin size={16}/> },
                { id: 'history', label: '상담/히스토리', icon: <History size={16}/> },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setDetailTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
                    detailTab === tab.id ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              {detailTab === 'performance' && (
                <div className="space-y-6 animate-in fade-in">
                  
                  {/* 자동 반영 영역 */}
                  <Card className="p-6 bg-slate-50 border-slate-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 bg-blue-100 text-blue-600 rounded">
                        <Zap size={16} />
                      </div>
                      <h3 className="font-bold text-gray-800">시스템 자동 집계 (LMS 연동)</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                        <div className="text-xs text-gray-500 mb-1">온라인 강의 수강률</div>
                        <div className="text-2xl font-bold text-gray-900">94%</div>
                        <div className="text-xs text-green-500 mt-1">상위 10%</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                        <div className="text-xs text-gray-500 mb-1">퀴즈 평균 점수</div>
                        <div className="text-2xl font-bold text-gray-900">88점</div>
                        <div className="text-xs text-gray-400 mt-1">평균 대비 +3점</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center">
                        <div className="text-xs text-gray-500 mb-1">출석률 (QR/ZOOM)</div>
                        <div className="text-2xl font-bold text-gray-900">92%</div>
                        <div className="text-xs text-orange-500 mt-1">지각 2회</div>
                      </div>
                    </div>
                  </Card>

                  {/* 수동 입력 영역 */}
                  <Card className="p-6 border-teal-200 shadow-md">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-teal-100 text-teal-600 rounded">
                          <Edit3 size={16} />
                        </div>
                        <h3 className="font-bold text-gray-800">평가 점수 수동 입력</h3>
                      </div>
                      <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-700 transition-colors shadow-sm">
                        <Save size={16}/> 점수 저장 및 반영
                      </button>
                    </div>
                    
                    <div className="space-y-6">
                      {/* 과제 점수 */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-700 mb-3 border-b pb-1">과제 평가</h4>
                        <div className="grid grid-cols-4 gap-4">
                          {[1,2,3,4].map(i => (
                            <div key={i}>
                              <label className="block text-xs font-medium text-gray-500 mb-1">과제 {i}</label>
                              <div className="flex items-center">
                                <input type="number" className="w-full border-gray-300 rounded-l-lg p-2 text-sm focus:ring-teal-500" defaultValue={Math.floor(Math.random()*20+80)}/>
                                <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-2 py-2 text-xs text-gray-500">/100</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 프로젝트 점수 */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-700 mb-3 border-b pb-1">프로젝트 평가</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">중간 프로젝트 (1차)</label>
                            <input type="number" className="w-full border-gray-300 rounded-lg p-2 text-sm" defaultValue={85} placeholder="점수 입력"/>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">최종 프로젝트 (2차)</label>
                            <input type="number" className="w-full border-gray-300 rounded-lg p-2 text-sm" placeholder="점수 입력 (미제출)"/>
                          </div>
                        </div>
                      </div>

                      {/* 피어리뷰 */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-700 mb-3 border-b pb-1">피어 리뷰</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">피어 리뷰 환산 점수</label>
                            <input type="number" className="w-full border-gray-300 rounded-lg p-2 text-sm" defaultValue={90}/>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Padlet 결과 링크</label>
                            <div className="flex items-center gap-2">
                              <Link size={14} className="text-gray-400"/>
                              <input type="url" className="flex-1 border-gray-300 rounded-lg p-2 text-sm" placeholder="https://padlet.com/..." defaultValue="https://padlet.com/kdt5/review_kim"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {detailTab === 'admin' && (
                <Card className="p-6 space-y-6">
                  <h3 className="font-bold text-gray-800">행정 및 결제 정보</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-xs font-bold text-gray-500 mb-2">결제 수단 정보</div>
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard size={16} className="text-blue-600"/>
                        <span className="font-bold text-gray-800">내일배움카드 (신한)</span>
                      </div>
                      <div className="text-xs text-gray-400">자비부담금: 0원 (전액지원)</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-xs font-bold text-gray-500 mb-2">HRD-Net 연동 상태</div>
                      <div className="flex items-center gap-2 mb-1">
                        <Server size={16} className="text-green-600"/>
                        <span className="font-bold text-green-700">정상 연동중</span>
                      </div>
                      <div className="text-xs text-gray-400">최근 동기화: 10분 전</div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in">
      <InviteModal 
        isOpen={showInviteModal} 
        onClose={() => setShowInviteModal(false)}
      />
      
      <SectionHeader 
        title="수강생 관리" 
        desc="수강생 상세 정보 조회 및 커뮤니케이션 넛지" 
        badge="CRM"
        theme="operator"
        action={
          <div className="flex gap-2">
            <button 
              onClick={() => setShowInviteModal(true)}
              className="flex items-center gap-2 px-3 py-2 bg-teal-600 text-white rounded-lg text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm"
            >
              <UserPlus size={14} />
              + 수강생 계정 생성
            </button>
            <ExcelUploadButton />
          </div>
        }
      />

      {/* Sub Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        {[
          { id: 'active', label: '운영 수강생 (Active)', icon: <Users size={16}/> },
          { id: 'dropout', label: '중도 탈락/이탈 (Dropout)', icon: <UserMinus size={16}/> },
          { id: 'templates', label: '템플릿 & 넛지 관리', icon: <Megaphone size={16}/> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setViewMode(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
              viewMode === tab.id ? 'border-teal-500 text-teal-700' : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {viewMode === 'active' && (
        <Card className="overflow-hidden">
          {/* Filters */}
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <div className="flex gap-4 items-center">
               <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-200">
                  <span className="text-xs font-bold text-gray-500">이탈 위험군 필터:</span>
                  <select 
                    className="text-sm border-none bg-transparent focus:ring-0 p-0 font-bold text-gray-700"
                    value={riskFilter}
                    onChange={(e) => setRiskFilter(e.target.value)}
                  >
                    <option value="all">전체 보기</option>
                    <option value="risk">위험군 (관심 필요)</option>
                    <option value="high_risk">고위험군 (즉시 상담)</option>
                  </select>
               </div>
               <div className="flex gap-2">
                 <span className="text-xs bg-white border border-gray-200 px-2 py-1 rounded text-gray-500">전체 45명</span>
                 <span className="text-xs bg-red-50 border border-red-100 px-2 py-1 rounded text-red-600 font-bold">위험군 5명</span>
               </div>
            </div>
            <div className="relative">
              <input type="text" placeholder="이름 검색" className="pl-8 pr-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"/>
              <Search size={14} className="absolute left-2.5 top-2.5 text-gray-400"/>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left whitespace-nowrap">
              <thead className="bg-white text-gray-500 font-bold border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 sticky left-0 bg-white z-10 border-r border-gray-100">수강생 정보</th>
                  <th className="py-3 px-4">프로그램 배정</th>
                  <th className="py-3 px-4">원격 관리 (OT/안내)</th>
                  <th className="py-3 px-4 text-center">Master Table (진도/접속)</th>
                  <th className="py-3 px-4">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-gray-50 group">
                    <td className="py-3 px-4 sticky left-0 bg-white group-hover:bg-gray-50 z-10 border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">김</div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm flex items-center gap-1">
                            김패스_{i}
                            {i === 2 && <AlertCircle size={12} className="text-red-500"/>}
                          </div>
                          <div className="text-gray-400">1998.05.21 (남)</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="font-bold text-gray-700">KDT 서비스 기획 5기</div>
                      <div className="text-gray-500">A반 (담당: 김매니저)</div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> OT 참석 완료 (Zoom)</div>
                        <div className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> 가이드북 발송됨</div>
                        <div className="flex items-center gap-1 text-gray-400"><Video size={10}/> 비대면 상담 1회</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <div className="flex gap-4 justify-center">
                        <div className="text-center">
                          <div className="font-bold text-teal-600">85%</div>
                          <div className="text-[10px] text-gray-400">진도율</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-orange-500 flex items-center gap-0.5"><Flame size={10}/> 12</div>
                          <div className="text-[10px] text-gray-400">Streak</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => setSelectedStudentId(i)}
                        className="px-3 py-1.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 font-medium bg-white"
                      >
                        상세보기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};

/**
 * --------------------------------------------------------------------------
 * PAGE: INSTRUCTOR & MENTOR MANAGEMENT
 * --------------------------------------------------------------------------
 */
const OperatorInstructorManagement = () => {
  const [viewMode, setViewMode] = useState('list');
  const [selectedInstructorId, setSelectedInstructorId] = useState(null);
  const [detailTab, setDetailTab] = useState('mentoring');

  const instructors = [
    { id: 1, name: '김코딩', role: '메인 강사', subject: 'Python/AI', students: 42, stage: '활동중', sessions: 4, rating: 4.8, contract: '계약중' },
    { id: 2, name: '이데이터', role: '실습 멘토', subject: 'SQL', students: 15, stage: '활동중', sessions: 8, rating: 4.5, contract: '만료예정' },
    { id: 3, name: '박기획', role: '취업 코치', subject: 'Resume', students: 30, stage: '최종합격', sessions: 0, rating: '-', contract: '계약대기' },
  ];

  const handleInstructorClick = (id) => {
    setSelectedInstructorId(id);
    setViewMode('detail');
  };

  if (viewMode === 'detail') {
    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 fade-in">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setViewMode('list')} className="p-2 hover:bg-white rounded-full transition-colors">
            <ArrowRight size={20} className="transform rotate-180 text-gray-500"/>
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">김코딩 멘토 상세정보</h2>
            <p className="text-sm text-gray-500">메인 강사 • Python/AI • 4.8점</p>
          </div>
        </div>

        <div className="flex border-b border-gray-200 mb-6 bg-white rounded-t-xl px-2 pt-2">
          {[
            { id: 'selection', label: '선발 이력', icon: <UserPlus size={16}/> },
            { id: 'allocation', label: '배치 현황', icon: <Users size={16}/> },
            { id: 'mentoring', label: '멘토링 캘린더', icon: <Calendar size={16}/> },
            { id: 'feedback', label: '피드백 모니터링', icon: <MessageCircle size={16}/> },
            { id: 'evaluation', label: '평가 분석', icon: <Star size={16}/> },
            { id: 'contract', label: '재계약 관리', icon: <FileSignature size={16}/> },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setDetailTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-bold border-b-2 transition-colors ${
                detailTab === t.id ? 'border-teal-500 text-teal-700 bg-teal-50/50 rounded-t-lg' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <Card className="p-6 min-h-[400px]">
          {/* 수정 3: 상세 탭 내용 복원 */}
          {detailTab === 'selection' && (
            <div className="space-y-6">
              <h3 className="font-bold text-gray-800 mb-2">선발 단계 및 이력</h3>
              <div className="flex items-center gap-4 mb-6">
                {['서류 접수', '기술 과제', '실무 면접', '처우 협의', '최종 합격'].map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${i < 5 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {i + 1}
                    </div>
                    <span className={`text-xs ${i < 5 ? 'text-teal-700 font-bold' : 'text-gray-400'}`}>{step}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-sm text-gray-700">면접 기록</h4>
                  <span className="text-xs text-gray-500">2024.01.15 진행</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>기술 질문:</strong> Python 메모리 관리, 비동기 처리에 대한 이해도가 높음.</p>
                  <p><strong>강의 시연:</strong> 목소리 톤이 안정적이며 비전공자 눈높이에 맞춘 설명이 인상적임.</p>
                  <p className="text-teal-700 font-bold mt-2">종합 결과: 합격 (S등급)</p>
                </div>
              </div>
            </div>
          )}

          {detailTab === 'allocation' && (
            <div className="space-y-6">
              <h3 className="font-bold text-gray-800 mb-2">담당 과정 및 배정 현황</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-teal-100 rounded-xl shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">현재 담당 과정</div>
                  <div className="font-bold text-lg text-teal-800">KDT 서비스 기획 5기</div>
                  <div className="text-xs text-teal-600 mt-2">2024.11.01 ~ 2025.04.30</div>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">담당 수강생 / 비율</div>
                  <div className="font-bold text-lg text-gray-800">42명 (1:42)</div>
                  <div className="text-xs text-orange-500 mt-2">권장 비율(1:30) 초과</div>
                </div>
              </div>
            </div>
          )}

          {detailTab === 'mentoring' && (
             <div className="space-y-4">
                <h3 className="font-bold text-gray-800 mb-2">이번 주 세션 일정</h3>
                <div className="grid grid-cols-5 divide-x divide-gray-200 border border-gray-200 rounded-lg">
                   {['월', '화', '수', '목', '금'].map(d => (
                      <div key={d} className="h-32 p-2">
                         <div className="text-xs font-bold text-gray-500 mb-2 text-center">{d}</div>
                         {d === '월' && <div className="bg-teal-100 text-teal-700 text-xs p-2 rounded mb-1 font-bold">14:00 그룹 멘토링</div>}
                         {d === '수' && <div className="bg-blue-100 text-blue-700 text-xs p-2 rounded mb-1 font-bold">19:00 1:1 코칭</div>}
                      </div>
                   ))}
                </div>
             </div>
          )}

          {detailTab === 'feedback' && (
             <div>
                <h3 className="font-bold text-gray-800 mb-4">최근 수강생 피드백</h3>
                <div className="space-y-3">
                   <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between mb-1">
                         <span className="font-bold text-sm">익명 수강생</span>
                         <div className="flex text-yellow-400 text-xs"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                      </div>
                      <p className="text-sm text-gray-600">설명을 정말 쉽게 잘 해주십니다.</p>
                   </div>
                </div>
             </div>
          )}

          {detailTab === 'evaluation' && (
            <div className="space-y-6">
              <h3 className="font-bold text-gray-800 mb-2">강사 종합 평가</h3>
              <div className="flex items-center gap-6">
                <div className="w-48 h-48 bg-gray-50 rounded-full flex items-center justify-center border-4 border-teal-100 text-2xl font-bold text-teal-700">
                  4.8 <span className="text-xs text-gray-400 font-normal ml-1">/ 5.0</span>
                </div>
                <div className="flex-1 space-y-4">
                  {[
                    { label: '전문성', val: 95 },
                    { label: '전달력', val: 92 },
                    { label: '준비성', val: 98 },
                    { label: '열정', val: 90 },
                  ].map((cat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-600 w-12">{cat.label}</span>
                      <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-500 h-full" style={{width: `${cat.val}%`}}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-800">{cat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {detailTab === 'contract' && (
            <div className="space-y-6">
              <h3 className="font-bold text-gray-800 mb-2">계약 정보 및 재계약 관리</h3>
              <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="p-3">계약 형태</th>
                    <th className="p-3">계약 기간</th>
                    <th className="p-3">강사 등급</th>
                    <th className="p-3">상태</th>
                    <th className="p-3">관리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">프리랜서 (위임)</td>
                    <td className="p-3">2024.01.01 ~ 2024.12.31</td>
                    <td className="p-3 font-bold text-teal-700">S등급</td>
                    <td className="p-3"><StatusBadge status="success" text="계약중"/></td>
                    <td className="p-3">
                      <button className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-100 border border-blue-200">
                        재계약 요청
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in">
      <SectionHeader 
        title="강사/멘토 관리" 
        desc="전체 강사/멘토 풀 관리 및 통합 모니터링" 
        badge="HR & QM"
        theme="operator"
      />

      {/* Aggregate Dashboard Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="p-4 bg-teal-50 border-teal-100">
          <div className="text-xs font-bold text-teal-800 mb-1">현재 활동 강사</div>
          <div className="text-2xl font-bold text-teal-900">24명</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs font-bold text-gray-500 mb-1">선발 진행 중</div>
          <div className="text-2xl font-bold text-gray-900">5명</div>
        </Card>
         <Card className="p-4">
          <div className="text-xs font-bold text-gray-500 mb-1">평균 만족도</div>
          <div className="text-2xl font-bold text-gray-900">4.7/5.0</div>
        </Card>
         <Card className="p-4">
          <div className="text-xs font-bold text-gray-500 mb-1">재계약 예정</div>
          <div className="text-2xl font-bold text-gray-900">3명</div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50 font-bold text-gray-700 flex justify-between items-center">
          <span>통합 강사/멘토 목록</span>
          <div className="relative">
             <input type="text" placeholder="이름/과목 검색" className="pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded bg-white"/>
             <Search size={12} className="absolute left-2.5 top-2 text-gray-400"/>
          </div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-white text-gray-500 font-bold border-b border-gray-200">
            <tr>
              <th className="p-3">이름/전문분야</th>
              <th className="p-3">담당 수강생</th>
              <th className="p-3">선발 단계</th>
              <th className="p-3">주간 세션</th>
              <th className="p-3">만족도</th>
              <th className="p-3">재계약 상태</th>
              <th className="p-3">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {instructors.map(inst => (
              <tr key={inst.id} className="hover:bg-gray-50">
                <td className="p-3">
                   <div className="font-bold text-gray-800">{inst.name}</div>
                   <div className="text-xs text-gray-500">{inst.role} • {inst.subject}</div>
                </td>
                <td className="p-3">{inst.students}명</td>
                <td className="p-3"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">{inst.stage}</span></td>
                <td className="p-3 font-bold">{inst.sessions}회</td>
                <td className="p-3 flex items-center gap-1"><Star size={12} className="text-yellow-400 fill-current"/> {inst.rating}</td>
                <td className="p-3">
                   <span className={`text-xs px-2 py-0.5 rounded font-bold ${inst.contract === '만료예정' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      {inst.contract}
                   </span>
                </td>
                <td className="p-3">
                   <button 
                      onClick={() => handleInstructorClick(inst.id)}
                      className="text-xs border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                   >
                      상세보기
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

const OperatorAttendance = () => {
  const [tab, setTab] = useState('overview');

  const GradingView = () => (
    <div className="animate-in fade-in">
      <div className="flex justify-between items-center mb-4">
         <div className="flex items-center gap-4">
            <h3 className="font-bold text-gray-800">채점 및 점수 입력</h3>
            <select className="border border-gray-300 rounded-lg text-sm p-2 bg-white focus:ring-teal-500">
               <option>과제 1: 데이터 전처리 (20점)</option>
               <option>중간 프로젝트 (30점)</option>
               <option>최종 프로젝트 (40점)</option>
               <option>피어 리뷰 (10점)</option>
            </select>
         </div>
         <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
               <UploadCloud size={16}/> CSV 일괄 업로드
            </button>
            <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-700 shadow-sm">
               <Save size={16}/> 전체 저장
            </button>
         </div>
      </div>
      
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 mb-4 flex justify-between items-center">
         <span className="text-xs text-orange-700 font-bold flex items-center gap-2"><AlertCircle size={14}/> 3명의 수강생 점수가 입력되지 않았습니다.</span>
         <span className="text-xs text-gray-400">마지막 저장: 김운영 매니저 (방금 전)</span>
      </div>

      <Card className="overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-bold border-b border-gray-200">
            <tr>
              <th className="p-3 w-40">수강생</th>
              <th className="p-3 w-32">현재 점수</th>
              <th className="p-3 w-40">점수 입력</th>
              <th className="p-3">비고 (피드백 요약)</th>
              <th className="p-3 w-24 text-center">상태</th>
              <th className="p-3 w-20">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[1,2,3,4,5].map(i => (
              <tr key={i} className={`hover:bg-gray-50 ${i > 3 ? 'bg-yellow-50/50' : ''}`}>
                <td className="p-3 font-bold">수강생_{i}</td>
                <td className="p-3 text-gray-600">{i > 3 ? '-' : '18 / 20'}</td>
                <td className="p-2">
                  <input type="number" className="w-full border-gray-300 rounded text-center text-sm focus:ring-teal-500 focus:border-teal-500" placeholder="0~20" defaultValue={i > 3 ? '' : 18}/>
                </td>
                <td className="p-2">
                   <input type="text" className="w-full border-gray-300 rounded text-sm focus:ring-teal-500 px-2" placeholder="피드백 입력..."/>
                </td>
                <td className="p-3 text-center">
                   {i > 3 ? <span className="text-xs text-orange-500 font-bold">미입력</span> : <span className="text-xs text-green-600 font-bold">저장됨</span>}
                </td>
                <td className="p-3 text-center">
                   <button className="text-gray-400 hover:text-teal-600"><Save size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in">
      <SectionHeader 
        title="출결 & 학습 관리" 
        desc="강의 수강률, 과제, 퀴즈 및 피어리뷰 통합 모니터링" 
        badge="LMS Data"
        theme="operator"
        action={<ExcelUploadButton />}
      />

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: '온라인 강의 수강률', val: '94%', sub: '목표 대비 +2%' },
          { label: '실시간/대면 출석률', val: '88%', sub: '경고 대상 3명' },
          { label: '과제 제출률', val: '91%', sub: '전주 대비 상승' },
          { label: '중도 포기 위험군', val: '5명', sub: '집중 케어 필요', alert: true },
        ].map((stat, i) => (
          <Card key={i} className="p-4">
            <div className="text-xs text-gray-500 font-bold mb-1">{stat.label}</div>
            <div className={`text-2xl font-bold ${stat.alert ? 'text-red-600' : 'text-gray-900'}`}>{stat.val}</div>
            <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[500px]">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {['overview', 'lecture', 'grading', 'assignment', 'quiz', 'peer'].map(t => (
            <button 
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 text-sm font-bold capitalize transition-colors whitespace-nowrap ${tab === t ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-500' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              {t === 'overview' ? '종합 현황' : t === 'lecture' ? '강의 수강' : t === 'grading' ? '채점 & 점수 입력' : t === 'assignment' ? '과제 관리' : t === 'quiz' ? '퀴즈/테스트' : '피어 리뷰/피드백'}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tab === 'overview' && (
             <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3">수강생</th>
                  <th className="p-3">종합 진도율</th>
                  <th className="p-3">출석(QR)</th>
                  <th className="p-3">과제 현황</th>
                  <th className="p-3">수료 예측</th>
                  <th className="p-3">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1,2,3,4,5].map(i => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3 font-bold">수강생_{i}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-teal-500 h-2 rounded-full" style={{width: `${Math.random() * 30 + 70}%`}}></div>
                        </div>
                        <span className="text-xs">85%</span>
                      </div>
                    </td>
                    <td className="p-3">92% (지각 1)</td>
                    <td className="p-3">
                        <span className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">제출 4</span>
                        <span className="text-xs bg-red-50 text-red-700 px-1.5 py-0.5 rounded font-bold ml-1">미제출 1</span>
                    </td>
                    <td className="p-3 text-green-600 font-bold">안정권</td>
                    <td className="p-3"><StatusBadge status="success" text="재학중"/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === 'grading' && <GradingView />}
          {tab === 'peer' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div>
                  <h4 className="font-bold text-blue-800">Final Project 피어 리뷰 진행중</h4>
                  <p className="text-xs text-blue-600">마감까지 2일 남았습니다. 미제출자에게 알림을 보내세요.</p>
                </div>
                <button className="bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded hover:bg-blue-700">미제출자 넛지 보내기</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-dashed h-40 flex items-center justify-center text-gray-400">
                   피드백 데이터 차트 영역
                </Card>
                <Card className="p-4 border-dashed h-40 flex items-center justify-center text-gray-400">
                   평가 점수 분포 차트 영역
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OperatorCounseling = () => {
  const [activeTab, setActiveTab] = useState('inquiry'); // inquiry, notice, faq
  // 수정 6: 공지사항 입력 상태 관리
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [notices, setNotices] = useState([
    { id: 1, title: '[필독] 3주차 과제 안내', date: '2024.11.02', views: 142, sentTo: ['Slack', 'LMS'] }
  ]);
  const [faqs, setFaqs] = useState([
    { id: 1, cat: '수료기준', q: '수료 기준은 어떻게 되나요?', a: '출석 80% 이상...' }
  ]);

  const handleNoticeSubmit = () => {
    if (!noticeTitle.trim()) return;
    const newNotice = {
      id: notices.length + 1,
      title: noticeTitle,
      date: new Date().toLocaleDateString(),
      views: 0,
      sentTo: ['LMS', 'Kakao']
    };
    setNotices([newNotice, ...notices]);
    setNoticeTitle('');
    setNoticeContent('');
    alert('공지사항이 등록되었습니다.');
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <SectionHeader 
        title="운영 상담 & 공지" 
        desc="수강생 1:1 문의 답변 및 운영 공지사항/FAQ 관리" 
        badge="Communication"
        theme="operator"
      />

      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('inquiry')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'inquiry' ? 'bg-teal-50 text-teal-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <MessageSquare size={16}/> 1:1 문의 관리
          </button>
          <button 
            onClick={() => setActiveTab('notice')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'notice' ? 'bg-teal-50 text-teal-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Megaphone size={16}/> 공지사항 관리
          </button>
          <button 
            onClick={() => setActiveTab('faq')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'faq' ? 'bg-teal-50 text-teal-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <HelpCircle size={16}/> FAQ 관리
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-500">필터:</span>
          <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:ring-teal-500 outline-none">
            <option>전체 프로그램</option>
            <option selected>KDT 서비스 기획 5기</option>
            <option>데이터 분석 3기</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* List Section */}
        <Card className="col-span-1 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 font-bold text-gray-700 flex justify-between items-center">
            {activeTab === 'inquiry' ? '문의 목록 (4건 대기)' : activeTab === 'notice' ? '발행된 공지 목록' : '등록된 FAQ'}
            <button className="text-xs bg-teal-600 text-white px-2 py-1 rounded hover:bg-teal-700 flex items-center gap-1">
              <Plus size={12}/> 추가
            </button>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {activeTab === 'inquiry' && (
              [1,2,3,4,5].map(i => (
                <div key={i} className={`p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${i===1 ? 'border-teal-500 bg-teal-50/30' : 'border-transparent'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm text-gray-800">김수강</span>
                    <span className="text-[10px] text-gray-400">10분 전</span>
                  </div>
                  <div className="text-xs text-gray-600 line-clamp-2 mb-2">
                    과제 제출 기한을 착각해서 늦게 제출했는데 점수 차감이 어떻게 되나요?
                  </div>
                  {i < 3 ? <StatusBadge status="warning" text="답변 대기"/> : <StatusBadge status="success" text="답변 완료"/>}
                </div>
              ))
            )}
            {activeTab === 'notice' && (
              notices.map((n, i) => (
                <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent">
                  <div className="font-bold text-sm text-gray-800 mb-1">{n.title}</div>
                  <div className="text-xs text-gray-400 mb-2">작성일: {n.date} • 조회수 {n.views}</div>
                  <div className="flex gap-1">
                    {n.sentTo.map(c => <span key={c} className="text-[10px] bg-gray-100 px-1.5 rounded text-gray-500">{c} 전송됨</span>)}
                  </div>
                </div>
              ))
            )}
            {activeTab === 'faq' && (
               faqs.map((f, i) => (
                <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent">
                  <span className="text-[10px] bg-gray-200 text-gray-600 px-1.5 rounded font-bold mb-1 inline-block">{f.cat}</span>
                  <div className="font-bold text-sm text-gray-800 mb-1">Q. {f.q}</div>
                  <div className="text-xs text-gray-500 line-clamp-2">A. {f.a}</div>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Detail/Editor Section */}
        <Card className="col-span-2 flex flex-col p-6 overflow-y-auto">
          {activeTab === 'inquiry' ? (
             <>
               <div className="border-b border-gray-200 pb-4 mb-4">
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-bold text-lg text-gray-900">과제 제출 기한 문의 드립니다.</h3>
                     <div className="text-xs text-gray-500 mt-1">김수강 (서비스 기획 5기) • 2024.11.05 14:30</div>
                   </div>
                   <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal/></button>
                 </div>
               </div>
               <div className="flex-1 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto min-h-[150px]">
                 <p className="text-sm text-gray-700">안녕하세요 매니저님,<br/>어제 저녁 11시 59분까지인줄 알고 제출했는데 알고보니 오후 6시까지였네요. 혹시 감점이 큰가요? ㅜㅜ</p>
               </div>
               <div className="mt-auto">
                 <label className="text-xs font-bold text-gray-500 mb-2 block">답변 작성</label>
                 <textarea className="w-full h-32 border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none resize-none" placeholder="답변을 입력하세요..."></textarea>
                 <div className="flex justify-end mt-2">
                   <button className="bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 flex items-center gap-2">
                     <Send size={14}/> 답변 등록
                   </button>
                 </div>
               </div>
             </>
          ) : activeTab === 'notice' ? (
             <div className="space-y-4 animate-in fade-in">
                <h3 className="font-bold text-lg text-gray-900 border-b pb-2">새 공지사항 작성</h3>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">제목</label>
                   <input 
                    type="text" 
                    className="w-full border-gray-300 rounded-lg p-2 text-sm" 
                    placeholder="공지 제목을 입력하세요"
                    value={noticeTitle}
                    onChange={(e) => setNoticeTitle(e.target.value)}
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">내용</label>
                   <textarea 
                    className="w-full h-40 border-gray-300 rounded-lg p-2 text-sm" 
                    placeholder="공지 내용을 입력하세요"
                    value={noticeContent}
                    onChange={(e) => setNoticeContent(e.target.value)}
                   />
                </div>
                <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">발송 채널 선택</label>
                    <div className="flex flex-col gap-2">
                       <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" defaultChecked className="rounded text-teal-600"/> 🔔 LMS 웹 실시간 알림 (WebSocket)</label>
                       <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" className="rounded text-teal-600"/> 💬 카카오 알림톡 자동 발송</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">발송 시간 설정</label>
                    <div className="flex gap-4 mb-2">
                       <label className="flex items-center gap-1 text-sm cursor-pointer"><input type="radio" name="sendTime" defaultChecked className="text-teal-600"/> 즉시 발송</label>
                       <label className="flex items-center gap-1 text-sm cursor-pointer"><input type="radio" name="sendTime" className="text-teal-600"/> 예약 발송</label>
                    </div>
                    <input type="datetime-local" className="w-full border-gray-300 rounded-lg p-1.5 text-sm bg-white" />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                   <button 
                    onClick={handleNoticeSubmit}
                    className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 shadow-md"
                   >
                    공지 등록 및 발송
                   </button>
                </div>
             </div>
          ) : (
             <div className="space-y-4 animate-in fade-in">
                <h3 className="font-bold text-lg text-gray-900 border-b pb-2">FAQ 편집</h3>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">카테고리</label>
                   <select className="w-full border-gray-300 rounded-lg p-2 text-sm">
                      <option>수료기준</option>
                      <option>출결관리</option>
                      <option>과제/평가</option>
                      <option>취업지원</option>
                      <option>기타</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">질문 (Question)</label>
                   <input type="text" className="w-full border-gray-300 rounded-lg p-2 text-sm" defaultValue="수료 기준은 어떻게 되나요?"/>
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">답변 (Answer)</label>
                   <textarea className="w-full h-32 border-gray-300 rounded-lg p-2 text-sm" defaultValue="출석 80% 이상..."/>
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">관련 외부 링크 (Optional)</label>
                   <div className="flex items-center gap-2">
                      <Link size={16} className="text-gray-400"/>
                      <input type="url" className="w-full border-gray-300 rounded-lg p-2 text-sm" placeholder="https://..."/>
                   </div>
                </div>
                 <div className="flex justify-end pt-4 gap-2">
                   <button className="px-4 py-2 text-red-600 text-sm font-bold hover:bg-red-50 rounded border border-red-100 flex items-center gap-1"><Trash2 size={14}/> 삭제</button>
                   <button className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 flex items-center gap-1"><Save size={14}/> 저장</button>
                </div>
             </div>
          )}
        </Card>
      </div>
    </div>
  );
};


const ProgramSetup = () => {
  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, title: '기본 정보', icon: <FileText size={18}/> },
    { id: 2, title: '커리큘럼 설정', icon: <Layers size={18}/> },
    { id: 3, title: '시간표 설정', icon: <CalendarDays size={18}/> },
    { id: 4, title: '수료 기준', icon: <GraduationCap size={18}/> },
    { id: 5, title: '게이미피케이션', icon: <Target size={18}/> }
  ];

  return (
    <div className="space-y-6 animate-in fade-in">
      <SectionHeader 
        title="프로그램 셋업" 
        desc="새로운 기수 운영을 위한 필수 정보를 설정합니다." 
        badge="Step-by-Step Wizard"
        theme="operator"
        action={
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50">임시 저장</button>
            <button className="btn-operator"><CheckCircle size={16} className="mr-2"/> 설정 완료 및 LMS 반영</button>
          </div>
        }
      />

      {/* Stepper Navigation */}
      <div className="flex justify-between items-center mb-8 px-10">
        {steps.map((s, idx) => (
          <div key={s.id} className="flex flex-col items-center relative z-10 w-full cursor-pointer" onClick={() => setStep(s.id)}>
             <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${step === s.id ? 'bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-200' : step > s.id ? 'bg-teal-100 border-teal-600 text-teal-700' : 'bg-white border-gray-300 text-gray-400'}`}>
                {step > s.id ? <CheckCircle size={20}/> : s.icon}
             </div>
             <div className={`mt-2 text-xs font-bold ${step === s.id ? 'text-teal-700' : 'text-gray-400'}`}>{s.title}</div>
             {/* Progress Bar Line */}
             {idx < steps.length - 1 && (
               <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-10 ${step > s.id ? 'bg-teal-500' : 'bg-gray-200'}`}></div>
             )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm min-h-[500px] p-8">
        {step === 1 && <SetupStep1_BasicInfo />}
        {step === 2 && <SetupStep2_Curriculum />}
        {step === 3 && <SetupStep3_Timetable />}
        {step === 4 && <SetupStep4_Criteria />}
        {step === 5 && <SetupStep5_Quest />}
      </div>

      <div className="flex justify-between pt-4">
        <button 
          onClick={() => setStep(prev => Math.max(1, prev - 1))}
          disabled={step === 1}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold ${step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <ChevronLeft size={16} className="mr-1"/> 이전 단계
        </button>
        <button 
          onClick={() => setStep(prev => Math.min(5, prev + 1))}
          className="btn-operator"
        >
          {step === 5 ? '설정 완료' : '다음 단계'} <ChevronRight size={16} className="ml-1"/>
        </button>
      </div>
    </div>
  );
};

const SetupStep1_BasicInfo = () => (
  <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">프로그램 기본 정보</h3>
      <p className="text-sm text-gray-500">LMS 상단에 노출될 핵심 정보를 입력해주세요. HRD-Net 코드를 입력하면 행정 연동이 활성화됩니다.</p>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
      {/* 1. 프로그램명 */}
      <label className="block">
        <span className="text-sm font-bold text-gray-700">프로그램 이름 <span className="text-red-500">*</span></span>
        <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm focus:border-teal-500 focus:ring-teal-500" placeholder="예: [KDT] 데이터 사이언스 부트캠프 5기"/>
      </label>

      <div className="grid grid-cols-2 gap-6">
        {/* 2. 기수 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">기수</span>
          <input type="number" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm" placeholder="5"/>
        </label>
        {/* 7. 모집 정원 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">모집 정원</span>
          <div className="flex items-center gap-2">
             <input type="number" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm" placeholder="30"/>
             <span className="text-sm text-gray-500 mt-1">명</span>
          </div>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 3. 과정 유형 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">과정 유형</span>
          <select className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm">
            <option>KDT (국비지원)</option>
            <option>내일배움카드</option>
            <option>일반과정 (B2C)</option>
            <option>기업교육 (B2B)</option>
          </select>
        </label>
        {/* 4. 트랙/분야 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">트랙/분야</span>
          <select className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm">
            <option>데이터 사이언스</option>
            <option>서비스 기획 (PM)</option>
            <option>풀스택 개발</option>
            <option>UI/UX 디자인</option>
            <option>인공지능/AI</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 5. 시작일 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">시작일</span>
          <input type="date" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm"/>
        </label>
        {/* 6. 종료일 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">종료일</span>
          <input type="date" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm"/>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 8. HRD 코드 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700 flex items-center gap-2">HRD 훈련과정 코드 <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">행정연동</span></span>
          <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm" placeholder="KDT-2025-XXXX"/>
        </label>
        {/* 9. 운영 담당자 (New) */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">운영 담당자</span>
          <input type="text" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm" placeholder="김매니저"/>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 10. 수업 방식 (New) */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">수업 방식</span>
          <select className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm">
            <option>100% 온라인 (VOD)</option>
            <option>실시간 온라인 (Zoom)</option>
            <option>온/오프라인 혼합 (Blended)</option>
            <option>오프라인</option>
          </select>
        </label>
        {/* 11. Zoom 링크 */}
        <label className="block">
          <span className="text-sm font-bold text-gray-700">Zoom 기본 링크 (LIVE용)</span>
          <input type="url" className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm" placeholder="https://zoom.us/j/...."/>
        </label>
      </div>

      {/* 12. 목표 수강생 정의 (New) */}
      <label className="block">
        <span className="text-sm font-bold text-gray-700">목표 수강생 정의</span>
        <textarea className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 border px-3 py-2 text-sm" rows={3} placeholder="예: 비전공자이지만 데이터 분석가로 취업을 희망하는 2030 구직자"></textarea>
      </label>
    </div>
  </div>
);

const SetupStep2_Curriculum = () => {
  // Simple toggle state for the demo clip
  const [isEditOpen, setIsEditOpen] = useState(true);
  // 수정 2: 추천 배지 Toggle state 추가
  const [isBadgeOn, setIsBadgeOn] = useState(false);

  return (
    <div className="flex gap-6 h-[500px] animate-in slide-in-from-right-4 fade-in duration-300">
        {/* Sidebar: FastCampus Library */}
      <div className="w-1/3 bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col">
        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
             <Video size={16} className="text-red-500"/> 패스트캠퍼스 강의 라이브러리
          </h3>
          <p className="text-[11px] text-gray-400">백오피스 API 실시간 연동됨</p>
        </div>
        
        <div className="relative mb-3">
          <input type="text" placeholder="강의명, 기술 태그 검색..." className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-8 pr-3 text-xs focus:ring-2 focus:ring-teal-100 outline-none"/>
          <Search size={14} className="absolute left-2.5 top-2.5 text-gray-400"/>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {['파이썬 기초 올인원', '데이터 전처리 실습', '머신러닝 개론', 'SQL 데이터 분석', 'Tableau 시각화 마스터'].map((item, i) => (
            <div key={i} className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm cursor-grab hover:border-teal-400 group">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center shrink-0">
                  <PlayCircle size={16} className="text-gray-400 group-hover:text-teal-500"/>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800 line-clamp-1">{item}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">32 Clips • 12h 40m</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Builder Area */}
      <div className="flex-1 bg-white border border-dashed border-gray-300 rounded-xl p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-900">커리큘럼 로드맵 설정</h3>
          <button className="text-xs flex items-center gap-1 bg-teal-50 text-teal-700 px-2 py-1 rounded font-bold hover:bg-teal-100">
            <Plus size={12}/> 새 단계(Phase) 추가
          </button>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
               <div className="font-bold text-gray-700 text-sm">Phase 1: 데이터 분석 기초 (Onboarding)</div>
               <div className="text-xs text-gray-500">1주차 ~ 2주차</div>
            </div>
            <div className="p-4 space-y-3">
               <div className="bg-white p-4 border border-teal-200 rounded-lg shadow-sm transition-all duration-300">
                  <div className="flex justify-between items-start">
                     <div className="flex items-center gap-3">
                        <GripVertical size={14} className="text-gray-300 cursor-move"/>
                        <span className="text-sm font-bold text-gray-800">파이썬 기초 문법 - 변수와 자료형</span>
                     </div>
                     <button 
                        onClick={() => setIsEditOpen(!isEditOpen)}
                        className="text-gray-400 hover:text-teal-600 transition-colors"
                     >
                        <Settings size={14}/>
                     </button>
                  </div>
                  
                  {isEditOpen && (
                    <div className="mt-4 pt-3 border-t border-gray-100 bg-teal-50/30 -mx-4 -mb-4 p-4 rounded-b-lg animate-in fade-in">
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <label className="block text-xs font-bold text-gray-600 mb-1">수강 권장 일자</label>
                             <input type="date" className="w-full border-gray-200 rounded text-xs p-1.5 focus:ring-teal-500" />
                          </div>
                          <div>
                             <label className="block text-xs font-bold text-gray-600 mb-1">Zoom URL (LIVE Only)</label>
                             <input type="url" className="w-full border-gray-200 rounded text-xs p-1.5 focus:ring-teal-500" placeholder="https://zoom.us/..."/>
                          </div>
                          <div className="col-span-2">
                             <label className="block text-xs font-bold text-gray-600 mb-1">학습 목표 (Learning Goal)</label>
                             <textarea className="w-full border-gray-200 rounded text-xs p-2 focus:ring-teal-500" rows={2} placeholder="수강생에게 보여질 학습 목표를 입력하세요 (예: 변수의 개념 이해)"></textarea>
                          </div>
                          <div className="flex items-center gap-2">
                             <label className="text-xs font-bold text-gray-600">추천 배지 표시</label>
                             <div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
                                <input 
                                  type="checkbox" 
                                  id="toggle" 
                                  checked={isBadgeOn}
                                  onChange={() => setIsBadgeOn(!isBadgeOn)}
                                  className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-teal-500 checked:right-0 checked:border-teal-600"
                                />
                                <label htmlFor="toggle" className={`toggle-label block overflow-hidden h-4 rounded-full cursor-pointer ${isBadgeOn ? 'bg-teal-200' : 'bg-gray-200'}`}></label>
                             </div>
                             {isBadgeOn && <span className="text-xs text-orange-500 font-bold animate-in fade-in">⭐ 추천 강의로 표시됩니다</span>}
                          </div>
                       </div>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SetupStep3_Timetable = () => (
   <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
      <div className="flex justify-between items-center">
        <div>
           <h3 className="text-lg font-bold text-gray-900 mb-1">주간 시간표 설정</h3>
           <p className="text-sm text-gray-500">LMS 홈 화면의 '이번 주 시간표' 위젯에 노출될 내용을 구성합니다.</p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl overflow-hidden p-10 flex items-center justify-center bg-gray-50 text-gray-400">
         시간표 설정 UI (생략)
      </div>
   </div>
);

const SetupStep4_Criteria = () => (
   <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
      <h3 className="text-lg font-bold text-gray-900 mb-1">수료 기준 설정</h3>
      <div className="border border-gray-200 rounded-xl overflow-hidden p-10 flex items-center justify-center bg-gray-50 text-gray-400">
         수료 기준 설정 UI (생략)
      </div>
   </div>
);

// 수정 1: 퀘스트 목록 UI 추가 및 삭제 기능
const SetupStep5_Quest = () => {
  const [quests, setQuests] = useState([
    { id: 1, title: '출석 체크', condition: '출석', xp: 10, goal: '1회 로그인' },
    { id: 2, title: '오늘의 강의 완주', condition: 'VOD', xp: 30, goal: '진도율 100%' },
    { id: 3, title: '학습 일지 작성', condition: '과제', xp: 20, goal: '게시글 1개' },
  ]);

  const addQuest = () => {
    setQuests([...quests, { id: Date.now(), title: '', condition: 'VOD', xp: 0, goal: '' }]);
  };

  const removeQuest = (id) => {
    setQuests(quests.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
      <div>
         <h3 className="text-lg font-bold text-gray-900 mb-1">게이미피케이션 (Quest & Streak)</h3>
         <p className="text-sm text-gray-500">학습 동기 부여를 위한 일일 퀘스트 목록과 스트릭 기준을 설정합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 퀘스트 설정 */}
        <div className="space-y-4">
           <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Target size={18} className="text-teal-600"/> 일일 퀘스트 목록</h4>
              <div className="space-y-3">
                 {quests.map((q) => (
                   <div key={q.id} className="bg-gray-50 rounded-lg border border-gray-100 p-3">
                      <div className="flex gap-2 mb-2">
                         <input type="text" defaultValue={q.title} className="flex-1 text-sm border-gray-300 rounded p-1.5 focus:ring-teal-500" placeholder="퀘스트 항목명"/>
                         <div className="flex items-center gap-1 w-20">
                            <span className="text-xs font-bold text-yellow-600">XP</span>
                            <input type="number" defaultValue={q.xp} className="w-full text-sm border-gray-300 rounded p-1.5 text-center"/>
                         </div>
                         <button onClick={() => removeQuest(q.id)} className="text-gray-400 hover:text-red-500 p-1"><Trash2 size={14}/></button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                         <select className="text-xs border-gray-300 rounded p-1.5 bg-white" defaultValue={q.condition}>
                            <option value="출석">로그인/출석</option>
                            <option value="VOD">VOD 시청 완료</option>
                            <option value="과제">과제 제출</option>
                            <option value="퀴즈">퀴즈 응시</option>
                         </select>
                         <input type="text" defaultValue={q.goal} className="text-xs border-gray-300 rounded p-1.5" placeholder="달성 기준 (예: 1회)"/>
                      </div>
                   </div>
                 ))}
                 <button onClick={addQuest} className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-xs text-gray-500 font-bold hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-1">
                    <Plus size={12}/> 퀘스트 추가하기
                 </button>
              </div>
           </div>
        </div>
        
        {/* 스트릭 설정 */}
        <div className="space-y-4">
           <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Flame size={18} className="text-orange-500"/> 스트릭(Streak) 기준 설정</h4>
              <div className="space-y-4">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">스트릭 인정 기준 행동</label>
                    <select className="w-full border-gray-300 rounded-lg p-2 text-sm">
                       <option>LMS 로그인 시 인정</option>
                       <option>강의 1개 이상 시청 시 인정</option>
                       <option>퀘스트 1개 이상 달성 시 인정</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">스트릭 유지 조건 (Freeze)</label>
                    <select className="w-full border-gray-300 rounded-lg p-2 text-sm">
                       <option>매일 연속 접속 (주말 포함)</option>
                       <option>평일 연속 접속 (주말 제외)</option>
                       <option>주 5회 이상 접속</option>
                    </select>
                    <p className="text-xs text-gray-400 mt-1">* 조건 미달성 시 스트릭이 초기화됩니다.</p>
                 </div>
              </div>
           </div>
           
           <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
              <Gift size={20} className="text-blue-600 shrink-0"/>
              <div>
                 <h5 className="text-sm font-bold text-blue-800">XP 보상 레벨 구간</h5>
                 <p className="text-xs text-blue-600 mt-1">Lv.1 (0~100XP) / Lv.2 (101~500XP) / Lv.3 (501XP~)</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const OperatorDashboard = ({ setActiveTab }) => {
  // Mock Data
  const actions = [
    { id: 'inquiry', title: '미답변 1:1 문의', count: 4, target: 'reports', icon: <MessageSquare size={20}/> },
    { id: 'grading', title: '수동 점수 입력 대기', count: 12, target: 'attendance', icon: <Edit3 size={20}/> },
    { id: 'risk', title: '수료 위험군 경고', count: 3, target: 'students', icon: <AlertCircle size={20}/> },
    { id: 'absence', title: '미처리 공결 신청', count: 0, target: 'attendance', icon: <CalendarDays size={20}/> },
  ];

  const systems = [
    { name: '고용24 (HRD-Net) 동기화', time: '10분 전', status: 'success', msg: '성공 (142명)' },
    { name: '미접속자 넛지 알림', time: '09:00 AM', status: 'success', msg: '3건 발송' },
    { name: '카카오 알림톡 발송', time: '실시간', status: 'warning', msg: '1건 실패 (전화번호 오류)' },
    { name: 'VOD 수강률 집계', time: '방금', status: 'success', msg: '동기화 완료' },
  ];

  const weekly = {
    attendance: 94.2,
    vod: 78.5,
    assignment: 88.0,
    live: [
      { day: '오늘', title: '데이터 전처리 실습', host: '김코딩 강사' },
      { day: '수요일', title: '현직자 멘토링 (A반)', host: '이데이터 멘토' },
      { day: '금요일', title: '주간 회고 및 퀴즈', host: '박기획 코치' },
    ]
  };

  const setupList = [
    { label: '기본 정보 입력', done: true },
    { label: '커리큘럼 설정', done: true },
    { label: '시간표 설정', done: true },
    { label: '수료 기준 설정', done: true },
    { label: '퀘스트 설정', done: false }, // 미완료
    { label: '수강생 계정 생성', done: false }, // 미완료
  ];
  const isSetupComplete = setupList.every(i => i.done);

  return (
    <div className="space-y-8 animate-in fade-in">
      <SectionHeader 
        title="운영자 대시보드" 
        desc="오늘의 할 일과 시스템 현황을 한눈에 확인하세요." 
        badge="Operator Mode"
        theme="operator"
        action={<button className="btn-operator"><RefreshCw size={14} className="mr-2"/> 데이터 새로고침</button>}
      />

      {/* Zone 1: Action Required */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-2 h-6 bg-red-500 rounded-full"></span>
          오늘 즉시 처리 필요 (Action Required)
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {actions.map(action => (
            <Card 
              key={action.id} 
              className={`p-5 cursor-pointer transition-all hover:shadow-md border-l-4 ${action.count > 0 ? 'border-l-red-500 hover:bg-red-50/30' : 'border-l-green-500 hover:bg-green-50/30'}`}
              onClick={() => setActiveTab && setActiveTab(action.target)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className={`p-2 rounded-lg ${action.count > 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                  {action.icon}
                </div>
                {action.count > 0 ? (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">{action.count}건</span>
                ) : (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><CheckCircle size={10}/> 완료</span>
                )}
              </div>
              <div className="font-bold text-gray-800">{action.title}</div>
              <div className="text-xs text-gray-500 mt-1">{action.count > 0 ? '클릭하여 바로가기 >' : '모두 처리되었습니다.'}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Zone 3: Weekly Pulse (Left 2/3) */}
        <div className="lg:col-span-2 space-y-6">
           <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
                이번 주 운영 현황 (Weekly Pulse)
              </h3>
              <Card className="p-6">
                <div className="grid grid-cols-3 gap-6 mb-6">
                   <div className="text-center p-4 bg-teal-50 rounded-xl">
                      <div className="text-xs text-gray-500 font-bold mb-1">전체 출석률</div>
                      <div className="text-2xl font-bold text-teal-700">{weekly.attendance}%</div>
                   </div>
                   <div className="text-center p-4 bg-teal-50 rounded-xl">
                      <div className="text-xs text-gray-500 font-bold mb-1">평균 VOD 수강률</div>
                      <div className="text-2xl font-bold text-teal-700">{weekly.vod}%</div>
                   </div>
                   <div className="text-center p-4 bg-teal-50 rounded-xl">
                      <div className="text-xs text-gray-500 font-bold mb-1">과제 제출률</div>
                      <div className="text-2xl font-bold text-teal-700">{weekly.assignment}%</div>
                   </div>
                </div>
                
                {/* 수정 4: 수료 예측 분포 추가 */}
                <div className="border-t border-gray-100 pt-4 mb-6">
                   <h4 className="text-sm font-bold text-gray-700 mb-3">수료 예측 현황</h4>
                   <div className="grid grid-cols-3 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex justify-between items-center">
                         <span className="text-xs font-bold text-green-700">안정권 (Safe)</span>
                         <span className="text-lg font-bold text-green-800">37명</span>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex justify-between items-center cursor-pointer hover:bg-orange-100" onClick={() => setActiveTab && setActiveTab('students')}>
                         <span className="text-xs font-bold text-orange-700">위험군 (Risk)</span>
                         <span className="text-lg font-bold text-orange-800">5명 {'>'}</span>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-100 flex justify-between items-center cursor-pointer hover:bg-red-100" onClick={() => setActiveTab && setActiveTab('students')}>
                         <span className="text-xs font-bold text-red-700">고위험군 (High)</span>
                         <span className="text-lg font-bold text-red-800">3명 {'>'}</span>
                      </div>
                   </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                   <h4 className="text-sm font-bold text-gray-700 mb-3">이번 주 LIVE 강의 일정</h4>
                   <div className="space-y-2">
                      {weekly.live.map((l, i) => (
                        <div key={i} className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                           <div className="w-16 text-xs font-bold text-gray-500 text-center border-r border-gray-100 mr-4">{l.day}</div>
                           <div className="flex-1">
                              <div className="text-sm font-bold text-gray-800">{l.title}</div>
                              <div className="text-xs text-gray-500">{l.host}</div>
                           </div>
                           <button className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded font-bold">Zoom Link</button>
                        </div>
                      ))}
                   </div>
                </div>
              </Card>
           </div>
        </div>

        {/* Right Column: Zone 2 & Zone 4 */}
        <div className="space-y-8">
           {/* Zone 2: System Status */}
           <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-gray-400 rounded-full"></span>
                자동화 처리 현황 (Log)
              </h3>
              <Card className="p-4 bg-gray-50 border-gray-200">
                 <div className="space-y-3">
                    {systems.map((sys, i) => (
                       <div key={i} className="flex items-start gap-3 text-sm">
                          <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${sys.status === 'success' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
                          <div className="flex-1">
                             <div className="font-bold text-gray-700 flex justify-between">
                                {sys.name}
                                <span className="text-xs font-normal text-gray-400">{sys.time}</span>
                             </div>
                             <div className={`text-xs ${sys.status === 'success' ? 'text-gray-500' : 'text-red-600 font-bold'}`}>
                                {sys.msg}
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </Card>
           </div>

           {/* Zone 4: Setup Checklist (Conditional) */}
           {!isSetupComplete && (
             <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-6 bg-orange-400 rounded-full"></span>
                  프로그램 셋업 (미완료)
                </h3>
                <Card className="p-4 border-orange-200 bg-orange-50">
                   <div className="space-y-2">
                      {setupList.map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-2 bg-white rounded border border-orange-100">
                            <span className={`text-sm ${item.done ? 'text-gray-400 line-through' : 'text-gray-800 font-bold'}`}>
                               {item.label}
                            </span>
                            {item.done ? (
                               <CheckCircle size={16} className="text-gray-300"/>
                            ) : (
                               <button 
                                 className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold hover:bg-orange-200"
                                 onClick={() => setActiveTab && setActiveTab('setup')}
                               >
                                 설정하기
                               </button>
                            )}
                         </div>
                      ))}
                   </div>
                </Card>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => (
  <div className="space-y-6 animate-in fade-in">
    <SectionHeader 
      title="관리자 대시보드" 
      desc="전사 운영 지표 및 시스템 상태 총괄" 
      badge="Admin Console"
      theme="admin"
    />

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
         { label: '전체 수료율', value: '92.5%', trend: '+1.5%', status: 'good' },
         { label: '전체 취업률', value: '81.4%', trend: '+3.2%', status: 'good' },
         { label: 'API 가동률', value: '99.9%', trend: 'Stable', status: 'good' },
         { label: '자동화 성공', value: '14,205건', trend: 'Daily', status: 'normal' }
      ].map((m, i) => (
        <Card key={i} className="p-5 hover:border-red-200 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-gray-500">{m.label}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${m.status === 'good' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
              {m.trend}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{m.value}</div>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Globe size={18} className="text-red-600"/> 전체 기수 현황
        </h3>
        <div className="space-y-4">
          {['KDT 서비스 기획 5기', '데이터 분석 3기', '풀스택 2기', 'UI/UX 4기'].map((course, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{course}</span>
              <div className="flex items-center gap-4 w-1/2">
                <div className="w-full bg-gray-100 h-2 rounded-full">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: `${85 - i*5}%`}}></div>
                </div>
                <span className="text-xs text-gray-500 font-bold w-8">{85 - i*5}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
         <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Activity size={18} className="text-red-600"/> 시스템 자동화 성공률
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={[
            { name: 'Mon', success: 400, fail: 2 },
            { name: 'Tue', success: 380, fail: 5 },
            { name: 'Wed', success: 420, fail: 1 },
            { name: 'Thu', success: 390, fail: 3 },
            { name: 'Fri', success: 450, fail: 0 },
          ]}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="success" stackId="a" fill="#EF4444" radius={[0,0,4,4]} />
            <Bar dataKey="fail" stackId="a" fill="#1F2937" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  </div>
);

// 수정 7: 관리자 연동 페이지 복원
const AdminIntegration = () => (
  <div className="space-y-6 animate-in fade-in">
    <SectionHeader 
      title="외부 시스템 연동 관리" 
      desc="HRD-Net, LMS, Slack, SMS API 연결 상태 및 로그 관리" 
      badge="Admin Console"
      theme="admin"
      action={<button className="btn-admin"><Zap size={14} className="mr-2"/> 전체 연결 테스트</button>}
    />

    <div className="grid grid-cols-1 gap-6">
      {[
         { id: 'hrd', name: '고용24 (HRD-Net)', status: 'connected', latency: '45ms', lastSync: '1분 전', logs: 1250 },
         { id: 'lms', name: 'Online Lecture Backoffice', status: 'connected', latency: '12ms', lastSync: '실시간', logs: 54300 },
         { id: 'slack', name: 'Slack Workspace', status: 'connected', latency: '89ms', lastSync: '방금', logs: 3200 },
         { id: 'sms', name: 'SMS/Kakao Gateway', status: 'issue', latency: '200ms', lastSync: '10분 전', logs: 850 },
      ].map((sys) => (
        <Card key={sys.id} className="p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${sys.status === 'connected' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {sys.id === 'hrd' && <Server size={24}/>}
            {sys.id === 'lms' && <Video size={24}/>}
            {sys.id === 'slack' && <MessageCircle size={24}/>}
            {sys.id === 'sms' && <Smartphone size={24}/>}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">{sys.name}</h3>
              {sys.status === 'connected' 
                ? <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-200 font-bold">CONNECTED</span>
                : <span className="text-[10px] bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200 font-bold animate-pulse">ISSUE DETECTED</span>
              }
            </div>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Activity size={12}/> Latency: {sys.latency}</span>
              <span className="flex items-center gap-1"><Clock size={12}/> Last Sync: {sys.lastSync}</span>
              <span className="flex items-center gap-1"><FileText size={12}/> Today Logs: {sys.logs}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">로그 보기</button>
            <button className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2">
              <RefreshCw size={14}/> 재동기화
            </button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

/**
 * --------------------------------------------------------------------------
 * MAIN LAYOUT & ROUTING
 * --------------------------------------------------------------------------
 */

export default function DualConsolePlatform() {
  const [consoleMode, setConsoleMode] = useState('operator'); // 'operator' | 'admin'
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Reset tab when switching console
  useEffect(() => {
    setActiveTab('dashboard');
  }, [consoleMode]);

  const renderContent = () => {
    if (consoleMode === 'operator') {
      switch(activeTab) {
        case 'dashboard': return <OperatorDashboard setActiveTab={setActiveTab} />;
        case 'setup': return <ProgramSetup />; 
        case 'recruitment': return <OperatorRecruitment />; 
        case 'students': return <OperatorStudentManagement />; 
        case 'instructors': return <OperatorInstructorManagement />;
        case 'attendance': return <OperatorAttendance />; 
        case 'reports': return <OperatorCounseling />; 
        default: return <PlaceholderPage title="준비 중인 운영 페이지" desc="해당 운영 모듈은 아직 연동되지 않았습니다." icon={<Settings size={48}/>} />;
      }
    } else {
      switch(activeTab) {
        case 'dashboard': return <AdminDashboard />;
        case 'integration': return <AdminIntegration />;
        default: return <PlaceholderPage title="준비 중인 관리 페이지" desc="시스템 설정 모듈을 불러오는 중입니다." icon={<Shield size={48}/>} />;
      }
    }
  };

  return (
    <div className={`flex h-screen font-sans overflow-hidden transition-colors duration-500 ${consoleMode === 'operator' ? 'bg-[#F0FDF9]' : 'bg-[#FFF1F2]'}`}>
      
      {/* SIDEBAR */}
      <aside className={`transition-all duration-300 flex flex-col z-20 shadow-xl ${isSidebarOpen ? 'w-64' : 'w-20'} ${consoleMode === 'operator' ? 'bg-teal-900 text-teal-50' : 'bg-slate-900 text-slate-50'}`}>
        
        {/* Console Switcher Header */}
        <div className="h-20 flex flex-col justify-center px-6 border-b border-white/10">
           <div className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1">Current Console</div>
           <div className="flex items-center justify-between cursor-pointer group" onClick={() => setConsoleMode(prev => prev === 'operator' ? 'admin' : 'operator')}>
             <div className="flex items-center gap-2">
               <div className={`w-2 h-2 rounded-full ${consoleMode === 'operator' ? 'bg-teal-400 shadow-[0_0_10px_#2DD4BF]' : 'bg-red-500 shadow-[0_0_10px_#EF4444]'}`}></div>
               {isSidebarOpen && (
                 <span className="font-bold text-lg tracking-tight">
                   {consoleMode === 'operator' ? 'Operator' : 'Admin'} Console
                 </span>
               )}
             </div>
             {isSidebarOpen && <RefreshCw size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>}
           </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 space-y-2 px-3 custom-scrollbar">
          {consoleMode === 'operator' ? (
            <>
              <div className="px-3 text-[10px] font-bold opacity-50 uppercase tracking-wider mb-2 mt-2">Daily Operations</div>
              <NavBtn icon={<LayoutDashboard/>} label="운영자 대시보드" id="dashboard" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
              <NavBtn icon={<Settings/>} label="프로그램 셋업" id="setup" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
              <NavBtn icon={<UserPlus/>} label="모집 & 선발" id="recruitment" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
              <NavBtn icon={<Users/>} label="수강생 관리" id="students" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
              <NavBtn icon={<UserCheck/>} label="강사/멘토 관리" id="instructors" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
              <NavBtn icon={<CheckSquare/>} label="출결 & 학습 관리" id="attendance" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
              <NavBtn icon={<MessageSquare/>} label="운영 상담" id="reports" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="operator" />
            </>
          ) : (
             <>
              <div className="px-3 text-[10px] font-bold opacity-50 uppercase tracking-wider mb-2 mt-2">System Control</div>
              <NavBtn icon={<LayoutDashboard/>} label="관리자 대시보드" id="dashboard" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="admin" />
              <NavBtn icon={<Link/>} label="외부 시스템 연동" id="integration" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="admin" />
              <NavBtn icon={<Database/>} label="데이터 베이스" id="db" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="admin" />
              <NavBtn icon={<Shield/>} label="권한 및 보안" id="security" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="admin" />
              <NavBtn icon={<Settings/>} label="글로벌 설정" id="settings" active={activeTab} set={setActiveTab} open={isSidebarOpen} theme="admin" />
            </>
          )}
        </nav>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 w-full p-2 hover:bg-white/10 rounded-lg transition-colors">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${consoleMode === 'operator' ? 'bg-teal-700' : 'bg-red-800'}`}>
              {consoleMode === 'operator' ? 'OP' : 'AD'}
            </div>
            {isSidebarOpen && (
              <div className="text-left">
                <div className="text-sm font-medium">{consoleMode === 'operator' ? '김운영 매니저' : '시스템 관리자'}</div>
                <div className="text-[10px] opacity-60">kernel_admin@fastcampus.co.kr</div>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className={`h-16 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm backdrop-blur-sm ${consoleMode === 'operator' ? 'bg-white/80 border-b border-teal-100' : 'bg-white/80 border-b border-red-100'}`}>
           <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-gray-600">
              <Menu size={20} />
            </button>
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            {consoleMode === 'operator' && (
              <div className="flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
                <Filter size={12} />
                <span>KDT 서비스 기획 5기</span>
                <ChevronDown size={12} />
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
             <div className={`text-xs font-bold px-3 py-1 rounded-full border ${consoleMode === 'operator' ? 'bg-teal-50 text-teal-700 border-teal-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                {consoleMode === 'operator' ? '🟢 OPERATIONAL' : '🔴 SYSTEM ADMIN'}
             </div>
             <Bell size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer"/>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {renderContent()}
        </div>
      </main>

       {/* Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 3px; }
        .btn-operator {
          background-color: #0F766E; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600; font-size: 0.875rem;
          transition: all 0.2s; display: flex; items-center;
        }
        .btn-operator:hover { background-color: #115E59; }
        .btn-admin {
          background-color: #B91C1C; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600; font-size: 0.875rem;
          transition: all 0.2s; display: flex; items-center;
        }
        .btn-admin:hover { background-color: #991B1B; }
      `}</style>
    </div>
  );
}

const NavBtn = ({ icon, label, id, active, set, open, theme }) => (
  <button 
    onClick={() => set(id)}
    className={`
      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group relative
      ${active === id 
        ? (theme === 'operator' ? 'bg-teal-600 text-white shadow-lg shadow-teal-900/20' : 'bg-red-700 text-white shadow-lg shadow-red-900/20')
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }
    `}
  >
    {React.cloneElement(icon, { size: 18, className: active === id ? 'text-white' : 'text-gray-400 group-hover:text-white' })}
    {open && <span className="font-medium tracking-tight">{label}</span>}
  </button>
);

const PlaceholderPage = ({ title, desc, icon }) => (
  <div className="flex flex-col items-center justify-center h-[500px] text-gray-300">
    <div className="mb-4 opacity-30">{icon}</div>
    <h3 className="text-xl font-bold text-gray-400">{title}</h3>
    <p className="text-sm mt-2">{desc}</p>
  </div>
);
