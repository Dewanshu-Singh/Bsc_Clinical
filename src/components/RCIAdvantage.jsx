import React from 'react'
import { Award, ShieldCheck, BookCheck, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

const RCIAdvantage = () => {
  return (
    <section id="advantage" style={{ 
      backgroundColor: '#0f172a', 
      padding: '100px 0',
      color: 'white',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Top Area: Heading & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '48px',
          marginBottom: '64px'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ 
              color: 'var(--primary-color)', 
              fontSize: '0.78rem', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Regulatory Recognition
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', 
              fontWeight: 600,
              color: 'white', 
              lineHeight: 1.15
            }}>
              RCI-Approved Institution.<br/>
              <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>National-Standard Education.</span>
            </h2>
          </div>
          
          <div style={{ flex: '1 1 400px', paddingTop: '12px' }}>
            <p style={{ color: '#94a3b8', fontSize: '1.08rem', lineHeight: 1.75, maxWidth: '520px' }}>
              Suresh Gyan Vihar University (SGVU) is listed in the Rehabilitation Council of India's (RCI) approved institutions list for the B.Clin.Psy programme for 2026–27 onwards — offering a legitimate, structured foundation in psychological science.
            </p>
          </div>
        </motion.div>

        {/* Middle Area: 3 Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          
          {/* Card 1 */}
          <motion.div 
            className="mobile-stack-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px rgba(37,99,235,0.18)',
              borderColor: 'var(--primary-color)'
            }}
            style={{ 
              border: '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '20px', 
              padding: '40px 32px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              transition: 'border-color 0.3s'
            }}
          >
            <Award size={32} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, marginBottom: '14px', color: 'white' }}>
              RCI Approved List
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.65 }}>
              SGVU is recognized in RCI's official approved institutions list for the B.Clin.Psy programme starting from the 2026–27 academic year.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="mobile-stack-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px rgba(37,99,235,0.18)',
              borderColor: 'var(--primary-color)'
            }}
            style={{ 
              border: '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '20px', 
              padding: '40px 32px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              transition: 'border-color 0.3s'
            }}
          >
            <BookCheck size={32} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, marginBottom: '14px', color: 'white' }}>
              Structured 4-Year Framework
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.65 }}>
              A robust 4-year undergraduate programme combining academic learning, psychometrics, research methodology, and supervised exposure.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="mobile-stack-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px rgba(37,99,235,0.18)',
              borderColor: 'var(--primary-color)'
            }}
            style={{ 
              border: '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '20px', 
              padding: '40px 32px',
              backgroundColor: 'rgba(255,255,255,0.02)',
              cursor: 'pointer',
              transition: 'border-color 0.3s'
            }}
          >
            <Building2 size={32} color="var(--primary-color)" style={{ marginBottom: '24px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, marginBottom: '14px', color: 'white' }}>
              Clinical Assistant Pathway
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.65 }}>
              Provides a recognized pathway towards clinical assistance, mental health support roles, and preparation for higher licensure programmes.
            </p>
          </motion.div>
        </div>

        {/* Bottom Quote Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <ShieldCheck size={36} color="var(--primary-color)" style={{ flexShrink: 0 }} />
          <p style={{ 
            fontFamily: 'var(--font-serif)', 
            fontStyle: 'italic', 
            fontSize: '1.18rem', 
            color: 'white', 
            margin: 0,
            lineHeight: 1.55
          }}>
            "SGVU is listed in RCI's approved institutions list for the B.Clin.Psy programme for 2026–27 onwards — upholding professional standards, ethical training, and educational transparency."
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default RCIAdvantage
