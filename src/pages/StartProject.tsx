
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle, Globe, GraduationCap, Building, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(8, 'Numéro de téléphone invalide'),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  destination: z.string().min(1, 'Veuillez spécifier une destination'),
  studyLevel: z.string().min(1, 'Veuillez sélectionner votre niveau d\'études'),
  startDate: z.string().min(1, 'Veuillez indiquer une date de début'),
  budget: z.string().min(1, 'Veuillez indiquer votre budget'),
  projectDescription: z.string().min(50, 'Veuillez décrire votre projet en détail (minimum 50 caractères)'),
  previousExperience: z.string().optional(),
  specificNeeds: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'Vous devez accepter les conditions'),
});

type FormData = z.infer<typeof formSchema>;

const StartProject = () => {
  const { t } = useLanguage();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: '',
      destination: '',
      studyLevel: '',
      startDate: '',
      budget: '',
      projectDescription: '',
      previousExperience: '',
      specificNeeds: '',
      consent: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast.success('Votre demande a été envoyée avec succès ! Nous vous contacterons dans les 24h.');
    form.reset();
  };

  const projectTypes = [
    { value: 'studies', label: 'Études à l\'étranger' },
    { value: 'internship', label: 'Stage international' },
    { value: 'visa', label: 'Assistance visa étudiant' },
    { value: 'accommodation', label: 'Recherche de logement' },
    { value: 'language', label: 'Cours de langue' },
    { value: 'other', label: 'Autre projet' },
  ];

  const studyLevels = [
    { value: 'high-school', label: 'Lycée' },
    { value: 'bachelor', label: 'Licence/Bachelor' },
    { value: 'master', label: 'Master' },
    { value: 'phd', label: 'Doctorat/PhD' },
    { value: 'other', label: 'Autre' },
  ];

  const budgetRanges = [
    { value: '0-5000', label: '0 - 5 000€' },
    { value: '5000-10000', label: '5 000 - 10 000€' },
    { value: '10000-20000', label: '10 000 - 20 000€' },
    { value: '20000-30000', label: '20 000 - 30 000€' },
    { value: '30000+', label: 'Plus de 30 000€' },
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#101125] via-[#1a1a2e] to-[#16213e] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Démarrer Mon Projet Gratuitement
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-open-sans">
              Confiez-nous votre projet d'études à l'étranger et bénéficiez d'un accompagnement personnalisé
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#8F1B14]" />
                <span>Consultation gratuite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#8F1B14]" />
                <span>Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#8F1B14]" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#101125] mb-4 font-montserrat">
                  Construisons Votre Projet Ensemble
                </h2>
                <p className="text-gray-600 font-open-sans">
                  Remplissez ce formulaire détaillé pour que nous puissions vous proposer la meilleure solution
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#101125] flex items-center gap-2 font-montserrat">
                      <Building className="w-5 h-5 text-[#8F1B14]" />
                      Informations Personnelles
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom *</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre prénom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom *</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="votre@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone *</FormLabel>
                            <FormControl>
                              <Input placeholder="+33 6 XX XX XX XX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#101125] flex items-center gap-2 font-montserrat">
                      <GraduationCap className="w-5 h-5 text-[#8F1B14]" />
                      Détails du Projet
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type de projet *</FormLabel>
                            <FormControl>
                              <select 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                {...field}
                              >
                                <option value="">Sélectionnez un type</option>
                                {projectTypes.map((type) => (
                                  <option key={type.value} value={type.value}>
                                    {type.label}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Destination souhaitée *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Canada, France, Allemagne..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <FormField
                        control={form.control}
                        name="studyLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Niveau d'études *</FormLabel>
                            <FormControl>
                              <select 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                {...field}
                              >
                                <option value="">Sélectionnez</option>
                                {studyLevels.map((level) => (
                                  <option key={level.value} value={level.value}>
                                    {level.label}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date de début souhaitée *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Septembre 2025" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget approximatif *</FormLabel>
                            <FormControl>
                              <select 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                {...field}
                              >
                                <option value="">Sélectionnez</option>
                                {budgetRanges.map((range) => (
                                  <option key={range.value} value={range.value}>
                                    {range.label}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#101125] flex items-center gap-2 font-montserrat">
                      <Globe className="w-5 h-5 text-[#8F1B14]" />
                      Description du Projet
                    </h3>

                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Décrivez votre projet en détail *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Expliquez vos objectifs, vos motivations, le domaine d'études souhaité, vos attentes..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="previousExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expérience internationale précédente (optionnel)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Avez-vous déjà étudié ou voyagé à l'étranger ? Quelle langue parlez-vous ?"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specificNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Besoins spécifiques ou questions particulières (optionnel)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Y a-t-il des aspects particuliers sur lesquels vous souhaitez être accompagné ?"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              J'accepte que mes données soient utilisées pour traiter ma demande et que Speed-Inscri me contacte concernant mon projet *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-[#8F1B14] hover:bg-[#8F1B14]/90 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      Envoyer Ma Demande
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Nous vous répondrons dans les 24 heures
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
