import { useEffect, useState, useRef } from 'react'

export function AnimatedNumber({ value, duration = 1200, prefix = '', suffix = '' }: {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [display, setDisplay] = useState(0)
  const startRef = useRef(0)
  const frameRef = useRef(0)

  useEffect(() => {
    startRef.current = display
    const start = performance.now()
    const from = startRef.current

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(from + (value - from) * eased)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [value, duration])

  const isDecimal = suffix === '%' || suffix === '倍'
  const formatted = isDecimal ? display.toFixed(1) : Math.round(display).toLocaleString()

  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  )
}

export function MetricCard({ label, value, suffix, prefix, trend, icon: Icon, color = 'cyan' }: {
  label: string
  value: number
  suffix?: string
  prefix?: string
  trend?: { value: number; label: string }
  icon: React.ComponentType<{ size?: number | string; className?: string }>
  color?: 'cyan' | 'amber' | 'emerald' | 'rose' | 'blue' | 'purple'
}) {
  const colorMap = {
    cyan: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
    amber: 'from-amber-500/10 to-amber-500/5 border-amber-500/20 text-amber-400',
    emerald: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
    rose: 'from-rose-500/10 to-rose-500/5 border-rose-500/20 text-rose-400',
    blue: 'from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-400',
    purple: 'from-purple-500/10 to-purple-500/5 border-purple-500/20 text-purple-400',
  }
  const iconColorMap = {
    cyan: 'text-cyan-400/60',
    amber: 'text-amber-400/60',
    emerald: 'text-emerald-400/60',
    rose: 'text-rose-400/60',
    blue: 'text-blue-400/60',
    purple: 'text-purple-400/60',
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${colorMap[color]} border p-4 group hover:shadow-[0_0_30px_-10px_rgba(0,229,255,0.1)] transition-all duration-300`}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs text-slate-400">{label}</span>
        <Icon size={18} className={iconColorMap[color]} />
      </div>
      <div className={`text-2xl font-bold font-mono tracking-tight ${colorMap[color].split(' ').pop()}`}>
        <AnimatedNumber value={value} suffix={suffix} prefix={prefix} />
      </div>
      {trend && (
        <div className="mt-2 flex items-center gap-1">
          <span className={`text-[11px] ${trend.value >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-[11px] text-slate-500">{trend.label}</span>
        </div>
      )}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-br from-white/[0.02] to-transparent" />
    </div>
  )
}

export function SectionCard({ title, children, className = '' }: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl bg-[#0d1220] border border-slate-800/50 overflow-hidden ${className}`}>
      <div className="px-5 py-3.5 border-b border-slate-800/50 flex items-center gap-2">
        <div className="w-1 h-4 rounded-full bg-cyan-400/60" />
        <h3 className="text-sm font-medium text-slate-200">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    high: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    medium: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    low: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    pending: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    processing: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    resolved: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    discovered: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    feedback: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  }
  const labels: Record<string, string> = {
    high: '高风险',
    medium: '中风险',
    low: '低风险',
    pending: '待处理',
    processing: '处理中',
    resolved: '已解决',
    discovered: '已发现',
    feedback: '反馈中',
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] border ${styles[status] || 'bg-slate-500/15 text-slate-400 border-slate-500/30'}`}>
      {labels[status] || status}
    </span>
  )
}
