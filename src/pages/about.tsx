import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Users, Zap, Star, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation('common');

  const highlights = [
    {
      icon: <Award className="w-5 h-5" />,
      text: t('about.highlights.experience')
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: t('about.highlights.certified')
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: t('about.highlights.multilingual')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: t('about.highlights.emergency')
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: t('about.highlights.network')
    }
  ];

  const sarantisSkills = [
    {
      title: t('about.skills.experience.title'),
      description: t('about.sarantis.experience'),
      icon: <Award className="w-8 h-8" />,
      color: "from-green-600 to-green-500"
    },
    {
      title: t('about.skills.certifications.title'),
      description: t('about.sarantis.certifications'),
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-green-400"
    },
    {
      title: t('about.skills.innovation.title'),
      description: t('about.sarantis.creativity'),
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-400 to-emerald-400"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ marginBottom: '2rem' }}>
                <span className="heading-gradient">{t('about.title')}</span>
              </h1>
              <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '2rem', maxWidth: '48rem' }}>
                {t('about.description')}
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed" style={{ maxWidth: '48rem' }}>
                {t('about.founded')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding-large bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              
                className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left"
              >
              <h2 style={{ marginBottom: '1rem' }} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                {t('about.story.title')}
              </h2>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {t('about.story.description')}
              </p>
              
              <div style={{ marginTop: '32px' }}>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      padding: '12px sm:16px',
                      marginBottom: '12px sm:16px',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(76, 175, 80, 0.3)'
                    }}
                  >
                    <div 
                      style={{ 
                        background: 'rgba(76, 175, 80, 0.2)',
                        borderRadius: '0.5rem',
                        color: '#4ade80',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        flexShrink: 0,
                        minWidth: '36px',
                        minHeight: '36px',
              
                      }}
                    >
                      {highlight.icon}
                    </div>
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link
                href="/services"
                style={{ marginTop: '1rem' }}
                className="btn-primary inline-flex items-center"
              >
                {t('about.exploreServices')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
                <div className="tech-card p-6 sm:p-8 lg:p-12 text-center">
                  <div className="mx-auto mb-6 overflow-hidden border-4 border-green-500/50 rounded-2xl tech-glow-subtle w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] aspect-[3/4]">
                    <img 
                      src="/sara.jpeg" 
                      alt="Sarantis Adamantidis - Founder & Lead Technician"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('about.founder.name')}</h3>
                  <p className="text-green-400 font-medium mb-4 text-sm sm:text-base">{t('about.founder.title')}</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full tech-glow-subtle opacity-60" />
                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-400 rounded-full tech-glow-subtle opacity-60" />
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sarantis Section */}
      <section className="section-padding-large bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1rem' }} 
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 style={{ marginBottom: '1rem' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('about.sarantis.title')}
            </h2>
            <div style={{ marginBottom: '1rem' }}  className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto mb-8" />
            <p style={{ marginBottom: '1rem' }}  className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              {t('about.sarantis.subtitle')}
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
            {sarantisSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group h-full"
                style={{ 
                  background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                  border: '1px solid rgba(76, 175, 80, 0.2)',
                  borderRadius: '1rem',
                  padding: '24px 16px sm:32px sm:24px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'flex-start',

                }}
              >
                <div 
                  style={{ 
                    background: skill.color === 'from-green-600 to-green-500' ? 'linear-gradient(to bottom right, #16a34a, #22c55e)' :
                               skill.color === 'from-green-500 to-green-400' ? 'linear-gradient(to bottom right, #22c55e, #4ade80)' :
                               'linear-gradient(to bottom right, #4ade80, #6ee7b7)',
                    borderRadius: '1rem',
                    boxShadow: '0 0 20px rgba(76, 175, 80, 0.2)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    marginBottom: '20px',
                    flexShrink: 0,
                    minWidth: '64px',
                    minHeight: '64px',
                    color: 'white',
                                marginTop: '1rem'
                  }}
                >
                  {skill.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }} className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4">{skill.title}</h3>
                <p style={{ marginBottom: '1rem' }} className="text-sm sm:text-base text-gray-400 leading-relaxed">{skill.description}</p>
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
            <h2 style={{ marginBottom: '1rem' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('about.cta.title')}
            </h2>
            <p style={{ marginBottom: '1rem' }} className="text-base sm:text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto px-4">
              {t('contact.subtitle')}
            </p>
            <div style={{ marginBottom: '1rem' }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="btn-primary bg-white text-green-900 hover:bg-gray-100"
              >
                {t('common.getInTouch')}
              </Link>
              <Link
                href="/services"
                className="btn-secondary border-white text-white hover:bg-white hover:text-green-900"
              >
                {t('about.viewServices')}
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