import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  UserPlus,
  ClipboardCheck,
  FileSignature,
  Archive,
  Cpu,
  GraduationCap,
  BookOpen,
  MessageSquare,
  ClipboardList,
  Zap,
  BarChart3,
  Star,
  Globe,
  ShieldCheck,
  AlertTriangle,
  Users,
  Bell,
  Database,
  UserCog,
  Cable,
  FileText,
  ChevronRight,
  ChevronDown,
  Shield,
} from 'lucide-react'
import { useState } from 'react'
import { useRoleStore, roles } from '@/store/roleStore'

const allNavGroups = [
  {
    label: '平台总览',
    items: [
      { path: '/', label: '总览首页', icon: LayoutDashboard },
    ],
  },
  {
    label: 'OPC管理',
    items: [
      { path: '/opc-management', label: 'OPC管理系统', icon: UserPlus },
    ],
  },
  {
    label: '赋能开发',
    items: [
      { path: '/empowerment-platform', label: '赋能开发平台', icon: Cpu },
    ],
  },
  {
    label: '订单管理',
    items: [
      { path: '/order-management', label: '订单管理系统', icon: ClipboardList },
    ],
  },
  {
    label: '信用分中心',
    items: [
      { path: '/credit', label: '信用分详情', icon: Star },
    ],
  },
  {
    label: '政府驾驶舱',
    items: [
      { path: '/panorama', label: '产业全景', icon: Globe },
      { path: '/social-insurance', label: '社保扩面', icon: ShieldCheck },
      { path: '/tax-warning', label: '税收预警', icon: AlertTriangle },
      { path: '/talent', label: '人才洞察', icon: Users },
      { path: '/risk-service', label: '风险处置', icon: Bell },
    ],
  },
  {
    label: '系统管理',
    items: [
      { path: '/system/data', label: '数据源管理', icon: Database },
      { path: '/system/roles', label: '角色权限', icon: UserCog },
      { path: '/system/api', label: 'API 接入', icon: Cable },
      { path: '/system/audit', label: '审计日志', icon: FileText },
      { path: '/system/security', label: '数据治理与安全', icon: Shield },
    ],
  },
]

const breadcrumbMap: Record<string, string> = {
  '/': '平台总览',
  '/opc-management': 'OPC管理系统',
  '/empowerment-platform': '赋能开发平台',
  '/order-management': '订单管理系统',
  '/credit': 'OPC 信用分详情',
  '/panorama': '产业全景视图',
  '/social-insurance': '社保扩面分析',
  '/tax-warning': '税收监管预警',
  '/talent': '人才结构洞察',
  '/risk-service': '风险预警处置',
  '/risk-disposal': '风险处置闭环',
  '/workspace': 'OPC 创业工作台',
  '/empowerment': '创业赋能体系',
  '/system/data': '数据源管理',
  '/system/roles': '角色权限',
  '/system/api': 'API 接入',
  '/system/audit': '审计日志',
  '/system/security': '数据治理与安全',
}

export default function Sidebar() {
  const location = useLocation()
  const currentPath = location.pathname
  const { getRoleInfo } = useRoleStore()
  const roleInfo = getRoleInfo()
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const visibleGroups = allNavGroups.filter((g) => roleInfo.visibleGroups.includes(g.label))

  const toggleGroup = (label: string) => {
    setCollapsed((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[220px] bg-[#060a14] border-r border-cyan-900/20 flex flex-col z-50">
      <div className="h-16 flex items-center px-5 border-b border-cyan-900/20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">AI</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-white tracking-wide">AI Runtime</div>
            <div className="text-[10px] text-cyan-400/60">产业级AI操作系统</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-3 px-3 overflow-y-auto">
        {visibleGroups.map((group) => {
          const isCollapsed = collapsed[group.label]
          const isGroupActive = group.items.some((item) => currentPath === item.path)
          return (
            <div key={group.label} className="mb-1">
              <button
                onClick={() => toggleGroup(group.label)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-medium tracking-wider uppercase transition-colors ${
                  isGroupActive ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-400'
                }`}
              >
                <span className="flex-1 text-left">{group.label}</span>
                {isCollapsed ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
              </button>
              {!isCollapsed && (
                <div className="space-y-0.5 mt-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon
                    const isActive = currentPath === item.path
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                          isActive
                            ? 'bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_-5px_rgba(0,229,255,0.15)]'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                        }`}
                      >
                        <Icon size={16} className={`transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                        <span className="flex-1">{item.label}</span>
                        {isActive && <ChevronRight size={14} className="text-cyan-400/50" />}
                      </NavLink>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="p-3 border-t border-cyan-900/20">
        <div className="px-3 py-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
          <div className="text-[10px] text-cyan-400/60 mb-1">系统状态</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400">运行正常</span>
          </div>
        </div>
      </div>

      <div className="h-14 flex items-center justify-between px-5 border-t border-cyan-900/20 bg-[#060a14]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
            {roleInfo.avatar}
          </div>
          <span className="text-xs text-slate-400">{roleInfo.shortLabel}</span>
        </div>
      </div>
    </aside>
  )
}

export function TopBar() {
  const location = useLocation()
  const currentPath = location.pathname
  const breadcrumb = breadcrumbMap[currentPath] || '平台总览'
  const { currentRole, setRole, getRoleInfo } = useRoleStore()
  const roleInfo = getRoleInfo()
  const [roleOpen, setRoleOpen] = useState(false)

  const now = new Date()
  const dateStr = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`

  return (
    <header className="fixed top-0 left-[220px] right-0 h-16 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-cyan-900/20 flex items-center justify-between px-6 z-40">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500">AI Runtime</span>
        <ChevronRight size={14} className="text-slate-600" />
        <span className="text-cyan-400">{breadcrumb}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">演示数据｜模拟开发区样本</span>
        <span className="text-xs text-slate-500">{dateStr}</span>
        <div className="relative">
          <button
            onClick={() => setRoleOpen(!roleOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-slate-700/50 hover:bg-white/10 transition-colors"
          >
            <div className="w-5 h-5 rounded bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[9px] font-bold text-white">
              {roleInfo.avatar}
            </div>
            <span className="text-xs text-slate-300">{roleInfo.label}</span>
            <ChevronDown size={12} className="text-slate-500" />
          </button>
          {roleOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-[#111827] border border-slate-700/50 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50">
              <div className="px-4 py-2.5 border-b border-slate-800/50">
                <span className="text-[11px] text-slate-500">切换角色视角</span>
              </div>
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { setRole(r.id); setRoleOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${currentRole === r.id ? 'bg-cyan-500/5' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                    currentRole === r.id ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-slate-700'
                  }`}>
                    {r.avatar}
                  </div>
                  <div className="flex-1 text-left">
                    <div className={`text-sm ${currentRole === r.id ? 'text-cyan-400' : 'text-slate-300'}`}>{r.label}</div>
                    <div className="text-[10px] text-slate-500">{r.description}</div>
                  </div>
                  {currentRole === r.id && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          <AlertTriangle size={12} className="text-amber-400" />
          <span className="text-xs text-amber-400">3 条预警</span>
        </div>
      </div>
    </header>
  )
}
