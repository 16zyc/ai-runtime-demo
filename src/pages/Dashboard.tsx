import { Link } from 'react-router-dom'
import {
  Users,
  TrendingUp,
  Award,
  DollarSign,
  Wallet,
  Star,
  Globe,
  ArrowRight,
  Database,
  ChevronRight,
  Cpu,
  ClipboardList,
  ShieldCheck,
  AlertTriangle,
  UserPlus,
  FileSignature,
  GraduationCap,
  BookOpen,
  MessageSquare,
  Zap,
  BarChart3,
  Handshake,
} from 'lucide-react'
import { AnimatedNumber } from '@/components/Common'
import { useRoleStore } from '@/store/roleStore'

const loopSteps = [
  { id: 1, label: 'OPC申请入驻', sub: '提交资料→审批→签约→备案', icon: '📝' },
  { id: 2, label: '赋能开发', sub: '万物生场景工厂+培训+知识库', icon: '🤖' },
  { id: 3, label: '接单交付', sub: '订单撮合→签约→交付→结算', icon: '📋' },
  { id: 4, label: '信用分计算', sub: '五维评分·等级·权益映射', icon: '⭐' },
  { id: 5, label: '驾驶舱洞察', sub: '产业/社保/税收/人才/风险', icon: '📡' },
  { id: 6, label: '主动服务', sub: '政策推送/风险处置/精准施策', icon: '🤝' },
]

const indicatorGroups = [
  {
    title: 'OPC管理指标',
    color: 'cyan',
    items: [
      { label: '入驻OPC', value: 8920, suffix: '人', source: 'OPC管理系统', time: '实时', icon: Users },
      { label: '待审批', value: 12, suffix: '件', source: '审批系统', time: '实时', icon: ClipboardList },
      { label: '本月签约', value: 86, suffix: '份', source: '签约系统', time: '每日', icon: FileSignature },
      { label: '备案完成率', value: 94.2, suffix: '%', source: '备案系统', time: '每日', icon: ShieldCheck },
    ],
  },
  {
    title: '订单运营指标',
    color: 'amber',
    items: [
      { label: '进行中订单', value: 156, suffix: '个', source: '订单管理系统', time: '实时', icon: ClipboardList },
      { label: '本月成交额', value: 42.8, prefix: '¥', suffix: '万', source: '交易流水', time: '每日', icon: DollarSign },
      { label: '撮合成功率', value: 84.7, suffix: '%', source: '撮合系统', time: '每周', icon: Zap },
      { label: '平均交付周期', value: 5.2, suffix: '天', source: '订单管理系统', time: '每周', icon: TrendingUp },
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

const fourModules = [
  {
    title: 'OPC管理系统',
    subtitle: '入驻全生命周期管理',
    path: '/opc-management',
    icon: UserPlus,
    color: 'cyan',
    gradient: 'from-cyan-500/15 to-blue-500/5',
    border: 'border-cyan-500/20 hover:border-cyan-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(0,229,255,0.12)]',
    desc: '申请入住→审批→在线签约→备案管理',
    tags: ['申请入住', '审批管理', '在线签约', '备案管理'],
  },
  {
    title: '赋能开发平台',
    subtitle: '研究院联合元芳"万物生"',
    path: '/empowerment-platform',
    icon: Cpu,
    color: 'amber',
    gradient: 'from-amber-500/15 to-orange-500/5',
    border: 'border-amber-500/20 hover:border-amber-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.12)]',
    desc: 'AI场景工厂+在线培训+知识库+知识问答',
    tags: ['万物生场景工厂', '在线培训', '知识库', '知识问答'],
  },
  {
    title: '订单管理系统',
    subtitle: '全流程订单运营',
    path: '/order-management',
    icon: ClipboardList,
    color: 'emerald',
    gradient: 'from-emerald-500/15 to-green-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.12)]',
    desc: '订单发布→智能撮合/抢单/分配→签约→交付',
    tags: ['订单发布/删除/作废', '智能撮合/抢单/分配', '流单处理', '统计查询'],
  },
  {
    title: '驾驶舱与信用',
    subtitle: '治理洞察+信用评价',
    path: '/panorama',
    icon: Globe,
    color: 'blue',
    gradient: 'from-blue-500/15 to-indigo-500/5',
    border: 'border-blue-500/20 hover:border-blue-400/40',
    glow: 'hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.12)]',
    desc: '产业全景·社保扩面·税收预警·人才洞察·风险处置·信用分',
    tags: ['产业全景', '社保扩面', '税收预警', '人才洞察', '风险处置', '信用分'],
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
          <p className="text-sm text-slate-500">OPC管理·赋能开发·订单运营·治理驾驶舱 四端联动｜当前视角：{roleInfo.label}</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="rounded-xl bg-[#0d1220] border border-slate-800/50 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Database size={16} className="text-cyan-400/60" />
          <h2 className="text-sm font-medium text-slate-200">OPC全生命周期闭环</h2>
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
          ↑ 数据闭环：入驻→赋能→接单→信用提升→权益增加→持续增长
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
          <h2 className="text-base font-medium text-slate-200">四大产品模块</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {fourModules.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.path}
                to={mod.path}
                className={`relative rounded-xl bg-gradient-to-br ${mod.gradient} border ${mod.border} ${mod.glow} p-5 transition-all duration-300 group overflow-hidden`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className={`text-${mod.color}-400`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{mod.title}</div>
                    <div className="text-[10px] text-slate-400">{mod.subtitle}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-3">{mod.desc}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {mod.tags.map((tag) => (
                    <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded bg-${mod.color}-500/10 text-${mod.color}-400/70 border border-${mod.color}-500/10`}>{tag}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-1 text-xs text-${mod.color}-400 group-hover:gap-2 transition-all duration-300`}>
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
