import { SectionCard } from '@/components/Common'
import {
  DollarSign,
  ClipboardList,
  Star,
  ShoppingCart,
  ShieldAlert,
  GraduationCap,
  Cpu,
  Rocket,
  TrendingUp,
  Heart,
  Scale,
  Bot,
} from 'lucide-react'

const statusCards = [
  { label: '今日收入', value: '¥1,280', trend: '+12%', good: true, icon: DollarSign, color: 'cyan' },
  { label: '今日任务', value: '3 个', trend: '1个待完成', good: true, icon: ClipboardList, color: 'blue' },
  { label: '当前信用分', value: '782', sub: 'A级', trend: '+18', good: true, icon: Star, color: 'amber' },
  { label: '推荐订单', value: '5 个', trend: '新匹配', good: true, icon: ShoppingCart, color: 'emerald' },
  { label: '合规风险', value: '1 项', trend: '待处理', good: false, icon: ShieldAlert, color: 'rose' },
  { label: '学习进度', value: '72%', trend: '本周+8%', good: true, icon: GraduationCap, color: 'purple' },
]

const actionCards = [
  { title: '生成一个跨境电商客服 Agent', desc: 'AI场景工厂，输入需求自动生成', icon: Cpu, color: 'cyan' },
  { title: '发布一个任务', desc: '快速发布到任务大厅，AI精准匹配', icon: Rocket, color: 'blue' },
  { title: '申请 5 万元信用贷', desc: '信用分A级，银行秒批', icon: DollarSign, color: 'amber' },
  { title: '检查营销文案是否合规', desc: 'AI合规检查器，实时扫描风险词', icon: Scale, color: 'emerald' },
  { title: '生成下周小红书选题', desc: '基于业务关键词，AI生成10个选题', icon: TrendingUp, color: 'purple' },
  { title: '进入 Circle 小组', desc: '5-8人月度闭门会，行业匿名', icon: Heart, color: 'rose' },
]

const yuanfangChats = [
  '元芳，帮我看看这个月收入为什么下降。',
  '元芳，帮我申请算力补贴。',
  '元芳，帮我把这个工具包装成SaaS定价方案。',
  '元芳，帮我生成用户协议。',
]

const recentTasks = [
  { name: '某科技公司官网AI客服搭建', status: '进行中', amount: '¥8,500', deadline: '3天后' },
  { name: '电商产品描述文案优化', status: '待确认', amount: '¥2,200', deadline: '5天后' },
  { name: '数据分析报告生成', status: '已完成', amount: '¥3,800', deadline: '已交付' },
]

export default function Workspace() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">OPC 创业工作台</h1>
          <p className="text-sm text-slate-500">欢迎回来，林某某 · 信用分 782 · A级 · 今日推荐 5 个订单</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据</span>
      </div>

      <div className="grid grid-cols-6 gap-3">
        {statusCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.label} className={`rounded-xl bg-${card.color}-500/5 border border-${card.color}-500/15 p-3.5 hover:bg-${card.color}-500/10 transition-colors`}>
              <div className="flex items-center gap-2 mb-2">
                <Icon size={14} className={`text-${card.color}-400/60`} />
                <span className="text-[11px] text-slate-400">{card.label}</span>
              </div>
              <div className={`text-xl font-bold font-mono text-${card.color}-400`}>{card.value}</div>
              {card.sub && <span className="text-[11px] text-slate-500 ml-1">{card.sub}</span>}
              <div className={`text-[10px] mt-1 ${card.good ? 'text-emerald-400' : 'text-rose-400'}`}>{card.trend}</div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SectionCard title="快速行动" className="col-span-2">
          <div className="grid grid-cols-3 gap-3">
            {actionCards.map((card) => {
              const Icon = card.icon
              return (
                <button
                  key={card.title}
                  className={`rounded-xl bg-white/[0.02] border border-slate-800/30 p-4 text-left hover:bg-white/[0.05] hover:border-slate-700/50 transition-all duration-200 group`}
                >
                  <div className={`w-9 h-9 rounded-lg bg-${card.color}-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={`text-${card.color}-400`} />
                  </div>
                  <div className="text-sm text-slate-200 mb-1 leading-snug">{card.title}</div>
                  <div className="text-[11px] text-slate-500">{card.desc}</div>
                </button>
              )
            })}
          </div>
        </SectionCard>

        <SectionCard title="元芳 AI 助理">
          <div className="space-y-2.5">
            {yuanfangChats.map((chat, i) => (
              <button
                key={i}
                className="w-full text-left px-3 py-2.5 rounded-lg bg-cyan-500/5 border border-cyan-500/10 hover:bg-cyan-500/10 transition-colors group"
              >
                <div className="flex items-start gap-2">
                  <Bot size={14} className="text-cyan-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-300 group-hover:text-cyan-300 transition-colors">{chat}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/30">
            <div className="flex items-center gap-2">
              <input
                placeholder="对元芳说..."
                className="flex-1 bg-white/5 border border-slate-800/50 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/30"
              />
              <button className="px-3 py-2 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors">
                发送
              </button>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SectionCard title="进行中的任务" className="col-span-2">
          <div className="space-y-2.5">
            {recentTasks.map((task) => (
              <div key={task.name} className="flex items-center gap-4 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex-1">
                  <div className="text-sm text-slate-200">{task.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">截止：{task.deadline}</div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded border ${
                  task.status === '已完成' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : task.status === '进行中' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}>{task.status}</span>
                <span className="text-sm font-mono text-amber-400">{task.amount}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="信用分快照">
          <div className="text-center py-2">
            <div className="text-4xl font-bold font-mono text-amber-400 mb-1">782</div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-4">
              <Star size={14} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400">A级</span>
            </div>
            <div className="space-y-2 text-left">
              {[
                { label: '经营健康度', score: 260, max: 300 },
                { label: '履约合规度', score: 210, max: 250 },
                { label: '数字能力', score: 160, max: 200 },
                { label: '社会贡献', score: 110, max: 150 },
                { label: '风险稳定性', score: 42, max: 100 },
              ].map((dim) => (
                <div key={dim.label} className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 w-20">{dim.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400" style={{ width: `${(dim.score / dim.max) * 100}%` }} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 w-8 text-right">{dim.score}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/30 text-[11px] text-slate-500">
              较上周 +18 · <span className="text-emerald-400">距离S级还差68分</span>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
