
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Globe, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Target,
  Brain,
  Languages,
  TrendingUp,
  FileText,
  Video
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Formations = () => {
  const formations = [
    {
      icon: Languages,
      title: "Formations Linguistiques",
      description: "Maîtrisez les langues étrangères pour vos projets internationaux",
      duration: "3-12 mois",
      level: "Tous niveaux",
      price: "À partir de 299€",
      features: [
        "Cours particuliers ou en groupe",
        "Préparation aux certifications (TOEFL, IELTS, DELE)",
        "Immersion culturelle",
        "Professeurs natifs qualifiés"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital International",
      description: "Développez vos compétences en marketing pour conquérir de nouveaux marchés",
      duration: "6-8 semaines",
      level: "Intermédiaire",
      price: "À partir de 599€",
      features: [
        "Stratégies marketing cross-culturelles",
        "Marketing digital et réseaux sociaux",
        "Analyse de marché international",
        "Études de cas pratiques"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Brain,
      title: "Leadership Interculturel",
      description: "Apprenez à diriger des équipes multiculturelles avec efficacité",
      duration: "4-6 semaines",
      level: "Avancé",
      price: "À partir de 799€",
      features: [
        "Gestion d'équipes internationales",
        "Communication interculturelle",
        "Négociation internationale",
        "Coaching personnalisé"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Globe,
      title: "Commerce International",
      description: "Maîtrisez les rouages du commerce et des échanges internationaux",
      duration: "8-10 semaines",
      level: "Intermédiaire",
      price: "À partir de 699€",
      features: [
        "Réglementations douanières",
        "Logistique internationale",
        "Financement du commerce",
        "Contrats internationaux"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Award,
      title: "Certifications Professionnelles",
      description: "Obtenez des certifications reconnues internationalement",
      duration: "Variable",
      level: "Tous niveaux",
      price: "Sur devis",
      features: [
        "Certifications IT (Microsoft, Google, AWS)",
        "Certifications en gestion de projet (PMP)",
        "Certifications qualité (ISO)",
        "Accompagnement aux examens"
      ],
      color: "from-[#8F1B14] to-red-700"
    },
    {
      icon: Video,
      title: "Formations en Ligne",
      description: "Accédez à nos formations depuis n'importe où dans le monde",
      duration: "Flexible",
      level: "Tous niveaux",
      price: "À partir de 199€",
      features: [
        "Plateforme e-learning moderne",
        "Sessions live interactives",
        "Support pédagogique 24/7",
        "Certificats de completion"
      ],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Formations Sur-mesure",
      description: "Programmes adaptés à vos besoins spécifiques et objectifs professionnels"
    },
    {
      icon: Users,
      title: "Formateurs Experts",
      description: "Professionnels expérimentés avec une expertise internationale reconnue"
    },
    {
      icon: Globe,
      title: "Perspective Globale",
      description: "Approche internationale pour une vision élargie du marché mondial"
    },
    {
      icon: Zap,
      title: "Méthodes Innovantes",
      description: "Techniques pédagogiques modernes et outils technologiques avancés"
    }
  ];

  const stats = [
    { number: "500+", label: "Étudiants formés" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "25", label: "Pays représentés" },
    { number: "15", label: "Langues enseignées" }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM0 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
            <BookOpen className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-40 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <Award className="w-8 h-8 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <Globe className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute bottom-20 right-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '3s' }}>
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Excellence Académique</span>
              <Award className="w-4 h-4 text-yellow-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              <span className="text-white">Formations</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professionnelles
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Développez vos compétences avec nos formations spécialisées. 
              Des programmes conçus pour vous préparer aux défis du marché international.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full mt-8 group">
              Découvrir nos formations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Nos Formations Spécialisées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des programmes complets pour développer vos compétences internationales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => {
              const IconComponent = formation.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${formation.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 font-montserrat">
                      {formation.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {formation.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {formation.duration}
                      </span>
                      <span>{formation.level}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {formation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-2xl font-bold text-[#8F1B14] mb-4">{formation.price}</div>
                      <Button className="w-full" variant="outline">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Pourquoi Choisir Nos Formations ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche pédagogique moderne et personnalisée
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#8F1B14] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8F1B14] to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Prêt à Développer Vos Compétences ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Rejoignez nos formations et donnez un nouvel élan à votre carrière internationale. 
            Consultation gratuite pour définir le programme qui vous correspond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-project">
              <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                Consultation gratuite
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#8F1B14] px-8 py-4 text-lg font-semibold rounded-full">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Formations;
