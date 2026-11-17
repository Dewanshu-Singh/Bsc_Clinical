import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
      backgroundColor: 'rgba(251, 249, 246, 0.96)', 
      backdropFilter: 'blur(10px)',
      padding: '0 24px', 
      height: '88px',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="navbar-logos" style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '100%' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo2.png" 
            alt="Suresh Gyan Vihar University Logo" 
            className="main-univ-logo"
            style={{ 
              height: '110px', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))'
            }} 
          />
        </a>
        <img 
          src="/naac.png" 
          alt="NAAC Logo" 
          className="accreditation-logo"
          style={{ height: '46px', objectFit: 'contain' }} 
        />
        <img 
          src="/nirf.png" 
          alt="NIRF Logo" 
          className="accreditation-logo"
          style={{ height: '46px', objectFit: 'contain' }} 
        />
      </div>
      
      {/* Desktop Links */}
      <div className="desktop-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <a href="#about" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>About Course</a>
        <a href="#learn" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>What You'll Learn</a>
        <a href="#why-choose" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>Why Clinical Psychology</a>
        <a href="#course-details" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>Course Details</a>
        <a href="#careers" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>Careers</a>
        <a href="#campus" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>Campus</a>
        <a href="#faq" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.92rem', fontWeight: 500, transition: 'color 0.2s' }}>FAQ</a>
      </div>

      {/* Desktop CTA */}
      <div className="desktop-links">
        <motion.button 
          onClick={() => {
            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
          backgroundColor: 'var(--primary-color)', 
          color: 'white', 
          border: 'none', 
          padding: '12px 24px', 
          borderRadius: '24px', 
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '0.95rem',
          boxShadow: '0 4px 14px var(--primary-glow)'
        }}>
          Apply Now
        </motion.button>
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-menu-toggle" style={{ display: 'none' }}>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0f172a' }}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 10px 24px rgba(0,0,0,0.1)',
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>About Course</a>
            <a href="#learn" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>What You'll Learn</a>
            <a href="#why-choose" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>Why Clinical Psychology</a>
            <a href="#course-details" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>Course Details</a>
            <a href="#careers" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>Careers</a>
            <a href="#campus" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>Campus</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 500 }}>FAQ</a>
            
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ 
              backgroundColor: 'var(--primary-color)', 
              color: 'white', 
              border: 'none', 
              padding: '14px', 
              borderRadius: '8px', 
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '4px'
            }}>
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar
