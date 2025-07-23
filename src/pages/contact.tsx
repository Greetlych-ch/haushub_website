import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation('common');

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: t('contact.methods.phone.title'),
      description: t('contact.methods.phone.description'),
      value: t('contact.phone'),
      href: "tel:+41788066762",
      color: "from-green-600 to-green-500",
      available: t('contact.methods.phone.available')
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: t('contact.methods.whatsapp.title'),
      description: t('contact.methods.whatsapp.description'),
      value: t('contact.methods.whatsapp.value'),
      href: "https://wa.me/41788066762",
      color: "from-green-500 to-emerald-400",
      available: t('contact.methods.whatsapp.available')
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: t('contact.methods.email.title'),
      description: t('contact.methods.email.description'),
      value: t('contact.email'),
      href: "mailto:info@haushub.ch",
      color: "from-emerald-500 to-teal-400",
      available: t('contact.methods.email.available')
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.office.serviceArea.title'),
      content: t('contact.location.description')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.office.businessHours.title'),
      content: t('contact.hours.weekdays')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.office.emergency.title'),
      content: t('contact.hours.emergencies')
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
                <span className="heading-gradient">{t('contact.title')}</span>
              </h1>
              <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
              <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '48rem' }}>
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding-large bg-gray-900">
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
              {t('contact.methods.title')}
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-green-400" style={{ width: '6rem', height: '0.25rem', marginBottom: '2rem' }} />
            <p className="text-xl text-gray-300 leading-relaxed" style={{ maxWidth: '32rem' }}>
              {t('contact.methods.subtitle')}
            </p>
          </motion.div>

          <div className="flex justify-center w-full">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="tech-card text-center group cursor-pointer block"
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                  <div 
                    className="rounded-2xl tech-glow-subtle group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      width: '80px',
                      height: '80px',
                      background: method.color === 'from-green-600 to-green-500' ? 'linear-gradient(to bottom right, #16a34a, #22c55e)' :
                                 method.color === 'from-green-500 to-emerald-400' ? 'linear-gradient(to bottom right, #22c55e, #4ade80)' :
                                 'linear-gradient(to bottom right, #10b981, #2dd4bf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}
                  >
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white" style={{ marginBottom: '12px' }}>{method.title}</h3>
                <p className="text-gray-400 leading-relaxed" style={{ marginBottom: '16px' }}>{method.description}</p>
                
                <div style={{ marginBottom: '16px' }}>
                  <p className="text-green-400 font-semibold text-lg">{method.value}</p>
                  {method.href.startsWith('http') && (
                    <ExternalLink className="w-4 h-4 inline ml-1 text-green-400" />
                  )}
                </div>
                
                <p className="text-gray-500 text-sm">{method.available}</p>
              </motion.a>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding-large bg-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-center w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl w-full">
              
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ marginBottom: '24px' }}>
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-300 leading-relaxed" style={{ marginBottom: '32px' }}>
                  {t('contact.form.subtitle')}
                </p>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="grid md:grid-cols-2" style={{ gap: '24px' }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300" style={{ marginBottom: '8px' }}>
                      {t('contact.form.fields.name.label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      style={{ padding: '12px 16px' }}
                      placeholder={t('contact.form.fields.name.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300" style={{ marginBottom: '8px' }}>
                      {t('contact.form.fields.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                      style={{ padding: '12px 16px' }}
                      placeholder={t('contact.form.fields.email.placeholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300" style={{ marginBottom: '8px' }}>
                    {t('contact.form.fields.phone.label')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    style={{ padding: '12px 16px' }}
                    placeholder={t('contact.form.fields.phone.placeholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300" style={{ marginBottom: '8px' }}>
                    {t('contact.form.fields.service.label')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    style={{ padding: '12px 16px' }}
                  >
                    <option value="">{t('contact.form.fields.service.placeholder')}</option>
                    <option value="electrical">{t('contact.form.fields.service.options.electrical')}</option>
                    <option value="handyman">{t('contact.form.fields.service.options.handyman')}</option>
                    <option value="concierge">{t('contact.form.fields.service.options.concierge')}</option>
                    <option value="facility">{t('contact.form.fields.service.options.facility')}</option>
                    <option value="other">{t('contact.form.fields.service.options.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300" style={{ marginBottom: '8px' }}>
                    {t('contact.form.fields.message.label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                    style={{ padding: '12px 16px' }}
                    placeholder={t('contact.form.fields.message.placeholder')}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.form.submit')}
                </button>
              </form>
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '24px' }}>{t('contact.office.title')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start p-6 tech-card" style={{ gap: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div 
                          className="rounded-lg flex-shrink-0"
                          style={{ 
                            width: '48px',
                            height: '48px',
                            background: 'rgba(34, 197, 94, 0.2)',
                            color: '#4ade80',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white" style={{ marginBottom: '8px' }}>{info.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-card">
                <h4 className="font-semibold text-white" style={{ marginBottom: '16px' }}>{t('contact.languages.title')}</h4>
                <div className="grid grid-cols-3" style={{ gap: '16px' }}>
                  {[t('contact.languages.english'), t('contact.languages.german'), t('contact.languages.greek')].map((language, index) => (
                    <div key={index} className="text-center rounded-lg" style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '12px' }}>
                      <span className="text-gray-300 text-sm font-medium">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section-padding bg-gradient-to-r from-green-900 via-green-800 to-emerald-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ marginBottom: '24px' }}>
              {t('contact.emergency.title')}
            </h2>
            <p className="text-xl text-green-100 leading-relaxed" style={{ marginBottom: '32px', maxWidth: '32rem', lineHeight: '1.6' }}>
              {t('contact.emergency.description')}
            </p>
            <a
              href="tel:+41788066762"
              className="btn-primary bg-white text-green-900 hover:bg-gray-100"
              style={{ fontSize: '18px', padding: '16px 32px' }}
            >
              <Phone className="w-6 h-6" />
              {t('contact.emergency.button')}
            </a>
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