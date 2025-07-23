import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Zap } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locales, locale, asPath } = router;

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const changeLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-gray-800/30">
      <div className="container">
    <div className="flex items-center w-full justify-between h-16">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-lg font-semibold text-white">Haushub</span>
        </Link>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex items-center justify-center gap-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 text-base font-medium rounded transition-colors duration-200 ${
              router.pathname === item.href
                ? 'text-green-400 bg-green-500/10'
                : 'text-gray-200 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right: Language switcher + Mobile button */}
      <div className="flex items-center space-x-2">
        {/* Language Switcher - hidden on small screens */}
        <div className="hidden lg:flex items-center gap-4">
          <Globe className="w-4 h-4 text-gray-400" />
          {locales?.map((loc, index) => (
            <div key={loc} className="flex items-center">
              <button
                onClick={() => changeLanguage(loc)}
                className={`px-3 py-1 text-base font-medium rounded transition-colors duration-200 ${
                  locale === loc
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {loc.toUpperCase()}
              </button>
              {index < (locales?.length || 0) - 1 && (
                <span className="text-gray-500 mx-1">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-gray-800/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Mobile Navigation */}
          <nav className="space-y-2 mb-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'text-green-400 bg-green-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Languages */}
          <div className="pt-4 border-t border-gray-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Language:</span>
              </div>
              <div className="flex items-center space-x-2">
                {locales?.map((loc, index) => (
                  <div key={loc} className="flex items-center">
                    <button
                      onClick={() => changeLanguage(loc)}
                      className={`px-2 py-1 text-base font-medium rounded transition-colors duration-200 ${
                        locale === loc
                          ? 'text-green-400 bg-green-500/10'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {loc.toUpperCase()}
                    </button>
                    {index < (locales?.length || 0) - 1 && (
                      <span className="text-gray-500 mx-1">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>

  );
} 