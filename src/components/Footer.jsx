import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#020617', 
      color: '#a7b8af',
      padding: '80px 0 40px 0'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '64px',
          alignItems: 'flex-start',
          marginBottom: '64px'
        }}>
          
          {/* Column 1: Brand & About */}
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'inline-block' }}>
                <img 
                  src="/logo2.png" 
                  alt="Suresh Gyan Vihar University Logo" 
                  style={{ 
                    height: '140px', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.2))'
                  }} 
                />
              </div>
            </div>
            <p style={{ lineHeight: 1.75, fontSize: '1rem', color: '#94a3b8' }}>
              Suresh Gyan Vihar University, Jaipur — Empowering students with scientific understanding, empathy, and professional skills through the 4-Year B.Sc. Clinical Psychology (Hons.) programme.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div style={{ maxWidth: '420px', justifySelf: 'end' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 600, marginBottom: '24px', fontFamily: 'var(--font-sans)' }}>
              Contact SGVU
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <MapPin size={22} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a href="https://maps.google.com/?q=Suresh+Gyan+Vihar+University,+Jaipur" target="_blank" rel="noopener noreferrer" style={{ color: '#a7b8af', textDecoration: 'none', lineHeight: 1.6, fontSize: '0.98rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
                  Mahal, Jagatpura, Jaipur<br/>Rajasthan 302017
                </a>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <Phone size={22} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                <a href="tel:18003094545" style={{ color: '#a7b8af', textDecoration: 'none', fontSize: '0.98rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
                  1800 309 4545 (Toll-Free)
                </a>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <Mail size={22} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                <a href="mailto:admissions@sgvu.edu.in" style={{ color: '#a7b8af', textDecoration: 'none', fontSize: '0.98rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
                  admissions@sgvu.edu.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.85rem'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Suresh Gyan Vihar University, Jaipur. All rights reserved.
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="https://youtube.com/@sgvuyoutube?si=dto88ilpXgf20pax" target="_blank" rel="noopener noreferrer" style={{ color: '#a7b8af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://www.instagram.com/sureshgyanvihar.university?igsh=MWE3N2QydmtrejQwMg==" target="_blank" rel="noopener noreferrer" style={{ color: '#a7b8af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/sureshgyanviharuniversityjaipur/" target="_blank" rel="noopener noreferrer" style={{ color: '#a7b8af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/school/sgvu/" target="_blank" rel="noopener noreferrer" style={{ color: '#a7b8af', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#a7b8af'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
