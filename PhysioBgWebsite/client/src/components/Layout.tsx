import { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
  
  useEffect(() => {
    const storedPreference = localStorage.getItem("cookiesAccepted");
    if (storedPreference === "true") {
      setCookiesAccepted(true);
    }
  }, []);
  
  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {!cookiesAccepted && <CookieConsent onAccept={handleAcceptCookies} />}
    </>
  );
}
