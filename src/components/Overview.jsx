import React from 'react'
import { Brain, HeartPulse, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const Overview = () => {
  return (
    <section id="about" style={{ 
      backgroundColor: '#fbf9f6', 
      padding: '100px 0',
      color: '#1f2937',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
          
          {/* Left Column - Content */}
          <div style={{ flex: '1 1 500px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                color: 'var(--primary-color)', 
                fontSize: '0.78rem', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                About the Course
              </div>
              
              <h2 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', 
                fontWeight: 600,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: '28px'
              }}>
                Discover the Science Behind the{' '}
                <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Human Mind</span>
              </h2>
              
              <p style={{ color: '#4b5563', fontSize: '1.08rem', lineHeight: 1.75, marginBottom: '20px' }}>
                Clinical Psychology is a specialised field of psychology focused on understanding human behaviour, emotions, thoughts and mental health.
              </p>
              
              <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '20px' }}>
                The B.Sc. Clinical Psychology (Hons.) program introduces students to psychological principles, mental health conditions, psychological assessment, research methodologies and evidence-based approaches to mental health support.
              </p>

              <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '40px' }}>
                Through academic learning and supervised practical exposure, students develop a foundation for understanding psychological well-being and supporting individuals across different stages of life.
              </p>
            </motion.div>

            {/* Feature Highlight Cards */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {/* Card 1 */}
              <motion.div 
                className="mobile-stack-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                style={{ 
                  flex: '1 1 220px', 
                  backgroundColor: '#ffffff', 
                  padding: '28px 24px', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  display: 'inline-flex',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <Brain size={26} color="var(--primary-color)" />
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 600, marginBottom: '10px', color: '#0f172a' }}>
                  Scientific Foundation
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Master core psychological theories, behavioral science, cognitive frameworks, and standardized psychometric assessment.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                className="mobile-stack-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                style={{ 
                  flex: '1 1 220px', 
                  backgroundColor: '#ffffff', 
                  padding: '28px 24px', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  display: 'inline-flex',
                  padding: '12px',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <HeartPulse size={26} color="var(--primary-color)" />
                </div>
                <h3 style={{ fontSize: '1.18rem', fontWeight: 600, marginBottom: '10px', color: '#0f172a' }}>
                  Practical Exposure
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Supervised exposure to mental health environments, case studies, ethics, and empathetic community support.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%' }}>
              <img 
                src="/image1.jpeg" 
                alt="Students studying Clinical Psychology" 
                style={{ 
                  width: '100%', 
                  height: '460px', 
                  objectFit: 'cover', 
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }} 
              />
              {/* Floating Stat Chip */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                backgroundColor: 'rgba(15, 23, 42, 0.92)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '16px 20px',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '12px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={22} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>4-Year B.Sc. (Hons.) Program</div>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>Academic Rigour • Supervised Learning • SGVU Jaipur</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Overview
