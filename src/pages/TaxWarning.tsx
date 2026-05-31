import { MetricCard, SectionCard, StatusBadge } from '@/components/Common'
import { AlertTriangle, ShieldAlert, Eye, FileWarning } from 'lucide-react'
import { riskItems } from '@/data/mockData'

export default function TaxWarning() {
  const highCount = riskItems.filter((r) => r.riskLevel === 'high').length
  const mediumCount = riskItems.filter((r) => r.riskLevel === 'medium').length
  const lowCount = riskItems.filter((r) => r.riskLevel === 'low').length
  const pendingCount = riskItems.filter((r) => r.status === 'pending').length

  const totalAmount = riskItems.reduce((s, r) => s + r.amount, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white mb-1">税收监管预警</h1>
        <p className="text-sm text-slate-500">精准监管——基于大数据模型识别异常交易和潜在税收风险点</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="高风险线索" value={highCount} suffix="条" icon={ShieldAlert} color="rose" />
        <MetricCard label="中风险线索" value={mediumCount} suffix="条" icon={AlertTriangle} color="amber" />
        <MetricCard label="低风险线索" value={lowCount} suffix="条" icon={Eye} color="blue" />
        <MetricCard label="待处理线索" value={pendingCount} suffix="条" icon={FileWarning} color="amber" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <SectionCard title="风险等级分布">
          <div className="flex items-center justify-center gap-8 py-4">
            {[
              { label: '高风险', count: highCount, color: 'rose', ring: 'border-rose-400', bg: 'bg-rose-500/10', text: 'text-rose-400' },
              { label: '中风险', count: mediumCount, color: 'amber', ring: 'border-amber-400', bg: 'bg-amber-500/10', text: 'text-amber-400' },
              { label: '低风险', count: lowCount, color: 'blue', ring: 'border-blue-400', bg: 'bg-blue-500/10', text: 'text-blue-400' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className={`w-24 h-24 rounded-full ${item.bg} border-4 ${item.ring} flex items-center justify-center`}>
                  <span className={`text-3xl font-bold font-mono ${item.text}`}>{item.count}</span>
                </div>
                <span className="text-xs text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="风险类型检测逻辑" className="col-span-2">
          <div className="space-y-3">
            {[
              { type: '收入-申报不匹配', logic: '平台流水 > 申报收入 × 200%', source: '平台流水 + 税务接口', color: 'rose' },
              { type: '多账户分散收款', logic: '同一身份证关联 > 3个收款账户', source: '实名认证 + 支付流水', color: 'amber' },
              { type: '收入突增零申报', logic: '月收入环比+100% 且 申报为0', source: '平台流水 + 税务接口', color: 'rose' },
              { type: '大额私转公', logic: '单笔 > 5万 且 无合同备案', source: '支付流水 + 合同系统', color: 'amber' },
              { type: '关联风险传导', logic: '合作方出现高风险标记', source: '图神经网络分析', color: 'blue' },
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-4 px-4 py-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className={`w-1.5 h-8 rounded-full bg-${item.color}-400`} />
                <span className="text-sm text-slate-200 w-36">{item.type}</span>
                <span className="text-xs text-slate-400 flex-1">{item.logic}</span>
                <span className="text-[11px] text-slate-500">{item.source}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="风险线索列表">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800/50">
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">风险等级</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">线索编号</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">风险类型</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">OPC主体</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">描述</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">涉及金额</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-4">状态</th>
                <th className="text-left text-[11px] text-slate-500 font-medium pb-3">日期</th>
              </tr>
            </thead>
            <tbody>
              {riskItems.map((item) => (
                <tr key={item.id} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 pr-4">
                    <StatusBadge status={item.riskLevel} />
                  </td>
                  <td className="py-3 pr-4 text-xs font-mono text-slate-400">{item.id}</td>
                  <td className="py-3 pr-4 text-xs text-slate-300">{item.riskType}</td>
                  <td className="py-3 pr-4 text-xs text-slate-300">{item.opcName}</td>
                  <td className="py-3 pr-4 text-xs text-slate-400 max-w-[240px] truncate">{item.description}</td>
                  <td className="py-3 pr-4 text-xs font-mono text-amber-400">
                    {item.amount > 0 ? `¥${item.amount.toLocaleString()}` : '-'}
                  </td>
                  <td className="py-3 pr-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="py-3 text-xs text-slate-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="处置流程">
        <div className="flex items-center justify-center gap-6 py-4">
          {[
            { label: '高风险（红色）', desc: '自动推送至税务系统，建议核查', color: 'rose', icon: '●' },
            { label: '中风险（黄色）', desc: '推送温馨提醒，建议自查', color: 'amber', icon: '●' },
            { label: '低风险（蓝色）', desc: '仅记录，不推送', color: 'blue', icon: '●' },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-4">
              {i > 0 && <div className="w-12 h-px bg-slate-700" />}
              <div className={`rounded-xl bg-${item.color}-500/5 border border-${item.color}-500/20 p-4 w-56`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-${item.color}-400 text-lg`}>{item.icon}</span>
                  <span className="text-sm text-slate-200">{item.label}</span>
                </div>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
