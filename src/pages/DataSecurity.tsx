import { SectionCard } from '@/components/Common'
import { Database, Shield, Lock, Brain, FileText, CheckCircle2, AlertCircle, Eye } from 'lucide-react'

const dataSources = [
  { name: 'OPC平台行为数据', type: '实时采集', status: 'running', desc: '登录、工具使用、任务完成、学习行为' },
  { name: '任务交易流水', type: '实时采集', status: 'running', desc: '订单金额、支付状态、完成评价' },
  { name: '培训认证数据', type: '每日同步', status: 'running', desc: '课程完成、认证获取、技能标签' },
  { name: '税务接口', type: 'API对接', status: 'partial', desc: '申报数据、纳税记录（部分区域已打通）' },
  { name: '社保接口', type: 'API对接', status: 'partial', desc: '参保状态、缴费记录（部分区域已打通）' },
  { name: '金融机构授权数据', type: '用户授权', status: 'on_demand', desc: '贷款申请、还款记录（需OPC单独授权）' },
]

const permissionLayers = [
  { role: '管委会领导', scope: '全部模块聚合视图', detail: '仅看脱敏统计，不可查看个人明细', level: '聚合' },
  { role: '经发局', scope: '产业全景+人才洞察', detail: '可看行业/区域聚合，不可查看个人', level: '模块' },
  { role: '税务局', scope: '税收预警+风险工单', detail: '可看风险线索和工单，不可看信用分明细', level: '工单' },
  { role: '人社局', scope: '社保扩面+风险工单', detail: '可看未参保聚合和工单，不可看收入明细', level: '工单' },
  { role: 'OPC创业者', scope: '个人数据+信用分', detail: '仅看自己的数据，可授权金融机构查询', level: '个人' },
  { role: '金融机构', scope: '信用分+授权数据', detail: '需OPC单独授权，仅查看授权范围内的数据', level: '授权' },
]

const privacyMeasures = [
  { title: '脱敏统计', desc: '政府驾驶舱仅展示聚合统计，不暴露个人身份和经营细节', icon: Eye },
  { title: '最小必要', desc: '每个角色仅可访问其职责范围内的最小数据集', icon: Shield },
  { title: '授权留痕', desc: '所有数据访问和授权操作记录审计日志，可追溯', icon: FileText },
  { title: '分级存储', desc: '敏感数据加密存储，按等级分类管理访问权限', icon: Lock },
]

const modelGovernance = [
  { name: '信用分规则模型', type: '规则引擎', review: '专家经验+数据验证', appeal: '支持一键申诉', status: '已上线' },
  { name: '税收风险检测', type: 'XGBoost+规则', review: '税务专家复核', appeal: '人工复核通道', status: '已上线' },
  { name: '社保漏保检测', type: '规则引擎', review: '人社局确认', appeal: '标记误报', status: '已上线' },
  { name: '人才流失预警', type: '行为分析模型', review: '经发局确认', appeal: '人工复核通道', status: '测试中' },
  { name: '关联风险传导', type: '图神经网络', review: '风控团队复核', appeal: '人工复核通道', status: '测试中' },
]

const auditLogs = [
  { time: '09:32:15', user: '王专员（税务局）', action: '查看风险工单 R-202605-001', result: '允许' },
  { time: '09:28:42', user: '系统', action: '信用分模型周更新完成', result: '成功' },
  { time: '09:15:00', user: 'AI风险引擎', action: '自动生成工单 R-202605-001', result: '成功' },
  { time: '08:45:33', user: '李专员（人社局）', action: '导出社保扩面线索报告', result: '允许' },
  { time: '08:30:00', user: '系统', action: '社保接口数据同步', result: '成功' },
]

export default function DataSecurity() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">数据治理与安全</h1>
          <p className="text-sm text-slate-500">数据来源·权限隔离·隐私保护·模型治理·安全审计</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="数据来源">
          <div className="space-y-2">
            {dataSources.map((src) => (
              <div key={src.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <Database size={14} className="text-cyan-400/40" />
                <div className="flex-1">
                  <div className="text-xs text-slate-200">{src.name}</div>
                  <div className="text-[10px] text-slate-500">{src.desc}</div>
                </div>
                <span className="text-[10px] text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{src.type}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${src.status === 'running' ? 'bg-emerald-400' : src.status === 'partial' ? 'bg-amber-400' : 'bg-slate-500'}`} />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="权限隔离">
          <div className="space-y-2">
            {permissionLayers.map((p) => (
              <div key={p.role} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/10 w-8 text-center">{p.level}</span>
                <div className="flex-1">
                  <div className="text-xs text-slate-200">{p.role}</div>
                  <div className="text-[10px] text-slate-500">{p.detail}</div>
                </div>
                <span className="text-[10px] text-slate-400">{p.scope}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="隐私保护">
          <div className="grid grid-cols-2 gap-3">
            {privacyMeasures.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.title} className="rounded-lg bg-white/[0.02] border border-slate-800/30 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-cyan-400/60" />
                    <span className="text-sm font-medium text-slate-200">{m.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              )
            })}
          </div>
        </SectionCard>

        <SectionCard title="模型治理">
          <div className="space-y-2">
            {modelGovernance.map((m) => (
              <div key={m.name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <Brain size={14} className="text-purple-400/40" />
                <div className="flex-1">
                  <div className="text-xs text-slate-200">{m.name}</div>
                  <div className="text-[10px] text-slate-500">复核：{m.review} · 申诉：{m.appeal}</div>
                </div>
                <span className="text-[10px] text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{m.type}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${m.status === '已上线' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{m.status}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="安全审计日志（最近5条）">
        <div className="space-y-2">
          {auditLogs.map((log, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02]">
              <span className="text-[10px] font-mono text-slate-500 w-16">{log.time}</span>
              <span className="text-xs text-slate-300 w-40">{log.user}</span>
              <span className="text-xs text-slate-400 flex-1">{log.action}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${log.result === '允许' || log.result === '成功' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>{log.result}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
