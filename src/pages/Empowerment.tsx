import { Link } from 'react-router-dom'
import { SectionCard } from '@/components/Common'
import {
  Rocket,
  Brain,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageSquare,
  Shield,
  TrendingUp,
  Heart,
  Scale,
  Cpu,
  Bot,
} from 'lucide-react'

const engines = [
  {
    id: '01',
    title: '创业赋能体系',
    subtitle: '激活新质生产力',
    color: 'cyan',
    icon: Rocket,
    modules: [
      {
        name: 'AI智能生成场景工厂',
        icon: Cpu,
        features: ['个人工作区：私域知识库+AI工具箱+200+OPC场景模板', '场景工厂：拖拽式生成AI Agent，一键发布到任务大厅', 'AI软件智能生成：输入业务描述，自动生成轻量级SaaS工具'],
      },
      {
        name: '技能培训与合规服务中心',
        icon: GraduationCap,
        features: ['智能技能诊断：履历+测试→技能图谱缺口', '个性化学习路径：AI推荐最短路径，整合本地化课程', 'AI助教+实操模拟：模拟客户对话、税务申报演练', '权威认证体系：工信部/人社部认证→开发区认证OPC人才库'],
      },
      {
        name: 'FDE全周期数字赋能服务',
        icon: Handshake,
        features: ['一站式政务：税务登记/代申报、社保缴纳', '金融链接：OPC信用分→银行"秒批"小额经营贷', '智能化任务撮合：LBS+技能标签+信用分→AI精准匹配', '项目孵化支持：算力券、API补贴、导师陪跑'],
      },
      {
        name: '特色工具',
        icon: Lightbulb,
        features: ['OPC Launchpad：从"想法→原型→上线"的模板库', '实时协同沙盒：多人共同调试AI应用'],
      },
      {
        name: '元芳——OPC创业智能助理',
        icon: Bot,
        features: ['"元芳，帮我发布一个任务"→自动打开预填模板', '"元芳，查一下我的信用分"→播报各维度得分+提升建议', '"元芳，看看今天的收入"→展示收入数据及趋势', '"元芳，安排明天的日程"→根据优先级智能排期'],
      },
    ],
  },
  {
    id: '02',
    title: '智慧监管体系',
    subtitle: '提升治理效能',
    color: 'blue',
    icon: Shield,
    modules: [
      {
        name: '产业数据洞察驾驶舱',
        icon: Brain,
        features: ['产业全景视图：30秒掌握园区OPC产业全貌', '社保扩面分析：识别未参保人群特征', '税收监管预警：大数据识别异常交易和风险点', '人才结构洞察：高技能人才分布与流动趋势', '风险预警与主动服务：发现-处置-反馈闭环'],
      },
    ],
  },
  {
    id: '03',
    title: '创新增长引擎',
    subtitle: '驱动区域发展',
    color: 'emerald',
    icon: TrendingUp,
    modules: [
      {
        name: '新质生产力示范区',
        icon: Lightbulb,
        features: ['OPC创新指数：AI工具渗透率+跨行业协作密度+知识产权产出', '标杆孵化：每年筛选10个高信用分OPC，深度赋能并包装为"开发区模式"'],
      },
      {
        name: '高端人才集聚网络',
        icon: GraduationCap,
        features: ['虚拟人才库：非属地OPC可注册，贡献交易额计入"数字招商"', '产教融合：与本地高校共建"OPC实训基地"，学生接单获学分'],
      },
      {
        name: '区域经济数字化增长仪表',
        icon: TrendingUp,
        features: ['经济贡献量化：直接贡献+间接贡献（消费带动/投资吸引）', '政策仿真器：输入政策参数，预测6个月内OPC增长、税收增量'],
      },
    ],
  },
  {
    id: '04',
    title: '增长与商业化引擎',
    subtitle: '解决"获客难"与"盈利挑战"',
    color: 'amber',
    icon: TrendingUp,
    modules: [
      {
        name: '获客实验室',
        icon: Rocket,
        features: ['内容生成器：自动生成SEO内容、小红书/知乎选题、短视频脚本', '模拟投放工具：输入预算，预测不同渠道ROI', '冷启动交换网络：平台内OPC互相推广'],
      },
      {
        name: '商业化工具箱',
        icon: Handshake,
        features: ['定价策略生成器：SaaS订阅/按次付费/混合模型智能推荐', '支付+开票聚合：微信/支付宝+Stripe/Lemon Squeezy一键接入', '用户生命周期管理轻CRM：留存、转化、复购追踪'],
      },
      {
        name: '元芳——营销增长智能助理',
        icon: Bot,
        features: ['"元芳，帮我生成下周的小红书选题"→10个选题+参考文案', '"元芳，预算5000投哪个渠道最划算"→多渠道ROI预测', '"元芳，帮我看看定价是否合理"→行业定价对比+优化建议'],
      },
    ],
  },
  {
    id: '05',
    title: '韧性支持引擎',
    subtitle: '解决"心理挑战"',
    color: 'rose',
    icon: Heart,
    modules: [
      {
        name: '匿名状态面板',
        icon: Heart,
        features: ['同类对比：对比同类OPC关键指标（不暴露隐私）', '参照价值："你并不孤单"的数据参照', '趋势追踪：个人韧性指数变化曲线'],
      },
      {
        name: '压力预警系统',
        icon: Brain,
        features: ['行为监测：频繁修改定价、长时间未登录、深夜活跃', '智能推送：心理建议、社区支持入口或Circle小组邀请', '危机干预：严重情况自动通知平台心理顾问'],
      },
      {
        name: 'Circle小组',
        icon: MessageSquare,
        features: ['5-8人月度闭门会（行业匿名）', '平台提供商业或技术话题', '全程匿名，平台合规承诺'],
      },
      {
        name: '元芳——心理支持智能助理',
        icon: Bot,
        features: ['"元芳，我觉得很累"→识别情绪，推送休息建议或Circle邀请', '"元芳，最近数据怎么样"→匿名对比同类OPC', '"元芳，帮我记录一下心情"→情绪日记+周期性心理健康报告'],
      },
    ],
  },
  {
    id: '06',
    title: '合规与风控引擎',
    subtitle: '解决"行业合规"痛点',
    color: 'purple',
    icon: Scale,
    modules: [
      {
        name: '合规检查器',
        icon: Shield,
        features: ['AI输出扫描：自动标记风险词（如"保证治愈"、"绝对合法"）', '行业规则库：覆盖医疗、法律、财税、教育等专项合规规则', '实时拦截：高风险内容实时拦截+修改建议'],
      },
      {
        name: '免责条款生成器',
        icon: Scale,
        features: ['根据业务类型生成用户协议、隐私政策、AI服务免责声明', '覆盖SaaS、咨询服务、AI工具、电商平台等业务类型', '法规变化自动更新条款内容'],
      },
      {
        name: '数据隔离沙箱',
        icon: Cpu,
        features: ['数据本地化：满足GDPR、中国个保法的本地化处理方案', '分级存储：敏感数据加密存储+分级授权访问', '跨境合规：出海OPC的数据跨境传输合规支持'],
      },
      {
        name: '元芳——合规律师智能助理',
        icon: Bot,
        features: ['"元芳，这个文案合规吗"→即时扫描+风险词标记+修改建议', '"元芳，帮我生成用户协议"→自动生成完整协议+隐私政策', '"元芳，GDPR要求我们怎么做"→具体业务场景合规指引'],
      },
    ],
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string; dot: string }> = {
  cyan: { border: 'border-cyan-500/20 hover:border-cyan-400/40', bg: 'from-cyan-500/10 to-cyan-500/5', text: 'text-cyan-400', glow: 'hover:shadow-[0_0_30px_-8px_rgba(0,229,255,0.15)]', dot: 'bg-cyan-400' },
  blue: { border: 'border-blue-500/20 hover:border-blue-400/40', bg: 'from-blue-500/10 to-blue-500/5', text: 'text-blue-400', glow: 'hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.15)]', dot: 'bg-blue-400' },
  emerald: { border: 'border-emerald-500/20 hover:border-emerald-400/40', bg: 'from-emerald-500/10 to-emerald-500/5', text: 'text-emerald-400', glow: 'hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.15)]', dot: 'bg-emerald-400' },
  amber: { border: 'border-amber-500/20 hover:border-amber-400/40', bg: 'from-amber-500/10 to-amber-500/5', text: 'text-amber-400', glow: 'hover:shadow-[0_0_30px_-8px_rgba(245,158,11,0.15)]', dot: 'bg-amber-400' },
  rose: { border: 'border-rose-500/20 hover:border-rose-400/40', bg: 'from-rose-500/10 to-rose-500/5', text: 'text-rose-400', glow: 'hover:shadow-[0_0_30px_-8px_rgba(244,63,94,0.15)]', dot: 'bg-rose-400' },
  purple: { border: 'border-purple-500/20 hover:border-purple-400/40', bg: 'from-purple-500/10 to-purple-500/5', text: 'text-purple-400', glow: 'hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.15)]', dot: 'bg-purple-400' },
}

export default function Empowerment() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white mb-1">创业赋能体系</h1>
        <p className="text-sm text-slate-500">不是给工具，而是给"能直接变现的能力闭环"——六大引擎驱动OPC全生命周期成长</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {engines.map((engine) => {
          const Icon = engine.icon
          const c = colorMap[engine.color]
          return (
            <div
              key={engine.id}
              className={`rounded-xl bg-gradient-to-br ${c.bg} border ${c.border} ${c.glow} p-5 transition-all duration-300 group cursor-default`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={c.text} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 mb-0.5">引擎 {engine.id}</div>
                  <div className="text-sm font-medium text-white">{engine.title}</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">{engine.subtitle}</p>
              <div className="mt-3 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                <span className="text-[11px] text-slate-500">{engine.modules.length} 个功能模块</span>
              </div>
            </div>
          )
        })}
      </div>

      {engines.map((engine) => {
        const c = colorMap[engine.color]
        return (
          <SectionCard key={engine.id} title={`${engine.id} | ${engine.title}——${engine.subtitle}`}>
            <div className="grid grid-cols-2 gap-4">
              {engine.modules.map((mod) => {
                const ModIcon = mod.icon
                return (
                  <div key={mod.name} className="rounded-lg bg-white/[0.02] border border-slate-800/30 p-4 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center`}>
                        <ModIcon size={16} className={c.text} />
                      </div>
                      <span className="text-sm font-medium text-slate-200">{mod.name}</span>
                    </div>
                    <ul className="space-y-2">
                      {mod.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2">
                          <span className={`w-1 h-1 rounded-full ${c.dot} mt-2 flex-shrink-0`} />
                          <span className="text-xs text-slate-400 leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </SectionCard>
        )
      })}

      <SectionCard title="智慧监管体系 → 查看驾驶舱">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">智慧监管体系的核心是产业数据洞察驾驶舱，提供产业全景、社保扩面、税收预警、人才洞察、风险预警五大模块</p>
          <Link
            to="/panorama"
            className="px-4 py-2 text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-colors flex-shrink-0 ml-4"
          >
            进入驾驶舱 →
          </Link>
        </div>
      </SectionCard>
    </div>
  )
}
