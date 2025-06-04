
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, CheckCircle, Star, MapPin, Target, Heart, Building2, TrendingUp, Phone, Mail, Sparkles, Calendar, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { number: "130+", label: "Agents dans le monde", icon: Users },
    { number: "2020", label: "Année de création", icon: Calendar },
    { number: "Global", label: "Réseau international", icon: Globe },
    { number: "100%", label: "Accompagnement personnalisé", icon: Target }
  ];

  const services = [
    {
      title: "Sélection de la formation",
      description: "Nous vous aidons à choisir le programme qui correspond parfaitement à vos objectifs de carrière.",
      icon: "🎯"
    },
    {
      title: "Procédures d'inscription et de visa",
      description: "Accompagnement complet dans toutes les démarches administratives pour votre dossier.",
      icon: "📝"
    },
    {
      title: "Recherche de logement",
      description: "Aide à la recherche et sécurisation de votre logement dans votre pays de destination.",
      icon: "🏠"
    },
    {
      title: "Préparation linguistique et culturelle",
      description: "Formation pour vous préparer à votre nouvelle vie académique et culturelle.",
      icon: "🗣️"
    },
    {
      title: "Intégration locale et suivi",
      description: "Accompagnement lors de vos premiers pas et suivi continu de votre parcours.",
      icon: "🤝"
    }
  ];

  const values = [
    {
      title: "Expertise",
      description: "Fondée par deux experts chevronnés de l'éducation et de la stratégie internationale.",
      icon: User
    },
    {
      title: "Technologie",
      description: "L'alliance entre expertise humaine et outils technologiques innovants.",
      icon: Sparkles
    },
    {
      title: "Engagement Humain",
      description: "Un accompagnement rapide, personnalisé et humain à chaque étape.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-[#8F1B14] to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Depuis 2020</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              <span className="text-white">À Propos de</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Speed-Inscri
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Entreprise internationale spécialisée dans l'accompagnement des étudiants et professionnels 
              vers des opportunités d'études, de stages ou de mobilité à l'étranger.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <IconComponent className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
            <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z" fill="white" fillOpacity="0.1"/>
            <path d="M0,80 C300,120 900,40 1200,80 L1200,120 L0,120 Z" fill="white" fillOpacity="0.05"/>
          </svg>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-700">Notre Histoire</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                Née d'une Conviction Forte
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Créée en 2020 au cœur de la pandémie de Covid-19, Speed-Inscri est née d'une conviction forte : 
                même en période d'incertitude mondiale, l'avenir ne doit pas attendre.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fondée par deux experts chevronnés de l'éducation et de la stratégie internationale, 
                l'entreprise a rapidement su s'imposer comme un acteur de confiance dans le domaine 
                de la mobilité académique.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aujourd'hui, notre réseau compte plus de 130 agents à travers le monde, mobilisés pour 
                vous offrir un accompagnement rapide, personnalisé et humain.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Équipe internationale"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#8F1B14] text-white p-6 rounded-2xl">
                <div className="text-3xl font-bold">130+</div>
                <div className="text-sm">Agents mondiaux</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-2xl">
                <div className="text-2xl font-bold">2020</div>
                <div className="text-xs">Création</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ouvrir les portes de l'international au plus grand nombre, avec des solutions accessibles, 
              efficaces et adaptées aux réalités de chacun.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nous mettons tout en œuvre pour faciliter chaque étape de votre parcours
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre Force */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Notre Force
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'alliance entre expertise, technologie et engagement humain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="bg-[#8F1B14] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="py-20 bg-gradient-to-br from-[#8F1B14] to-red-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">
            Notre Engagement
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Chez Speed-Inscri, chaque projet est unique, chaque dossier est suivi avec rigueur, 
              et chaque réussite est une victoire partagée.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Rigueur</h3>
                <p className="text-white/90 text-sm">Chaque dossier suivi avec la plus grande attention</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Heart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Personnalisation</h3>
                <p className="text-white/90 text-sm">Chaque projet traité de manière unique</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Réussite Partagée</h3>
                <p className="text-white/90 text-sm">Votre succès est notre victoire commune</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Rejoignez l'Aventure
            </h2>
            <p className="text-xl text-gray-600">
              Prêt à ouvrir les portes de votre avenir international ?
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Commencez Votre Projet</h3>
            <p className="text-gray-600 mb-6">
              Contactez notre équipe d'experts pour un accompagnement personnalisé vers votre réussite internationale.
            </p>
            <Button className="bg-[#8F1B14] hover:bg-[#8F1B14]/90 px-8 py-3 text-lg">
              Démarrer Mon Projet
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
