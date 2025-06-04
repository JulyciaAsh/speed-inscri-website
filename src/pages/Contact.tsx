import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 7 44 93 44 78"],
      description: "Disponible 7j/7 de 9h à 18h"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@speed-inscri.com"],
      description: "Réponse sous 24h garantie"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["13 Boulevard Archimède", "77420 Champs sur Marne, France"],
      description: "Consultations sur rendez-vous"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 9h-18h", "Sam: 9h-14h"],
      description: "Urgences: 24h/24"
    }
  ];

  const services = [
    "Orientation académique",
    "Constitution de dossier",
    "Visa et immigration",
    "Recherche de logement",
    "Financement et bourses",
    "Accompagnement premium",
    "Autre"
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section - Modernized */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-slate-900 via-[#8F1B14] to-emerald-900 overflow-hidden">
        {/* Communication Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full animate-ping"></div>
          <div className="absolute top-20 left-20 w-60 h-60 border border-white/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Contact Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
            <Phone className="w-6 h-6 text-green-400" />
          </div>
          <div className="absolute top-20 right-24 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute bottom-32 left-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <MessageCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div className="absolute bottom-40 right-16 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '3s' }}>
            <Headphones className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Headphones className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-white/90">Support 7j/7 disponible</span>
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat text-white">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Notre équipe d'experts est là pour vous accompagner dans votre projet d'études à l'étranger. 
              Prenez contact dès aujourd'hui pour une consultation gratuite.
            </p>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Appelez-nous</h3>
                <p className="text-white/80 text-sm">Réponse immédiate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Chat en ligne</h3>
                <p className="text-white/80 text-sm">Support instantané</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Rendez-vous</h3>
                <p className="text-white/80 text-sm">Consultation dédiée</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">
                Restons en Contact
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                      <div className="bg-[#8F1B14] p-3 rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                        <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actions Rapides</h3>
                <div className="flex flex-col space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Consultation gratuite par WhatsApp
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="w-5 h-5 mr-3" />
                    Programmer un appel
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Mail className="w-5 h-5 mr-3" />
                    Recevoir notre brochure
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                  Envoyez-nous un Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Pays de résidence *</Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service souhaité</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F1B14] focus:border-transparent"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1"
                      placeholder="Décrivez votre projet d'études à l'étranger..."
                    />
                  </div>

                  <Button type="submit" className="w-full py-3 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Nos Bureaux
            </h2>
            <p className="text-xl text-gray-600">
              Retrouvez-nous dans nos bureaux ou contactez-nous à distance
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bureau Principal - Champs sur Marne</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#8F1B14] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-600">13 Boulevard Archimède</p>
                      <p className="text-gray-600">77420 Champs sur Marne, France</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#8F1B14] mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Horaires d'ouverture</p>
                      <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                      <p className="text-gray-600">Samedi: 9h00 - 14h00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#8F1B14] mx-auto mb-4" />
                  <p className="text-gray-600">Carte interactive bientôt disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
