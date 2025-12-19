
import React, { useState } from 'react';
import { 
  Heart, 
  Utensils, 
  Activity, 
  MessageCircle, 
  BookOpen, 
  LayoutDashboard,
  Menu,
  X
} from 'lucide-react';
import { AppTab } from './types';
import Dashboard from './components/Dashboard';
import MealPlanner from './components/MealPlanner';
import ExerciseGuide from './components/ExerciseGuide';
import AIChat from './components/AIChat';
import KnowledgeBase from './components/KnowledgeBase';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: AppTab.DASHBOARD, name: '总览', icon: LayoutDashboard },
    { id: AppTab.DIET, name: '科学饮食', icon: Utensils },
    { id: AppTab.EXERCISE, name: '运动处方', icon: Activity },
    { id: AppTab.AI_CHAT, name: 'AI 咨询', icon: MessageCircle },
    { id: AppTab.KNOWLEDGE, name: '知识库', icon: BookOpen },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.DASHBOARD: return <Dashboard />;
      case AppTab.DIET: return <MealPlanner />;
      case AppTab.EXERCISE: return <ExerciseGuide />;
      case AppTab.AI_CHAT: return <AIChat />;
      case AppTab.KNOWLEDGE: return <KnowledgeBase />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden bg-emerald-600 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <Heart className="fill-white" size={24} />
          <span className="font-bold text-lg">护肝卫士</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Sidebar / Desktop Navigation */}
      <nav className={`
        fixed inset-0 z-40 bg-emerald-700 text-white transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:flex md:flex-col
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 hidden md:flex items-center gap-3">
          <div className="bg-white p-2 rounded-xl">
            <Heart className="text-emerald-600 fill-emerald-600" size={28} />
          </div>
          <span className="font-bold text-xl tracking-tight">护肝卫士</span>
        </div>

        <div className="flex flex-col gap-2 p-4 mt-20 md:mt-0 flex-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMenuOpen(false);
              }}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                ? 'bg-emerald-500 shadow-lg translate-x-1' 
                : 'hover:bg-emerald-600/50'
              }`}
            >
              <item.icon size={22} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-emerald-600/50">
          <p className="text-xs text-emerald-200 text-center">科学调理 · 肝脏新生</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
