import { create } from 'zustand'

export type Role = 'gov_leader' | 'gov_dev' | 'gov_tax_hr' | 'opc' | 'admin'

export interface RoleInfo {
  id: Role
  label: string
  shortLabel: string
  avatar: string
  description: string
  visibleGroups: string[]
}

export const roles: RoleInfo[] = [
  {
    id: 'gov_leader',
    label: '管委会领导',
    shortLabel: '领导',
    avatar: '领',
    description: '查看全部驾驶舱模块，接收风险预警简报',
    visibleGroups: ['平台总览', '政府驾驶舱', '信用分中心', '系统管理'],
  },
  {
    id: 'gov_dev',
    label: '经发局工作人员',
    shortLabel: '经发局',
    avatar: '经',
    description: '查看产业全景、人才洞察、创新增长模块',
    visibleGroups: ['平台总览', '政府驾驶舱', '信用分中心'],
  },
  {
    id: 'gov_tax_hr',
    label: '税务/人社经办人',
    shortLabel: '经办人',
    avatar: '办',
    description: '查看税收预警、社保扩面及风险处置工单',
    visibleGroups: ['平台总览', '政府驾驶舱'],
  },
  {
    id: 'opc',
    label: 'OPC 创业者',
    shortLabel: '创业者',
    avatar: '创',
    description: '使用AI工具、任务撮合、信用贷、合规服务',
    visibleGroups: ['平台总览', 'OPC 创业者端', '信用分中心'],
  },
  {
    id: 'admin',
    label: '平台运营方',
    shortLabel: '运营方',
    avatar: '运',
    description: '全模块访问，管理数据源、权限、API和审计',
    visibleGroups: ['平台总览', 'OPC 创业者端', '信用分中心', '政府驾驶舱', '系统管理'],
  },
]

interface RoleStore {
  currentRole: Role
  setRole: (role: Role) => void
  getRoleInfo: () => RoleInfo
}

export const useRoleStore = create<RoleStore>((set, get) => ({
  currentRole: 'gov_leader',
  setRole: (role: Role) => set({ currentRole: role }),
  getRoleInfo: () => roles.find((r) => r.id === get().currentRole) || roles[0],
}))
