import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Users, Award, CheckCircle, ArrowRight, Globe, Star, Target, Clock, Euro, MapPin, Gift, DollarSign, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const StudiesAbroad = () => {
  const programs = [
    {
      title: "BTS/DUT",
      level: "Bac+2",
      duration: "2 ans",
      description: "Formation technique et professionnelle courte, idéale pour une insertion rapide ou une poursuite d'études",
      countries: ["France", "Belgique", "Suisse", "Canada"],
      averageCost: "1,000 - 7,000€/an",
      highlights: ["Formation pratique", "Stage en entreprise", "Insertion professionnelle rapide"],
      popular: false
    },
    {
      title: "Licence/Bachelor",
      level: "Bac+3",
      duration: "3-4 ans", 
      description: "Premier cycle universitaire offrant une formation généraliste solide dans toutes les disciplines",
      countries: ["Canada", "France", "Allemagne", "UK", "Australie"],
      averageCost: "Gratuit - 15,000€/an",
      highlights: ["Formation généraliste", "Bases académiques solides", "Préparation au Master"],
      popular: true
    },
    {
      title: "Master/MSc",
      level: "Bac+5",
      duration: "1-2 ans",
      description: "Spécialisation approfondie et expertise dans un domaine précis, recherche ou professionnel",
      countries: ["USA", "Canada", "France", "Allemagne", "Pays-Bas"],
      averageCost: "4,000 - 15,000€/an",
      highlights: ["Spécialisation avancée", "Recherche académique", "Expertise professionnelle"],
      popular: true
    },
    {
      title: "MBA",
      level: "Bac+5/6",
      duration: "1-2 ans",
      description: "Formation en gestion et management destinée aux cadres et futurs dirigeants d'entreprise",
      countries: ["USA", "UK", "France", "Suisse", "Singapour"],
      averageCost: "À partir de 10,000€/an",
      highlights: ["Leadership", "Réseau professionnel", "Management stratégique"],
      popular: false
    },
    {
      title: "Doctorat/PhD",
      level: "Bac+8",
      duration: "3-5 ans",
      description: "Recherche de haut niveau et contribution originale à la connaissance scientifique",
      countries: ["Allemagne", "Canada", "France", "Suède", "Suisse"],
      averageCost: "Souvent financé + bourse",
      highlights: ["Recherche indépendante", "Publications scientifiques", "Carrière académique"],
      popular: false
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Évaluation Profil",
      description: "Analyse complète de votre parcours académique, objectifs et niveau d'études souhaité"
    },
    {
      step: "02", 
      title: "Sélection Universités",
      description: "Identification des établissements adaptés à votre profil et budget"
    },
    {
      step: "03",
      title: "Préparation Dossier",
      description: "Constitution et optimisation de votre candidature selon les exigences"
    },
    {
      step: "04",
      title: "Soumission & Suivi",
      description: "Envoi des candidatures et accompagnement jusqu'à l'admission"
    }
  ];

  const scholarships = [
    {
      category: "Bourses Gouvernementales",
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      color: "from-yellow-500 to-orange-500",
      programs: [
        {
          name: "Bourses Eiffel (France)",
          amount: "1,181€ - 1,700€/mois",
          duration: "12-36 mois",
          eligibility: "Master & Doctorat, étudiants étrangers",
          deadline: "Janvier",
          coverage: "Frais de scolarité + allocation mensuelle + assurance"
        },
        {
          name: "DAAD (Allemagne)",
          amount: "850€ - 1,200€/mois",
          duration: "Variable",
          eligibility: "Tous niveaux, toutes nationalités",
          deadline: "Octobre/Mai",
          coverage: "Allocation + frais de voyage + assurance"
        },
        {
          name: "Chevening (Royaume-Uni)",
          amount: "Couverture totale",
          duration: "1 an",
          eligibility: "Master, 2 ans d'expérience pro",
          deadline: "Novembre",
          coverage: "Frais + logement + allocation mensuelle"
        },
        {
          name: "Australia Awards",
          amount: "Couverture totale",
          duration: "2-4 ans",
          eligibility: "Pays en développement",
          deadline: "Avril/Mai",
          coverage: "Frais + allocation + frais de voyage"
        }
      ]
    },
    {
      category: "Bourses Universitaires",
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500 to-purple-500",
      programs: [
        {
          name: "Merit Scholarships (USA)",
          amount: "5,000$ - 40,000$/an",
          duration: "4 ans max",
          eligibility: "Excellence académique",
          deadline: "Variable",
          coverage: "Réduction frais de scolarité"
        },
        {
          name: "Need-based Aid (USA)",
          amount: "Variable",
          duration: "Durée des études",
          eligibility: "Situation financière",
          deadline: "Mars/Avril",
          coverage: "Selon besoins financiers"
        },
        {
          name: "University of Toronto",
          amount: "7,500$ - 40,000CAD",
          duration: "1-4 ans",
          eligibility: "Excellence académique",
          deadline: "Février",
          coverage: "Frais de scolarité partiels/totaux"
        },
        {
          name: "ETH Zurich Excellence",
          amount: "12,000CHF + frais",
          duration: "2 ans",
          eligibility: "Master, excellence académique",
          deadline: "Décembre",
          coverage: "Allocation + frais de scolarité"
        }
      ]
    },
    {
      category: "Bourses Privées",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      color: "from-red-500 to-pink-500",
      programs: [
        {
          name: "Fondation Fulbright",
          amount: "Variable",
          duration: "9-12 mois",
          eligibility: "Échanges USA-international",
          deadline: "Octobre",
          coverage: "Frais + allocation + voyage"
        },
        {
          name: "Rotary Foundation",
          amount: "30,000$ max",
          duration: "1-2 ans",
          eligibility: "Master dans domaines prioritaires",
          deadline: "Mai",
          coverage: "Frais + allocation + voyage"
        },
        {
          name: "Aga Khan Foundation",
          amount: "Variable",
          duration: "Durée des études",
          eligibility: "Pays en développement, besoin financier",
          deadline: "Mars",
          coverage: "50% bourse, 50% prêt sans intérêt"
        },
        {
          name: "Mastercard Foundation",
          amount: "Couverture totale",
          duration: "Durée des études",
          eligibility: "Afrique, leadership potential",
          deadline: "Variable",
          coverage: "Frais + logement + allocation"
        }
      ]
    },
    {
      category: "Bourses par Domaine",
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
      color: "from-green-500 to-teal-500",
      programs: [
        {
          name: "STEM Fields (Diverses)",
          amount: "Variable",
          duration: "1-5 ans",
          eligibility: "Sciences, Tech, Ingénierie, Maths",
          deadline: "Variable",
          coverage: "Souvent couverture totale"
        },
        {
          name: "Arts & Humanities",
          amount: "5,000$ - 25,000$",
          duration: "1-3 ans",
          eligibility: "Domaines artistiques et littéraires",
          deadline: "Variable",
          coverage: "Frais partiels + allocation"
        },
        {
          name: "Développement Durable",
          amount: "Variable",
          duration: "1-2 ans",
          eligibility: "Projets environnementaux/sociaux",
          deadline: "Variable",
          coverage: "Frais + allocation projet"
        },
        {
          name: "Médecine & Santé",
          amount: "15,000$ - 50,000$",
          duration: "2-6 ans",
          eligibility: "Études médicales et paramédicales",
          deadline: "Variable",
          coverage: "Frais + allocation recherche"
        }
      ]
    }
  ];

  const scholarshipTips = [
    {
      title: "Commencez Tôt",
      description: "Les candidatures prennent 6-12 mois. Commencez vos recherches 18 mois avant.",
      icon: <Clock className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Dossier Solide",
      description: "Excellent dossier académique, lettres de recommandation, projet cohérent.",
      icon: <Target className="w-5 h-5 text-green-500" />
    },
    {
      title: "Candidatures Multiples",
      description: "Postulez à plusieurs bourses pour maximiser vos chances de succès.",
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />
    },
    {
      title: "Accompagnement",
      description: "Faites-vous accompagner par des experts pour optimiser votre candidature.",
      icon: <Users className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section - Reduced typography size */}
      <section className="relative min-h-[75vh] bg-gradient-to-br from-blue-900 via-[#8F1B14] to-purple-900 overflow-hidden">
        {/* Animated Academic Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute top-40 right-20 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float" style={{ animationDelay: '1s' }}>
            <GraduationCap className="w-6 h-6 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-32 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float" style={{ animationDelay: '2s' }}>
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-medium text-white/90">Excellence académique mondiale</span>
              <Star className="w-3.5 h-3.5 text-yellow-400" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 font-montserrat text-white">
              Études à l'Étranger
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-3xl mx-auto">
              Du BTS au Doctorat, nous vous accompagnons à tous les niveaux d'études. 
              Trouvez le programme parfait selon vos objectifs et votre budget.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">98% de Réussite</h3>
                <p className="text-white/80 text-xs">Taux d'admission record</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">2000+ Étudiants</h3>
                <p className="text-white/80 text-xs">Accompagnés avec succès</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <Globe className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1 text-sm">50+ Pays</h3>
                <p className="text-white/80 text-xs">Destinations disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Tous les Niveaux d'Études
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Du Bac+2 au Doctorat, chaque niveau correspond à des objectifs et budgets différents
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className={`relative bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${program.popular ? 'ring-2 ring-[#8F1B14] ring-opacity-20' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-[#8F1B14] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {program.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Euro className="w-4 h-4" />
                      <span className="font-semibold text-[#8F1B14]">{program.averageCost}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{program.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Points forts :</h4>
                  <div className="space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    Destinations populaires :
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {program.countries.map((country, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full text-sm">
                  En savoir plus
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </div>
            ))}
          </div>
          
          {/* Cost Information Box */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-[#8F1B14]/5 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">💡 Comprendre les Coûts d'Études</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-2">Formations Courtes</h4>
                <p className="text-gray-600">BTS/DUT : Formation accessible, souvent subventionnée dans les pays francophones.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Premier Cycle</h4>
                <p className="text-gray-600">Licence/Bachelor : Gratuit en Allemagne/France, plus cher dans les pays anglophones.</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-2">Cycles Supérieurs</h4>
                <p className="text-gray-600">Master/MBA/PhD : Investissement important mais excellent retour sur investissement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Scholarships Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">Financez vos études</span>
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Bourses d'Études Internationales
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ne laissez pas les finances freiner vos ambitions ! Découvrez les nombreuses bourses disponibles 
              pour financer vos études à l'étranger. Des bourses gouvernementales aux programmes privés, 
              des opportunités existent pour tous les profils.
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Programmes disponibles</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                <div className="text-sm text-gray-600">Étudiants aidés financièrement</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">50M€</div>
                <div className="text-sm text-gray-600">Montant total annuel</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
                <div className="text-sm text-gray-600">Mois de préparation moyenne</div>
              </div>
            </div>
          </div>

          {/* Scholarship Categories */}
          <div className="space-y-12">
            {scholarships.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-gray-900">{program.name}</h4>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {program.amount}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">Durée:</span>
                          <div className="font-semibold text-gray-900">{program.duration}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Deadline:</span>
                          <div className="font-semibold text-gray-900">{program.deadline}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-gray-500 text-sm">Éligibilité:</span>
                        <div className="text-gray-900 font-medium">{program.eligibility}</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                        <span className="text-gray-500 text-sm">Couverture:</span>
                        <div className="text-gray-900 font-medium">{program.coverage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-16 bg-gradient-to-r from-[#8F1B14] to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Conseils pour Réussir votre Candidature</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarshipTips.map((tip, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="bg-white/20 rounded-full p-3 w-fit mx-auto mb-4">
                    {tip.icon}
                  </div>
                  <h4 className="font-bold mb-2">{tip.title}</h4>
                  <p className="text-white/90 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA for Scholarships */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'Aide pour vos Candidatures de Bourses ?
              </h3>
              <p className="text-gray-600 mb-6">
                Nos experts vous accompagnent dans l'identification des bourses adaptées à votre profil 
                et vous aident à constituer des dossiers de candidature gagnants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-6 py-3 font-semibold">
                  <Gift className="w-4 h-4 mr-2" />
                  Trouver mes Bourses
                </Button>
                <Button variant="outline" className="px-6 py-3 font-semibold">
                  Guide des Candidatures
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Notre Processus d'Accompagnement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une méthode éprouvée en 4 étapes pour maximiser vos chances de succès
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#8F1B14] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8F1B14] to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-montserrat">
            Prêt à Commencer Votre Parcours Académique ?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour une évaluation gratuite de votre profil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-full">
                Consultation Gratuite
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#8F1B14] px-6 py-3 text-base font-semibold rounded-full">
              Voir nos destinations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudiesAbroad;
