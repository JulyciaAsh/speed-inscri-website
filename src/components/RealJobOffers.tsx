
import React, { useState } from 'react';
import { ExternalLink, MapPin, Clock, Building, Users, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RealJobOffers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');

  // Offres d'emploi réelles de grands groupes (données statiques pour l'exemple)
  const jobOffers = [
    {
      id: 1,
      title: "International Marketing Manager",
      company: "L'Oréal",
      location: "Paris, France",
      country: "France",
      sector: "Cosmétiques",
      type: "CDI",
      experience: "3-5 ans",
      salary: "50k-70k €",
      description: "Développer et implémenter des stratégies marketing pour les marchés internationaux...",
      requirements: ["Master en Marketing", "Anglais courant", "Expérience internationale"],
      posted: "Il y a 2 jours",
      applicationUrl: "https://careers.loreal.com",
      logo: "🧴"
    },
    {
      id: 2,
      title: "Software Engineer - International Team",
      company: "Airbus",
      location: "Toulouse, France",
      country: "France",
      sector: "Aéronautique",
      type: "CDI",
      experience: "2-4 ans",
      salary: "45k-65k €",
      description: "Rejoindre une équipe internationale pour développer des logiciels embarqués...",
      requirements: ["Ingénieur informatique", "C++/Python", "Anglais technique"],
      posted: "Il y a 1 jour",
      applicationUrl: "https://careers.airbus.com",
      logo: "✈️"
    },
    {
      id: 3,
      title: "Investment Banking Analyst",
      company: "BNP Paribas",
      location: "Londres, UK",
      country: "Royaume-Uni",
      sector: "Finance",
      type: "CDI",
      experience: "0-2 ans",
      salary: "60k-80k £",
      description: "Analyser les transactions M&A et lever de fonds pour clients internationaux...",
      requirements: ["Master Finance", "Excel/Bloomberg", "Mobilité internationale"],
      posted: "Il y a 3 heures",
      applicationUrl: "https://careers.bnpparibas.com",
      logo: "🏦"
    },
    {
      id: 4,
      title: "Product Manager - Global Markets",
      company: "Schneider Electric",
      location: "Boston, USA",
      country: "États-Unis",
      sector: "Énergie",
      type: "CDI",
      experience: "3-6 ans",
      salary: "$80k-120k",
      description: "Gérer le développement produit pour les marchés globaux de l'énergie...",
      requirements: ["MBA ou équivalent", "Expérience produit", "Leadership"],
      posted: "Il y a 1 semaine",
      applicationUrl: "https://careers.se.com",
      logo: "⚡"
    },
    {
      id: 5,
      title: "Digital Transformation Consultant",
      company: "Capgemini",
      location: "Mumbai, Inde",
      country: "Inde",
      sector: "Conseil",
      type: "CDI",
      experience: "2-5 ans",
      salary: "₹800k-1.5M",
      description: "Accompagner les clients dans leur transformation digitale...",
      requirements: ["Consulting", "Digital", "Anglais + Hindi"],
      posted: "Il y a 4 jours",
      applicationUrl: "https://careers.capgemini.com",
      logo: "💼"
    },
    {
      id: 6,
      title: "Research Scientist - AI",
      company: "Microsoft",
      location: "Vancouver, Canada",
      country: "Canada",
      sector: "Tech",
      type: "CDI",
      experience: "5+ ans",
      salary: "CAD $120k-180k",
      description: "Recherche et développement en intelligence artificielle...",
      requirements: ["PhD IA/ML", "Publications", "Python/R"],
      posted: "Il y a 5 jours",
      applicationUrl: "https://careers.microsoft.com",
      logo: "🖥️"
    },
    {
      id: 7,
      title: "International Sales Director",
      company: "Danone",
      location: "Singapour",
      country: "Singapour",
      sector: "Agroalimentaire",
      type: "CDI",
      experience: "7+ ans",
      salary: "S$100k-150k",
      description: "Diriger les ventes pour la région Asie-Pacifique...",
      requirements: ["Expérience vente", "Management", "Asie-Pacifique"],
      posted: "Il y a 3 jours",
      applicationUrl: "https://careers.danone.com",
      logo: "🥛"
    },
    {
      id: 8,
      title: "Sustainability Manager",
      company: "Unilever",
      location: "Amsterdam, Pays-Bas",
      country: "Pays-Bas",
      sector: "Biens de consommation",
      type: "CDI",
      experience: "4-7 ans",
      salary: "€55k-75k",
      description: "Développer et implémenter la stratégie développement durable...",
      requirements: ["Développement durable", "Gestion de projet", "Anglais/Néerlandais"],
      posted: "Il y a 1 semaine",
      applicationUrl: "https://careers.unilever.com",
      logo: "🌱"
    }
  ];

  const countries = ['all', 'France', 'Royaume-Uni', 'États-Unis', 'Canada', 'Inde', 'Singapour', 'Pays-Bas'];
  const sectors = ['all', 'Tech', 'Finance', 'Conseil', 'Aéronautique', 'Cosmétiques', 'Énergie', 'Agroalimentaire', 'Biens de consommation'];

  const filteredOffers = jobOffers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || offer.country === selectedCountry;
    const matchesSector = selectedSector === 'all' || offer.sector === selectedSector;
    
    return matchesSearch && matchesCountry && matchesSector;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Offres d'Emploi Internationales en Direct
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les dernières opportunités des plus grands groupes internationaux
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher par poste, entreprise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8F1B14]/20"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country === 'all' ? 'Tous les pays' : country}
                </option>
              ))}
            </select>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8F1B14]/20"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>
                  {sector === 'all' ? 'Tous les secteurs' : sector}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-emerald-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600">{filteredOffers.length}</div>
            <div className="text-sm text-emerald-700">Offres disponibles</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{new Set(jobOffers.map(job => job.company)).size}</div>
            <div className="text-sm text-blue-700">Entreprises partenaires</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">{new Set(jobOffers.map(job => job.country)).size}</div>
            <div className="text-sm text-purple-700">Pays disponibles</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">85%</div>
            <div className="text-sm text-orange-700">Taux de placement</div>
          </div>
        </div>

        {/* Liste des offres */}
        <div className="space-y-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{offer.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {offer.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {offer.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {offer.posted}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-[#8F1B14] text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {offer.salary}
                  </div>
                  <div className="text-sm text-gray-500">{offer.type} • {offer.experience}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{offer.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Prérequis :</h4>
                <div className="flex flex-wrap gap-2">
                  {offer.requirements.map((req, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                    {offer.sector}
                  </span>
                  <span className="text-sm text-gray-500">
                    <Users className="w-4 h-4 inline mr-1" />
                    Candidatures ouvertes
                  </span>
                </div>
                <Button 
                  className="bg-[#8F1B14] hover:bg-[#8F1B14]/90"
                  onClick={() => window.open(offer.applicationUrl, '_blank')}
                >
                  Postuler sur le site
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune offre trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8F1B14] to-[#101125] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour postuler ?</h3>
          <p className="text-lg mb-6 text-white/90">
            Nos experts vous accompagnent dans vos candidatures internationales
          </p>
          <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
            Demander un accompagnement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealJobOffers;
