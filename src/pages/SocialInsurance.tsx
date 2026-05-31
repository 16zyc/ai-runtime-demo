import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { MetricCard, SectionCard } from '@/components/Common'
import { ShieldCheck, TrendingDown, Users, MapPin } from 'lucide-react'
import { uninsuredByAge, uninsuredByIndustry, gridAreas } from '@/data/mockData'

export default function SocialInsurance() {
  const totalUninsured = gridAreas.reduce((s, g) => s + g.uninsured, 0)
  const totalPeople = gridAreas.reduce((s, g) => s + g.total, 0)
  const overallRate = ((totalUninsured / totalPeople) * 100).toFixed(1)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white mb-1">社保扩面分析</h1>
        <p className="text-sm text-slate-500">精准扩面——识别未参保人群特征，为社保扩面行动提供科学数据支撑</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="总体未参保率" value={32.5} suffix="%" icon={ShieldCheck} color="rose" trend={{ value: -2.3, label: '环比下降' }} />
        <MetricCard label="未参保人数" value={totalUninsured} icon={Users} color="amber" />
        <MetricCard label="高风险漏保群体" value={156} icon={TrendingDown} color="rose" />
        <MetricCard label="覆盖区域" value={8} suffix="个" icon={MapPin} color="cyan" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="未参保率 — 年龄维度">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={uninsuredByAge} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="category" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} unit="%" />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload
                  return (
                    <div className="bg-[#1a1f2e] border border-slate-700/50 rounded-lg px-3 py-2 shadow-xl">
                      <p className="text-xs text-slate-200 mb-1">{d.category}</p>
                      <p className="text-xs text-rose-400">未参保率: {d.rate}%</p>
                      <p className="text-xs text-slate-400">人数: {d.count.toLocaleString()}</p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                {uninsuredByAge.map((entry, i) => (
                  <Cell key={i} fill={entry.rate > 35 ? '#ff3d71' : entry.rate > 25 ? '#ffab00' : '#0095ff'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard title="未参保率 — 行业维度">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={uninsuredByIndustry} layout="vertical" margin={{ top: 5, right: 20, left: 80, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} unit="%" />
              <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const d = payload[0].payload
                  return (
                    <div className="bg-[#1a1f2e] border border-slate-700/50 rounded-lg px-3 py-2 shadow-xl">
                      <p className="text-xs text-slate-200 mb-1">{d.category}</p>
                      <p className="text-xs text-rose-400">未参保率: {d.rate}%</p>
                      <p className="text-xs text-slate-400">人数: {d.count.toLocaleString()}</p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                {uninsuredByIndustry.map((entry, i) => (
                  <Cell key={i} fill={entry.rate > 35 ? '#ff3d71' : entry.rate > 25 ? '#ffab00' : '#0095ff'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      <SectionCard title="地理分布 — 未参保密度热力图">
        <div className="grid grid-cols-4 gap-3">
          {gridAreas.map((area) => {
            const intensity = area.density / 100
            const bgColor = area.density > 80
              ? `rgba(255,61,113,${0.1 + intensity * 0.2})`
              : area.density > 60
                ? `rgba(255,171,0,${0.1 + intensity * 0.15})`
                : `rgba(0,149,255,${0.1 + intensity * 0.1})`
            const borderColor = area.density > 80 ? 'border-rose-500/30' : area.density > 60 ? 'border-amber-500/30' : 'border-blue-500/30'
            const dotColor = area.density > 80 ? 'bg-rose-400' : area.density > 60 ? 'bg-amber-400' : 'bg-blue-400'

            return (
              <div
                key={area.name}
                className={`rounded-xl border ${borderColor} p-4 transition-all duration-300 hover:scale-[1.02]`}
                style={{ backgroundColor: bgColor }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${dotColor} ${area.density > 80 ? 'animate-pulse' : ''}`} />
                  <span className="text-sm text-slate-200">{area.name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-[10px] text-slate-500">未参保密度</div>
                    <div className="text-lg font-bold font-mono text-white">{area.density}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">未参保人数</div>
                    <div className="text-lg font-bold font-mono text-white">{area.uninsured}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">总人数</div>
                    <div className="text-sm font-mono text-slate-400">{area.total.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">未参保率</div>
                    <div className="text-sm font-mono text-slate-400">{((area.uninsured / area.total) * 100).toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionCard>

      <SectionCard title="趋势预警 — 高风险漏保群体">
        <div className="rounded-lg bg-rose-500/5 border border-rose-500/20 p-4">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse mt-1.5" />
            <div>
              <p className="text-sm text-rose-400 font-medium mb-1">连续3个月未参保且收入增长 &gt; 20% 的OPC</p>
              <p className="text-xs text-slate-400">共识别 <span className="text-rose-400 font-bold">156</span> 名高风险漏保群体，建议优先入户宣传并引导参保</p>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1.5 text-xs bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg hover:bg-rose-500/30 transition-colors">
                  查看名单
                </button>
                <button className="px-3 py-1.5 text-xs bg-white/5 text-slate-300 border border-slate-700 rounded-lg hover:bg-white/10 transition-colors">
                  推送至人社局
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
