import React from 'react'
import { 
  HeartHandshake, 
  BrainCircuit, 
  Microscope, 
  GraduationCap, 
  Users
} from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: <HeartHandshake size={28} color="var(--primary-color)" />,
    title: "Growing Awareness of Mental Health",
    description: "Growing awareness of mental health and psychological well-being in healthcare, educational institutions, corporate settings, and society at large.",
    tag: "Rising Demand"
  },
  {
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    title: "Scientific Understanding of Behaviour",
    description: "Opportunity to understand human behaviour scientifically — examining emotional mechanisms, cognition, perception, and neurological underpinnings.",
    tag: "Empirical Rigour"
  },
  {
    icon: <Microscope size={28} color="var(--primary-color)" />,
    title: "Exposure to Research & Assessment",
    description: "Exposure to psychological research and assessment methodologies, developing proficiency in behavioral observation and psychometric evaluation.",
    tag: "Practical Skills"
  },
  {
    icon: <GraduationCap size={28} color="var(--primary-color)" />,
    title: "Foundation for Professional Education",
    description: "Strong foundation for further professional education, serving as an ideal platform for postgraduate studies, clinical specialization, and academic research.",
    tag: "Higher Studies"
  },
  {
    icon: <Users size={28} color="var(--primary-color)" />,
    title: "Community Support & Social Impact",
    description: "Opportunity to contribute to mental health awareness and community support, empowering vulnerable groups and fostering psychological wellness across society.",
    tag: "Purpose Driven"
  }
]

const WhyChoose = () => {
  return (
    <section id="why-choose" style={{ 
      backgroundColor: '#fbf9f6', 
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
          style={{ marginBottom: '64px' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.78rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Why Choose Clinical Psychology?
          </div>
          
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', 
            fontWeight: 600,
            color: '#0f172a',
            lineHeight: 1.2,
            maxWidth: '850px'
          }}>
            More Than a Degree.{' '}
            <span style={{ color: 'var(--primary-color)', fontStyle: 'italic', display: 'block' }}>
              A Purpose-Driven Profession.
            </span>
          </h2>
          
          <p style={{ color: '#4b5563', fontSize: '1.08rem', lineHeight: 1.7, marginTop: '20px', maxWidth: '720px' }}>
            Clinical Psychology connects scientific curiosity with deep human empathy, preparing you to address modern mental health challenges with evidence-based insight.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '28px' 
        }}>
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="mobile-stack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
              }}
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '36px 30px', 
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                gridColumn: index === 4 ? 'span 1' : 'auto'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                <div style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  padding: '14px',
                  borderRadius: '14px',
                  display: 'inline-flex'
                }}>
                  {reason.icon}
                </div>
                <span style={{
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '8px'
                }}>
                  {reason.tag}
                </span>
              </div>

              <h3 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.35rem', 
                fontWeight: 600, 
                marginBottom: '14px', 
                color: '#0f172a',
                lineHeight: 1.3
              }}>
                {reason.title}
              </h3>
              
              <p style={{ 
                color: '#4b5563', 
                fontSize: '0.96rem', 
                lineHeight: 1.65,
                margin: 0,
                flexGrow: 1
              }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChoose
