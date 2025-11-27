import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Heart, Users, Star, Download, Play, BookOpen, ArrowRight, Filter } from 'lucide-react';
import './ShopPage.css';

interface Product {
  id: string;
  title: string;
  description: string;
  category: 'humanos' | 'mascotas' | 'conjuntas';
  type: 'pdf' | 'audio' | 'curso' | 'pack';
  price: number;
  originalPrice?: number;
  image: string;
  featured: boolean;
  includes: string[];
  tags: string[];
}

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const products: Product[] = [
    {
      id: 'guia-equilibrio-emocional',
      title: 'Guía completa de equilibrio emocional',
      description: 'Manual práctico con técnicas de autorregulación emocional, ejercicios de mindfulness y herramientas de autoconocimiento para tu bienestar diario.',
      category: 'humanos',
      type: 'pdf',
      price: 2500,
      image: '/api/placeholder/300/400',
      featured: false,
      includes: [
        'PDF de 45 páginas',
        '15 ejercicios prácticos',
        'Registro de emociones diarias',
        'Audio de meditación guiada'
      ],
      tags: ['emociones', 'mindfulness', 'autoconocimiento']
    },
    {
      id: 'pack-alineacion-total',
      title: 'Pack Alineación Total: Humano + Mascota',
      description: 'Pack completo con todo lo necesario para trabajar la conexión profunda entre vos y tu mascota. Incluye sesiones, materiales y seguimiento.',
      category: 'conjuntas',
      type: 'pack',
      price: 15000,
      originalPrice: 18000,
      image: '/api/placeholder/300/400',
      featured: true,
      includes: [
        '3 sesiones de alineación',
        'Kit de ejercicios diarios',
        'Guía PDF de 60 páginas',
        '5 audios de meditación conjunta',
        'Seguimiento por WhatsApp (1 mes)'
      ],
      tags: ['alineación', 'conexión', 'integral', 'seguimiento']
    },
    {
      id: 'meditaciones-para-mascotas',
      title: 'Colección de meditaciones para mascotas',
      description: 'Serie de audios especialmente diseñados para calmar y equilibrar la energía de tu mascota en diferentes situaciones.',
      category: 'mascotas',
      type: 'audio',
      price: 1800,
      image: '/api/placeholder/300/400',
      featured: false,
      includes: [
        '8 audios de meditación (MP3)',
        'Guía de uso por situaciones',
        'Música relajante de fondo',
        'Instrucciones de aplicación'
      ],
      tags: ['meditación', 'calma', 'relajación', 'energía']
    },
    {
      id: 'curso-comunicacion-animal',
      title: 'Curso online: Comunicación Animal Consciente',
      description: 'Aprende técnicas de comunicación telepática y energética con animales. Curso completo con videos, ejercicios y certificación.',
      category: 'conjuntas',
      type: 'curso',
      price: 8500,
      image: '/api/placeholder/300/400',
      featured: true,
      includes: [
        '12 módulos en video',
        'Ejercicios prácticos semanales',
        'Material PDF descargable',
        'Sesión grupal mensual online',
        'Certificado de finalización'
      ],
      tags: ['comunicación', 'telepática', 'curso', 'certificación']
    },
    {
      id: 'diario-vinculo-consciente',
      title: 'Diario del vínculo consciente',
      description: 'Cuaderno de trabajo para registrar y fortalecer la conexión con tu mascota día a día. Con ejercicios y reflexiones guiadas.',
      category: 'conjuntas',
      type: 'pdf',
      price: 1200,
      image: '/api/placeholder/300/400',
      featured: false,
      includes: [
        'PDF interactivo de 30 páginas',
        'Ejercicios de observación diarios',
        'Registro de emociones compartidas',
        'Tips semanales de conexión'
      ],
      tags: ['diario', 'conexión', 'observación', 'registro']
    },
    {
      id: 'flores-bach-mascotas-guia',
      title: 'Guía práctica: Flores de Bach para mascotas',
      description: 'Manual completo sobre el uso de flores de Bach en animales, con casos prácticos y protocolos específicos por situación.',
      category: 'mascotas',
      type: 'pdf',
      price: 3200,
      image: '/api/placeholder/300/400',
      featured: false,
      includes: [
        'PDF de 55 páginas',
        'Protocolos por situación',
        '20 casos prácticos reales',
        'Tabla de dosificación',
        'Lista de proveedores confiables'
      ],
      tags: ['flores de bach', 'terapia', 'natural', 'protocolos']
    },
    {
      id: 'audios-tarot-terapeutico',
      title: 'Serie de audios: Tarot terapéutico personal',
      description: 'Colección de meditaciones guiadas basadas en arquetipos del tarot para autoconocimiento y sanación personal.',
      category: 'humanos',
      type: 'audio',
      price: 2800,
      image: '/api/placeholder/300/400',
      featured: false,
      includes: [
        '12 audios temáticos (MP3)',
        'Guía de interpretación',
        'Ejercicios de reflexión',
        'Música original de fondo'
      ],
      tags: ['tarot', 'autoconocimiento', 'arquetipos', 'sanación']
    },
    {
      id: 'mini-curso-energia-hogar',
      title: 'Mini-curso: Energía armoniosa en el hogar',
      description: 'Curso corto y práctico para crear un ambiente energéticamente equilibrado que beneficie a toda la familia, mascotas incluidas.',
      category: 'conjuntas',
      type: 'curso',
      price: 4200,
      image: '/api/placeholder/300/400',
      featured: false,
      includes: [
        '5 videos instructivos',
        'Checklist de armonización',
        'Ritual de limpieza energética',
        'Guía de plantas y cristales',
        'Sesión Q&A grupal'
      ],
      tags: ['hogar', 'energía', 'armonización', 'ambiente']
    }
  ];

  const categories = [
    { id: 'all', title: 'Todos los productos', icon: Star },
    { id: 'humanos', title: 'Para humanos', icon: User },
    { id: 'mascotas', title: 'Para mascotas', icon: Heart },
    { id: 'conjuntas', title: 'Evolutivos/Conjuntos', icon: Users }
  ];

  const productTypes = [
    { id: 'all', title: 'Todos los tipos', icon: Filter },
    { id: 'pdf', title: 'PDFs/Guías', icon: BookOpen },
    { id: 'audio', title: 'Audios', icon: Play },
    { id: 'curso', title: 'Cursos', icon: BookOpen },
    { id: 'pack', title: 'Packs', icon: Star }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const typeMatch = selectedType === 'all' || product.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const featuredProducts = products.filter(product => product.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return BookOpen;
      case 'audio': return Play;
      case 'curso': return BookOpen;
      case 'pack': return Star;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'humanos': return 'var(--gradient-lilac)';
      case 'mascotas': return 'var(--gradient-pink)';
      case 'conjuntas': return 'var(--gradient-gold)';
      default: return 'var(--gradient-lilac)';
    }
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-content">
            <div className="hero-icon">
              <ShoppingCart size={48} />
            </div>
            <h1 className="title-hero mb-lg">
              Tienda · Recursos Digitales
            </h1>
            <p className="text-subtitle mb-xl max-width-700">
              Recursos digitales diseñados para acompañarte en tu proceso de crecimiento y en el de tu mascota. 
              Guías, audios, cursos y packs especiales para profundizar en la conexión consciente.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="section featured-products-section">
          <div className="container">
            <h2 className="title-section text-center mb-xl">
              <Star className="section-icon" />
              Productos destacados
            </h2>
            
            <div className="featured-products-grid">
              {featuredProducts.map(product => (
                <div key={product.id} className="featured-product-card">
                  <div className="product-badge">Destacado</div>
                  
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    <div className="product-overlay">
                      <div className="product-type-icon">
                        {React.createElement(getTypeIcon(product.type), { size: 32 })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="product-content">
                    <div className="product-meta">
                      <span 
                        className="category-badge"
                        style={{ background: getCategoryColor(product.category) }}
                      >
                        {categories.find(c => c.id === product.category)?.title}
                      </span>
                      <span className="product-type">
                        {productTypes.find(t => t.id === product.type)?.title}
                      </span>
                    </div>
                    
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-includes">
                      <h4>Incluye:</h4>
                      <ul>
                        {product.includes.slice(0, 3).map((item, index) => (
                          <li key={index}>
                            <Download size={14} />
                            {item}
                          </li>
                        ))}
                        {product.includes.length > 3 && (
                          <li className="more-items">
                            +{product.includes.length - 3} elementos más
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="product-pricing">
                      {product.originalPrice && (
                        <span className="original-price">${product.originalPrice.toLocaleString()}</span>
                      )}
                      <span className="current-price">${product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="discount">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>
                    
                    <div className="product-actions">
                      <Link to="/contacto" className="btn btn-gold">
                        Comprar ahora
                        <ShoppingCart size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="shop-filters-section">
        <div className="container">
          <div className="filters-container">
            <div className="filter-group">
              <h3 className="filter-title">Categorías</h3>
              <div className="filter-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${selectedCategory === category.id ? 'filter-btn-active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <category.icon size={18} />
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-group">
              <h3 className="filter-title">Tipo de producto</h3>
              <div className="filter-buttons">
                {productTypes.map(type => (
                  <button
                    key={type.id}
                    className={`filter-btn ${selectedType === type.id ? 'filter-btn-active' : ''}`}
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

      {/* Products Grid */}
      <section className="section products-grid-section">
        <div className="container">
          <div className="products-header">
            <h2 className="products-title">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
            </h2>
            {(selectedCategory !== 'all' || selectedType !== 'all') && (
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <div className="product-type-badge">
                    {React.createElement(getTypeIcon(product.type), { size: 16 })}
                    <span>{productTypes.find(t => t.id === product.type)?.title}</span>
                  </div>
                </div>
                
                <div className="product-content">
                  <div className="product-meta">
                    <span 
                      className="category-badge small"
                      style={{ background: getCategoryColor(product.category) }}
                    >
                      {categories.find(c => c.id === product.category)?.title}
                    </span>
                  </div>
                  
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-tags">
                    {product.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="product-pricing">
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice.toLocaleString()}</span>
                    )}
                    <span className="current-price">${product.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="product-actions">
                    <Link to="/contacto" className="btn btn-primary product-buy-btn">
                      Comprar
                      <ShoppingCart size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <ShoppingCart size={48} className="no-products-icon" />
              <h3>No se encontraron productos</h3>
              <p>Probá con otros filtros o explorá toda la tienda.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                }}
                className="btn btn-secondary"
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="shop-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="title-section text-center mb-lg">
              ¿Necesitas acompañamiento personalizado?
            </h2>
            <p className="text-subtitle text-center mb-xl">
              Si preferís un enfoque más personalizado, conocé mis sesiones individuales y en grupo. 
              Cada proceso es único y adapto las herramientas según tu necesidad específica.
            </p>
            <div className="cta-actions">
              <Link to="/servicios" className="btn btn-primary">
                Ver servicios personalizados
                <ArrowRight size={18} />
              </Link>
              <Link to="/contacto" className="btn btn-secondary">
                Consultar antes de comprar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
