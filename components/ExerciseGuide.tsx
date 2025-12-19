
import React from 'react';
import { Bike, Timer, Zap, MapPin, Award } from 'lucide-react';

const ExerciseGuide: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header>
        <h1 className="text-3xl font-bold text-slate-800">运动处方</h1>
        <p className="text-slate-500 mt-1">运动不仅是消耗热量，更是调节肝脏胰岛素敏感性的良药。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Aerobic Training */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:border-emerald-200 transition-all">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-6">
            <Timer size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">有氧耐力训练</h2>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">每周至少 150 分钟的中等强度有氧运动。目标心率区间：(220-年龄) × 60%~70%。</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <Bike className="text-slate-400" />
              <div>
                <p className="font-bold text-slate-700">快走 / 慢跑 / 骑行</p>
                <p className="text-xs text-slate-400">30-45 分钟 / 次 · 每周 5 次</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <Zap className="text-slate-400" />
              <div>
                <p className="font-bold text-slate-700">游泳</p>
                <p className="text-xs text-slate-400">45 分钟 / 次 · 强力燃脂</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resistance Training */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:border-blue-200 transition-all">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6">
            <Award size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">抗阻力训练</h2>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">肌肉量的增加能显著提升基础代谢率。推荐每周进行 2-3 次全身主要肌群的训练。</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <MapPin className="text-slate-400" />
              <div>
                <p className="font-bold text-slate-700">自重深蹲 / 俯卧撑</p>
                <p className="text-xs text-slate-400">3 组 x 15 次 · 基础动作</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <Zap className="text-slate-400" />
              <div>
                <p className="font-bold text-slate-700">哑铃操 / 弹力带</p>
                <p className="text-xs text-slate-400">20 分钟 / 次 · 塑造肌肉</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-10 rounded-3xl text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-4">关于“坚持”的科学</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h4 className="font-bold text-lg mb-2">微习惯策略</h4>
            <p className="text-emerald-100 text-sm">哪怕只走 10 分钟也比坐着强。从最简单且不会产生抗拒感的动作开始。</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h4 className="font-bold text-lg mb-2">监测心率</h4>
            <p className="text-emerald-100 text-sm">佩戴手环确保处于“燃脂区间”。如果不喘且能说话，说明强度偏低。</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h4 className="font-bold text-lg mb-2">即时反馈</h4>
            <p className="text-emerald-100 text-sm">记录每一次出汗。研究表明，记录运动数据能提升 40% 的依从性。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseGuide;
