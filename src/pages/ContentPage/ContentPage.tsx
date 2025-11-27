import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, Heart, User, Sparkles, Filter, Search, ArrowRight, Play, FileText, Video } from 'lucide-react';
import './ContentPage.css';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: 'bienestar' | 'espiritualidad' | 'terapias' | 'tips-mascotas';
  type: 'articulo' | 'video' | 'audio';
  image: string;
  readTime: string;
  views: number;
  featured: boolean;
  tags: string[];
}

const ContentPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const contentItems: ContentItem[] = [
    {
      id: 'señales-mascota-refleja-emociones',
      title: '5 señales de que tu mascota refleja tu estado emocional',
      excerpt: 'Descubrí cómo las emociones se transmiten energéticamente entre vos y tu mascota, y qué hacer para crear un ambiente de calma compartida en tu hogar.',
      category: 'bienestar',
      type: 'articulo',
      image: '/api/placeholder/400/250',
      readTime: '5 min',
      views: 1250,
      featured: true,
      tags: ['emociones', 'vínculo', 'energía', 'señales']
    },
    {
      id: 'meditacion-armonizar-animal',
      title: 'Meditación guiada para armonizar con tu animal',
      excerpt: 'Práctica sencilla de meditación para conectar conscientemente con tu mascota y equilibrar las energías de ambos. Incluye audio descargable.',
      category: 'espiritualidad',
      type: 'audio',
      image: '/api/placeholder/400/250',
      readTime: '10 min',
      views: 890,
      featured: true,
      tags: ['meditación', 'conexión', 'armonización', 'práctica']
    },
    {
      id: 'tips-reducir-ansiedad-casa',
      title: 'Tips para reducir la ansiedad en casa',
      excerpt: 'Herramientas prácticas para crear un hogar tranquilo que beneficie tanto a humanos como a mascotas. Técnicas simples y efectivas.',
      category: 'tips-mascotas',
      type: 'video',
      image: '/api/placeholder/400/250',
      readTime: '7 min',
      views: 2100,
      featured: true,
      tags: ['ansiedad', 'hogar', 'tranquilidad', 'técnicas']
    },
    {
      id: 'energia-plantas-mascotas',
      title: 'Cómo las plantas pueden equilibrar la energía de tu mascota',
      excerpt: 'Conocé qué plantas son beneficiosas para crear un ambiente energéticamente balanceado para tu animal y cuáles debes evitar.',
      category: 'bienestar',
      type: 'articulo',
      image: '/api/placeholder/400/250',
      readTime: '4 min',
      views: 675,
      featured: false,
      tags: ['plantas', 'energía', 'ambiente', 'equilibrio']
    },
    {
      id: 'ritual-limpieza-energetica',
      title: 'Ritual de limpieza energética para tu hogar',
      excerpt: 'Paso a paso de un ritual sencillo para limpiar las energías densas de tu espacio y crear armonía para toda la familia, incluyendo tus mascotas.',
      category: 'espiritualidad',
      type: 'video',
      image: '/api/placeholder/400/250',
      readTime: '12 min',
      views: 1540,
      featured: false,
      tags: ['ritual', 'limpieza', 'hogar', 'armonía']
    },
    {
      id: 'comunicacion-telepatica-animales',
      title: 'Primeros pasos en comunicación telepática con animales',
      excerpt: 'Introducción gentil a las técnicas de comunicación intuitiva con mascotas. Ejercicios básicos para desarrollar esta habilidad natural.',
      category: 'terapias',
      type: 'articulo',
      image: '/api/placeholder/400/250',
      readTime: '8 min',
      views: 920,
      featured: false,
      tags: ['comunicación', 'telepatía', 'intuición', 'conexión']
    },
    {
      id: 'flores-bach-mascotas',
      title: 'Flores de Bach para mascotas: guía básica',
      excerpt: 'Aprende qué son las flores de Bach y cómo pueden ayudar a equilibrar las emociones de tu mascota de forma natural y segura.',
      category: 'terapias',
      type: 'video',
      image: '/api/placeholder/400/250',
      readTime: '15 min',
      views: 1180,
      featured: false,
      tags: ['flores de bach', 'emociones', 'natural', 'terapia']
    },
    {
      id: 'ejercicios-respiracion-conjunta',
      title: 'Ejercicios de respiración para hacer con tu mascota',
      excerpt: 'Técnicas de respiración consciente que podes practicar junto a tu animal para crear momentos de calma y conexión profunda.',
      category: 'bienestar',
      type: 'audio',
      image: '/api/placeholder/400/250',
      readTime: '6 min',
      views: 785,
      featured: false,
      tags: ['respiración', 'ejercicios', 'calma', 'conexión']
    }
  ];

  const categories = [
    { id: 'all', title: 'Todo el contenido', icon: Sparkles, color: '#9B7FE6' },
    { id: 'bienestar', title: 'Bienestar', icon: Heart, color: '#FF6B9D' },
    { id: 'espiritualidad', title: 'Espiritualidad', icon: Sparkles, color: '#E6B366' },
    { id: 'terapias', title: 'Terapias', icon: User, color: '#9B7FE6' },
    { id: 'tips-mascotas', title: 'Tips mascotas', icon: Heart, color: '#FF6B9D' }
  ];

  const contentTypes = [
    { id: 'all', title: 'Todos', icon: Filter },
    { id: 'articulo', title: 'Artículos', icon: FileText },
    { id: 'video', title: 'Videos', icon: Video },
    { id: 'audio', title: 'Audios', icon: Play }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    const searchMatch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && typeMatch && searchMatch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'audio': return Play;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : '#9B7FE6';
  };

  return (
    <div className="content-page">
      {/* Hero Section */}
      <section className="content-hero">
        <div className="container">
          <div className="content-hero-content">
            <div className="hero-icon">
              <Sparkles size={48} />
            </div>
            <h1 className="title-hero mb-lg">
              Conexión Consciente
            </h1>
            <p className="text-subtitle mb-xl max-width-700">
              Descubrí tips, artículos y videos para potenciar tu bienestar y el de tu mascota. 
              Aprendé a comunicarte, armonizar energías y mantener la calma en tu hogar. 
              Todo lo que comparto es práctico y fácil de aplicar, pensado para acompañarte en tu día a día.
            </p>
            
            {/* Search */}
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar contenido..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {featuredContent.length > 0 && (
        <section className="section featured-section">
          <div className="container">
            <h2 className="title-section text-center mb-xl">
              Contenido destacado
            </h2>
            
            <div className="featured-grid">
              {featuredContent.map(item => (
                <article key={item.id} className="featured-card">
                  <div className="featured-image">
                    <img src={item.image} alt={item.title} />
                    <div className="content-type-badge">
                      {React.createElement(getTypeIcon(item.type), { size: 16 })}
                      <span>{item.type}</span>
                    </div>
                    <div className="content-stats">
                      <Eye size={14} />
                      <span>{item.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="featured-content">
                    <div className="featured-meta">
                      <span 
                        className="category-tag" 
                        style={{ backgroundColor: getCategoryColor(item.category) }}
                      >
                        {categories.find(c => c.id === item.category)?.title}
                      </span>
                      <div className="read-time">
                        <Clock size={14} />
                        {item.readTime}
                      </div>
                    </div>
                    
                    <h3 className="featured-title">{item.title}</h3>
                    <p className="featured-excerpt">{item.excerpt}</p>
                    
                    <div className="featured-tags">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-container">
            <div className="filter-group">
              <h3 className="filter-title">Categorías</h3>
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'category-btn-active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{ 
                      '--category-color': category.color,
                      borderColor: selectedCategory === category.id ? category.color : '#e0e0e0'
                    } as React.CSSProperties}
                  >
                    <category.icon size={18} />
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-group">
              <h3 className="filter-title">Tipo de contenido</h3>
              <div className="type-filters">
                {contentTypes.map(type => (
                  <button
                    key={type.id}
                    className={`type-btn ${selectedType === type.id ? 'type-btn-active' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <type.icon size={16} />
                    {type.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="section content-grid-section">
        <div className="container">
          <div className="results-header">
            <h2 className="results-title">
              {filteredContent.length} {filteredContent.length === 1 ? 'resultado' : 'resultados'}
            </h2>
            {(selectedCategory !== 'all' || selectedType !== 'all' || searchTerm) && (
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSearchTerm('');
                }}
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="content-grid">
            {filteredContent.map(item => (
              <article key={item.id} className="content-card">
                <div className="content-image">
                  <img src={item.image} alt={item.title} />
                  <div className="content-overlay">
                    <div className="content-type-icon">
                      {React.createElement(getTypeIcon(item.type), { size: 24 })}
                    </div>
                  </div>
                </div>
                
                <div className="content-body">
                  <div className="content-meta">
                    <span 
                      className="category-tag small" 
                      style={{ backgroundColor: getCategoryColor(item.category) }}
                    >
                      {categories.find(c => c.id === item.category)?.title}
                    </span>
                    <div className="content-stats-small">
                      <Clock size={12} />
                      <span>{item.readTime}</span>
                      <Eye size={12} />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-excerpt">{item.excerpt}</p>
                  
                  <div className="content-tags">
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag small">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredContent.length === 0 && (
            <div className="no-results">
              <Sparkles size={48} className="no-results-icon" />
              <h3>No se encontró contenido</h3>
              <p>Probá con otros términos de búsqueda o ajustá los filtros.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSearchTerm('');
                }}
                className="btn btn-secondary"
              >
                Ver todo el contenido
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="title-section text-center mb-lg">
              ¿Querés acompañamiento personalizado?
            </h2>
            <p className="text-subtitle text-center mb-xl">
              Si te gustó el contenido gratuito, imaginate lo que podemos lograr trabajando juntos. 
              Conocé mis servicios personalizados para vos y tu mascota.
            </p>
            <div className="cta-actions">
              <Link to="/servicios" className="btn btn-primary">
                Ver servicios
                <ArrowRight size={18} />
              </Link>
              <Link to="/contacto" className="btn btn-secondary">
                Consultar gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentPage;
