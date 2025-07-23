import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Zap, Home, Users, Building, Cog, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useTranslation('common');

  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: t('services.electrical.title'),
      description: t('services.electrical.description'),
      color: "from-green-600 to-green-500",
      features: [
        t('services.electrical.features.lighting'),
        t('services.electrical.features.plugs'),
        t('services.electrical.features.knx'),
        t('services.electrical.features.troubleshooting'),
        t('services.electrical.features.automation')
      ]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: t('services.handyman.title'),
      description: t('services.handyman.description'),
      color: "from-green-500 to-emerald-400",
      features: [
        t('services.handyman.features.furniture'),
        t('services.handyman.features.mounting'),
        t('services.handyman.features.garden'),
        t('services.handyman.features.plumbing'),
        t('services.handyman.features.painting')
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('services.concierge.title'),
      description: t('services.concierge.description'),
      color: "from-emerald-500 to-teal-400",
      features: [
        t('services.concierge.features.grocery'),
        t('services.concierge.features.cleaning'),
        t('services.concierge.features.car'),
        t('services.concierge.features.appointments'),
        t('services.concierge.features.errands')
      ]
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: t('services.facility.title'),
      description: t('services.facility.description'),
      color: "from-green-400 to-emerald-400",
      features: [
        t('services.facility.features.maintenance'),
        t('services.facility.features.inspections'),
        t('services.facility.features.preventive'),
        t('services.facility.features.emergency'),
        t('services.facility.features.venue')
      ]
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: t('services.coordination.title'),
      description: t('services.coordination.description'),
      color: "from-teal-500 to-green-400",
      features: [
        t('services.coordination.features.specialists'),
        t('services.coordination.features.management'),
        t('services.coordination.features.quality'),
        t('services.coordination.features.timeline'),
        t('services.coordination.features.multitrade')
      ]
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      color: "from-emerald-400 to-green-300",
      features: [
        t('services.custom.features.solutions'),
        t('services.custom.features.problem'),
        t('services.custom.features.installations'),
        t('services.custom.features.challenges'),
        t('services.custom.features.approaches')
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t('services.process.consultation.title'),
      description: t('services.process.consultation.description')
    },
    {
      step: "02", 
      title: t('services.process.planning.title'),
      description: t('services.process.planning.description')
    },
    {
      step: "03",
      title: t('services.process.execution.title'),
      description: t('services.process.execution.description')
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
                <span className="heading-gradient">{t('services.title')}</span>
              </h1>
              <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
              <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '48rem' }}>
                {t('services.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding-large bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                  style={{ 
                    background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                    borderRadius: '1rem',
                    padding: '32px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '24px' }}>
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        background: service.color === 'from-green-600 to-green-500' ? 'linear-gradient(to bottom right, #16a34a, #22c55e)' :
                                   service.color === 'from-green-500 to-emerald-400' ? 'linear-gradient(to bottom right, #22c55e, #4ade80)' :
                                   service.color === 'from-emerald-500 to-teal-400' ? 'linear-gradient(to bottom right, #10b981, #2dd4bf)' :
                                   service.color === 'from-green-400 to-emerald-400' ? 'linear-gradient(to bottom right, #4ade80, #34d399)' :
                                   service.color === 'from-teal-500 to-green-400' ? 'linear-gradient(to bottom right, #14b8a6, #4ade80)' :
                                   'linear-gradient(to bottom right, #34d399, #6ee7b7)',
                        borderRadius: '1rem',
                        boxShadow: '0 0 20px rgba(76, 175, 80, 0.2)',
                        flexShrink: 0,
                        color: 'white'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="text-2xl font-semibold text-white" style={{ marginBottom: '12px' }}>{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <CheckCircle className="text-green-400" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group/link"
                  >
                    {t('services.getQuote')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              {t('services.process.title')}
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
            <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '32rem' }}>
              {t('services.process.subtitle')}
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl w-full">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center' 
                  }}
                >
                  <div className="relative" style={{ marginBottom: '2rem' }}>
                    <div 
                      className="text-white rounded-full text-2xl font-bold group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(to bottom right, #16a34a, #22c55e)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        boxShadow: '0 0 20px rgba(76, 175, 80, 0.2)'
                      }}
                    >
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-green-500 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-white" style={{ marginBottom: '1rem' }}>{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
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
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-green-100 leading-relaxed" style={{ marginBottom: '2rem', maxWidth: '32rem' }}>
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-white text-green-900 hover:bg-gray-100"
              >
                {t('common.getInTouch')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/pricing"
                className="btn-secondary border-white text-white hover:bg-white hover:text-green-900"
              >
                {t('services.viewPricing')}
              </a>
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