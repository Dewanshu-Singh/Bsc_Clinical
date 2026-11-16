import React from 'react'
import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

const subjects = [
  {
    title: "Fundamentals of Psychology",
    description: "Understand human behaviour, thoughts, emotions and mental processes.",
    image: "/IMG-20260822-WA0039.jpg.jpeg",
    fallback: "/campus1.jpg"
  },
  {
    title: "Abnormal Psychology",
    description: "Explore psychological disorders, their symptoms and underlying factors.",
    image: "/IMG-20260822-WA0045.jpg.jpeg",
    fallback: "/campus2.jpg",
    objectPosition: "top center"
  },
  {
    title: "Psychological Assessment",
    description: "Learn the fundamentals of psychological testing and assessment.",
    image: "/WhatsApp Image 2026-08-22 at 14.02.10.jpeg",
    fallback: "/campus3.jpg"
  },
  {
    title: "Research Methodology",
    description: "Develop research, observation, analytical and critical-thinking skills.",
    image: "/WhatsApp Image 2026-08-22 at 14.02.13.jpeg",
    fallback: "/campus4.jpg"
  },
  {
    title: "Developmental Psychology",
    description: "Understand psychological development across different stages of life.",
    image: "/WhatsApp Image 2026-08-22 at 14.02.14.jpeg",
    fallback: "/campus5.jpg"
  },
  {
    title: "Rehabilitation Psychology",
    description: "Explore psychological support, recovery and rehabilitation approaches.",
    image: "/life6.jpg",
    fallback: "/liblary.jpeg"
  }
]

const Curriculum = () => {
  return (
    <section id="learn" style={{ 
      backgroundColor: '#ffffff', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.78rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            What Will You Learn?
          </div>
          
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', 
            fontWeight: 600,
            color: '#0f172a',
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Build Knowledge That{' '}
            <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Goes Beyond Textbooks</span>
          </h2>
          
          <p style={{ 
            color: '#4b5563', 
            fontSize: '1.08rem', 
            lineHeight: 1.7, 
            maxWidth: '750px', 
            margin: '0 auto' 
          }}>
            Explore a comprehensive curriculum blending scientific rigor, psychometrics, behavioural sciences, and practical rehabilitation methods.
          </p>
        </motion.div>

        {/* 6 Visual Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px',
          marginBottom: '48px'
        }}>
          {subjects.map((card, idx) => (
            <motion.div
              key={idx}
              className="mobile-stack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
              }}
              style={{
                backgroundColor: '#fbf9f6',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {/* Card Image */}
              <div style={{ 
                position: 'relative', 
                height: '210px', 
                width: '100%', 
                overflow: 'hidden',
                backgroundColor: '#e2e8f0'
              }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = card.fallback;
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: card.objectPosition || 'center center',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px 24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  {card.title}
                </h3>
                
                <p style={{
                  color: '#4b5563',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: '#f1f5f9',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '850px',
            margin: '0 auto'
          }}
        >
          <Info size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
          <p style={{ 
            color: '#64748b', 
            fontSize: '0.88rem', 
            fontStyle: 'italic', 
            margin: 0,
            lineHeight: 1.5 
          }}>
            These are subject-area descriptions, not a confirmed semester-wise SGVU syllabus.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Curriculum
