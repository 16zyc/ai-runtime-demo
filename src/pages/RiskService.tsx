import { MetricCard, SectionCard, StatusBadge } from '@/components/Common'
import { Bell, CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import { riskEvents } from '@/data/mockData'

export default function RiskService() {
  const discovered = riskEvents.filter((e) => e.status === 'discovered').length
  const processing = riskEvents.filter((e) => e.status === 'processing').length
  const resolved = riskEvents.filter((e) => e.status === 'resolved').length
  const feedback = riskEvents.filter((e) => e.status === 'feedback').length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white mb-1">风险预警与主动服务</h1>
        <p className="text-sm text-slate-500">闭环处置——发现-处置-反馈，形成治理闭环</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="已发现" value={discovered} suffix="件" icon={AlertCircle} color="rose" />
        <MetricCard label="处理中" value={processing} suffix="件" icon={Clock} color="amber" />
        <MetricCard label="已解决" value={resolved} suffix="件" icon={CheckCircle2} color="emerald" />
        <MetricCard label="反馈中" value={feedback} suffix="件" icon={Bell} color="blue" />
      </div>

      <SectionCard title="闭环处置流程">
        <div className="flex items-center justify-center py-6">
          {[
            { label: '发现', desc: 'AI模型自动识别风险事件', icon: AlertCircle, color: 'rose', count: discovered },
            { label: '处置', desc: '自动推送或人工介入', icon: Clock, color: 'amber', count: processing },
            { label: '解决', desc: '风险解除或问题修复', icon: CheckCircle2, color: 'emerald', count: resolved },
            { label: '反馈', desc: '结果评估与策略优化', icon: Bell, color: 'blue', count: feedback },
          ].map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-gradient-to-r from-slate-700 to-slate-600" />
                    <div className="text-slate-600">→</div>
                    <div className="w-8 h-px bg-gradient-to-r from-slate-600 to-slate-700" />
                  </div>
                )}
                <div className={`rounded-xl bg-${step.color}-500/5 border border-${step.color}-500/20 p-5 w-52 text-center`}>
                  <div className={`w-10 h-10 rounded-xl bg-${step.color}-500/10 flex items-center justify-center mx-auto mb-3`}>
                    <Icon size={20} className={`text-${step.color}-400`} />
                  </div>
                  <div className="text-sm font-medium text-slate-200 mb-1">{step.label}</div>
                  <div className="text-[11px] text-slate-400 mb-2">{step.desc}</div>
                  <div className={`text-2xl font-bold font-mono text-${step.color}-400`}>{step.count}</div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionCard>

      <SectionCard title="风险事件时间线">
        <div className="space-y-0">
          {riskEvents.map((event, i) => {
            const levelColor = event.level === 'high' ? 'rose' : event.level === 'medium' ? 'amber' : 'blue'
            const statusColor = event.status === 'discovered' ? 'rose'
              : event.status === 'processing' ? 'cyan'
                : event.status === 'resolved' ? 'emerald'
                  : 'purple'

            return (
              <div key={event.id} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full bg-${levelColor}-400 ${event.status === 'discovered' ? 'animate-pulse' : ''} flex-shrink-0 mt-1.5`} />
                  {i < riskEvents.length - 1 && <div className="w-px flex-1 bg-slate-800 my-1" />}
                </div>
                <div className={`flex-1 pb-5 ${i === riskEvents.length - 1 ? '' : ''}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs text-slate-500">{event.createdAt}</span>
                    <StatusBadge status={event.level} />
                    <StatusBadge status={event.status} />
                    <span className="text-[11px] text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{event.type}</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{event.description}</p>
                  {event.handler && (
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <span>处理人: {event.handler}</span>
                      {event.resolvedAt && <span>完成时间: {event.resolvedAt}</span>}
                    </div>
                  )}
                  {event.result && (
                    <div className={`mt-2 px-3 py-2 rounded-lg bg-${statusColor}-500/5 border border-${statusColor}-500/20`}>
                      <p className="text-xs text-slate-400">{event.result}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </SectionCard>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="主动服务推送策略">
          <div className="space-y-3">
            {[
              { trigger: '信用分下降 > 50分', action: '触发人才专员介入', target: '人才服务组', color: 'amber' },
              { trigger: '连续3月未参保', action: '推送参保引导+政策解读', target: '人社局', color: 'rose' },
              { trigger: '收入-申报不匹配', action: '推送税务自查提醒', target: '税务局', color: 'amber' },
              { trigger: '技能需求激增', action: '推送培训课程+认证推荐', target: 'OPC本人', color: 'cyan' },
              { trigger: '高价值人才流出', action: '推送留才政策+专项服务', target: '招商局', color: 'rose' },
            ].map((item) => (
              <div key={item.trigger} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className={`w-1.5 h-8 rounded-full bg-${item.color}-400`} />
                <div className="flex-1">
                  <div className="text-xs text-slate-300">{item.trigger}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">→ {item.action}</div>
                </div>
                <span className="text-[11px] text-slate-500 bg-white/5 px-2 py-0.5 rounded">{item.target}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="处置效果统计">
          <div className="space-y-4 py-2">
            {[
              { label: '平均响应时间', value: '2.3小时', trend: '-18%', good: true },
              { label: '风险解除率', value: '87.5%', trend: '+5.2%', good: true },
              { label: '主动服务触达率', value: '82.3%', trend: '+12%', good: true },
              { label: 'OPC满意度', value: '4.6/5.0', trend: '+0.3', good: true },
              { label: '重复风险率', value: '8.2%', trend: '-3.1%', good: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-xs text-slate-400 w-28">{item.label}</span>
                <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                    style={{ width: `${parseFloat(item.value) > 100 ? 100 : parseFloat(item.value)}%` }}
                  />
                </div>
                <span className="text-sm font-mono text-white w-20 text-right">{item.value}</span>
                <span className={`text-[11px] ${item.good ? 'text-emerald-400' : 'text-rose-400'}`}>{item.trend}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
