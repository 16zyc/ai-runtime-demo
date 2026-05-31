import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { MetricCard, SectionCard } from '@/components/Common'
import { Brain, TrendingUp, UserCheck, ArrowRightLeft } from 'lucide-react'
import { skillTags, talentFlows, highValueTalents } from '@/data/mockData'

export default function Talent() {
  const topSkills = skillTags.slice(0, 5)
  const totalInflow = talentFlows.reduce((s, t) => s + t.inflow, 0)
  const totalOutflow = talentFlows.reduce((s, t) => s + t.outflow, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white mb-1">人才结构洞察</h1>
        <p className="text-sm text-slate-500">精准引才——深度洞察高技能人才、紧缺人才的分布与流动趋势</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="高价值人才" value={highValueTalents.length * 42} icon={Brain} color="cyan" trend={{ value: 12.5, label: '较上月' }} />
        <MetricCard label="紧缺技能数" value={8} suffix="项" icon={TrendingUp} color="amber" />
        <MetricCard label="人才净流入" value={totalInflow - totalOutflow} icon={UserCheck} color="emerald" trend={{ value: 8.3, label: '较上月' }} />
        <MetricCard label="流动城市" value={talentFlows.length} suffix="个" icon={ArrowRightLeft} color="blue" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="技能标签云 — 需求热度">
          <div className="flex flex-wrap gap-2 py-2 justify-center">
            {skillTags.map((skill) => {
              const ratio = skill.demand / skill.supply
              const size = Math.max(12, Math.min(28, ratio * 6))
              const color = ratio > 3 ? 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                : ratio > 2 ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                  : ratio > 1.5 ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                    : 'text-slate-400 bg-white/5 border-slate-700/50'
              return (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-lg border ${color} transition-all duration-200 hover:scale-110 cursor-default`}
                  style={{ fontSize: `${size}px` }}
                  title={`需求: ${skill.demand} | 供给: ${skill.supply} | 增长: +${skill.growth}%`}
                >
                  {skill.name}
                </span>
              )
            })}
          </div>
        </SectionCard>

        <SectionCard title="紧缺人才预警 — 需求>供给排行">
          <div className="space-y-3">
            {topSkills.map((skill, i) => {
              const ratio = (skill.demand / skill.supply).toFixed(1)
              return (
                <div key={skill.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <span className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold ${i < 2 ? 'bg-rose-500/20 text-rose-400' : i < 4 ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-200 flex-1">{skill.name}</span>
                  <span className="text-xs text-slate-500">需求 {skill.demand}</span>
                  <span className="text-xs text-slate-500">供给 {skill.supply}</span>
                  <span className={`text-xs font-mono ${Number(ratio) > 3 ? 'text-rose-400' : Number(ratio) > 2 ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {ratio}倍
                  </span>
                  <span className="text-[11px] text-emerald-400">+{skill.growth}%</span>
                </div>
              )
            })}
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="人才流动分析 — 城市TOP8">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentFlows} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="city" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null
                  return (
                    <div className="bg-[#1a1f2e] border border-slate-700/50 rounded-lg px-3 py-2 shadow-xl">
                      <p className="text-xs text-slate-200 mb-1">{label}</p>
                      <p className="text-xs text-cyan-400">流入: {payload[0]?.value}</p>
                      <p className="text-xs text-rose-400">流出: {payload[1]?.value}</p>
                      <p className="text-xs text-slate-400">净流入: {((payload[0]?.value as number) || 0) - ((payload[1]?.value as number) || 0)}</p>
                    </div>
                  )
                }}
              />
              <Bar dataKey="inflow" name="流入" fill="#00e5ff" radius={[4, 4, 0, 0]} />
              <Bar dataKey="outflow" name="流出" fill="#ff3d71" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard title="高价值人才名单">
          <div className="space-y-2.5">
            {highValueTalents.map((talent) => (
              <div key={talent.name} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${talent.creditLevel === 'S' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  {talent.creditLevel}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-200">{talent.name}</span>
                    <span className="text-[11px] text-slate-500">信用分 {talent.creditScore}</span>
                  </div>
                  <div className="flex gap-1.5 mt-1">
                    {talent.skills.map((s) => (
                      <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400/70 border border-cyan-500/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-amber-400">¥{talent.income.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500">月收入</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
