import PageWrapper from "@/components/atoms/PageWrapper";
import Header from "@/components/organisms/Header/Header";
import "@/styles/global.scss";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/organisms/Footer/Footer";
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
      <body>
        <ThemeRegistry>
          <PageWrapper>
            <NextIntlClientProvider>
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </PageWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
