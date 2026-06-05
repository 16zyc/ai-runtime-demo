import { useState } from 'react'
import { MetricCard, SectionCard } from '@/components/Common'
import {
  ClipboardList,
  Zap,
  BarChart3,
  Plus,
  Trash2,
  Ban,
  Handshake,
  Gavel,
  ArrowRightLeft,
  FileText,
  Clock,
  CheckCircle2,
  Users,
  TrendingUp,
  DollarSign,
  Eye,
} from 'lucide-react'

type Tab = 'orders' | 'matching' | 'stats'

const tabs: { key: Tab; label: string; icon: typeof ClipboardList }[] = [
  { key: 'orders', label: '订单管理', icon: ClipboardList },
  { key: 'matching', label: '智能撮合', icon: Zap },
  { key: 'stats', label: '统计查询', icon: BarChart3 },
]

const orders = [
  { id: 'ORD-202605-001', title: '某科技公司官网AI客服搭建', publisher: '运营方', type: 'AI开发', amount: 8500, status: 'active', deadline: '2026-06-15', assignedTo: '刘某某', createdAt: '2026-05-28' },
  { id: 'ORD-202605-002', title: '电商产品描述文案优化', publisher: '运营方', type: '内容创作', amount: 2200, status: 'assigned', deadline: '2026-06-10', assignedTo: '王某某', createdAt: '2026-05-27' },
  { id: 'ORD-202605-003', title: '数据分析报告生成', publisher: '主理方', type: '数据分析', amount: 3800, status: 'completed', deadline: '2026-05-30', assignedTo: '赵某某', createdAt: '2026-05-20' },
  { id: 'ORD-202605-004', title: '小红书月度选题策划', publisher: '运营方', type: '内容创作', amount: 1500, status: 'bidding', deadline: '2026-06-20', assignedTo: '-', createdAt: '2026-05-26' },
  { id: 'ORD-202605-005', title: '跨境支付接口对接', publisher: '主理方', type: '技术开发', amount: 12000, status: 'flow', deadline: '2026-06-25', assignedTo: '-', createdAt: '2026-05-25' },
  { id: 'ORD-202605-006', title: '企业培训课件制作', publisher: '运营方', type: '教育培训', amount: 5000, status: 'voided', deadline: '-', assignedTo: '-', createdAt: '2026-05-22' },
]

const statusConfig: Record<string, { label: string; style: string }> = {
  active: { label: '进行中', style: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30' },
  assigned: { label: '已分配', style: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  completed: { label: '已完成', style: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  bidding: { label: '抢单中', style: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  flow: { label: '流单', style: 'bg-rose-500/15 text-rose-400 border-rose-500/30' },
  voided: { label: '已作废', style: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
}

const matchingRecords = [
  { orderId: 'ORD-202605-004', method: '抢单', opcName: '王某某', opcCredit: 'A级 782分', matchScore: 95, status: 'bidding', time: '2026-05-26 14:30' },
  { orderId: 'ORD-202605-004', method: '抢单', opcName: '李某某', opcCredit: 'B级 645分', matchScore: 78, status: 'bidding', time: '2026-05-26 15:10' },
  { orderId: 'ORD-202605-001', method: '智能撮合', opcName: '刘某某', opcCredit: 'A级 802分', matchScore: 92, status: 'matched', time: '2026-05-28 09:00' },
  { orderId: 'ORD-202605-002', method: '单一分配', opcName: '王某某', opcCredit: 'A级 782分', matchScore: 88, status: 'assigned', time: '2026-05-27 10:30' },
  { orderId: 'ORD-202605-005', method: '智能撮合', opcName: '-', opcCredit: '-', matchScore: 0, status: 'unmatched', time: '2026-05-25 16:00' },
]

const matchMethodLabels: Record<string, { label: string; style: string }> = {
  '智能撮合': { label: '智能撮合', style: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  '抢单': { label: '抢单', style: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  '单一分配': { label: '单一分配', style: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
}

const monthlyStats = [
  { month: '1月', published: 45, completed: 38, amount: 28.5 },
  { month: '2月', published: 52, completed: 44, amount: 32.1 },
  { month: '3月', published: 61, completed: 53, amount: 38.7 },
  { month: '4月', published: 58, completed: 50, amount: 35.2 },
  { month: '5月', published: 72, completed: 61, amount: 42.8 },
]

export default function OrderManagement() {
  const [activeTab, setActiveTab] = useState<Tab>('orders')

  const activeOrders = orders.filter((o) => o.status === 'active' || o.status === 'assigned').length
  const biddingOrders = orders.filter((o) => o.status === 'bidding').length
  const completedOrders = orders.filter((o) => o.status === 'completed').length
  const totalAmount = orders.filter((o) => o.status !== 'voided').reduce((s, o) => s + o.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">订单管理系统</h1>
          <p className="text-sm text-slate-500">订单发布→智能撮合/抢单/分配→签约→交付——全流程订单管理</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="进行中订单" value={activeOrders} suffix="个" icon={ClipboardList} color="cyan" />
        <MetricCard label="抢单中" value={biddingOrders} suffix="个" icon={Zap} color="amber" />
        <MetricCard label="已完成" value={completedOrders} suffix="个" icon={CheckCircle2} color="emerald" />
        <MetricCard label="订单总额" value={totalAmount} prefix="¥" icon={DollarSign} color="blue" />
      </div>

      <div className="flex gap-2 border-b border-slate-800/50 pb-0">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors border-b-2 -mb-px ${
                isActive ? 'text-cyan-400 border-cyan-400' : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-2 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors">
                <Plus size={12} /> 发布订单
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 text-xs bg-white/5 text-slate-400 border border-slate-700 rounded-lg hover:bg-white/10 transition-colors">
                <Trash2 size={12} /> 删除
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 text-xs bg-white/5 text-slate-400 border border-slate-700 rounded-lg hover:bg-white/10 transition-colors">
                <Ban size={12} /> 作废
              </button>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>来源：订单管理系统</span>
              <span>· 实时更新</span>
            </div>
          </div>

          <SectionCard title="订单列表">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800/50">
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">订单编号</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">订单标题</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">发布方</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">类型</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">金额</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">截止日期</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">承接人</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">状态</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    const sc = statusConfig[order.status]
                    return (
                      <tr key={order.id} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 pr-3 text-xs font-mono text-cyan-400/70">{order.id}</td>
                        <td className="py-3 pr-3 text-xs text-slate-300">{order.title}</td>
                        <td className="py-3 pr-3 text-xs text-slate-400">{order.publisher}</td>
                        <td className="py-3 pr-3 text-xs text-slate-400">{order.type}</td>
                        <td className="py-3 pr-3 text-xs font-mono text-amber-400">¥{order.amount.toLocaleString()}</td>
                        <td className="py-3 pr-3 text-xs text-slate-400">{order.deadline}</td>
                        <td className="py-3 pr-3 text-xs text-slate-400">{order.assignedTo}</td>
                        <td className="py-3 pr-3">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${sc.style}`}>{sc.label}</span>
                        </td>
                        <td className="py-3 pr-3">
                          <button className="text-[11px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-slate-700 hover:bg-white/10 transition-colors flex items-center gap-1">
                            <Eye size={10} /> 查看
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>
      )}

      {activeTab === 'matching' && (
        <div className="space-y-4">
          <SectionCard title="撮合方式说明">
            <div className="grid grid-cols-4 gap-3">
              {[
                { method: '智能撮合', desc: 'AI根据技能标签+信用分+LBS自动匹配最优OPC', icon: Zap, color: 'cyan' },
                { method: '抢单', desc: '订单发布到大厅，符合条件OPC可主动抢单', icon: Handshake, color: 'amber' },
                { method: '单一分配', desc: '运营方/主理方指定特定OPC承接', icon: Gavel, color: 'blue' },
                { method: '流单处理', desc: '超时未承接订单自动标记流单，重新分配或调整', icon: ArrowRightLeft, color: 'rose' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.method} className={`rounded-xl bg-${item.color}-500/5 border border-${item.color}-500/15 p-4`}>
                    <div className={`w-9 h-9 rounded-lg bg-${item.color}-500/10 flex items-center justify-center mb-3`}>
                      <Icon size={18} className={`text-${item.color}-400`} />
                    </div>
                    <div className="text-sm font-medium text-slate-200 mb-1">{item.method}</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </SectionCard>

          <SectionCard title="撮合记录">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800/50">
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">订单编号</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">撮合方式</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">OPC</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">信用等级</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">匹配度</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">时间</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3">状态</th>
                  </tr>
                </thead>
                <tbody>
                  {matchingRecords.map((rec, i) => (
                    <tr key={i} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 pr-3 text-xs font-mono text-cyan-400/70">{rec.orderId}</td>
                      <td className="py-3 pr-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${matchMethodLabels[rec.method]?.style || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                          {rec.method}
                        </span>
                      </td>
                      <td className="py-3 pr-3 text-xs text-slate-300">{rec.opcName}</td>
                      <td className="py-3 pr-3 text-xs text-slate-400">{rec.opcCredit}</td>
                      <td className="py-3 pr-3">
                        {rec.matchScore > 0 ? (
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                              <div className={`h-full rounded-full ${rec.matchScore >= 90 ? 'bg-emerald-400' : rec.matchScore >= 70 ? 'bg-amber-400' : 'bg-rose-400'}`} style={{ width: `${rec.matchScore}%` }} />
                            </div>
                            <span className="text-xs font-mono text-slate-400">{rec.matchScore}%</span>
                          </div>
                        ) : <span className="text-xs text-slate-600">-</span>}
                      </td>
                      <td className="py-3 pr-3 text-xs text-slate-400">{rec.time}</td>
                      <td className="py-3 pr-3">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${
                          rec.status === 'matched' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : rec.status === 'assigned' ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                              : rec.status === 'bidding' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                                : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                        }`}>
                          {rec.status === 'matched' ? '已匹配' : rec.status === 'assigned' ? '已分配' : rec.status === 'bidding' ? '抢单中' : '未匹配'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="订单签约">
            <div className="rounded-lg bg-cyan-500/5 border border-cyan-500/15 p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={14} className="text-cyan-400/60" />
                <span className="text-xs font-medium text-slate-200">签约流程</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                撮合成功后，运营方/主理方与OPC在线签署订单合同，明确交付内容、金额、工期、验收标准。签约后订单进入执行阶段，交付完成经验收后自动结算。
              </p>
            </div>
          </SectionCard>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/15 p-4 text-center">
              <div className="text-2xl font-bold font-mono text-cyan-400">72</div>
              <div className="text-[11px] text-slate-400 mt-1">本月发布</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">+24% 环比</div>
            </div>
            <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4 text-center">
              <div className="text-2xl font-bold font-mono text-emerald-400">61</div>
              <div className="text-[11px] text-slate-400 mt-1">本月完成</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">+15% 环比</div>
            </div>
            <div className="rounded-xl bg-amber-500/5 border border-amber-500/15 p-4 text-center">
              <div className="text-2xl font-bold font-mono text-amber-400">84.7%</div>
              <div className="text-[11px] text-slate-400 mt-1">完成率</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">+3.2% 环比</div>
            </div>
            <div className="rounded-xl bg-blue-500/5 border border-blue-500/15 p-4 text-center">
              <div className="text-2xl font-bold font-mono text-blue-400">¥42.8万</div>
              <div className="text-[11px] text-slate-400 mt-1">本月成交额</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">+21.5% 环比</div>
            </div>
          </div>

          <SectionCard title="月度订单趋势">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800/50">
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">月份</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">发布数</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">完成数</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">完成率</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">成交额</th>
                    <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">趋势</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyStats.map((s) => {
                    const rate = ((s.completed / s.published) * 100).toFixed(1)
                    return (
                      <tr key={s.month} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 pr-3 text-xs text-slate-300">{s.month}</td>
                        <td className="py-3 pr-3 text-xs font-mono text-slate-300">{s.published}</td>
                        <td className="py-3 pr-3 text-xs font-mono text-slate-300">{s.completed}</td>
                        <td className="py-3 pr-3 text-xs font-mono text-emerald-400">{rate}%</td>
                        <td className="py-3 pr-3 text-xs font-mono text-amber-400">¥{s.amount}万</td>
                        <td className="py-3 pr-3">
                          <div className="flex items-center gap-1">
                            <TrendingUp size={12} className="text-emerald-400" />
                            <span className="text-[10px] text-emerald-400">增长</span>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <div className="grid grid-cols-2 gap-4">
            <SectionCard title="订单类型分布">
              <div className="space-y-3">
                {[
                  { type: 'AI开发', count: 28, pct: 38.9, color: 'bg-cyan-400' },
                  { type: '内容创作', count: 18, pct: 25.0, color: 'bg-amber-400' },
                  { type: '数据分析', count: 12, pct: 16.7, color: 'bg-emerald-400' },
                  { type: '技术开发', count: 8, pct: 11.1, color: 'bg-blue-400' },
                  { type: '教育培训', count: 6, pct: 8.3, color: 'bg-purple-400' },
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-3">
                    <span className="text-xs text-slate-300 w-16">{item.type}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct * 2.5}%` }} />
                    </div>
                    <span className="text-xs font-mono text-slate-400 w-12 text-right">{item.count}个</span>
                    <span className="text-[10px] text-slate-500 w-10 text-right">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="撮合方式统计">
              <div className="space-y-3">
                {[
                  { method: '智能撮合', count: 32, pct: 44.4, color: 'bg-cyan-400' },
                  { method: '抢单', count: 22, pct: 30.6, color: 'bg-amber-400' },
                  { method: '单一分配', count: 14, pct: 19.4, color: 'bg-blue-400' },
                  { method: '流单重分配', count: 4, pct: 5.6, color: 'bg-rose-400' },
                ].map((item) => (
                  <div key={item.method} className="flex items-center gap-3">
                    <span className="text-xs text-slate-300 w-20">{item.method}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct * 2.5}%` }} />
                    </div>
                    <span className="text-xs font-mono text-slate-400 w-12 text-right">{item.count}个</span>
                    <span className="text-[10px] text-slate-500 w-10 text-right">{item.pct}%</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      )}
    </div>
  )
}
