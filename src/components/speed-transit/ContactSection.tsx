
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Package, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    packageType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demande de devis:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            📞 Contact & Réservations
          </h2>
          <p className="text-xl text-gray-600">
            Demandez votre carton dès aujourd'hui !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <div className="bg-gradient-to-br from-green-700 to-red-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">📦 Service Client</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Siège Social</div>
                    <div className="text-green-100">13 Boulevard Archimède</div>
                    <div className="text-green-100">77420 Champs-sur-Marne, France</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-green-100">+33 7 44 93 44 78</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-green-100">contact@speed-inscri.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 Suivez notre actualité</h3>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span>Speed-Transit</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@speedinscri_officiel</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de devis */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💬 Demander un Devis</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse de ramassage *
                </label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Ville, code postal"
                />
              </div>

              <div>
                <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de colis
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="carton-s">Carton S (66x40x50)</option>
                  <option value="carton-m">Carton M (80x50x50)</option>
                  <option value="carton-l">Carton L (70x60x60)</option>
                  <option value="carton-xl">Carton XL (100x50x50)</option>
                  <option value="fut">Fût 120L-280L</option>
                  <option value="electromenager">Électroménager</option>
                  <option value="autre">Autre (préciser)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Description du colis
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Décrivez le contenu et les dimensions si nécessaire..."
                />
              </div>

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-lg">
                <Package className="mr-2 w-5 h-5" />
                Demander mon devis gratuit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
