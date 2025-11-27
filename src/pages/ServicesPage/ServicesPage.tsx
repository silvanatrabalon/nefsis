import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Heart, Users, Star, Clock, CheckCircle, ArrowRight, Filter, X } from 'lucide-react';
import './ServicesPage.css';

interface Service {
  id: string;
  title: string;
  category: 'equilibrio-personal' | 'bienestar-mascota' | 'conexion-conjunta';
  categoryTitle: string;
  description: string;
  whatIncludes: string[];
  storytelling: string;
  frequency: string;
  additionalOptions: string[];
  modalityOptions: string[];
  price: string;
  featured: boolean;
  icon: React.ElementType;
  gradient: string;
}

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModality, setSelectedModality] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const services: Service[] = [
    {
      id: 'alineacion-tutor-animal',
      title: 'Sesión Alineación Tutor–Animal',
      category: 'conexion-conjunta',
      categoryTitle: 'Conexión y crecimiento conjunto',
      description: 'Sesión integral que fortalece el vínculo energético entre vos y tu mascota, equilibrando emociones y creando armonía compartida.',
      whatIncludes: [
        'Lectura energética del vínculo',
        'Identificación de patrones emocionales',
        'Técnicas de armonización conjunta',
        'Plan de acción personalizado',
        'Audio con ejercicios para casa'
      ],
      storytelling: 'Esta sesión nació de mi experiencia acompañando personas que notaban que sus mascotas reflejaban sus estados emocionales. A través de técnicas de comunicación energética y tarot terapéutico, trabajamos la conexión profunda que existe entre vos y tu ser querido de cuatro patas.',
      frequency: 'Se recomienda una sesión inicial seguida de encuentros mensuales para mantener la armonía.',
      additionalOptions: [
        'Pack de 3 sesiones con descuento',
        'Sesión de seguimiento a los 15 días',
        'Kit de cristales para armonización'
      ],
      modalityOptions: ['Online', 'Presencial'],
      price: '$8.500',
      featured: true,
      icon: Users,
      gradient: 'var(--gradient-gold)'
    },
    {
      id: 'vinculo-coherencia-emocional',
      title: 'Sesión de vínculo y coherencia emocional',
      category: 'conexion-conjunta',
      categoryTitle: 'Conexión y crecimiento conjunto',
      description: 'Trabajo profundo para equilibrar las emociones de ambos y crear rutinas de coherencia que los estabilice energéticamente.',
      whatIncludes: [
        'Evaluación del estado emocional conjunto',
        'Técnicas de respiración sincronizada',
        'Ejercicios de coherencia cardíaca',
        'Rutina diaria personalizada',
        'Guía de mantenimiento'
      ],
      storytelling: 'Desarrollé esta sesión para tutores que sienten que su mascota "absorbe" sus emociones. Utilizamos técnicas de coherencia cardíaca y mindfulness adaptadas para crear un espacio de calma mutua.',
      frequency: 'Sesión inicial + 2 seguimientos mensuales recomendados.',
      additionalOptions: [
        'Registro de ejercicios en PDF',
        'Sesión grupal familiar',
        'Consulta por WhatsApp entre sesiones'
      ],
      modalityOptions: ['Online', 'Presencial'],
      price: '$7.000',
      featured: false,
      icon: Users,
      gradient: 'var(--gradient-gold)'
    },
    {
      id: 'sesion-individual-tutor',
      title: 'Sesión individual para el tutor',
      category: 'equilibrio-personal',
      categoryTitle: 'Equilibrio personal',
      description: 'Sesión personal que combina tarot terapéutico y regulación emocional para ordenar tu energía antes de trabajar con tu mascota.',
      whatIncludes: [
        'Lectura de tarot terapéutico',
        'Técnicas de regulación emocional',
        'Identificación de bloqueos energéticos',
        'Herramientas de autocuidado',
        'Audio de meditación personalizada'
      ],
      storytelling: 'Muchas veces necesitamos ordenar nuestra propia energía antes de poder acompañar a nuestras mascotas. Esta sesión te prepara para ser el tutor equilibrado que tu animal necesita.',
      frequency: 'Sesiones quincenales o según necesidad personal.',
      additionalOptions: [
        'Diario de autoconocimiento',
        'Mini ritual de limpieza energética',
        'Seguimiento por email'
      ],
      modalityOptions: ['Online', 'Presencial'],
      price: '$6.000',
      featured: false,
      icon: User,
      gradient: 'var(--gradient-lilac)'
    },
    {
      id: 'pack-transiciones',
      title: 'Pack Transiciones',
      category: 'bienestar-mascota',
      categoryTitle: 'Bienestar de tu mascota',
      description: 'Acompañamiento especial para mascotas en momentos de cambio: mudanza, llegada de bebé, pérdida de compañero, etc.',
      whatIncludes: [
        'Evaluación energética de la mascota',
        'Técnicas de adaptación gradual',
        'Flores de Bach personalizadas',
        '3 sesiones de seguimiento',
        'Guía para el tutor'
      ],
      storytelling: 'Los animales sienten profundamente los cambios. Este pack surge de mi trabajo con mascotas que atravesaban momentos difíciles y necesitaban un acompañamiento especializado.',
      frequency: 'Pack de 4 sesiones en 2 meses.',
      additionalOptions: [
        'Consulta previa gratuita',
        'Kit de aromaterapia',
        'Sesión extra de emergencia'
      ],
      modalityOptions: ['Online', 'Presencial', 'Domicilio'],
      price: '$12.000',
      featured: false,
      icon: Heart,
      gradient: 'var(--gradient-pink)'
    },
    {
      id: 'seguimiento-mensual-vinculo',
      title: 'Seguimiento mensual del vínculo',
      category: 'bienestar-mascota',
      categoryTitle: 'Bienestar de tu mascota',
      description: 'Acompañamiento continuo para mantener el equilibrio energético de tu mascota y fortalecer el vínculo mes a mes.',
      whatIncludes: [
        'Sesión mensual de evaluación',
        'Ajustes en técnicas aplicadas',
        'Monitoreo del progreso',
        'Apoyo entre sesiones por WhatsApp',
        'Registro de evolución'
      ],
      storytelling: 'El bienestar es un proceso continuo. Este seguimiento nació para tutores comprometidos con mantener la armonía a largo plazo.',
      frequency: 'Una sesión mensual con disponibilidad entre encuentros.',
      additionalOptions: [
        'Descuento en productos complementarios',
        'Acceso a grupo privado',
        'Material educativo exclusivo'
      ],
      modalityOptions: ['Online', 'Presencial'],
      price: '$5.500/mes',
      featured: false,
      icon: Heart,
      gradient: 'var(--gradient-pink)'
    }
  ];

  const categories = [
    { id: 'all', title: 'Todos los servicios', icon: Star },
    { id: 'equilibrio-personal', title: 'Equilibrio personal', icon: User },
    { id: 'bienestar-mascota', title: 'Bienestar mascota', icon: Heart },
    { id: 'conexion-conjunta', title: 'Conexión conjunta', icon: Users }
  ];

  const modalities = [
    { id: 'all', title: 'Todas las modalidades' },
    { id: 'Online', title: 'Online' },
    { id: 'Presencial', title: 'Presencial' },
    { id: 'Domicilio', title: 'A domicilio' }
  ];

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const modalityMatch = selectedModality === 'all' || service.modalityOptions.includes(selectedModality);
    return categoryMatch && modalityMatch;
  });

  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="title-hero mb-lg">
              Servicios y Sesiones
            </h1>
            <p className="text-subtitle mb-xl max-width-600">
              Encuentra el acompañamiento que necesitás para tu bienestar y el de tu mascota. 
              Cada servicio está diseñado con amor y profesionalismo para crear la transformación que buscás.
            </p>
            
            {/* Filters */}
            <div className="services-filters">
              <button 
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={20} />
                Filtros
                {showFilters ? <X size={16} /> : null}
              </button>
              
              <div className={`filters-content ${showFilters ? 'filters-open' : ''}`}>
                <div className="filter-group">
                  <label className="filter-label">Categoría:</label>
                  <div className="filter-options">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`filter-btn ${selectedCategory === category.id ? 'filter-btn-active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <category.icon size={16} />
                        {category.title}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="filter-group">
                  <label className="filter-label">Modalidad:</label>
                  <div className="filter-options">
                    {modalities.map(modality => (
                      <button
                        key={modality.id}
                        className={`filter-btn ${selectedModality === modality.id ? 'filter-btn-active' : ''}`}
                        onClick={() => setSelectedModality(modality.id)}
                      >
                        {modality.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {filteredServices.map(service => (
              <div 
                key={service.id} 
                className={`service-card ${service.featured ? 'service-card-featured' : ''}`}
                id={service.id}
              >
                {service.featured && (
                  <div className="featured-badge">
                    <Star size={16} />
                    <span>Servicio Estrella</span>
                  </div>
                )}
                
                <div className="service-header">
                  <div className="service-icon" style={{ background: service.gradient }}>
                    <service.icon size={32} />
                  </div>
                  <div className="service-category-label">{service.categoryTitle}</div>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-details">
                  <h4 className="details-title">Qué incluye:</h4>
                  <ul className="service-includes">
                    {service.whatIncludes.map((item, index) => (
                      <li key={index} className="include-item">
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-story">
                  <p className="service-storytelling">{service.storytelling}</p>
                </div>
                
                <div className="service-info-grid">
                  <div className="service-info-item">
                    <Clock size={18} />
                    <div>
                      <strong>Frecuencia:</strong>
                      <p>{service.frequency}</p>
                    </div>
                  </div>
                  
                  <div className="service-info-item">
                    <div className="price-icon">$</div>
                    <div>
                      <strong>Precio:</strong>
                      <p className="service-price">{service.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="service-modalities">
                  <strong>Modalidades:</strong>
                  <div className="modality-tags">
                    {service.modalityOptions.map((modality, index) => (
                      <span key={index} className="modality-tag">
                        {modality}
                      </span>
                    ))}
                  </div>
                </div>
                
                {service.additionalOptions.length > 0 && (
                  <div className="additional-options">
                    <strong>Opciones adicionales:</strong>
                    <ul className="options-list">
                      {service.additionalOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="service-actions">
                  <Link 
                    to="/contacto" 
                    className={`btn ${service.featured ? 'btn-gold' : 'btn-primary'} service-cta`}
                  >
                    Reservar esta sesión
                    <ArrowRight size={18} />
                  </Link>
                  <Link 
                    to="/tienda" 
                    className="btn btn-secondary service-resources"
                  >
                    Ver recursos complementarios
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="no-results">
              <p>No se encontraron servicios con los filtros seleccionados.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedModality('all');
                }}
                className="btn btn-secondary"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="title-section text-center mb-lg">
              ¿No sabés cuál elegir?
            </h2>
            <p className="text-subtitle text-center mb-xl">
              Escribime y conversemos sobre cuál es el acompañamiento que mejor se adapta a tu situación.
            </p>
            <div className="cta-actions">
              <Link to="/contacto" className="btn btn-primary">
                Consultar gratis
              </Link>
              <Link to="/sobre-mi" className="btn btn-secondary">
                Conocé mi enfoque
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
