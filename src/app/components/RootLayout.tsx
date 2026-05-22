import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './FooterNew';
import { LanguageProvider } from '../context/LanguageContext';
import { CookieConsent } from './CookieConsent';

export function RootLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </LanguageProvider>
  );
}
