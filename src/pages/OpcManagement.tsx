import { useState } from 'react'
import { MetricCard, SectionCard, StatusBadge } from '@/components/Common'
import {
  UserPlus,
  ClipboardCheck,
  FileSignature,
  Archive,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  ChevronRight,
  Download,
  Eye,
} from 'lucide-react'

type Tab = 'apply' | 'approve' | 'sign' | 'archive'

const tabs: { key: Tab; label: string; icon: typeof UserPlus }[] = [
  { key: 'apply', label: '申请入住', icon: UserPlus },
  { key: 'approve', label: '审批管理', icon: ClipboardCheck },
  { key: 'sign', label: '在线签约', icon: FileSignature },
  { key: 'archive', label: '备案管理', icon: Archive },
]

const applications = [
  { id: 'A-202605-001', name: '张某某', type: 'AI设计服务', status: 'pending', date: '2026-05-28', materials: '身份证、学历证、技能认证' },
  { id: 'A-202605-002', name: '李某某', type: '跨境电商运营', status: 'pending', date: '2026-05-27', materials: '身份证、营业执照、银行账户' },
  { id: 'A-202605-003', name: '王某某', type: '内容创作', status: 'approved', date: '2026-05-25', materials: '身份证、作品集、培训证书' },
  { id: 'A-202605-004', name: '赵某某', type: '数据分析', status: 'approved', date: '2026-05-24', materials: '身份证、学历证、项目经历' },
  { id: 'A-202605-005', name: '陈某某', type: '财税咨询', status: 'rejected', date: '2026-05-22', materials: '身份证、资格证（不完整）' },
  { id: 'A-202605-006', name: '刘某某', type: 'AI客服开发', status: 'approved', date: '2026-05-20', materials: '身份证、技能认证、项目案例' },
]

const contracts = [
  { id: 'C-202605-001', opcName: '王某某', opcType: '内容创作', status: 'signed', signDate: '2026-05-26', validUntil: '2027-05-25', amount: '按单结算' },
  { id: 'C-202605-002', opcName: '赵某某', opcType: '数据分析', status: 'signed', signDate: '2026-05-25', validUntil: '2027-05-24', amount: '按单结算' },
  { id: 'C-202605-003', opcName: '刘某某', opcType: 'AI客服开发', status: 'pending_sign', signDate: '-', validUntil: '-', amount: '按单结算' },
  { id: 'C-202605-004', opcName: '张某某', opcType: 'AI设计服务', status: 'draft', signDate: '-', validUntil: '-', amount: '按单结算' },
]

const filings = [
  { id: 'F-202605-001', opcName: '王某某', type: '工商备案', status: 'completed', dept: '市场监管局', date: '2026-05-26', note: '个体工商户登记已完成' },
  { id: 'F-202605-002', opcName: '王某某', type: '社保开户', status: 'completed', dept: '人社局', date: '2026-05-27', note: '社保账户已开通' },
  { id: 'F-202605-003', opcName: '赵某某', type: '工商备案', status: 'processing', dept: '市场监管局', date: '2026-05-25', note: '材料审核中' },
  { id: 'F-202605-004', opcName: '赵某某', type: '税务登记', status: 'pending', dept: '税务局', date: '-', note: '待工商备案完成后办理' },
  { id: 'F-202605-005', opcName: '刘某某', type: '工商备案', status: 'completed', dept: '市场监管局', date: '2026-05-21', note: '个体工商户登记已完成' },
  { id: 'F-202605-006', opcName: '刘某某', type: '社保开户', status: 'completed', dept: '人社局', date: '2026-05-22', note: '社保账户已开通' },
  { id: 'F-202605-007', opcName: '刘某某', type: '税务登记', status: 'completed', dept: '税务局', date: '2026-05-23', note: '税务登记已完成，纳税人识别号已生成' },
]

const applyFormFields = [
  { section: '基本信息', fields: ['姓名', '身份证号', '手机号', '联系地址'] },
  { section: '业务信息', fields: ['OPC业务类型', '主要服务领域', '预计月收入范围', '是否有相关资质证书'] },
  { section: '材料上传', fields: ['身份证正反面', '学历/资格证明', '技能认证证书', '银行账户信息'] },
]

export default function OpcManagement() {
  const [activeTab, setActiveTab] = useState<Tab>('apply')

  const pendingCount = applications.filter((a) => a.status === 'pending').length
  const approvedCount = applications.filter((a) => a.status === 'approved').length
  const signedCount = contracts.filter((c) => c.status === 'signed').length
  const filingCount = filings.filter((f) => f.status === 'completed').length

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white mb-1">OPC 管理系统</h1>
          <p className="text-sm text-slate-500">申请入住 → 审批 → 在线签约 → 备案管理——OPC全生命周期入驻管理</p>
        </div>
        <span className="text-[10px] px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">演示数据｜模拟开发区样本</span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <MetricCard label="待审批" value={pendingCount} suffix="件" icon={Clock} color="amber" />
        <MetricCard label="已通过" value={approvedCount} suffix="人" icon={CheckCircle2} color="emerald" />
        <MetricCard label="已签约" value={signedCount} suffix="份" icon={FileSignature} color="cyan" />
        <MetricCard label="备案完成" value={filingCount} suffix="项" icon={Archive} color="blue" />
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

      {activeTab === 'apply' && (
        <div className="space-y-4">
          <SectionCard title="入住申请流程">
            <div className="flex items-center justify-between py-3">
              {['提交申请资料', '运营方审批', '在线签署协议', '建档备案办理', '正式入驻'].map((step, i) => (
                <div key={step} className="flex items-center gap-2 flex-1">
                  <div className="flex-1 text-center">
                    <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-sm font-bold ${
                      i < 3 ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' : 'bg-slate-800/50 text-slate-500 border border-slate-700/50'
                    }`}>{i + 1}</div>
                    <div className="text-xs text-slate-300">{step}</div>
                  </div>
                  {i < 4 && <ChevronRight size={16} className="text-slate-700 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="grid grid-cols-3 gap-4">
            <SectionCard title="申请表单" className="col-span-2">
              <div className="space-y-4">
                {applyFormFields.map((section) => (
                  <div key={section.section}>
                    <div className="text-xs font-medium text-cyan-400 mb-2">{section.section}</div>
                    <div className="grid grid-cols-2 gap-3">
                      {section.fields.map((field) => (
                        <div key={field} className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 w-28 flex-shrink-0">{field}</span>
                          <div className="flex-1 h-8 rounded-lg bg-white/5 border border-slate-800/50 px-3 flex items-center">
                            <span className="text-xs text-slate-600">请填写{field}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 pt-2">
                  <button className="px-4 py-2 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors">提交申请</button>
                  <button className="px-4 py-2 text-xs bg-white/5 text-slate-400 border border-slate-700 rounded-lg hover:bg-white/10 transition-colors">保存草稿</button>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="最近申请记录">
              <div className="space-y-2">
                {applications.slice(0, 5).map((app) => (
                  <div key={app.id} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      app.status === 'pending' ? 'bg-amber-400' : app.status === 'approved' ? 'bg-emerald-400' : 'bg-rose-400'
                    }`} />
                    <div className="flex-1">
                      <div className="text-xs text-slate-200">{app.name} · {app.type}</div>
                      <div className="text-[10px] text-slate-500">{app.date}</div>
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                      app.status === 'pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : app.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                    }`}>{app.status === 'pending' ? '待审批' : app.status === 'approved' ? '已通过' : '已驳回'}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      )}

      {activeTab === 'approve' && (
        <SectionCard title="审批管理">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800/50">
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">申请编号</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">申请人</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">业务类型</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">提交材料</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">申请日期</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">状态</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-3 text-xs font-mono text-cyan-400/70">{app.id}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{app.name}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{app.type}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{app.materials}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{app.date}</td>
                    <td className="py-3 pr-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${
                        app.status === 'pending' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                          : app.status === 'approved' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                      }`}>
                        {app.status === 'pending' ? '待审批' : app.status === 'approved' ? '已通过' : '已驳回'}
                      </span>
                    </td>
                    <td className="py-3 pr-3">
                      <div className="flex gap-2">
                        {app.status === 'pending' && (
                          <>
                            <button className="text-[11px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">通过</button>
                            <button className="text-[11px] px-2 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors">驳回</button>
                          </>
                        )}
                        <button className="text-[11px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-slate-700 hover:bg-white/10 transition-colors flex items-center gap-1">
                          <Eye size={10} /> 查看
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      )}

      {activeTab === 'sign' && (
        <SectionCard title="在线签约">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800/50">
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">合同编号</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">OPC姓名</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">业务类型</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">结算方式</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">签约日期</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">有效期至</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">状态</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((c) => (
                  <tr key={c.id} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-3 text-xs font-mono text-cyan-400/70">{c.id}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{c.opcName}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{c.opcType}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{c.amount}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{c.signDate}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{c.validUntil}</td>
                    <td className="py-3 pr-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${
                        c.status === 'signed' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : c.status === 'pending_sign' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                            : 'bg-slate-500/15 text-slate-400 border-slate-500/30'
                      }`}>
                        {c.status === 'signed' ? '已签约' : c.status === 'pending_sign' ? '待签署' : '草稿'}
                      </span>
                    </td>
                    <td className="py-3 pr-3">
                      <div className="flex gap-2">
                        {c.status === 'pending_sign' && (
                          <button className="text-[11px] px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">发送签署</button>
                        )}
                        {c.status === 'draft' && (
                          <button className="text-[11px] px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">生成合同</button>
                        )}
                        {c.status === 'signed' && (
                          <button className="text-[11px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-slate-700 hover:bg-white/10 transition-colors flex items-center gap-1">
                            <Download size={10} /> 下载
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-cyan-500/5 border border-cyan-500/15 p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileSignature size={14} className="text-cyan-400/60" />
              <span className="text-xs font-medium text-slate-200">电子签约说明</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              审批通过后，系统自动生成OPC入驻协议，双方在线签署。签约完成后自动触发建档备案流程，包括工商备案、社保开户、税务登记等。
            </p>
          </div>
        </SectionCard>
      )}

      {activeTab === 'archive' && (
        <SectionCard title="备案管理">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800/50">
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">备案编号</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">OPC姓名</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">备案类型</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">办理部门</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">办理日期</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3 pr-3">状态</th>
                  <th className="text-left text-[11px] text-slate-500 font-medium pb-3">备注</th>
                </tr>
              </thead>
              <tbody>
                {filings.map((f) => (
                  <tr key={f.id} className="border-b border-slate-800/30 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-3 text-xs font-mono text-cyan-400/70">{f.id}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{f.opcName}</td>
                    <td className="py-3 pr-3 text-xs text-slate-300">{f.type}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{f.dept}</td>
                    <td className="py-3 pr-3 text-xs text-slate-400">{f.date}</td>
                    <td className="py-3 pr-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border ${
                        f.status === 'completed' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : f.status === 'processing' ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
                            : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      }`}>
                        {f.status === 'completed' ? '已完成' : f.status === 'processing' ? '办理中' : '待办理'}
                      </span>
                    </td>
                    <td className="py-3 text-xs text-slate-500 max-w-[200px]">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-amber-500/5 border border-amber-500/15 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={14} className="text-amber-400/60" />
              <span className="text-xs font-medium text-slate-200">备案流程说明</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              签约完成后，运营方自动为OPC办理工商备案（个体工商户登记）、社保开户、税务登记等手续。各部门并行办理，平均3个工作日完成全部备案。
            </p>
          </div>
        </SectionCard>
      )}
    </div>
  )
}
