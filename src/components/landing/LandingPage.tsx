import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-4">
        <div className="font-bold text-xl italic" style={{ color: 'hsl(340, 50%, 45%)' }}>
          Beauty Salon
          <div className="text-xs font-normal not-italic" style={{ color: 'hsl(340, 20%, 55%)' }}>Красота · Стиль · Уверенность</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: 'hsl(340, 25%, 35%)' }}>
          {['О нас', 'Услуги', 'Наши работы', 'Отзывы', 'Контакты'].map((item) => (
            <a key={item} href="#" className="hover:opacity-70 transition-opacity">{item}</a>
          ))}
        </nav>
        <button
          className="text-white text-sm font-semibold px-5 py-2 rounded-full shadow hover:scale-105 transition-transform"
          style={{ background: 'linear-gradient(135deg, #e91e8c, #f06292)' }}
        >
          Записаться
        </button>
      </header>

      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className="w-2.5 h-2.5 rounded-full my-2 transition-all"
            style={{
              background: index === activeSection ? 'hsl(340, 65%, 65%)' : 'hsl(340, 30%, 80%)',
              transform: index === activeSection ? 'scale(1.5)' : 'scale(1)'
            }}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-30"
        style={{ scaleX, background: 'linear-gradient(90deg, #e91e8c, #f48fb1)' }}
      />

      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}
