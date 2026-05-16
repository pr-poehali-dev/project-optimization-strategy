import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #fdf0f4 0%, #fce4ec 40%, #f8bbd9 100%)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #f48fb1 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #f06292 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-25" style={{ background: 'radial-gradient(circle, #fce4ec 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #e91e8c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
