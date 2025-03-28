import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

interface LayoutProps {
  children: React.ReactNode;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LamIautomations",
  description: "LamIautomations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* reponsive meta*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>LamIautomations</title>
          {/* Bootstrap*/}
          <link href="css/bootstrap.min.css" rel="stylesheet" />
          {/* animate css*/}
          <link rel="stylesheet" href="css/animate.min.css" />
          {/* owl-carousel*/}
          <link rel="stylesheet" href="vendors/owlcarousel/owl.carousel.css" />
          <link rel="stylesheet" href="vendors/revolution/css/settings.css" />
          <link rel="stylesheet" href="vendors/revolution/css/layers.css" />
          <link rel="stylesheet" href="vendors/revolution/css/navigation.css" />
          <link rel="stylesheet" href="vendors/jquery-ui-1.11.4/jquery-ui.min.css" />
          {/* Main Css*/}
          <link rel="stylesheet" href="css/style.css" />
          <link rel="stylesheet" href="css/responsive.css" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
        </>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>

      <Script src="js/jquery-1.12.2.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="vendors/revolution/js/jquery.themepunch.revolution.min.js"></Script>
      <Script type="text/javascript" src="vendors/revolution/js/extensions/revolution.extension.slideanims.min.js"></Script>
      <Script type="text/javascript" src="vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js"></Script>
      <Script type="text/javascript" src="vendors/revolution/js/extensions/revolution.extension.navigation.min.js"></Script>
      <Script src="js/jquery.form.js"></Script>
      <Script src="js/jquery.validate.min.js"></Script>
      <Script src="js/contact.js"></Script>
      <Script src="vendors/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="vendors/jquery-ui-1.11.4/jquery-ui.min.js"></Script>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTI1BZJKFCeJ8g9O01CMZ4QvVCfdPYkrE"></Script>
      <Script src="js/gmaps.min.js"></Script>
      <Script src="js/theme.js"></Script>
    </html>
  );
}
