export interface DashboardMetrics {
  totalOPC: number
  growthRate: number
  highSkillRatio: number
  monthlyTransaction: number
  avgIncome: number
}

export interface IndustryDistribution {
  industry: string
  percentage: number
  count: number
}

export interface MonthlyTrend {
  month: string
  income: number
  transaction: number
}

export interface UninsuredGroup {
  dimension: string
  category: string
  rate: number
  count: number
}

export interface RiskItem {
  id: string
  riskLevel: 'high' | 'medium' | 'low'
  riskType: string
  description: string
  status: 'pending' | 'processing' | 'resolved'
  date: string
  opcName: string
  amount: number
}

export interface SkillTag {
  name: string
  demand: number
  supply: number
  growth: number
}

export interface TalentFlow {
  city: string
  inflow: number
  outflow: number
}

export interface HighValueTalent {
  name: string
  creditLevel: string
  creditScore: number
  income: number
  skills: string[]
}

export interface RiskEvent {
  id: string
  type: string
  level: 'high' | 'medium' | 'low'
  description: string
  status: 'discovered' | 'processing' | 'resolved' | 'feedback'
  createdAt: string
  resolvedAt: string
  handler: string
  result: string
}

export interface GridArea {
  name: string
  density: number
  total: number
  uninsured: number
}
