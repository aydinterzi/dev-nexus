import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
