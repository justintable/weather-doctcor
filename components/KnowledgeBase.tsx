
import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  PlayCircle, 
  FileText, 
  Clock, 
  Lightbulb, 
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Bookmark
} from 'lucide-react';
import { Article } from '../types';

const ARTICLES: Article[] = [
  {
    id: '1',
    title: '什么是脂肪肝？它是如何形成的？',
    category: '基础知识',
    readTime: '5 min',
    description: '带你深入了解肝脏脂肪堆积的生理过程，揭开“沉默杀手”的面纱。',
    content: [
      {
        sectionTitle: '脂肪肝的本质',
        paragraphs: [
          '正常肝脏中的脂肪含量通常低于5%。当由于各种原因导致肝细胞内脂肪（主要是甘油三酯）堆积超过肝重量的5%，或者显微镜下超过30%的肝细胞发生脂肪变性时，就称为脂肪肝。',
          '它通常被称为“沉默的杀手”，因为在早期（单纯性脂肪肝阶段），身体几乎没有任何症状，只有通过体检B超才能发现。'
        ]
      },
      {
        sectionTitle: '它是如何形成的？',
        paragraphs: [
          '简单来说，就是“进的多，出的少”。当你摄入的热量（尤其是精制碳水和油脂）超过了身体消耗和转运的能力，多余的能量就会被肝脏转化为脂肪储存起来。',
          '此外，胰岛素抵抗是核心机制。当身体对胰岛素不敏感时，脂肪酸会大量涌入肝脏，加剧堆积。'
        ]
      }
    ],
    actionSteps: [
      '每半年进行一次肝脏B超检查',
      '限制含糖饮料的摄入，从源头减少果糖转化为脂肪',
      '戒烟限酒，减轻肝脏解毒负担'
    ]
  },
  {
    id: '2',
    title: '转氨酶偏高意味着什么？看懂化验单',
    category: '医学解读',
    readTime: '8 min',
    description: 'ALT、AST、GGT...这些指标代表什么？专家手把手教你看懂体检报告。',
    content: [
      {
        sectionTitle: '核心指标详解',
        paragraphs: [
          'ALT（丙氨酸氨基转移酶）：肝细胞受损最敏感的指标。只要有1%的肝细胞坏死，ALT就会翻倍。',
          'AST（天门冬氨酸氨基转移酶）：不仅存在于肝脏，也存在于心肌和肌肉。如果AST/ALT比值升高，往往提示肝损伤程度较深。',
          'GGT（谷氨酰转肽酶）：通常与酒精损伤或胆道梗阻有关。非酒精性脂肪肝患者如果GGT升高，提示存在肝纤维化风险。'
        ]
      },
      {
        sectionTitle: '指标正常就安全吗？',
        paragraphs: [
          '不一定。部分非酒精性脂肪肝患者即使肝脏已经存在炎症，转氨酶仍可能在正常范围内。因此，必须结合B超或肝脏瞬时弹性检测（FibroScan）来综合判断。'
        ]
      }
    ],
    actionSteps: [
      '对比历年体检报告，观察指标趋势而非单次数值',
      '如果ALT超过正常值2倍以上，必须前往消化科或肝病科就诊',
      '抽血前三天避免剧烈运动和饮酒，以免干扰结果'
    ]
  },
  {
    id: '3',
    title: '地中海饮食：逆转脂肪肝的黄金标准',
    category: '饮食科普',
    readTime: '10 min',
    description: '科学证明，这是目前对肝脏最友好的膳食模式，好学又好吃。',
    content: [
      {
        sectionTitle: '为什么推荐地中海饮食？',
        paragraphs: [
          '这种饮食模式强调摄入大量蔬菜、水果、全谷物、豆类和坚果，并以橄榄油作为主要脂肪来源。',
          '它富含抗氧化剂和单不饱和脂肪酸，能显著降低肝脏炎症水平，改善胰岛素敏感性。'
        ]
      },
      {
        sectionTitle: '实操三原则',
        paragraphs: [
          '1. 优质脂肪：用橄榄油或亚麻籽油代替动物油。每天一小把无盐坚果。',
          '2. 优质蛋白：减少红肉（猪牛羊）摄入，每周至少吃两次深海鱼（如三文鱼、鲭鱼）。',
          '3. 粗粮替代：将白米饭换成燕麦、藜麦或糙米。'
        ]
      }
    ],
    actionSteps: [
      '每天保证至少500克（1斤）深色蔬菜',
      '烹饪方式改为清蒸、水煮或低温慢煎',
      '控制总热量，维持每餐7分饱'
    ]
  },
  {
    id: '4',
    title: '深蹲与有氧：哪种运动对肝脏更好？',
    category: '运动科学',
    readTime: '7 min',
    description: '抗阻力训练和有氧运动如何分工协作，达到最佳燃脂效果？',
    content: [
      {
        sectionTitle: '有氧运动是基础',
        paragraphs: [
          '快走、慢跑、游泳等有氧运动能直接消耗肝脏积存的脂肪。研究表明，即使体重没有显著下降，坚持有氧运动也能减少肝脏脂肪含量。'
        ]
      },
      {
        sectionTitle: '力量训练是关键',
        paragraphs: [
          '深蹲、俯卧撑等抗阻训练能增加肌肉量。肌肉是血糖最大的“仓库”，肌肉量增加能改善胰岛素抵抗，从根本上切断脂肪堆积的路径。'
        ]
      }
    ],
    actionSteps: [
      '每周3-5次中等强度有氧运动（微微出汗，能说话但不能唱歌）',
      '每周2次力量训练，重点锻炼大腿和背部核心肌群',
      '减少久坐时间，每坐1小时起来活动5分钟'
    ]
  }
];

const KnowledgeBase: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedArticle) {
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 pb-20">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm">返回知识库</span>
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="h-64 relative">
             <img 
               src={`https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200`} 
               className="w-full h-full object-cover"
               alt="header"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             <div className="absolute bottom-8 left-8">
               <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg mb-4 inline-block">
                 {selectedArticle.category}
               </span>
               <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">{selectedArticle.title}</h1>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 mb-10 text-slate-400 text-sm border-b border-slate-50 pb-6">
               <span className="flex items-center gap-2"><Clock size={16} /> 预计阅读: {selectedArticle.readTime}</span>
               <span className="flex items-center gap-2"><Bookmark size={16} /> 专业审阅版</span>
            </div>

            <div className="prose prose-slate max-w-none space-y-10">
              {selectedArticle.content.map((section, idx) => (
                <section key={idx}>
                  <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                    {section.sectionTitle}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-600 leading-relaxed mb-4 text-lg">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Improvement Steps Box */}
            <div className="mt-12 bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
              <h3 className="text-emerald-800 font-bold text-xl mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" /> 如何开始改善？
              </h3>
              <div className="space-y-4">
                {selectedArticle.actionSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                    <div className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-slate-700 font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
               <AlertTriangle className="text-amber-500 flex-shrink-0" />
               <p className="text-xs text-amber-800 leading-relaxed">
                 温馨提示：以上内容仅供科普参考，不作为临床诊断依据。由于每个人的身体状况（如肝纤程度、并发症等）不同，请在专业医生的指导下调整您的生活计划。
               </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <header className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <BookOpen className="text-emerald-600" size={32} />
            肝脏健康大讲堂
          </h1>
          <p className="text-slate-500 mt-1">了解肝脏，是战胜脂肪肝的第一步。点击文章查看详细改善方法。</p>
        </div>
      </header>

      {/* Featured Insight Card */}
      <div className="bg-emerald-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-emerald-100">
        <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-md">
          <Lightbulb size={48} className="text-emerald-50" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">今日核心科普：肝脏的再生能力</h2>
          <p className="text-emerald-50 text-sm leading-relaxed max-w-2xl">
            肝脏是人体唯一具有强大再生能力的器官。只要我们通过科学的饮食和运动去掉多余的脂肪，受损的肝细胞就能逐渐恢复功能。
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARTICLES.map((article) => (
          <div 
            key={article.id} 
            onClick={() => {
              setSelectedArticle(article);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                  {article.category}
                </span>
                <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                  <Clock size={12} /> {article.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-tight mb-3">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                {article.description}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-emerald-600 font-bold text-sm">
              <span className="flex items-center gap-1">阅读全文 <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
              <FileText size={20} className="text-slate-100 group-hover:text-emerald-50 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Video Recommendations Section */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <PlayCircle className="text-emerald-500" size={24} /> 推荐科普视频
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative group overflow-hidden rounded-3xl aspect-video bg-slate-200 cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="专家访谈" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-emerald-500/80 backdrop-blur-md rounded-full text-white">
                  <PlayCircle size={20} />
                </div>
              </div>
              <h4 className="text-white font-bold text-lg">专家访谈：脂肪肝逆转的三个核心阶段</h4>
              <p className="text-white/70 text-sm mt-1">来源：医学科普频道 · 12.5k 观看</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl aspect-video bg-slate-200 cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" alt="科普视频" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-emerald-500/80 backdrop-blur-md rounded-full text-white">
                  <PlayCircle size={20} />
                </div>
              </div>
              <h4 className="text-white font-bold text-lg">5分钟带你了解肝脏脂肪代谢全过程</h4>
              <p className="text-white/70 text-sm mt-1">来源：科学早知道 · 8.9k 观看</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;
