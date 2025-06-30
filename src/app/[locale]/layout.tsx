import PageWrapper from "@/components/atoms/PageWrapper";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import { routing } from "@/i18n/routing";
import "@/styles/global.scss";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';

const PageLoader = dynamic(() => import('@/components/atoms/PageLoader'));

export const metadata: Metadata = {
  title: "Studio Tecnico Geom. Spallone Piefrancesco",
  description: "Studio Tecnico Geom. Spallone Piefrancesco",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Studio Tecnico Spallone" />
      </head>
      <body>
        <ThemeRegistry>
          <PageWrapper>
            <NextIntlClientProvider>
              <Header />
              <PageLoader />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </PageWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
