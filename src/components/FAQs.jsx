import React, { useState } from 'react'
import { Plus, Minus, PhoneCall } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    question: "What is the duration of the program?",
    answer: "The program duration is four years (8 semesters of full-time undergraduate study)."
  },
  {
    question: "What is the semester fee?",
    answer: "The semester fee is ₹1,00,000, as provided by the university."
  },
  {
    question: "What will students study?",
    answer: "Students study psychology fundamentals, psychological assessment, psychopathology, research methodology and other clinical psychology subjects."
  },
  {
    question: "Is this an RCI-approved program?",
    answer: "SGVU is listed in RCI's approved institutions list for the B.Clin.Psy program for 2026–27 onwards."
  },
  {
    question: "Can graduates become Clinical Psychologists?",
    answer: "This undergraduate qualification leads to a Clinical Assistant pathway, not automatic registration as an independent Clinical Psychologist. RCI registration and professional scope must follow the applicable regulations."
  },
  {
    question: "What is the eligibility criteria and entrance syllabus?",
    answer: "Candidates who have completed 12th with Science stream or equivalent are eligible to apply via the SGVU Entrance Test. The preparation syllabus for the entrance test comprises: General Science, Math, Aptitude, Reasoning, Creativity, and Language."
  }
]

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
      <button 
        onClick={onClick}
        style={{ 
          width: '100%',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
        <span style={{ 
          color: '#0f172a',
          fontSize: '1.1rem',
          fontWeight: 600,
          paddingRight: '16px',
          lineHeight: 1.4
        }}>
          {faq.question}
        </span>
        <div style={{ 
          background: isOpen ? 'var(--primary-color)' : '#f1f5f9',
          borderRadius: '50%',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.3s ease'
        }}>
          {isOpen ? <Minus size={16} color="white" /> : <Plus size={16} color="#334155" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              color: '#475569',
              fontSize: '1rem',
              lineHeight: 1.7,
              margin: '0 0 24px 0'
            }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" style={{ 
      backgroundColor: '#f8fafc', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '64px',
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column - Heading & Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="faq-sticky-header"
            style={{ flex: '1 1 380px' }}
          >
            <div style={{ 
              color: 'var(--primary-color)', 
              fontSize: '0.78rem', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Frequently Asked Questions
            </div>
            
            <h2 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', 
              fontWeight: 600,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '24px'
            }}>
              Everything You Need to{' '}
              <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Know</span>
            </h2>
            
            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Have questions regarding eligibility, fees, or the RCI approval status for B.Clin.Psy? Find clear answers below or contact our admission counseling desk.
            </p>

            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <PhoneCall size={22} color="var(--primary-color)" />
                <span style={{ fontWeight: 600, color: '#0f172a', fontSize: '1rem' }}>Admission Helpline</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '16px' }}>
                Speak directly with an SGVU academic counselor for the 2026–27 session.
              </p>
              <a 
                href="tel:18003094545" 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                Call 1800 309 4545
              </a>
            </div>
          </motion.div>

          {/* Right Column - Accordion List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '1 1 580px' }}
          >
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}></div>
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                faq={faq} 
                isOpen={openIndex === index} 
                onClick={() => toggleFaq(index)} 
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FAQs
