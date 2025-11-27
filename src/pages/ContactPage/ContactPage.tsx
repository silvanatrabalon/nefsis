import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageCircle, Instagram, Mail, MapPin, Heart, Clock, CheckCircle } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Escribime directamente',
      value: '+54 9 11 1234-5678',
      link: 'https://wa.me/5491112345678',
      color: '#25D366'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Seguime en @nefsis',
      value: '@nefsis.oficial',
      link: 'https://instagram.com/nefsis.oficial',
      color: '#E4405F'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Correo electrónico',
      value: 'sofi@nefsis.com',
      link: 'mailto:sofi@nefsis.com',
      color: '#9B7FE6'
    }
  ];

  const faqItems = [
    {
      question: '¿Cómo funciona una sesión online?',
      answer: 'Las sesiones online se realizan por videollamada. Te envío el link antes del encuentro y trabajamos igual que si fuera presencial. Muchas veces la energía fluye mejor a distancia.'
    },
    {
      question: '¿Cuántas sesiones necesito?',
      answer: 'Depende de cada proceso. Algunas personas notan cambios desde la primera sesión, otras prefieren un acompañamiento más prolongado. Lo conversamos juntos según tu necesidad.'
    },
    {
      question: '¿Mi mascota necesita estar presente en la sesión?',
      answer: 'No siempre. Para algunas sesiones es útil, pero en muchos casos trabajo la conexión energética sin necesidad de que esté físicamente presente.'
    },
    {
      question: '¿Qué formas de pago aceptás?',
      answer: 'Acepto transferencia bancaria, MercadoPago y efectivo para sesiones presenciales. Te envío los datos una vez que coordinamos la sesión.'
    }
  ];

  const availability = [
    { day: 'Lunes a Viernes', time: '10:00 - 18:00 hs' },
    { day: 'Sábados', time: '10:00 - 14:00 hs' },
    { day: 'Domingos', time: 'Solo urgencias' }
  ];

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <section className="contact-success">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h1 className="title-hero mb-lg">
                ¡Mensaje enviado con éxito!
              </h1>
              <p className="text-subtitle mb-xl">
                Gracias por contactarte conmigo. Te voy a responder dentro de las próximas 24 horas. 
                Mientras tanto, podés seguir explorando mi contenido gratuito.
              </p>
              <div className="success-actions">
                <Link to="/contenido" className="btn btn-primary">
                  Ver contenido gratuito
                </Link>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: '',
                      interest: ''
                    });
                  }}
                  className="btn btn-secondary"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-icon">
              <Heart size={48} />
            </div>
            <h1 className="title-hero mb-lg">
              Conecta conmigo
            </h1>
            <p className="text-subtitle mb-xl max-width-700">
              Si tenés dudas, querés una consulta o simplemente sentís que necesitás acompañamiento, 
              escribime. Estoy aquí para guiarte con compromiso y profesionalismo en tu proceso y el de tu mascota.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section contact-methods-section">
        <div className="container">
          <h2 className="title-section text-center mb-xl">
            Formas de contacto
          </h2>
          
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
                style={{ '--method-color': method.color } as React.CSSProperties}
              >
                <div className="method-icon">
                  <method.icon size={32} />
                </div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-description">{method.description}</p>
                <span className="method-value">{method.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-alt contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="form-header">
              <h2 className="title-section mb-lg text-center">
                Envíame un mensaje
              </h2>
              <p className="text-subtitle text-center mb-xl">
                Contame qué necesitás y cómo puedo acompañarte en tu proceso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest" className="form-label">Me interesa:</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="equilibrio-personal">Equilibrio personal</option>
                    <option value="bienestar-mascota">Bienestar de mi mascota</option>
                    <option value="conexion-conjunta">Conexión conjunta</option>
                    <option value="alineacion-tutor-animal">Alineación Tutor-Animal</option>
                    <option value="recursos-digitales">Recursos digitales</option>
                    <option value="consulta-general">Consulta general</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="¿De qué querés hablar?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Contame qué necesitás, cómo te sentís, o cualquier pregunta que tengas. No hay preguntas tontas 💜"
                  rows={5}
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensaje
                    </>
                  )}
                </button>
                <p className="form-note">
                  * Campos obligatorios. Te responderé dentro de las 24 hs.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Availability & FAQ */}
      <section className="section availability-faq-section">
        <div className="container">
          <div className="availability-faq-grid">
            {/* Availability */}
            <div className="availability-card">
              <div className="card-header">
                <Clock size={32} className="header-icon" />
                <h3 className="card-title">Horarios de atención</h3>
              </div>
              
              <div className="availability-list">
                {availability.map((item, index) => (
                  <div key={index} className="availability-item">
                    <span className="day">{item.day}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <p className="availability-note">
                Para urgencias fuera de horario, escribime por WhatsApp. 
                Las consultas por email las respondo dentro de las 24 hs.
              </p>
            </div>

            {/* FAQ */}
            <div className="faq-card">
              <div className="card-header">
                <MessageCircle size={32} className="header-icon" />
                <h3 className="card-title">Preguntas frecuentes</h3>
              </div>
              
              <div className="faq-list">
                {faqItems.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h4 className="faq-question">{item.question}</h4>
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="section-alt location-cta-section">
        <div className="container">
          <div className="location-cta-content">
            <div className="location-info">
              <div className="location-header">
                <MapPin size={32} className="location-icon" />
                <h3 className="location-title">Ubicación</h3>
              </div>
              <p className="location-description">
                Sesiones presenciales en <strong>Capital Federal, Buenos Aires</strong>. 
                También trabajo online para cualquier parte del mundo. 
                La energía no tiene fronteras 💜
              </p>
              <div className="location-details">
                <p><strong>Zona:</strong> Palermo / Villa Crick</p>
                <p><strong>Modalidades:</strong> Presencial y Online</p>
                <p><strong>A domicilio:</strong> Solo casos especiales</p>
              </div>
            </div>

            <div className="cta-info">
              <h3 className="cta-title">¿Lista para comenzar?</h3>
              <p className="cta-description">
                No importa si es tu primera vez o si ya trabajaste conmigo antes. 
                Cada proceso es único y mi compromiso es acompañarte paso a paso.
              </p>
              <div className="cta-actions">
                <Link to="/servicios" className="btn btn-gold">
                  Ver todos los servicios
                </Link>
                <Link to="/sobre-mi" className="btn btn-secondary">
                  Conocé mi enfoque
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
