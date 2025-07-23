import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-black border-t border-green-800/30 w-full" style={{ marginTop: '5rem' }}>
      <div className="container mx-auto px-6" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {/* Main Footer Content */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full" style={{ marginBottom: '3rem' }}>
            
            {/* Company Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="flex items-center" style={{ gap: '12px' }}>
                <span className="text-2xl font-bold text-white tracking-tight">Haushub</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm" style={{ maxWidth: '14rem', lineHeight: '1.6' }}>
                {t('home.hero.subtitle')}
              </p>
            </div>

            {/* Quick Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: t('nav.about'), href: '/about' },
                  { name: t('nav.services'), href: '/services' },
                  { name: t('nav.pricing'), href: '/pricing' },
                  { name: t('nav.projects'), href: '/projects' },
                  { name: t('nav.contact'), href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <div className="w-0 group-hover:w-4 h-px bg-green-400 transition-all duration-300" style={{ marginLeft: '8px' }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 className="text-lg font-semibold text-white">{t('footer.contactInfo')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a 
                  href="tel:+41788066762"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                  style={{ gap: '16px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div 
                      className="rounded-xl group-hover:bg-green-500/30 transition-colors"
                      style={{ 
                        width: '40px',
                        height: '40px',
                        background: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-sm">{t('contact.phone')}</span>
                </a>
                
                <a 
                  href="mailto:info@haushub.ch"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                  style={{ gap: '16px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div 
                      className="rounded-xl group-hover:bg-green-500/30 transition-colors"
                      style={{ 
                        width: '40px',
                        height: '40px',
                        background: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-sm">{t('contact.email')}</span>
                </a>
                
                <div className="flex items-center text-gray-300" style={{ gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div 
                      className="rounded-xl"
                      style={{ 
                        width: '40px',
                        height: '40px',
                        background: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-sm leading-relaxed">{t('contact.location.description')}</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 className="text-lg font-semibold text-white">{t('footer.operatingHours')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="flex items-start" style={{ gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                    <div 
                      className="rounded-xl"
                      style={{ 
                        width: '40px',
                        height: '40px',
                        background: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Clock className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="text-sm" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="text-gray-300">{t('contact.hours.weekdays')}</div>
                    <div className="text-green-400 font-medium">{t('contact.hours.emergencies')}</div>
                    <div className="text-gray-300">{t('contact.hours.weekends')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800/30" style={{ paddingTop: '2rem' }}>
          <div className="flex justify-center w-full">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full" style={{ gap: '24px' }}>
              <p className="text-gray-500 text-sm">
                © 2024 Haushub. All rights reserved.
              </p>
              <div className="flex items-center text-xs text-gray-500" style={{ gap: '32px' }}>
                <span>Made with ⚡ in Switzerland</span>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 