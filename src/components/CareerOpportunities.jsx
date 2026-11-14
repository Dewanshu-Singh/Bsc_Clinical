import React from 'react'
import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  HeartHandshake, 
  Microscope, 
  Users, 
  GraduationCap, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react'

const careerPathways = [
  {
    pathway: "Clinical Assistant",
    workArea: "Clinical psychology support",
    description: "Support senior psychologists, assist in psychometric testing, patient intake, and clinical documentation.",
    icon: <Stethoscope size={24} color="var(--primary-color)" />,
    tag: "Clinical Setup"
  },
  {
    pathway: "Mental Health Support",
    workArea: "Mental health services",
    description: "Work across counselling centers, rehabilitation units, mental wellness clinics, and helpline support systems.",
    icon: <HeartHandshake size={24} color="var(--primary-color)" />,
    tag: "Healthcare Services"
  },
  {
    pathway: "Research Assistant",
    workArea: "Psychological research",
    description: "Contribute to behavioural research studies, clinical trials, academic publications, and data analysis in psychological institutes.",
    icon: <Microscope size={24} color="var(--primary-color)" />,
    tag: "Academic & Research"
  },
  {
    pathway: "Community Mental Health Worker",
    workArea: "Community programmes",
    description: "Engage with NGOs, public health initiatives, community outreach programmes, and psycho-education projects.",
    icon: <Users size={24} color="var(--primary-color)" />,
    tag: "Public Health & NGOs"
  },
  {
    pathway: "Further Studies",
    workArea: "Advanced psychology education",
    description: "Pursue Master's degrees (M.Sc. / M.A. Psychology), specialized post-graduate training, or higher RCI-prescribed professional licensing programmes.",
    icon: <GraduationCap size={24} color="var(--primary-color)" />,
    tag: "Higher Education"
  }
]

const CareerOpportunities = () => {
  return (
    <section id="careers" style={{ 
      backgroundColor: '#0f172a', 
      padding: '100px 0',
      color: 'white',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.78rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Career Opportunities
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', 
            fontWeight: 600,
            color: 'white',
            lineHeight: 1.2
          }}>
            Where Can Your Psychology{' '}
            <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Journey Take You?</span>
          </h2>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '1.08rem', 
            lineHeight: 1.7, 
            maxWidth: '720px', 
            margin: '20px auto 0 auto'
          }}>
            Possible pathways after appropriate qualification and further training:
          </p>
        </motion.div>

        {/* Pathways Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px',
          marginBottom: '56px'
        }}>
          {careerPathways.map((item, index) => (
            <motion.div 
              key={index}
              className="mobile-stack-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 35px rgba(0,0,0,0.3)' }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '18px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'var(--primary-color)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  backgroundColor: 'rgba(37,99,235,0.15)', 
                  borderRadius: '12px', 
                  padding: '12px',
                  display: 'inline-flex'
                }}>
                  {item.icon}
                </div>
                <span style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 600, 
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  color: 'var(--primary-color)',
                  backgroundColor: 'rgba(37,99,235,0.1)',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {item.tag}
                </span>
              </div>
              
              <h3 style={{ 
                color: 'white', 
                fontSize: '1.3rem', 
                fontWeight: 600, 
                marginBottom: '6px',
                fontFamily: 'var(--font-serif)'
              }}>
                {item.pathway}
              </h3>

              <div style={{ 
                color: 'var(--primary-color)', 
                fontSize: '0.92rem', 
                fontWeight: 600, 
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <ArrowRight size={15} /> Work Area: {item.workArea}
              </div>

              <p style={{ 
                color: '#94a3b8', 
                fontSize: '0.92rem', 
                lineHeight: 1.6, 
                margin: 0,
                flexGrow: 1
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Scope & Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '16px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '18px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <AlertTriangle size={26} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.98rem', marginBottom: '6px' }}>
              Important Note Regarding Professional Scope
            </div>
            <p style={{ color: '#e2e8f0', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>
              This undergraduate qualification does not itself make graduates independent Clinical Psychologists. RCI registration and professional scope must follow the applicable regulations.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CareerOpportunities
