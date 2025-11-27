import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const quickLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/sobre-mi', label: 'Sobre mí' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/contenido', label: 'Contenido gratuito' },
    { to: '/tienda', label: 'Tienda' },
    { to: '/contacto', label: 'Contacto' }
  ];

  const socialLinks = [
    { 
      href: 'https://instagram.com/nefsis', 
      icon: Instagram, 
      label: 'Instagram',
      color: '#E4405F'
    },
    { 
      href: 'https://wa.me/5491234567890', 
      icon: MessageCircle, 
      label: 'WhatsApp',
      color: '#25D366'
    },
    { 
      href: 'mailto:sofi@nefsis.com', 
      icon: Mail, 
      label: 'Email',
      color: '#9B7FE6'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo y descripción */}
          <div className="footer-section footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-text">Nefsis</span>
            </Link>
            <p className="footer-description">
              Acompañamiento consciente para tu bienestar y el de los seres que amas. 
              Transformación holística que conecta emociones, energía y vínculo auténtico.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{ '--social-color': social.color } as React.CSSProperties}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div className="footer-section">
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios destacados */}
          <div className="footer-section">
            <h4 className="footer-title">Servicios</h4>
            <ul className="footer-links">
              <li>
                <Link to="/servicios#equilibrio-personal" className="footer-link">
                  Equilibrio personal
                </Link>
              </li>
              <li>
                <Link to="/servicios#bienestar-mascota" className="footer-link">
                  Bienestar de tu mascota
                </Link>
              </li>
              <li>
                <Link to="/servicios#conexion-conjunta" className="footer-link">
                  Conexión conjunta
                </Link>
              </li>
              <li>
                <Link to="/servicios#alineacion-tutor-animal" className="footer-link">
                  Alineación Tutor-Animal ⭐
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-title">Conecta conmigo</h4>
            <div className="footer-contact">
              <p className="footer-text">
                ¿Tenés dudas o querés comenzar tu proceso de transformación?
              </p>
              <Link to="/contacto" className="btn btn-secondary footer-cta">
                Escribime
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © 2025 Nefsis. Todos los derechos reservados.
            </p>
            <p className="footer-love">
              Hecho con <Heart size={16} className="heart-icon" /> para conectar conscientemente
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
