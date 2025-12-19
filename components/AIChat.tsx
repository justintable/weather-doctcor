
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getChatResponse } from '../services/gemini';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '你好，我是你的护肝小助手。查出脂肪肝不要过于焦虑，只要我们科学调整饮食和生活习惯，大多数早期脂肪肝是完全可以逆转的。关于饮食、运动或报告单指标，你有什么想问我的吗？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await getChatResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '无法连接到 AI' }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-h-[800px] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-6 flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="font-bold text-slate-800">肝脏健康顾问</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">在线咨询中</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full">
          <Sparkles size={14} /> 基于 Gemini AI 技术
        </div>
      </header>

      {/* Message Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-6 px-4 py-2 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-emerald-500 text-white'
              }`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className={`p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 items-center text-slate-400 text-sm">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Loader2 size={18} className="animate-spin text-emerald-600" />
              </div>
              <span>正在为您生成科学建议...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="mt-6 p-2 bg-white rounded-[2rem] border border-slate-100 shadow-lg flex items-center gap-2">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="例如：我晚餐想吃牛排可以吗？"
          className="flex-1 bg-transparent px-6 py-4 outline-none text-slate-700 placeholder:text-slate-400 font-medium"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="p-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;
