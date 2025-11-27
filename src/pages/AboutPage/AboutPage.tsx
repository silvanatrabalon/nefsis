import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const methodologyPoints = [
    'Comprender tu estado emocional y energético',
    'Detectar cómo influye en tu entorno y en tu mascota',
    'Crear un plan de acción práctico y efectivo',
    'Acompañar con herramientas que puedas aplicar en tu día a día'
  ];

  const serviceAreas = [
    {
      number: '1️⃣',
      title: 'Equilibrio personal (solo persona)',
      description: 'Sesiones individuales para ordenar tu energía y emociones, preparándote para extender bienestar y armonía al entorno y a tu mascota.',
      icon: User,
      gradient: 'var(--gradient-lilac)'
    },
    {
      number: '2️⃣',
      title: 'Bienestar de tu mascota (solo animal)',
      description: 'Acompañamiento energético para que tu animal viva en calma y equilibrio, reflejando bienestar en su comportamiento y en el vínculo con su tutor.',
      icon: Heart,
      gradient: 'var(--gradient-pink)'
    },
    {
      number: '3️⃣',
      title: 'Conexión y crecimiento conjunto (humano + mascota)',
      description: 'Sesiones integrales que fortalecen el vínculo, armonizan emociones y crean rutinas de coherencia que estabilizan a ambos a nivel energético y emocional.',
      icon: Users,
      gradient: 'var(--gradient-gold)'
    }
  ];

  return (
    <div className="about-page">
      {/* Header cálido */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="title-hero mb-lg">
                Hola, soy Sofi, guía de Nefsis
              </h1>
              <p className="text-subtitle mb-xl">
                Acompaño a personas y sus mascotas en procesos de transformación consciente, 
                creando bienestar, equilibrio y conexión auténtica.
              </p>
            </div>
            <div className="about-hero-image">
              <img 
                src="/api/placeholder/350/400" 
                alt="Sofi, guía de Nefsis" 
                className="about-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mi historia / Trayectoria */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="title-section mb-xl text-lilac">
                Mi historia
              </h2>
              <div className="story-paragraph">
                <p className="text-body mb-lg">
                  <span className="text-gold font-weight-600">Hace más de 3 años comencé mi camino</span> acompañando a personas en procesos de 
                  transformación emocional, energética y espiritual. Cada historia que conocí, cada desafío 
                  que acompañé, me enseñó que la verdadera transformación surge del cuidado de nuestro 
                  interior y de la energía que compartimos con quienes amamos.
                </p>
                
                <p className="text-body mb-lg">
                  Con el tiempo descubrí que <span className="text-lilac font-weight-600">mi propósito también estaba presente</span> en los seres 
                  de cuatro patas que forman parte de nuestras vidas. Los animales sienten, reflejan y 
                  responden a nuestras emociones, y hoy puedo acompañarlos de manera consciente, integrando 
                  herramientas terapéuticas que fortalecen el vínculo entre humanos y mascotas.
                </p>
                
                <p className="text-body">
                  Lo que antes estaba solo latente, ahora se convierte en un espacio de 
                  <span className="text-gold font-weight-600"> cuidado y conexión profunda</span>.
                </p>
              </div>
            </div>
            
            <div className="story-image">
              <img 
                src="/api/placeholder/400/300" 
                alt="Sofi trabajando con una mascota" 
                className="story-photo"
              />
              <div className="story-decoration">
                <Sparkles size={40} className="decoration-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mi enfoque y metodología */}
      <section className="section-alt methodology-section">
        <div className="container">
          <h2 className="title-section text-center mb-lg text-lilac">
            Mi enfoque: acompañamiento integral y personalizado
          </h2>
          
          <div className="methodology-content">
            <div className="methodology-text">
              <p className="text-body mb-xl">
                En Nefsis trabajo de forma integral, combinando <span className="text-gold font-weight-600">terapias holísticas, 
                tarot terapéutico y acompañamiento energético</span>, siempre con un enfoque personalizado.
              </p>
              
              <h3 className="title-subsection mb-lg">Cada sesión busca:</h3>
              
              <ul className="methodology-list">
                {methodologyPoints.map((point, index) => (
                  <li key={index} className="methodology-item">
                    <CheckCircle size={20} className="check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-body mt-xl">
                Mi trabajo se basa en la <span className="text-lilac font-weight-600">escucha activa, la sensibilidad energética</span> y 
                la conexión profunda con cada ser. Cada proceso es único, y adapto las sesiones según 
                la necesidad de la persona, la mascota o ambos en conjunto.
              </p>
            </div>
            
            <div className="methodology-visual">
              <div className="methodology-card">
                <div className="methodology-icon">
                  <Heart size={48} />
                </div>
                <h4>Conexión Consciente</h4>
                <p>Trabajo desde la escucha profunda y la sensibilidad energética</p>
              </div>
              
              <div className="methodology-card">
                <div className="methodology-icon">
                  <Sparkles size={48} />
                </div>
                <h4>Transformación Integral</h4>
                <p>Combino terapias holísticas, tarot y acompañamiento energético</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de servicios */}
      <section className="section services-overview-section">
        <div className="container">
          <h2 className="title-section text-center mb-lg text-gold">
            Mis servicios se dividen en tres grandes áreas
          </h2>
          <p className="text-subtitle text-center mb-2xl max-width-800">
            Pensadas para que puedas elegir la opción que mejor se adapte a tu necesidad:
          </p>
          
          <div className="services-overview-grid">
            {serviceAreas.map((service, index) => (
              <div key={index} className="service-overview-card">
                <div className="service-number">{service.number}</div>
                <div className="service-overview-icon" style={{ background: service.gradient }}>
                  <service.icon size={32} />
                </div>
                <h3 className="service-overview-title">{service.title}</h3>
                <p className="service-overview-description">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-2xl">
            <Link to="/servicios" className="btn btn-primary btn-large">
              Ver todas mis sesiones y recursos
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cierre cálido */}
      <section className="section closing-section">
        <div className="container">
          <div className="closing-content">
            <h2 className="title-section text-center mb-lg text-lilac">
              Mi propósito en Nefsis
            </h2>
            <p className="closing-text text-center">
              Es acompañarte en tu camino de crecimiento y bienestar, ayudándote a encontrar 
              equilibrio y conexión auténtica con vos mismo y con los seres que amas. 
              <span className="text-gold font-weight-600"> Estoy aquí para guiarte con compromiso, profesionalismo y sensibilidad, 
              paso a paso.</span>
            </p>
            
            <div className="closing-actions">
              <Link to="/contacto" className="btn btn-gold">
                Comenzar mi proceso
              </Link>
              <Link to="/servicios" className="btn btn-secondary">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
