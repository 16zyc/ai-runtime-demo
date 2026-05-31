import { MetricCard, SectionCard, StatusBadge } from '@/components/Common'
import { Bell, CheckCircle2, Clock, AlertCircle, ArrowRight, FileText } from 'lucide-react'

const workOrders = [
  { id: 'R-202605-001', target: 'AI设计工作室A', type: '税收异常', level: 'high' as const, reason: '交易额环比+280%，申报未同步', action: '发送自查提醒，7日后复核', dept: '税务局', handler: '王专员', status: 'pending' as const, createdAt: '2026-05-25 09:15', feedback: '' },
  { id: 'R-202605-002', target: '跨境服务OPC群体', type: '社保漏保', level: 'medium' as const, reason: '连续收入稳定但未参保', action: '推送社保政策包', dept: '人社局', handler: '李专员', status: 'dispatched' as const, createdAt: '2026-05-24 14:30', feedback: '已触达23人，8人表示愿意参保' },
  { id: 'R-202605-003', target: '高信用人才B', type: '流失预警', level: 'medium' as const, reason: '近30日活跃度下降、外地订单上升', action: '人才专员跟进', dept: '经发局', handler: '赵专员', status: 'following' as const, createdAt: '2026-05-23 16:00', feedback: '已电话沟通，了解原因，提供补贴方案' },
  { id: 'R-202605-004', target: '内容创作工作室C', type: '税收异常', level: 'medium' as const, reason: '平台流水为申报收入2.1倍', action: '推送温馨提醒，建议自查', dept: '税务局', handler: '刘专员', status: 'resolved' as const, createdAt: '2026-05-22 11:20', feedback: '已补充申报，差异消除，模型标记为正常' },
  { id: 'R-202605-005', target: '5名OPC', type: '信用预警', level: 'medium' as const, reason: '信用分连续下降超过50分', action: '触发人才专员介入', dept: '人才服务组', handler: '张专员', status: 'feedback' as const, createdAt: '2026-05-21 09:00', feedback: '已提供一对一辅导，3人信用分回升，模型权重微调' },
  { id: 'R-202605-006', target: 'D区·文创街', type: '社保漏保', level: 'low' as const, reason: '未参保密度上升至91', action: '入户宣传', dept: '人社局', handler: '赵专员', status: 'resolved' as const, createdAt: '2026-05-20 11:30', feedback: '新增参保32人，密度降至72，模型更新检测阈值' },
]

const statusConfig: Record<string, { label: string; style: string; step: number }> = {
  pending: { label: 'AI发现', style: 'bg-rose-500/15 text-rose-400 border-rose-500/30', step: 0 },
  dispatched: { label: '已派发', style: 'bg-blue-500/15 text-blue-400 border-blue-500/30', step: 1 },
  following: { label: '处置中', style: 'bg-amber-500/15 text-amber-400 border-amber-500/30', step: 2 },
  resolved: { label: '已解决', style: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', step: 3 },
  feedback: { label: '已回流', style: 'bg-purple-500/15 text-purple-400 border-purple-500/30', step: 4 },
}

const flowSteps = ['AI发现线索', '系统生成工单', '部门接收处置', '处置结果回流', '模型更新优化']

export default function RiskDisposal() {
  const pending = workOrders.filter((d) => d.status === 'pending').length
  const dispatched = workOrders.filter((d) => d.status === 'dispatched').length
  const following = workOrders.filter((d) => d.status === 'following').length
  const resolved = workOrders.filter((d) => d.status === 'resolved').length
  const feedback = workOrders.filter((d) => d.status === 'feedback').length

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">风险预警处置中心</h1>
          <p className="text-sm text-slate-500">发现→派发→处置→反馈→模型更新——闭环处置全流程</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="grid grid-cols-5 gap-3">
        <MetricCard label="AI发现" value={pending} suffix="件" icon={AlertCircle} color="rose" />
        <MetricCard label="已派发" value={dispatched} suffix="件" icon={FileText} color="blue" />
        <MetricCard label="处置中" value={following} suffix="件" icon={Clock} color="amber" />
        <MetricCard label="已解决" value={resolved} suffix="件" icon={CheckCircle2} color="emerald" />
        <MetricCard label="已回流" value={feedback} suffix="件" icon={Bell} color="purple" />
      </div>

      <SectionCard title="闭环处置流程">
        <div className="flex items-center justify-between py-3">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-3 flex-1">
              <div className="flex-1 text-center">
                <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold ${
                  i === 0 ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                    : i === 1 ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                      : i === 2 ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : i === 3 ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                }`}>{i + 1}</div>
                <div className="text-xs text-slate-300">{step}</div>
              </div>
              {i < flowSteps.length - 1 && <ArrowRight size={16} className="text-slate-700 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="风险处置工单">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800/50">
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">工单编号</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">风险对象</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">风险类型</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">等级</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">触发原因</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">建议动作</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">责任部门</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">处理人</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">当前状态</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3">处置反馈</th>
              </tr>
            </thead>
            <tbody>
              {workOrders.map((item) => {
                const sc = statusConfig[item.status]
                return (
                  <tr key={item.id} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-3 text-xs font-mono text-cyan-400/70">{item.id}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{item.target}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{item.type}</td>
                    <td className="py-3 pr-3"><StatusBadge status={item.level} /></td>
                    <td className="py-3 pr-3 text-xs text-slate-400 max-w-[180px]">{item.reason}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{item.action}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{item.dept}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{item.handler}</td>
                    <td className="py-3 pr-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${sc.style}`}>{sc.label}</span>
                    </td>
                    <td className="py-3 pr-3 text-xs text-slate-500 max-w-[200px]">{item.feedback || '-'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="处置效果统计">
        <div className="grid grid-cols-5 gap-4">
          {[
            { label: '平均响应时间', value: '2.3h', trend: '-18%', source: '工单系统' },
            { label: '风险解除率', value: '87.5%', trend: '+5.2%', source: '工单系统' },
            { label: '主动服务触达率', value: '82.3%', trend: '+12%', source: '推送系统' },
            { label: 'OPC满意度', value: '4.6/5', trend: '+0.3', source: '反馈系统' },
            { label: '重复风险率', value: '8.2%', trend: '-3.1%', source: '风险模型' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold font-mono text-white mb-1">{item.value}</div>
              <div className="text-[11px] text-slate-400 mb-1">{item.label}</div>
              <span className="text-[11px] text-emerald-400">{item.trend}</span>
              <div className="text-[10px] text-slate-600 mt-0.5">来源：{item.source}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
