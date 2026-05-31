import { Link } from 'react-router-dom'
import {
  Users,
  TrendingUp,
  Award,
  DollarSign,
  Wallet,
  Rocket,
  Star,
  Globe,
  ArrowRight,
  Database,
  ChevronRight,
  Cpu,
  ClipboardList,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react'
import { AnimatedNumber } from '@/components/Common'
import { useRoleStore } from '@/store/roleStore'

const loopSteps = [
  { id: 1, label: 'OPC创业者', sub: '使用AI工具/接单/培训/合规', icon: '🚀' },
  { id: 2, label: '沉淀数据', sub: '行为/交易/合规/成长数据', icon: '📊' },
  { id: 3, label: '信用分计算', sub: '五维评分·等级·权益映射', icon: '⭐' },
  { id: 4, label: '分配权益', sub: '金融/任务/算力/培训/政策', icon: '🎁' },
  { id: 5, label: '驾驶舱洞察', sub: '产业/社保/税收/人才/风险', icon: '📡' },
  { id: 6, label: '主动服务', sub: '政策推送/风险处置/精准施策', icon: '🤝' },
]

const indicatorGroups = [
  {
    title: '创业侧指标',
    color: 'cyan',
    items: [
      { label: '活跃OPC', value: 8920, suffix: '人', source: '平台行为数据', time: '实时', icon: Users },
      { label: '任务成交额', value: 2860, prefix: '¥', suffix: '万', source: '交易流水', time: '每日', icon: DollarSign },
      { label: 'AI工具调用', value: 45600, suffix: '次', source: '平台行为数据', time: '实时', icon: Cpu },
      { label: '培训完成率', value: 72, suffix: '%', source: '培训认证系统', time: '每周', icon: ClipboardList },
    ],
  },
  {
    title: '信用侧指标',
    color: 'amber',
    items: [
      { label: '平均信用分', value: 682, suffix: '分', source: '信用分模型', time: '每周', icon: Star },
      { label: 'A级以上人数', value: 4758, suffix: '人', source: '信用分模型', time: '每周', icon: Award },
      { label: '信用贷申请', value: 156, suffix: '笔', source: '金融对接系统', time: '每日', icon: Wallet },
      { label: '申诉处理中', value: 12, suffix: '件', source: '申诉系统', time: '实时', icon: ShieldCheck },
    ],
  },
  {
    title: '治理侧指标',
    color: 'emerald',
    items: [
      { label: '社保扩面线索', value: 234, suffix: '条', source: '社保接口+平台数据', time: '每日', icon: ShieldCheck },
      { label: '税收风险线索', value: 18, suffix: '条', source: '税务接口+平台流水', time: '每日', icon: AlertTriangle },
      { label: '人才流失预警', value: 12, suffix: '人', source: '信用分模型+行为数据', time: '每周', icon: Users },
      { label: '已处置工单', value: 87, suffix: '件', source: '工单系统', time: '实时', icon: ClipboardList },
    ],
  },
]

const threePillars = [
  {
    title: '让创业者跑得快',
    subtitle: 'OPC 创业服务体系',
    path: '/workspace',
    icon: Rocket,
    color: 'cyan',
    gradient: 'from-cyan-500/15 to-blue-500/5',
    border: 'border-cyan-500/20 hover:border-cyan-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(0,229,255,0.12)]',
    desc: '六大能力引擎驱动OPC全生命周期成长',
    tags: ['AI场景工厂', '技能培训', '任务撮合', '增长商业化', '韧性支持', '合规风控'],
  },
  {
    title: '让价值可衡量',
    subtitle: 'OPC 信用分枢纽',
    path: '/credit',
    icon: Star,
    color: 'amber',
    gradient: 'from-amber-500/15 to-orange-500/5',
    border: 'border-amber-500/20 hover:border-amber-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.12)]',
    desc: '五维评分·等级权益·可解释·可授权·可流转',
    tags: ['经营健康度 300分', '履约合规度 250分', '数字能力 200分', '社会贡献 150分', '风险稳定性 100分'],
  },
  {
    title: '让政府看得清',
    subtitle: '产业治理驾驶舱',
    path: '/panorama',
    icon: Globe,
    color: 'emerald',
    gradient: 'from-emerald-500/15 to-green-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.12)]',
    desc: '实时洞察·精准监管·主动服务·闭环处置',
    tags: ['产业全景', '社保扩面', '税收预警', '人才洞察', '风险处置'],
  },
]

export default function Dashboard() {
  const { getRoleInfo } = useRoleStore()
  const roleInfo = getRoleInfo()

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">平台运行总览</h1>
          <p className="text-sm text-slate-500">创业服务、信用评价、治理驾驶舱三端联动｜当前视角：{roleInfo.label}</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="rounded-xl bg-[#0d1220] border border-slate-800/50 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Database size={16} className="text-cyan-400/60" />
          <h2 className="text-sm font-medium text-slate-200">数据—信用—治理—服务 闭环</h2>
          <span className="text-[10px] text-slate-500 ml-2">平台核心运转逻辑</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          {loopSteps.map((step, i) => (
            <div key={step.id} className="flex items-center gap-2 flex-1">
              <div className="flex-1 rounded-xl bg-white/[0.02] border border-slate-800/50 p-3.5 text-center hover:bg-white/[0.04] transition-colors">
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-xs font-medium text-white mb-1">{step.label}</div>
                <div className="text-[10px] text-slate-500 leading-relaxed">{step.sub}</div>
              </div>
              {i < loopSteps.length - 1 && <ChevronRight size={16} className="text-slate-700 flex-shrink-0" />}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
          ↑ 数据闭环：OPC增长 → 信用提升 → 权益增加 → 持续增长
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-medium text-slate-200">三端运行指标</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {indicatorGroups.map((group) => (
            <div key={group.title} className="rounded-xl bg-[#0d1220] border border-slate-800/50 p-4">
              <div className={`text-xs font-medium text-${group.color}-400 mb-3`}>{group.title}</div>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <Icon size={14} className={`text-${group.color}-400/40`} />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-1">
                          <span className={`text-lg font-bold font-mono text-${group.color}-400`}>
                            <AnimatedNumber value={item.value} suffix={item.suffix} prefix={item.prefix || ''} />
                          </span>
                          <span className="text-xs text-slate-400">{item.label}</span>
                        </div>
                        <div className="text-[10px] text-slate-600">来源：{item.source} · {item.time}更新</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-medium text-slate-200">三大产品体系</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {threePillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Link
                key={pillar.path}
                to={pillar.path}
                className={`relative rounded-xl bg-gradient-to-br ${pillar.gradient} border ${pillar.border} ${pillar.glow} p-6 transition-all duration-300 group overflow-hidden`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className={`text-${pillar.color}-400`} />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{pillar.title}</div>
                    <div className="text-[11px] text-slate-400">{pillar.subtitle}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-4">{pillar.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className={`text-[10px] px-2 py-0.5 rounded bg-${pillar.color}-500/10 text-${pillar.color}-400/70 border border-${pillar.color}-500/10`}>{tag}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-1 text-xs text-${pillar.color}-400 group-hover:gap-2 transition-all duration-300`}>
                  <span>进入查看</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
