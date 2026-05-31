import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { MetricCard, SectionCard } from '@/components/Common'
import { Users, TrendingUp, Award, DollarSign, Wallet } from 'lucide-react'
import { dashboardMetrics, industryDistribution, monthlyTrend } from '@/data/mockData'

const COLORS = ['#00e5ff', '#0095ff', '#00e096', '#ffab00', '#ff3d71', '#a78bfa', '#f472b6', '#64748b']

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#1a1f2e] border border-slate-700/50 rounded-lg px-3 py-2 shadow-xl">
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-xs" style={{ color: p.color }}>
          {p.name}: {typeof p.value === 'number' && p.value > 100 ? p.value.toLocaleString() : p.value}
          {p.name === '人均月收入' ? '元' : p.name === '月交易额' ? '万' : ''}
        </p>
      ))}
    </div>
  )
}

export default function Panorama() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white mb-1">产业全景视图</h1>
        <p className="text-sm text-slate-500">一目了然——30秒掌握园区OPC产业全貌</p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <MetricCard label="园区从业人数" value={dashboardMetrics.totalOPC} icon={Users} color="cyan" trend={{ value: 5.2, label: '较上月' }} />
        <MetricCard label="近三年复合增长率" value={dashboardMetrics.growthRate} suffix="%" icon={TrendingUp} color="emerald" trend={{ value: 1.3, label: '同比提升' }} />
        <MetricCard label="高技能人才占比" value={dashboardMetrics.highSkillRatio} suffix="%" icon={Award} color="blue" trend={{ value: 2.8, label: '较上月' }} />
        <MetricCard label="平台月交易额" value={dashboardMetrics.monthlyTransaction} prefix="¥" suffix="万" icon={DollarSign} color="amber" trend={{ value: 8.6, label: '较上月' }} />
        <MetricCard label="人均月收入" value={dashboardMetrics.avgIncome} prefix="¥" icon={Wallet} color="rose" trend={{ value: 3.1, label: '较上月' }} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="行业分布">
          <div className="flex items-center">
            <div className="w-1/2">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={industryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="count"
                    nameKey="industry"
                    stroke="none"
                  >
                    {industryDistribution.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null
                      const data = payload[0].payload
                      return (
                        <div className="bg-[#1a1f2e] border border-slate-700/50 rounded-lg px-3 py-2 shadow-xl">
                          <p className="text-xs text-slate-200 mb-1">{data.industry}</p>
                          <p className="text-xs text-cyan-400">{data.count.toLocaleString()}人</p>
                          <p className="text-xs text-slate-400">占比 {data.percentage}%</p>
                        </div>
                      )
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-2.5">
              {industryDistribution.map((item, i) => (
                <div key={item.industry} className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  <span className="text-xs text-slate-300 flex-1">{item.industry}</span>
                  <span className="text-xs text-slate-500">{item.percentage}%</span>
                  <span className="text-[11px] text-slate-500 w-14 text-right">{item.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard title="收入与交易趋势（近12个月）">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyTrend} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#00e5ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="transGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffab00" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#ffab00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v: string) => v.slice(5)} />
              <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="income" name="人均月收入" stroke="#00e5ff" fill="url(#incomeGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="transaction" name="月交易额" stroke="#ffab00" fill="url(#transGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SectionCard title="信用等级分布">
          <div className="space-y-3">
            {[
              { level: 'S级', count: 186, pct: 1.5, color: 'bg-cyan-400' },
              { level: 'A级', count: 4572, pct: 36.7, color: 'bg-emerald-400' },
              { level: 'B级', count: 5214, pct: 41.9, color: 'bg-amber-400' },
              { level: 'C级', count: 1980, pct: 15.9, color: 'bg-orange-400' },
              { level: 'D级', count: 498, pct: 4.0, color: 'bg-rose-400' },
            ].map((item) => (
              <div key={item.level} className="flex items-center gap-3">
                <span className="text-xs text-slate-300 w-8">{item.level}</span>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-1000`} style={{ width: `${item.pct * 2.2}%` }} />
                </div>
                <span className="text-xs text-slate-400 w-16 text-right">{item.count.toLocaleString()}人</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="OPC经营时长分布">
          <div className="space-y-3">
            {[
              { range: '< 6个月', pct: 28.5, count: 3548 },
              { range: '6-12个月', pct: 22.3, count: 2776 },
              { range: '1-2年', pct: 25.8, count: 3212 },
              { range: '2-3年', pct: 14.2, count: 1768 },
              { range: '> 3年', pct: 9.2, count: 1146 },
            ].map((item) => (
              <div key={item.range} className="flex items-center gap-3">
                <span className="text-xs text-slate-300 w-20">{item.range}</span>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${item.pct * 3}%` }} />
                </div>
                <span className="text-xs text-slate-400 w-16 text-right">{item.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="收入水平分布">
          <div className="space-y-3">
            {[
              { range: '< 3000元', pct: 18.2, count: 2266 },
              { range: '3000-5000元', pct: 24.5, count: 3050 },
              { range: '5000-8000元', pct: 28.3, count: 3523 },
              { range: '8000-15000元', pct: 19.8, count: 2465 },
              { range: '> 15000元', pct: 9.2, count: 1146 },
            ].map((item) => (
              <div key={item.range} className="flex items-center gap-3">
                <span className="text-xs text-slate-300 w-20">{item.range}</span>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-400" style={{ width: `${item.pct * 3}%` }} />
                </div>
                <span className="text-xs text-slate-400 w-16 text-right">{item.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
