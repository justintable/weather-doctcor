
import React from 'react';
import { 
  TrendingDown, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Flame,
  Droplets,
  Scale
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const mockData = [
  { day: '周一', value: 85.5 },
  { day: '周二', value: 85.2 },
  { day: '周三', value: 84.8 },
  { day: '周四', value: 84.9 },
  { day: '周五', value: 84.3 },
  { day: '周六', value: 84.1 },
  { day: '周日', value: 83.8 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">早安，爱人 ❤️</h1>
          <p className="text-slate-500 mt-1">今天是开始康复计划的第 12 天，继续保持！</p>
        </div>
        <div className="flex gap-2">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-200">轻度脂肪肝 · 改善中</span>
        </div>
      </section>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Scale size={24} /></div>
            <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">-1.7kg</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">当前体重</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">83.8 <span className="text-sm font-normal text-slate-400">kg</span></p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl"><Flame size={24} /></div>
            <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">已达标</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">每日步数</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">10,248 <span className="text-sm font-normal text-slate-400">步</span></p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl"><Droplets size={24} /></div>
            <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded">偏高</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">空腹血糖</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">5.8 <span className="text-sm font-normal text-slate-400">mmol/L</span></p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><CheckCircle2 size={24} /></div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">100%</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">补水进度</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">2,200 <span className="text-sm font-normal text-slate-400">ml</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <TrendingDown className="text-emerald-500" size={20} />
              体重变化趋势
            </h3>
            <select className="bg-slate-50 border-none rounded-lg text-sm font-medium text-slate-600 px-3 py-1 outline-none">
              <option>过去 7 天</option>
              <option>过去 30 天</option>
            </select>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">今日核心任务</h3>
          <div className="space-y-4">
            {[
              { text: '全天戒糖（奶茶/甜点）', done: true, tag: '饮食' },
              { text: '有氧快走 30 分钟', done: false, tag: '运动' },
              { text: '晚餐在 19:00 前结束', done: true, tag: '习惯' },
              { text: '服用复合维生素（如有需要）', done: false, tag: '营养' },
            ].map((task, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${task.done ? 'bg-slate-50 border-transparent opacity-60' : 'bg-white border-slate-100 hover:border-emerald-200'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
                  {task.done && <CheckCircle2 size={16} className="text-white" />}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${task.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{task.text}</p>
                  <span className="text-[10px] uppercase font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded mt-1 inline-block">{task.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-emerald-50 text-emerald-600 rounded-2xl text-sm font-bold hover:bg-emerald-100 transition-colors">
            查看更多任务 <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl flex items-start gap-4">
        <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
          <AlertCircle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-amber-800">科学提示</h4>
          <p className="text-amber-700 text-sm mt-1">脂肪肝的康复不等于节食。长期摄入热量过低会导致营养不良，反而加重肝脏代谢负担。请务必保证足够的蛋白质（如鱼肉、蛋白粉）摄入。</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
