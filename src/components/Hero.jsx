import React, { useEffect } from 'react'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  useEffect(() => {
    // Ensure NPF widget script runs
    const existing = document.querySelector('script[src*="vemwgts.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://1y4myjn4xm.in6.widgets.nopaperforms.com/vemwgts.js";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section style={{ 
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 0'
    }}>
      {/* Background Image with Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/bg1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.25) 100%)', 
        zIndex: -1
      }} />

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '48px', width: '100%' }}>
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', maxWidth: '720px' }}
        >
          {/* Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '8px 18px',
            borderRadius: '24px',
            color: 'white',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)'
          }}>
            <GraduationCap size={18} color="var(--primary-color)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '1px' }}>
              ADMISSIONS 2026–27 • RCI-APPROVED PROGRAMME
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.7rem, 4.8vw, 4.2rem)', 
            color: '#ffffff',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: '24px'
          }}>
            B.Sc. in{' '}
            <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>
              Clinical Psychology (Hons.)
            </span>
          </h1>
          
          {/* Subheadline */}
          <p style={{ 
            color: 'var(--hero-muted)', 
            fontSize: '1.18rem', 
            lineHeight: 1.65, 
            marginBottom: '36px',
            fontWeight: 400,
            maxWidth: '650px'
          }}>
            Build a meaningful career in mental health with the 4-year undergraduate programme at Suresh Gyan Vihar University, Jaipur — understand the human mind and make a difference in lives.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                padding: '15px 32px',
                borderRadius: '30px',
                fontSize: '1.02rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 18px var(--primary-glow)'
              }}
            >
              Apply Now <ArrowRight size={18} />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '15px 30px',
                borderRadius: '30px',
                fontSize: '1.02rem',
                fontWeight: 600,
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'background-color 0.2s'
              }}
            >
              Explore Programme
            </motion.button>
          </div>

          {/* Bottom Stats Bar */}
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden'
          }}>
            {[
              { value: '2026–27', label: 'ADMISSIONS OPEN' },
              { value: '4 Years', label: 'UNDERGRADUATE' },
              { value: 'RCI-Approved', label: 'PROGRAMME' },
              { value: '₹1,00,000', label: 'PER SEMESTER' }
            ].map((stat, idx) => (
              <div key={idx} style={{
                flex: '1 1 130px',
                padding: '20px 24px',
                borderRight: idx !== 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.45rem', 
                  fontWeight: 600, 
                  color: 'white', 
                  marginBottom: '4px' 
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '0.68rem', 
                  color: 'var(--hero-muted)', 
                  letterSpacing: '1px', 
                  fontWeight: 700 
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Admission Form */}
        <div id="apply-form" className="admission-form-wrapper" style={{ 
          flex: '1 1 350px',
          maxWidth: '460px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '28px 24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(255,255,255,0.2)',
          minHeight: '450px'
        }}>
          <div style={{ 
            display: 'inline-block',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            color: 'var(--primary-color)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: '12px',
            marginBottom: '10px'
          }}>
            Admissions 2026–27
          </div>
          <h3 style={{ 
            color: '#0f172a', 
            fontSize: '1.85rem', 
            fontWeight: 700, 
            marginBottom: '4px',
            fontFamily: 'var(--font-serif)'
          }}>
            Apply Now
          </h3>
          <p style={{ color: 'var(--primary-color)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '18px' }}>
            B.Sc. Clinical Psychology (Hons.) (4 Years)
          </p>

          <div 
            className="npf_wgts" 
            data-height="400px" 
            data-w="2ae592f0d01284212ec30f85b1898a7b"
          ></div>
        </div>

      </div>
    </section>
  )
}

export default Hero
