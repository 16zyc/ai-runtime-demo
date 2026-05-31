import { Link } from 'react-router-dom'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { MetricCard, SectionCard } from '@/components/Common'
import { Star, TrendingUp, Shield, Users, ArrowRight, Lock, Unlock, Eye } from 'lucide-react'

const radarData = [
  { subject: '经营健康度', current: 260, full: 300 },
  { subject: '履约合规度', current: 210, full: 250 },
  { subject: '数字能力', current: 160, full: 200 },
  { subject: '社会贡献', current: 110, full: 150 },
  { subject: '风险稳定性', current: 42, full: 100 },
]

const dimensions = [
  { name: '经营健康度', score: 260, max: 300, weight: '30%', desc: '收入稳定性、收入多元化、现金流健康、经营时长' },
  { name: '履约与合规度', score: 210, max: 250, weight: '25%', desc: '任务完成率、客户评价、税务合规、平台规则遵守' },
  { name: '数字能力与成长性', score: 160, max: 200, weight: '20%', desc: 'AI工具渗透度、技能更新频率、知识产权产出、学习投入' },
  { name: '社会贡献与协作度', score: 110, max: 150, weight: '15%', desc: '知识分享、协作网络、导师行为、就业带动' },
  { name: '风险与稳定性', score: 42, max: 100, weight: '10%', desc: '登录活跃度、收入波动、社保断缴、客诉未解决（扣分项）' },
]

const currentBenefits = [
  { type: '金融支持', value: '5-10万信用贷', detail: '基准利率，银行秒批', color: 'amber' },
  { type: '任务推荐', value: '行业中等任务优先', detail: 'AI精准匹配', color: 'cyan' },
  { type: '算力补贴', value: '300元/月', detail: 'GPU算力资源', color: 'blue' },
]

const scoreChanges = [
  { reason: '任务完成率提升至95%', change: '+12', type: 'up', dimension: '履约合规度' },
  { reason: '本月收入稳定增长', change: '+8', type: 'up', dimension: '经营健康度' },
  { reason: '完成AI工具认证课程', change: '+5', type: 'up', dimension: '数字能力' },
  { reason: '连续2周未参加学习', change: '-3', type: 'down', dimension: '数字能力' },
  { reason: '有一次客户投诉未处理', change: '-10', type: 'down', dimension: '履约合规度' },
  { reason: '社保断缴1个月', change: '-8', type: 'down', dimension: '风险稳定性' },
]

const improvements = [
  { action: '完成一次平台认证课程', gain: '+15~25', dimension: '数字能力', difficulty: '简单' },
  { action: '补充社保信息', gain: '+10~20', dimension: '风险稳定性', difficulty: '简单' },
  { action: '处理未完成投诉', gain: '+10', dimension: '履约合规度', difficulty: '立即' },
  { action: '保持3个月收入稳定', gain: '+20~30', dimension: '经营健康度', difficulty: '中期' },
  { action: '参与Circle小组分享', gain: '+5~10', dimension: '社会贡献', difficulty: '简单' },
]

const dataAuthorizations = [
  { type: '平台行为数据', status: 'authorized', usage: '计算活跃度、履约情况', viewer: '平台+本人' },
  { type: '交易流水数据', status: 'authorized', usage: '计算经营健康度', viewer: '平台+本人' },
  { type: '税务/社保数据', status: 'partial', usage: '判断合规与稳定性', viewer: '需单独授权' },
  { type: '金融机构查询', status: 'unauthorized', usage: '申请信用贷时使用', viewer: '需单独授权' },
  { type: '驾驶舱聚合数据', status: 'authorized', usage: '政府看脱敏统计', viewer: '仅聚合可见' },
]

const authStatusMap: Record<string, { label: string; style: string; icon: typeof Unlock }> = {
  authorized: { label: '已授权', style: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', icon: Unlock },
  partial: { label: '部分授权', style: 'bg-amber-500/15 text-amber-400 border-amber-500/30', icon: Lock },
  unauthorized: { label: '需单独授权', style: 'bg-slate-500/15 text-slate-400 border-slate-500/30', icon: Lock },
}

export default function Credit() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">OPC 信用分详情</h1>
          <p className="text-sm text-slate-500">核心枢纽——可解释·可授权·可流转·可申诉</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="信用分体系" value={5} suffix="维度" icon={Star} color="cyan" />
        <MetricCard label="总分上限" value={1000} suffix="分" icon={TrendingUp} color="emerald" />
        <MetricCard label="信用等级" value={5} suffix="级" icon={Shield} color="amber" />
        <MetricCard label="已评估OPC" value={12450} icon={Users} color="blue" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SectionCard title="当前分数与等级">
          <div className="text-center py-4">
            <div className="text-6xl font-bold font-mono text-amber-400 mb-2">782</div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-3">
              <Star size={18} className="text-amber-400" />
              <span className="text-lg font-semibold text-amber-400">A级</span>
            </div>
            <div className="text-sm text-emerald-400 mb-1">较上周 +18</div>
            <div className="text-[11px] text-slate-500">距离S级（850分）还差 68 分</div>
            <div className="mt-4 w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400" style={{ width: '78.2%' }} />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-slate-500">
              <span>0</span><span>400</span><span>550</span><span>700</span><span>850</span><span>1000</span>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="五维雷达图">
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1e293b" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <PolarRadiusAxis tick={{ fontSize: 9, fill: '#475569' }} />
              <Radar name="当前得分" dataKey="current" stroke="#ffab00" fill="#ffab00" fillOpacity={0.15} strokeWidth={2} />
              <Radar name="满分" dataKey="full" stroke="#334155" fill="none" strokeWidth={1} strokeDasharray="4 4" />
            </RadarChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard title="当前权益">
          <div className="space-y-3">
            {currentBenefits.map((b) => (
              <div key={b.type} className={`rounded-lg bg-${b.color}-500/5 border border-${b.color}-500/15 p-4`}>
                <div className="text-[11px] text-slate-500 mb-1">{b.type}</div>
                <div className={`text-lg font-bold font-mono text-${b.color}-400`}>{b.value}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{b.detail}</div>
              </div>
            ))}
            <Link to="/workspace" className="flex items-center gap-1 text-xs text-cyan-400 hover:gap-2 transition-all mt-2">
              <span>去创业工作台使用权益</span><ArrowRight size={12} />
            </Link>
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="分数变化原因">
          <div className="space-y-2">
            {scoreChanges.map((change, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${change.type === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {change.type === 'up' ? '↑' : '↓'}
                </span>
                <span className="flex-1 text-xs text-slate-300">{change.reason}</span>
                <span className="text-[10px] text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{change.dimension}</span>
                <span className={`text-sm font-mono ${change.type === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>{change.change}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="提升建议">
          <div className="space-y-2">
            {improvements.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center text-[11px] font-bold text-cyan-400">{i + 1}</span>
                <div className="flex-1">
                  <div className="text-xs text-slate-200">{item.action}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{item.dimension} · 难度：{item.difficulty}</div>
                </div>
                <span className="text-sm font-mono text-emerald-400">+{item.gain}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="数据授权状态">
          <div className="space-y-2">
            {dataAuthorizations.map((item) => {
              const statusInfo = authStatusMap[item.status]
              const StatusIcon = statusInfo.icon
              return (
                <div key={item.type} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <StatusIcon size={14} className="text-slate-500" />
                  <span className="text-xs text-slate-200 flex-1">{item.type}</span>
                  <span className="text-[10px] text-slate-500">{item.usage}</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${statusInfo.style}`}>{statusInfo.label}</span>
                </div>
              )
            })}
          </div>
        </SectionCard>

        <SectionCard title="分数解释">
          <div className="rounded-lg bg-cyan-500/5 border border-cyan-500/15 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Eye size={14} className="text-cyan-400/60" />
              <span className="text-xs font-medium text-slate-200">本周信用分变化解读</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              本周信用分上升 <span className="text-emerald-400 font-mono">+18</span> 分，主要来自任务完成率提升、收入连续性增强、合规检查通过率提高。
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              其中<span className="text-amber-400">"风险与稳定性"</span>仍偏低（42/100），原因是近30日收入波动较大，建议补充长期订单或参与平台稳定经营计划。
            </p>
          </div>
          <div className="mt-3 rounded-lg bg-white/[0.02] border border-slate-800/30 p-4">
            <div className="text-[11px] text-slate-500 mb-2">权限说明</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-slate-400">政府驾驶舱仅见<span className="text-slate-200">脱敏聚合统计</span></span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-slate-400">申请贷款时需<span className="text-slate-200">OPC自主授权</span>详细分数</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-slate-400">扣分提供<span className="text-slate-200">具体原因+数据截图</span>，支持一键申诉</span>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="五维指标详情">
        <div className="space-y-3">
          {dimensions.map((dim) => {
            const pct = (dim.score / dim.max) * 100
            return (
              <div key={dim.name} className="rounded-lg bg-white/[0.02] p-3.5 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-200">{dim.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/10">{dim.weight}</span>
                  </div>
                  <span className="text-sm font-mono text-white">{dim.score}<span className="text-slate-500">/{dim.max}</span></span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-[11px] text-slate-500">{dim.desc}</p>
              </div>
            )
          })}
        </div>
      </SectionCard>
    </div>
  )
}
