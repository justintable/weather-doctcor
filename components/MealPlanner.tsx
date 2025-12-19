
import React from 'react';
import { Leaf, Info, Coffee, Sun, Moon, UtensilsCrossed } from 'lucide-react';

const MealPlanner: React.FC = () => {
  const mealPlans = [
    {
      time: '早餐 (07:00 - 08:30)',
      icon: Coffee,
      color: 'bg-orange-50 text-orange-600',
      title: '高纤低糖组合',
      menu: ['无糖全燕麦片 1碗 (配低脂奶)', '水煮蛋 1个', '新鲜蓝莓 一小把', '黑咖啡 (不加糖奶)'],
      tips: '燕麦富含β-葡聚糖，有助于降低血脂。'
    },
    {
      time: '中餐 (11:30 - 13:00)',
      icon: Sun,
      color: 'bg-emerald-50 text-emerald-600',
      title: '均衡营养地中海式',
      menu: ['清蒸鳕鱼/鸡胸肉 150g', '糙米饭/藜麦饭 1小碗', '清炒西兰花/西蓝花 大份', '橄榄油拌西红柿'],
      tips: '橄榄油是不饱和脂肪酸的优质来源。'
    },
    {
      time: '晚餐 (17:30 - 19:00)',
      icon: Moon,
      color: 'bg-indigo-50 text-indigo-600',
      title: '轻盈低卡舒缓',
      menu: ['豆腐海带汤', '清拌菠菜/白菜', '蒸南瓜 1小块', '原味无糖酸奶 100ml'],
      tips: '晚餐应在睡前至少3小时完成，避免肝脏在夜间高负荷工作。'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row gap-4 justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">科学膳食指南</h1>
          <p className="text-slate-500 mt-1">脂肪肝逆转的核心是：低糖、低脂、高纤维、优质蛋白。</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-sm font-bold border border-emerald-100">
            <Leaf size={18} /> 地中海饮食模式
          </div>
        </div>
      </header>

      {/* Meal Cards */}
      <div className="space-y-6">
        {mealPlans.map((plan, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row">
              <div className={`p-8 md:w-64 flex flex-col items-center justify-center text-center ${plan.color}`}>
                <plan.icon size={48} className="mb-4" />
                <h3 className="font-bold">{plan.time}</h3>
                <p className="text-sm opacity-80 mt-1">{plan.title}</p>
              </div>
              <div className="p-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-slate-800 font-bold mb-4 flex items-center gap-2">
                    <UtensilsCrossed size={18} className="text-slate-400" /> 推荐食谱
                  </h4>
                  <ul className="space-y-3">
                    {plan.menu.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col">
                  <h4 className="text-slate-800 font-bold mb-3 flex items-center gap-2 text-sm">
                    <Info size={16} className="text-slate-400" /> 康复小贴士
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    “{plan.tips}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prohibited Foods */}
      <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl">
        <h3 className="text-rose-800 font-bold text-lg mb-6 flex items-center gap-2">
          慎食/禁食清单 (红灯区)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: '含糖饮料', desc: '奶茶、可乐、果汁' },
            { name: '加工肉类', desc: '腊肉、香肠、午餐肉' },
            { name: '高度加工碳水', desc: '白面包、甜饼干' },
            { name: '酒精', desc: '肝脏最大的敌人' },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 p-4 rounded-2xl border border-rose-200">
              <p className="font-bold text-rose-700">{item.name}</p>
              <p className="text-xs text-rose-600/70 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
