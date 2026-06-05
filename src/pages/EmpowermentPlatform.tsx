import { useState } from 'react'
import { MetricCard, SectionCard } from '@/components/Common'
import {
  Cpu,
  GraduationCap,
  BookOpen,
  MessageSquare,
  Play,
  CheckCircle2,
  Clock,
  Star,
  Search,
  Bot,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

type Tab = 'factory' | 'training' | 'knowledge' | 'qa'

const tabs: { key: Tab; label: string; icon: typeof Cpu }[] = [
  { key: 'factory', label: '万物生场景工厂', icon: Cpu },
  { key: 'training', label: '在线培训', icon: GraduationCap },
  { key: 'knowledge', label: '知识库', icon: BookOpen },
  { key: 'qa', label: '知识问答', icon: MessageSquare },
]

const sceneTemplates = [
  { name: '跨境电商客服 Agent', category: '电商', difficulty: '入门', usage: 1280, icon: '🛒' },
  { name: '小红书内容生成器', category: '内容', difficulty: '入门', usage: 956, icon: '📱' },
  { name: '财税申报助手', category: '财税', difficulty: '进阶', usage: 623, icon: '💰' },
  { name: 'AI设计稿生成', category: '设计', difficulty: '进阶', usage: 512, icon: '🎨' },
  { name: '数据分析报告生成', category: '数据', difficulty: '进阶', usage: 487, icon: '📊' },
  { name: '法律合同审查助手', category: '法律', difficulty: '高级', usage: 345, icon: '⚖️' },
  { name: '医疗健康问答 Agent', category: '医疗', difficulty: '高级', usage: 289, icon: '🏥' },
  { name: '教育课程规划器', category: '教育', difficulty: '入门', usage: 267, icon: '📚' },
]

const courses = [
  { title: 'OPC创业入门：从0到1搭建你的数字业务', category: '创业基础', duration: '4课时', progress: 100, status: 'completed', students: 2340 },
  { title: 'AI工具实战：用元芳提升10倍效率', category: 'AI技能', duration: '6课时', progress: 72, status: 'learning', students: 1856 },
  { title: '跨境电商运营全攻略', category: '业务培训', duration: '8课时', progress: 35, status: 'learning', students: 1230 },
  { title: '财税合规与税务申报实操', category: '合规培训', duration: '5课时', progress: 0, status: 'not_started', students: 980 },
  { title: 'SaaS产品定价与商业化策略', category: '商业化', duration: '4课时', progress: 0, status: 'not_started', students: 756 },
  { title: '数据安全与隐私保护合规指南', category: '合规培训', duration: '3课时', progress: 0, status: 'not_started', students: 645 },
]

const knowledgeCategories = [
  { name: 'OPC政策法规', count: 45, icon: '📋' },
  { name: 'AI开发指南', count: 128, icon: '🤖' },
  { name: '行业案例库', count: 86, icon: '💡' },
  { name: '合规操作手册', count: 32, icon: '🛡️' },
  { name: '税务社保指南', count: 54, icon: '🏦' },
  { name: '营销增长策略', count: 67, icon: '📈' },
]

const knowledgeArticles = [
  { title: 'OPC个体工商户注册流程详解', category: 'OPC政策法规', views: 3456, date: '2026-05-28' },
  { title: '如何用AI Agent自动处理电商售后', category: 'AI开发指南', views: 2890, date: '2026-05-27' },
  { title: '开发区OPC税收优惠政策解读', category: '税务社保指南', views: 2345, date: '2026-05-26' },
  { title: '跨境业务合规要点与风险规避', category: '合规操作手册', views: 1987, date: '2026-05-25' },
  { title: '小红书SEO优化：AI生成内容的流量密码', category: '营销增长策略', views: 1678, date: '2026-05-24' },
]

const qaHistory = [
  { question: 'OPC入驻需要哪些材料？', answer: '需要身份证正反面、学历或资格证明、技能认证证书、银行账户信息。审批通常1-3个工作日完成。', source: 'OPC政策法规', time: '2分钟前' },
  { question: '如何申请信用贷？', answer: '信用分达到A级（700分以上）即可申请。在创业工作台点击"申请信用贷"，系统自动匹配银行，最快当天放款。', source: '金融链接', time: '15分钟前' },
  { question: '社保断缴会影响信用分吗？', answer: '会。社保断缴会影响"风险与稳定性"维度评分，每断缴1个月扣8分。建议及时补缴或参加平台稳定经营计划。', source: '信用分模型', time: '1小时前' },
]

export default function EmpowermentPlatform() {
  const [activeTab, setActiveTab] = useState<Tab>('factory')
  const [qaInput, setQaInput] = useState('')

  const completedCourses = courses.filter((c) => c.status === 'completed').length
  const learningCourses = courses.filter((c) => c.status === 'learning').length

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">赋能开发平台</h1>
          <p className="text-sm text-slate-500">研究院联合元芳提供"万物生"场景工厂——AI赋能开发 + 技能培训 + 知识服务</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="场景模板" value={200} suffix="+" icon={Cpu} color="cyan" />
        <MetricCard label="在线课程" value={courses.length} suffix="门" icon={GraduationCap} color="amber" />
        <MetricCard label="知识文档" value={412} suffix="篇" icon={BookOpen} color="emerald" />
        <MetricCard label="今日问答" value={89} suffix="次" icon={MessageSquare} color="blue" />
      </div>

      <div className="flex gap-2 border-b border-slate-800/50 pb-0">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors border-b-2 -mb-px ${
                isActive ? 'text-cyan-400 border-cyan-400' : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === 'factory' && (
        <div className="space-y-4">
          <SectionCard title="万物生场景工厂——研究院联合元芳赋能开发平台">
            <div className="rounded-lg bg-cyan-500/5 border border-cyan-500/15 p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-cyan-400/60" />
                <span className="text-xs font-medium text-slate-200">平台说明</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                "万物生"场景工厂由研究院联合元芳AI共同打造，提供200+OPC场景模板，支持拖拽式生成AI Agent，输入业务描述即可自动生成轻量级SaaS工具。从"想法→原型→上线"一站式完成。
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {sceneTemplates.map((tpl) => (
                <div key={tpl.name} className="rounded-xl bg-white/[0.02] border border-slate-800/30 p-4 hover:bg-white/[0.05] hover:border-slate-700/50 transition-all duration-200 group cursor-pointer">
                  <div className="text-2xl mb-3">{tpl.icon}</div>
                  <div className="text-sm text-slate-200 mb-1">{tpl.name}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400/70 border border-cyan-500/10">{tpl.category}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      tpl.difficulty === '入门' ? 'bg-emerald-500/10 text-emerald-400' : tpl.difficulty === '进阶' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>{tpl.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">{tpl.usage} 人使用</span>
                    <span className="text-xs text-cyan-400 group-hover:gap-2 flex items-center gap-1 transition-all">
                      使用 <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {activeTab === 'training' && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4 text-center">
              <CheckCircle2 size={20} className="text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-emerald-400">{completedCourses}</div>
              <div className="text-[11px] text-slate-400">已完成课程</div>
            </div>
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/15 p-4 text-center">
              <Play size={20} className="text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-cyan-400">{learningCourses}</div>
              <div className="text-[11px] text-slate-400">学习中课程</div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/15 p-4 text-center">
              <Star size={20} className="text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-amber-400">3</div>
              <div className="text-[11px] text-slate-400">获得认证</div>
            </div>
          </div>

          <SectionCard title="课程列表">
            <div className="space-y-2">
              {courses.map((course) => (
                <div key={course.title} className="flex items-center gap-4 px-4 py-3.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    course.status === 'completed' ? 'bg-emerald-500/10' : course.status === 'learning' ? 'bg-cyan-500/10' : 'bg-slate-800/50'
                  }`}>
                    {course.status === 'completed' ? <CheckCircle2 size={18} className="text-emerald-400" /> : course.status === 'learning' ? <Play size={18} className="text-cyan-400" /> : <Clock size={18} className="text-slate-500" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-200 mb-1">{course.title}</div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400/70 border border-cyan-500/10">{course.category}</span>
                      <span className="text-[10px] text-slate-500">{course.duration}</span>
                      <span className="text-[10px] text-slate-500">{course.students}人在学</span>
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-slate-500">进度</span>
                      <span className="text-[10px] font-mono text-slate-400">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${
                        course.status === 'completed' ? 'bg-emerald-400' : course.status === 'learning' ? 'bg-cyan-400' : 'bg-slate-600'
                      }`} style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <button className={`text-[11px] px-3 py-1.5 rounded-lg border transition-colors ${
                    course.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : course.status === 'learning' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                        : 'bg-white/5 text-slate-400 border-slate-700'
                  }`}>
                    {course.status === 'completed' ? '复习' : course.status === 'learning' ? '继续学习' : '开始学习'}
                  </button>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {activeTab === 'knowledge' && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input placeholder="搜索知识库..." className="w-full bg-white/5 border border-slate-800/50 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/30" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {knowledgeCategories.map((cat) => (
              <div key={cat.name} className="rounded-xl bg-white/[0.02] border border-slate-800/30 p-4 hover:bg-white/[0.05] hover:border-slate-700/50 transition-all cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{cat.icon}</span>
                  <div>
                    <div className="text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">{cat.name}</div>
                    <div className="text-[10px] text-slate-500">{cat.count} 篇文档</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionCard title="热门文档">
            <div className="space-y-2">
              {knowledgeArticles.map((article) => (
                <div key={article.title} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                  <BookOpen size={14} className="text-cyan-400/40" />
                  <div className="flex-1">
                    <div className="text-xs text-slate-200 group-hover:text-cyan-300 transition-colors">{article.title}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400/70 border border-cyan-500/10">{article.category}</span>
                      <span className="text-[10px] text-slate-500">{article.views} 次浏览</span>
                      <span className="text-[10px] text-slate-600">{article.date}</span>
                    </div>
                  </div>
                  <ArrowRight size={12} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {activeTab === 'qa' && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <SectionCard title="向元芳提问" className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Bot size={20} className="text-cyan-400" />
                <span className="text-sm text-slate-200">元芳知识问答</span>
                <span className="text-[10px] text-slate-500">——基于知识库的智能问答，随时解答OPC经营疑问</span>
              </div>
              <div className="space-y-3 mb-4">
                {qaHistory.map((qa, i) => (
                  <div key={i} className="rounded-lg bg-white/[0.02] border border-slate-800/30 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/10">提问</span>
                      <span className="text-xs text-slate-200">{qa.question}</span>
                    </div>
                    <div className="flex items-start gap-2 ml-4">
                      <Bot size={12} className="text-cyan-400/60 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400 leading-relaxed">{qa.answer}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] text-slate-600">来源：{qa.source}</span>
                          <span className="text-[10px] text-slate-600">{qa.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={qaInput}
                  onChange={(e) => setQaInput(e.target.value)}
                  placeholder="输入你的问题，元芳为你解答..."
                  className="flex-1 bg-white/5 border border-slate-800/50 rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/30"
                />
                <button className="px-4 py-2.5 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors flex items-center gap-1.5">
                  <Bot size={12} /> 提问
                </button>
              </div>
            </SectionCard>

            <SectionCard title="热门问题">
              <div className="space-y-2">
                {[
                  'OPC入驻需要哪些材料？',
                  '如何申请信用贷？',
                  '社保断缴会影响信用分吗？',
                  '如何发布任务到任务大厅？',
                  'AI场景工厂怎么使用？',
                  '税务申报流程是什么？',
                  '如何加入Circle小组？',
                  '信用分怎么快速提升？',
                ].map((q, i) => (
                  <button key={i} className="w-full text-left px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/10 transition-colors group">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] w-5 h-5 rounded bg-slate-800/50 flex items-center justify-center text-slate-500 flex-shrink-0">{i + 1}</span>
                      <span className="text-xs text-slate-300 group-hover:text-cyan-300 transition-colors">{q}</span>
                    </div>
                  </button>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      )}
    </div>
  )
}
