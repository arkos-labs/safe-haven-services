import { RouterProvider, useRouter } from '@/context/RouterContext';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Popups } from '@/components/Popups';
import { HomePage } from '@/pages/HomePage';
import { ProductPage } from '@/pages/ProductPage';
import { CartPage } from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { ConfirmationPage } from '@/pages/ConfirmationPage';
import { AboutPage } from '@/pages/AboutPage';
import { FaqPage } from '@/pages/FaqPage';
import { ContactPage } from '@/pages/ContactPage';
import { CgvPage } from '@/pages/legal/CgvPage';
import { PrivacyPage } from '@/pages/legal/PrivacyPage';
import { MentionsPage } from '@/pages/legal/MentionsPage';
import { ReturnPage } from '@/pages/legal/ReturnPage';
import { ShippingPage } from '@/pages/legal/ShippingPage';

function Routes() {
  const { path } = useRouter();
  const cleanPath = path.split('?')[0].split('#')[0];

  // Product page
  if (cleanPath.startsWith('/produit/')) {
    const slug = cleanPath.replace('/produit/', '');
    return <ProductPage slug={slug} />;
  }

switch (cleanPath) {
    case '/':
      return <HomePage />;
    case '/panier':
      return <CartPage />;
    case '/checkout':
      return <CheckoutPage />;
    case '/confirmation':
      return <ConfirmationPage />;
    case '/a-propos':
      return <AboutPage />;
    case '/faq':
      return <FaqPage />;
    case '/contact':
      return <ContactPage />;
    case '/cgv':
      return <CgvPage />;
    case '/politique-confidentialite':
      return <PrivacyPage />;
    case '/mentions-legales':
      return <MentionsPage />;
    case '/politique-retour':
      return <ReturnPage />;
    case '/politique-livraison':
      return <ShippingPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <div className="min-h-screen bg-noir text-blanc flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes />
          </main>
          <Footer />
          <CartDrawer />
          <Popups />
        </div>
      </CartProvider>
    </RouterProvider>
  );
}

export default App;
