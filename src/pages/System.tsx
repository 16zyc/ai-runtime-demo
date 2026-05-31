import { SectionCard } from '@/components/Common'
import { Database, UserCog, Cable, FileText } from 'lucide-react'

const systemModules = [
  {
    title: '数据源管理',
    icon: Database,
    desc: '管理平台数据接入源，包括OPC行为数据、交易流水、政务接口等',
    items: [
      { name: 'OPC行为数据', status: '已连接', records: '1,245万条/日' },
      { name: '交易流水', status: '已连接', records: '8,200万/月' },
      { name: '税务接口', status: '对接中', records: '实时' },
      { name: '人社局接口', status: '对接中', records: '每日同步' },
      { name: '支付流水', status: '已连接', records: '实时' },
    ],
  },
  {
    title: '角色权限',
    icon: UserCog,
    desc: '管理不同角色的数据访问权限和操作权限',
    items: [
      { name: '管委会领导', status: '全部模块', records: '查看+导出' },
      { name: '税务局', status: '税收预警模块', records: '查看+处置' },
      { name: '人社局', status: '社保扩面模块', records: '查看+处置' },
      { name: '招商局', status: '人才洞察+创新增长', records: '查看+导出' },
      { name: 'OPC创业者', status: '个人数据', records: '查看+授权' },
    ],
  },
  {
    title: 'API 接入',
    icon: Cable,
    desc: '开放平台API，供生态伙伴和第三方系统接入',
    items: [
      { name: '信用分查询API', status: '已上线', records: '调用 2.3万/日' },
      { name: '任务发布API', status: '已上线', records: '调用 860/日' },
      { name: '风险预警推送API', status: '开发中', records: '-' },
      { name: '数据导出API', status: '已上线', records: '调用 120/日' },
    ],
  },
  {
    title: '审计日志',
    icon: FileText,
    desc: '记录所有数据访问和操作行为，确保合规可追溯',
    items: [
      { name: '今日访问记录', status: '1,245条', records: '正常' },
      { name: '数据导出记录', status: '23条', records: '已审批' },
      { name: '权限变更记录', status: '3条', records: '已审批' },
      { name: '异常访问告警', status: '0条', records: '正常' },
    ],
  },
]

export default function SystemPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">系统管理</h1>
          <p className="text-sm text-slate-500">数据源、角色权限、API接入、审计日志</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {systemModules.map((mod) => {
          const Icon = mod.icon
          return (
            <SectionCard key={mod.title} title={mod.title}>
              <div className="flex items-center gap-2 mb-4">
                <Icon size={16} className="text-cyan-400/60" />
                <p className="text-xs text-slate-400">{mod.desc}</p>
              </div>
              <div className="space-y-2">
                {mod.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                    <span className="text-xs text-slate-200 flex-1">{item.name}</span>
                    <span className="text-[11px] text-slate-400">{item.status}</span>
                    <span className="text-[10px] text-slate-500">{item.records}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          )
        })}
      </div>
    </div>
  )
}
