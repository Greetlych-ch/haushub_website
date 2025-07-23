import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Clock, Euro, Star } from 'lucide-react';

export default function PricingPage() {
  const { t } = useTranslation('common');

  const pricingCategories = [
    {
      title: t('pricing.electrical.title'),
      description: t('pricing.electrical.description'),
      icon: <Euro className="w-8 h-8" />,
      color: "from-green-600 to-green-500",
      pricing: [
        { service: t('pricing.electrical.services.basic'), price: "CHF 80-120/hour" },
        { service: t('pricing.electrical.services.smartHome'), price: "CHF 120-150/hour" },
        { service: t('pricing.electrical.services.lighting'), price: "CHF 100-130/hour" },
        { service: t('pricing.electrical.services.emergency'), price: "CHF 150-200/hour" }
      ]
    },
    {
      title: t('pricing.handyman.title'),
      description: t('pricing.handyman.description'),
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400", 
      pricing: [
        { service: t('pricing.handyman.services.furniture'), price: "CHF 60-80/hour" },
        { service: t('pricing.handyman.services.mounting'), price: "CHF 80-100/hour" },
        { service: t('pricing.handyman.services.painting'), price: "CHF 70-90/hour" },
        { service: t('pricing.handyman.services.garden'), price: "CHF 50-70/hour" }
      ]
    },
    {
      title: t('pricing.concierge.title'),
      description: t('pricing.concierge.description'),
      icon: <Star className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-400",
      pricing: [
        { service: t('pricing.concierge.services.shopping'), price: "CHF 40-60/hour" },
        { service: t('pricing.concierge.services.errands'), price: "CHF 35-50/hour" },
        { service: t('pricing.concierge.services.property'), price: "CHF 50-70/hour" },
        { service: t('pricing.concierge.services.events'), price: "CHF 60-80/hour" }
      ]
    }
  ];

  const features = [
    t('pricing.features.noHiddenFees'),
    t('pricing.features.materialCosts'),
    t('pricing.features.emergencySurcharge'),
    t('pricing.features.minimumBooking'),
    t('pricing.features.freeConsultation'),
    t('pricing.features.qualityGuarantee')
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
                <span className="heading-gradient">{t('pricing.title')}</span>
              </h1>
              <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
              <p className="text-xl text-gray-300 leading-relaxed" style={{ marginBottom: '2rem', maxWidth: '48rem' }}>
                {t('pricing.description')}
              </p>
              <p className="text-lg text-gray-400" style={{ maxWidth: '48rem' }}>
                {t('pricing.vatNote')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="section-padding-large bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <div className="max-w-6xl w-full" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {pricingCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ 
                    background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                    border: '1px solid rgba(76, 175, 80, 0.2)',
                    borderRadius: '1rem',
                    padding: '32px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '64px',
                        height: '64px',
                        background: category.color === 'from-green-600 to-green-500' ? 'linear-gradient(to bottom right, #16a34a, #22c55e)' :
                                   category.color === 'from-green-500 to-emerald-400' ? 'linear-gradient(to bottom right, #22c55e, #4ade80)' :
                                   'linear-gradient(to bottom right, #10b981, #2dd4bf)',
                        borderRadius: '0.75rem',
                        boxShadow: '0 0 20px rgba(76, 175, 80, 0.2)',
                        flexShrink: 0,
                        color: 'white'
                      }}
                    >
                      {category.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="text-3xl font-bold text-white" style={{ marginBottom: '12px' }}>{category.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.pricing.map((item, itemIndex) => (
                      <div key={itemIndex} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        padding: '16px', 
                        background: 'rgba(0, 0, 0, 0.4)', 
                        borderRadius: '0.5rem', 
                        border: '1px solid rgba(75, 85, 99, 0.5)' 
                      }}>
                        <span className="text-gray-300 font-medium">{item.service}</span>
                        <span className="text-green-400 font-semibold text-lg">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Features */}
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
              {t('pricing.included.title')}
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
            <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '32rem' }}>
              {t('pricing.included.subtitle')}
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="max-w-4xl w-full">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      padding: '24px',
                      background: 'linear-gradient(145deg, #0a0a0a, #1a1a1a)',
                      border: '1px solid rgba(76, 175, 80, 0.2)',
                      borderRadius: '1rem',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <CheckCircle className="text-green-400" style={{ width: '24px', height: '24px', flexShrink: 0 }} />
                    <span className="text-gray-300 font-medium text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Pricing Notice */}
      <section className="section-padding bg-gradient-to-r from-green-900 via-green-800 to-emerald-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
              {t('pricing.emergency.title')}
            </h2>
            <p className="text-xl text-green-100 leading-relaxed" style={{ marginBottom: '2rem', maxWidth: '32rem' }}>
              {t('pricing.emergency.description')}
            </p>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '16px', 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(4px)', 
              borderRadius: '0.5rem', 
              padding: '24px' 
            }}>
              <Clock className="text-green-300" style={{ width: '32px', height: '32px' }} />
              <div style={{ textAlign: 'left' }}>
                <p className="text-white font-semibold">{t('pricing.emergency.surcharge')}</p>
                <p className="text-green-200">{t('pricing.emergency.rate')}</p>
              </div>
            </div>
          </motion.div>
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
              {t('pricing.ctaSection.title')}
            </h2>
            <p className="text-xl text-green-100 leading-relaxed" style={{ marginBottom: '2rem', maxWidth: '32rem' }}>
              {t('pricing.cta')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41788066762"
                className="btn-primary bg-white text-green-900 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5" />
                {t('pricing.ctaSection.callButton')}
              </a>
              <a
                href="/contact"
                className="btn-secondary border-white text-white hover:bg-white hover:text-green-900"
              >
                {t('common.getInTouch')}
                <ArrowRight className="w-5 h-5 ml-2" />
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