import React from 'react';
import { Link } from 'react-router-dom';
import { User, Heart, Users, ArrowRight, Sparkles, Star } from 'lucide-react';
import './Homepage.css';

const Homepage: React.FC = () => {
  const services = [
    {
      id: 'equilibrio-personal',
      title: 'Equilibrio personal',
      description: 'Sesiones diseñadas para ordenar tu energía, clarificar emociones y potenciar tu bienestar personal, antes de extender el equilibrio al vínculo con tu mascota.',
      icon: User,
      gradient: 'var(--gradient-lilac)',
      featured: false
    },
    {
      id: 'bienestar-mascota',
      title: 'Bienestar de tu mascota',
      description: 'Conexión y armonización energética para que tu mascota viva en calma y equilibrio, reflejando bienestar en todo su entorno.',
      icon: Heart,
      gradient: 'var(--gradient-pink)',
      featured: false
    },
    {
      id: 'conexion-conjunta',
      title: 'Conexión y crecimiento conjunto',
      description: 'Sesiones integrales que fortalecen el vínculo, equilibran emociones y generan armonía compartida, potenciando la relación y la energía de ambos.',
      icon: Users,
      gradient: 'var(--gradient-gold)',
      featured: true
    }
  ];

  const featuredContent = [
    {
      title: '5 señales de que tu mascota refleja tu estado emocional',
      excerpt: 'Descubrí cómo las emociones se transmiten energéticamente y qué hacer para crear un ambiente de calma compartida.',
      category: 'Bienestar',
      image: '/api/placeholder/300/200',
      readTime: '5 min'
    },
    {
      title: 'Meditación guiada para armonizar con tu animal',
      excerpt: 'Práctica sencilla para conectar conscientemente con tu mascota y equilibrar las energías de ambos.',
      category: 'Espiritualidad',
      image: '/api/placeholder/300/200',
      readTime: '10 min'
    },
    {
      title: 'Tips para reducir la ansiedad en casa',
      excerpt: 'Herramientas prácticas para crear un hogar tranquilo que beneficie tanto a humanos como a mascotas.',
      category: 'Tips mascotas',
      image: '/api/placeholder/300/200',
      readTime: '7 min'
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Acompaño y potencio tu bienestar y el de los seres que amas, 
                <span className="text-lilac"> creando armonía y conexión profunda</span> 
                entre emociones, energía y vínculo.
              </h1>
              
              <div className="hero-actions">
                <Link to="/servicios" className="btn btn-primary">
                  Ver sesiones y recursos
                  <ArrowRight size={20} />
                </Link>
                <Link to="/sobre-mi" className="btn btn-secondary">
                  Conóceme más
                </Link>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="hero-image-container">
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Sofi, guía de Nefsis" 
                  className="hero-photo"
                />
                <div className="hero-image-decoration"></div>
              </div>
              
              <div className="hero-intro">
                <p className="hero-intro-text">
                  <strong>Soy Sofi, guía de Nefsis y terapeuta holística.</strong> Durante más de 3 años 
                  acompañé a personas en procesos de transformación consciente, y con el tiempo descubrí 
                  que mi propósito también incluye a sus mascotas. Hoy acompaño tanto a humanos como a 
                  sus seres queridos de cuatro patas, creando bienestar, equilibrio emocional y una 
                  conexión auténtica que siempre estuvo ahí, esperando ser potenciada.
                </p>
                <Link to="/sobre-mi" className="btn btn-gold hero-cta-small">
                  Conóceme más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="title-section text-center mb-xl">
            Encuentra el acompañamiento que necesitás
          </h2>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`card card-service ${service.featured ? 'card-featured' : ''}`}
              >
                {service.featured && (
                  <div className="service-badge">
                    <Star size={16} />
                    <span>Servicio Estrella</span>
                  </div>
                )}
                
                <div className="service-icon" style={{ background: service.gradient }}>
                  <service.icon size={32} />
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <Link 
                  to={`/servicios#${service.id}`} 
                  className={`btn ${service.featured ? 'btn-gold' : 'btn-secondary'} service-cta`}
                >
                  Ver servicios
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Content Section */}
      <section className="section-alt free-content-section">
        <div className="container">
          <div className="content-header text-center mb-2xl">
            <h2 className="title-section mb-lg">
              <Sparkles className="section-icon" />
              Conexión Consciente
            </h2>
            <p className="text-subtitle max-width-700">
              Descubrí tips, artículos y videos para potenciar tu bienestar y el de tu mascota. 
              Aprendé a comunicarte, armonizar energías y mantener la calma en tu hogar. 
              Todo lo que comparto es práctico y fácil de aplicar, pensado para acompañarte en tu día a día.
            </p>
          </div>

          <div className="content-grid">
            {featuredContent.map((content, index) => (
              <article key={index} className="content-card">
                <div className="content-image">
                  <img src={content.image} alt={content.title} />
                  <div className="content-category">{content.category}</div>
                  <div className="content-read-time">{content.readTime}</div>
                </div>
                
                <div className="content-body">
                  <h3 className="content-title">{content.title}</h3>
                  <p className="content-excerpt">{content.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link to="/contenido" className="btn btn-primary">
              Ver todo el contenido gratuito
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2 className="title-section mb-lg">
                Conecta conmigo
              </h2>
              <p className="text-subtitle mb-xl">
                Si tenés dudas, querés una consulta o simplemente sentís que necesitás 
                acompañamiento, escribime. Estoy aquí para guiarte con compromiso y 
                profesionalismo en tu proceso y el de tu mascota.
              </p>
              
              <div className="contact-actions">
                <Link to="/contacto" className="btn btn-primary">
                  Enviar mensaje
                </Link>
                <Link to="/servicios" className="btn btn-secondary">
                  Reservar sesión
                </Link>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Contame cómo puedo acompañarte..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-gold contact-submit">
                  Enviar mensaje
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
