
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getChatResponse } from '../services/gemini';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: '你好，我是你的护肝小助手。查出脂肪肝不要过于焦虑，只要我们**科学调整饮食**和**生活习惯**，大多数早期脂肪肝是完全可以逆转的。\n\n你可以问我：\n- 饮食建议：*“晚餐想吃火锅该怎么点菜？”*\n- 指标分析：*“B超显示肝脏回声增强是什么意思？”*\n- 运动方案：*“体重85kg，每天该走多少步？”*' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

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

    try {
      const response = await getChatResponse(userMessage, history);
      setMessages(prev => [...prev, { role: 'model', text: response || '抱歉，我目前无法处理这个请求。' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '网络似乎有点问题，请稍后再试。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    if (window.confirm('确定要清除所有聊天记录吗？')) {
      setMessages([messages[0]]);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] md:h-[calc(100vh-10rem)] animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-4 flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-2xl shadow-inner">
            <Bot size={22} />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-sm md:text-base">肝脏健康顾问</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">专家模式已开启</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={clearHistory}
            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
            title="清空记录"
          >
            <Trash2 size={18} />
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 uppercase tracking-tighter">
            <Sparkles size={12} /> Markdown GFM 支持
          </div>
        </div>
      </header>

      {/* Message Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-6 px-1 py-2 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[92%] md:max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm mt-1 border ${
                msg.role === 'user' ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-emerald-500 border-emerald-400 text-white'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-3xl shadow-sm ${
                msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              }`}>
                <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'prose-invert' : 'prose-slate'} 
                  prose-p:leading-relaxed prose-li:my-0 prose-pre:bg-slate-900 prose-pre:text-slate-100
                  prose-table:border prose-table:rounded-xl overflow-hidden`}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 items-center text-slate-400 text-xs ml-1 bg-white/50 px-3 py-2 rounded-2xl border border-slate-50">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <Loader2 size={14} className="animate-spin text-emerald-600" />
              </div>
              <span className="font-medium">正在生成个性化科学建议...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="mt-4 p-1.5 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center gap-2 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="问问小助手：晚餐吃什么？指标高怎么办？"
          className="flex-1 bg-transparent px-5 py-3.5 outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm md:text-base"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="p-3.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-95 flex-shrink-0"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;