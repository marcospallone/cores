import type { Metadata } from "next";
import "@/styles/global.scss";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Studio Tecnico Geom. Spallone Piefrancesco",
  description: "Studio Tecnico Geom. Spallone Piefrancesco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
