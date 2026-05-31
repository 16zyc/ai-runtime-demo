import { useState } from 'react'
import { MessageSquare, X, Send, ChevronUp } from 'lucide-react'

const suggestions = {
  workspace: [
    '帮我生成一个跨境电商客服Agent',
    '帮我发布一个任务',
    '申请5万元信用贷',
    '检查这个营销文案是否合规',
    '生成下周小红书选题',
    '进入Circle小组',
  ],
  credit: [
    '为什么我的信用分下降了？',
    '我怎么提升到A级？',
    '我能申请多少贷款？',
    '帮我看看分数构成',
  ],
  dashboard: [
    '查询本月税收风险最高的行业',
    '找出未参保率最高的人群',
    '生成本周产业运行简报',
    '哪些OPC信用分在下降？',
  ],
  default: [
    '帮我查看今日数据',
    '生成本周简报',
    '查询风险预警',
  ],
}

function getContext(path: string) {
  if (path.startsWith('/workspace') || path.startsWith('/empowerment')) return 'workspace'
  if (path.startsWith('/credit')) return 'credit'
  if (path === '/' || path.startsWith('/panorama') || path.startsWith('/social') || path.startsWith('/tax') || path.startsWith('/talent') || path.startsWith('/risk')) return 'dashboard'
  return 'default'
}

export default function YuanfangAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '你好！我是元芳，你的AI智能助理。说话即操作，有什么需要帮忙的？' },
  ])

  const currentPath = window.location.pathname
  const context = getContext(currentPath)
  const currentSuggestions = suggestions[context]

  const handleSend = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: `收到！正在为你处理"${text}"，请稍候...（演示模式）` }])
    }, 600)
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center hover:scale-110 transition-transform duration-200 z-50 group"
        >
          <MessageSquare size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[9px] flex items-center justify-center animate-pulse">3</span>
          <span className="absolute right-full mr-3 text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            元芳 AI 助理
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[520px] bg-[#0d1220] border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/40 flex flex-col z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/50 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">元</div>
              <div>
                <div className="text-sm font-medium text-white">元芳 AI 助理</div>
                <div className="text-[10px] text-emerald-400">在线 · 说话即操作</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors">
              <ChevronUp size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-500/20'
                    : 'bg-white/5 text-slate-300 border border-slate-800/50'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-2 border-t border-slate-800/30">
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {currentSuggestions.slice(0, 3).map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="text-[10px] px-2 py-1 rounded-lg bg-cyan-500/5 text-cyan-400/70 border border-cyan-500/10 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="对元芳说..."
                className="flex-1 bg-white/5 border border-slate-800/50 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/30"
              />
              <button
                onClick={() => handleSend(input)}
                className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
