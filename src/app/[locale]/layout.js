import "../globals.css";
import PageTransitionEffect from "./PageTransitionEffect";
import Nav from "../../../components/Nav/Nav";
import NavMobile from "../../../components/Nav/NavMobile";
import Footer from "../../../components/Footer/Footer";
import NewsletterContent from "../../../components/NewsletterContent";

export const metadata = {
  title: "Akademie Raum Wandel",
  description: "Description coming",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <div className="navDesktop">
          <Nav locale={locale} />
        </div>

        <div className="navMobile">
          <NavMobile locale={locale} />
        </div>

        <NewsletterContent />
        <PageTransitionEffect>
          {children}
          <Footer />
        </PageTransitionEffect>
      </body>
    </html>
  );
}
