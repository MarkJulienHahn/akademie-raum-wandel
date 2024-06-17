import "../globals.css";
import PageTransitionEffect from "./PageTransitionEffect";
import Nav from "../../../components/Nav/Nav";
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
        <Nav locale={locale}/>
        <NewsletterContent />
        <PageTransitionEffect>
          {children}
          <Footer />
        </PageTransitionEffect>
      </body>
    </html>
  );
}
