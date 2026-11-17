import React from 'react'
import { Clock, IndianRupee, GraduationCap, MapPin, Building, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const glanceMetrics = [
  {
    icon: <Clock size={28} color="var(--primary-color)" />,
    value: "4 Years",
    label: "Course Duration",
    sub: "Full-Time Undergraduate Programme"
  },
  {
    icon: <IndianRupee size={28} color="var(--primary-color)" />,
    value: "₹1,00,000",
    label: "Per Semester",
    sub: "As provided by the university"
  },
  {
    icon: <GraduationCap size={28} color="var(--primary-color)" />,
    value: "Undergraduate",
    label: "Programme Level",
    sub: "B.Sc. Clinical Psychology (Hons.)"
  },
  {
    icon: <MapPin size={28} color="var(--primary-color)" />,
    value: "Jaipur",
    label: "Study Location",
    sub: "SGVU State-of-the-Art Campus"
  },
  {
    icon: <Building size={28} color="var(--primary-color)" />,
    value: "SGVU",
    label: "University",
    sub: "Suresh Gyan Vihar University"
  }
]

const steps = [
  {
    step: "01",
    title: "Apply Online",
    description: "Submit your preliminary application form with contact details and 12th Science stream qualification."
  },
  {
    step: "02",
    title: "Entrance Test",
    description: "Appear for the SGVU Entrance Test covering General Science, Math, Aptitude, Reasoning, Creativity, and Language."
  },
  {
    step: "03",
    title: "Admission & Enrollment",
    description: "Verify 12th Science stream documents, complete Semester 1 fee payment, and confirm enrollment."
  }
]

const CourseDetails = () => {
  return (
    <section id="course-details" style={{ 
      backgroundColor: '#ffffff', 
      padding: '100px 0',
      color: '#1f2937',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section 6: Programme at a Glance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '56px', textAlign: 'center' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.78rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Course Details
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', 
            fontWeight: 600,
            color: '#0f172a',
            lineHeight: 1.2
          }}>
            Programme at a <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>Glance</span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '650px', margin: '16px auto 0 auto' }}>
            Key highlights of the 4-year B.Sc. Clinical Psychology (Hons.) programme at Suresh Gyan Vihar University, Jaipur.
          </p>
        </motion.div>

        {/* 5 Glance Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
          gap: '20px',
          marginBottom: '80px'
        }}>
          {glanceMetrics.map((item, index) => (
            <motion.div 
              key={index} 
              className="mobile-stack-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0,0,0,0.06)' }}
              style={{ 
                backgroundColor: '#fbf9f6', 
                padding: '30px 22px', 
                borderRadius: '18px',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ 
                backgroundColor: 'rgba(37,99,235,0.08)', 
                display: 'inline-flex', 
                padding: '12px', 
                borderRadius: '12px',
                marginBottom: '18px',
                width: 'fit-content'
              }}>
                {item.icon}
              </div>
              <div style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.65rem', 
                fontWeight: 600, 
                color: '#0f172a',
                marginBottom: '4px'
              }}>
                {item.value}
              </div>
              <div style={{ 
                fontWeight: 600, 
                fontSize: '0.95rem', 
                color: 'var(--primary-color)',
                marginBottom: '6px'
              }}>
                {item.label}
              </div>
              <div style={{ 
                color: '#64748b', 
                fontSize: '0.84rem', 
                lineHeight: 1.5 
              }}>
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 7: Eligibility & Entrance Test Section */}
        <div id="eligibility" style={{ 
          backgroundColor: '#fbf9f6', 
          borderRadius: '24px', 
          padding: '56px 40px',
          border: '1px solid rgba(0,0,0,0.05)',
          marginBottom: '64px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ 
                color: 'var(--primary-color)', 
                fontSize: '0.78rem', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                Eligibility & Entrance
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', 
                fontWeight: 600, 
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '20px'
              }}>
                Start Your Journey Towards{' '}
                <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>
                  Understanding the Human Mind
                </span>
              </h3>
              <p style={{ color: '#4b5563', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '24px' }}>
                Those who have completed 12th with Science stream or equivalent will be eligible to apply via entrance test, subject to the university's admission rules and RCI guidelines.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontSize: '0.98rem', fontWeight: 500 }}>
                    Completed 12th with Science stream or equivalent qualification
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontSize: '0.98rem', fontWeight: 500 }}>
                    Admission is granted on the basis of performance in the SGVU Entrance Test
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontSize: '0.98rem', fontWeight: 500 }}>
                    Admissions subject to SGVU admission rules and applicable RCI guidelines
                  </span>
                </div>
              </div>

              {/* Entrance Test Syllabus Box */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <BookOpen size={20} color="var(--primary-color)" />
                  <h4 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    margin: 0
                  }}>
                    Entrance Test Syllabus
                  </h4>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '14px' }}>
                  Syllabus for preparation of entrance test comprises:
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {[
                    "General Science",
                    "Math",
                    "Aptitude",
                    "Reasoning",
                    "Creativity",
                    "Language"
                  ].map((sub, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                      color: 'var(--primary-color)',
                      border: '1px solid rgba(37, 99, 235, 0.18)',
                      padding: '6px 14px',
                      borderRadius: '16px',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle2 size={13} color="var(--primary-color)" />
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ 
              flex: '1 1 320px', 
              backgroundColor: '#ffffff', 
              borderRadius: '20px', 
              padding: '36px 30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.06)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '10px' }}>
                Admissions 2026–27
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                ₹1,00,000
              </div>
              <div style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '1rem', marginBottom: '24px' }}>
                Per Semester
              </div>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '24px' }}>
                University: Suresh Gyan Vihar University, Jaipur.<br/>
                Approved by RCI for 2026–27 onwards.
              </p>
              <button 
                onClick={() => {
                  document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '24px',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 4px 14px var(--primary-glow)'
                }}
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>

        {/* 3 Step Admission Process */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#0f172a', fontWeight: 600 }}>
            Simple 3-Step Admission Process
          </h3>
        </div>

        <div className="horizontal-scroll-mobile" style={{ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className="mobile-scroll-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ 
                  flex: '1 1 300px',
                  backgroundColor: '#ffffff', 
                  padding: '36px 28px', 
                  borderRadius: '18px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2.4rem', 
                  color: 'var(--primary-color)',
                  opacity: 0.65,
                  fontWeight: 700,
                  marginBottom: '12px'
                }}>
                  {step.step}
                </div>
                <h4 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.35rem', 
                  fontWeight: 600, 
                  marginBottom: '10px', 
                  color: '#0f172a' 
                }}>
                  {step.title}
                </h4>
                <p style={{ 
                  color: '#4b5563', 
                  fontSize: '0.92rem', 
                  lineHeight: 1.6, 
                  margin: 0
                }}>
                  {step.description}
                </p>
              </motion.div>

              {index < steps.length - 1 && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  padding: '0 8px',
                  color: 'var(--primary-color)'
                }}>
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CourseDetails
