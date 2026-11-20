'use client';

import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const locale = useLocale();
  const logoHref = `/${locale}`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        <a href={logoHref} className="font-display text-sm sm:text-lg font-semibold tracking-tight" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          {t('siteName')}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 md:gap-6">
          <Link href="/explore" className="text-xs sm:text-sm font-medium transition-colors"
            style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}>
            {t('explore')}
          </Link>
          {(['gallery', 'reviews', 'map'] as const).map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-xs sm:text-sm font-medium transition-colors"
              style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
