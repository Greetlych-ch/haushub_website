import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';

export default function ProjectsPage() {
  const { t } = useTranslation('common');

  const projects = [
    {
      title: t('projects.smartHome.title'),
      category: t('projects.smartHome.category'),
      location: t('projects.smartHome.location'),
      date: "2024",
      image: "/doctor-office1.jpeg",
      description: t('projects.smartHome.description'),
      features: [
        t('projects.smartHome.features.knx'),
        t('projects.smartHome.features.blinds'),
        t('projects.smartHome.features.security'),
        t('projects.smartHome.features.monitoring')
      ],
      color: "from-green-600 to-green-500"
    },
    {
      title: t('projects.office.title'),
      category: t('projects.office.category'),
      location: t('projects.office.location'), 
      date: "2024",
      image: "/doctor-office2.jpeg",
      description: t('projects.office.description'),
      features: [
        t('projects.office.features.furniture'),
        t('projects.office.features.electrical'),
        t('projects.office.features.interior'),
        t('projects.office.features.management')
      ],
      color: "from-green-500 to-emerald-400"
    }
  ];

  const testimonials = [
    {
      name: t('projects.testimonials.client1.name'),
      project: t('projects.testimonials.client1.project'),
      quote: t('projects.testimonials.client1.quote'),
      rating: 5
    },
    {
      name: t('projects.testimonials.client2.name'),
      project: t('projects.testimonials.client2.project'), 
      quote: t('projects.testimonials.client2.quote'),
      rating: 5
    },
    {
      name: t('projects.testimonials.client3.name'),
      project: t('projects.testimonials.client3.project'),
      quote: t('projects.testimonials.client3.quote'),
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding-large bg-black">
        <div className="container mx-auto px-6">
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: '64rem',
                width: '100%'
              }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ marginBottom: '2rem' }}>
                <span className="heading-gradient">{t('projects.title')}</span>
              </h1>
              <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
              <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '48rem' }}>
                {t('projects.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding-large bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl w-full">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                    borderRadius: '1rem',
                    padding: '32px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                                    {/* Project Image */}
                  <div className="relative h-64 rounded-lg overflow-hidden" style={{ marginBottom: '24px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px', color: '#9ca3af' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                          <div className="bg-green-400 rounded-full" style={{ width: '6px', height: '6px' }}></div>
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group/link"
                    >
                      {t('projects.discussProject')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding-large bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
            style={{ marginBottom: '4rem' }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
              {t('projects.testimonials.title')}
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
            <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '32rem' }}>
              {t('projects.testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                  style={{ 
                    background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                    borderRadius: '1rem',
                    padding: '32px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 leading-relaxed italic" style={{ marginBottom: '24px' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-green-400">{testimonial.project}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-900 via-green-800 to-emerald-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
              {t('projects.cta.title')}
            </h2>
            <p className="text-xl text-green-100 leading-relaxed" style={{ marginBottom: '2rem', maxWidth: '32rem' }}>
              {t('projects.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary bg-white text-green-900 hover:bg-gray-100"
              >
                {t('common.getInTouch')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
                              <Link
                  href="/services"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-green-900"
                >
                  {t('projects.cta.viewServices')}
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}; 