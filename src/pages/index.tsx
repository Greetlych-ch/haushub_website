import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Zap, Home, Users, Clock, Award, Shield, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const { t } = useTranslation('common');

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: t('home.whyChoose.experienced.title'),
      description: t('home.whyChoose.experienced.description'),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('home.whyChoose.flexible.title'),
      description: t('home.whyChoose.flexible.description'),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('home.whyChoose.personal.title'),
      description: t('home.whyChoose.personal.description'),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('home.whyChoose.creative.title'),
      description: t('home.whyChoose.creative.description'),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('home.whyChoose.network.title'),
      description: t('home.whyChoose.network.description'),
    },
  ];

  const services = [
    {
      title: t('home.services.electrical.title'),
      description: t('home.services.electrical.description'),
      icon: <Zap className="w-12 h-12" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: t('home.services.handyman.title'),
      description: t('home.services.handyman.description'),
      icon: <Home className="w-12 h-12" />,
      color: "from-green-600 to-green-400"
    },
    {
      title: t('home.services.concierge.title'),
      description: t('home.services.concierge.description'),
      icon: <Users className="w-12 h-12" />,
      color: "from-emerald-500 to-teal-400"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: 'url(/home1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="heading-gradient">
                    Haushub
                  </span>
                  <br />
                  <span className="text-white">
                    Great Ideas
                  </span>
                  <br />
                  <span className="text-white">
                    Best Solutions
                  </span>
                </h1>
              </div>
              

              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a href="tel:+41788066762" className="btn-primary group">
                  <Phone className="w-5 h-5" />
                  {t('home.hero.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/services" className="btn-secondary">
                  {t('common.learnMore')}
                </a>
              </div>
            </motion.div>
            
            {/* Visual Element */}
    
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding-large bg-gray-900/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{marginBottom: '2rem'}}>
              {t('home.whyChoose.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{marginBottom: '2rem'}} />
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {t('home.whyChoose.subtitle')}
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-6xl items-start" style={{marginTop: '3rem'}}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="tech-card text-center flex flex-col items-center justify-start h-full group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl tech-border group-hover:tech-glow-subtle transition-all duration-300">
                  <div className="text-green-400 flex items-center justify-center w-full h-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white" style={{marginBottom: '0.5rem', marginTop: '0.§rem'}}>{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm flex-grow">{feature.description}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding-large bg-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{marginBottom: '2rem'}}>
              {t('home.services.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{marginBottom: '2rem'}} />
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {t('home.services.subtitle')}
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-3 gap-8 w-full max-w-5xl items-start" style={{marginTop: '3rem'}}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="tech-card text-center flex flex-col items-center justify-center group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br ${service.color} rounded-3xl tech-glow-subtle`}>
                  <div className="text-white flex items-center justify-center w-full h-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white" style={{marginBottom: '0.5rem', marginTop: "0.5rem"}}>{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group/link"
                >
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-900 via-green-800 to-emerald-900">
        <div className="container">
          <div className="flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full max-w-4xl"
            >
            <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl tech-glow-subtle backdrop-blur-sm" style={{marginBottom: '2rem'}}>
              <Phone className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{marginBottom: '1.5rem'}}>
              {t('home.emergency.title')}
            </h2>
            
            <p className="text-xl text-green-100 max-w-2xl leading-relaxed" style={{marginBottom: '2rem'}}>
              {t('home.emergency.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{marginBottom: '2rem'}}>
              <a
                href="tel:+41788066762"
                className="btn-primary bg-white text-green-900 hover:bg-gray-100 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {t('home.emergency.phone')}
              </a>
              <a
                href="https://wa.me/41788066762"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl"
              >
                WhatsApp
              </a>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center text-green-100/80 text-sm"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              {t('home.emergency.hours')}
            </motion.div>
                      </motion.div>
          </div>
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
