
import React, { useState } from 'react';
import { Search, MapPin, Euro, Calendar, Users, Home, Wifi, Car, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface SearchFormData {
  destination: string;
  city: string;
  accommodationType: string;
  minBudget: string;
  maxBudget: string;
  duration: string;
  roommates: string;
  amenities: string[];
  arrivalDate: string;
}

const AccommodationSearchForm = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  
  const form = useForm<SearchFormData>({
    defaultValues: {
      destination: '',
      city: '',
      accommodationType: '',
      minBudget: '',
      maxBudget: '',
      duration: '',
      roommates: '',
      amenities: [],
      arrivalDate: ''
    }
  });

  const destinations = [
    'France', 'Canada', 'Allemagne', 'Espagne', 'Italie', 'Royaume-Uni', 
    'États-Unis', 'Australie', 'Japon', 'Corée du Sud', 'Suède', 'Pays-Bas'
  ];

  const accommodationTypes = [
    { value: 'residence', label: 'Résidence Universitaire', icon: Building },
    { value: 'shared', label: 'Appartement Partagé', icon: Users },
    { value: 'studio', label: 'Studio', icon: Home },
    { value: 'family', label: 'Famille d\'Accueil', icon: Users },
    { value: 'apartment', label: 'Appartement Privé', icon: Building }
  ];

  const amenitiesOptions = [
    { id: 'wifi', label: 'Wifi inclus', icon: Wifi },
    { id: 'furnished', label: 'Meublé', icon: Home },
    { id: 'parking', label: 'Parking', icon: Car },
    { id: 'kitchen', label: 'Cuisine équipée', icon: Home },
    { id: 'laundry', label: 'Laverie', icon: Building },
    { id: 'transport', label: 'Proche transports', icon: MapPin },
    { id: 'university', label: 'Proche université', icon: GraduationCap },
    { id: 'security', label: 'Sécurisé 24h/24', icon: Building }
  ];

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  const onSubmit = (data: SearchFormData) => {
    const searchData = { ...data, amenities: selectedAmenities };
    console.log('Recherche de logement:', searchData);
    // Ici on pourrait envoyer les données à un service de recherche
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-[#8F1B14] text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Search className="w-6 h-6 mr-3" />
          Trouvez Votre Logement Étudiant Idéal
        </CardTitle>
        <p className="text-orange-100">Recherchez parmi plus de 10,000 logements vérifiés dans le monde entier</p>
      </CardHeader>
      
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Destination et Ville */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-[#8F1B14]" />
                      Destination
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Choisissez votre destination" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {destinations.map((destination) => (
                          <SelectItem key={destination} value={destination.toLowerCase()}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Ville</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Ex: Paris, Londres, Toronto..."
                        className="h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Type de logement */}
            <FormField
              control={form.control}
              name="accommodationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold flex items-center">
                    <Home className="w-5 h-5 mr-2 text-[#8F1B14]" />
                    Type de Logement
                  </FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {accommodationTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <div
                          key={type.value}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                            field.value === type.value
                              ? 'border-[#8F1B14] bg-[#8F1B14]/5'
                              : 'border-gray-200 hover:border-[#8F1B14]/50'
                          }`}
                          onClick={() => field.onChange(type.value)}
                        >
                          <IconComponent className={`w-8 h-8 mx-auto mb-2 ${
                            field.value === type.value ? 'text-[#8F1B14]' : 'text-gray-400'
                          }`} />
                          <p className="text-sm text-center font-medium">{type.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </FormItem>
              )}
            />

            {/* Budget et Durée */}
            <div className="grid md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="minBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold flex items-center">
                      <Euro className="w-5 h-5 mr-2 text-[#8F1B14]" />
                      Budget Min (€/mois)
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="number"
                        placeholder="300"
                        className="h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Budget Max (€/mois)</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="number"
                        placeholder="1200"
                        className="h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-[#8F1B14]" />
                      Durée
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Durée du séjour" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 mois</SelectItem>
                        <SelectItem value="3-6">3-6 mois</SelectItem>
                        <SelectItem value="6-12">6-12 mois</SelectItem>
                        <SelectItem value="12+">Plus de 12 mois</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Équipements */}
            <div>
              <FormLabel className="text-lg font-semibold mb-4 block">
                Équipements Souhaités
              </FormLabel>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenitiesOptions.map((amenity) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div
                      key={amenity.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedAmenities.includes(amenity.id)
                          ? 'border-[#8F1B14] bg-[#8F1B14]/5'
                          : 'border-gray-200 hover:border-[#8F1B14]/50'
                      }`}
                      onClick={() => toggleAmenity(amenity.id)}
                    >
                      <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                        selectedAmenities.includes(amenity.id) ? 'text-[#8F1B14]' : 'text-gray-400'
                      }`} />
                      <p className="text-sm text-center font-medium">{amenity.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Date d'arrivée */}
            <FormField
              control={form.control}
              name="arrivalDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Date d'Arrivée Souhaitée</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      type="date"
                      className="h-12 max-w-xs"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Bouton de recherche */}
            <div className="text-center pt-6">
              <Button 
                type="submit"
                className="bg-gradient-to-r from-orange-600 to-[#8F1B14] hover:from-orange-700 hover:to-[#7A1611] text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Search className="w-5 h-5 mr-2" />
                Rechercher Mon Logement Idéal
              </Button>
              <p className="text-gray-600 mt-4">
                Plus de 10,000 logements disponibles • Réponse sous 24h • Service gratuit
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AccommodationSearchForm;
