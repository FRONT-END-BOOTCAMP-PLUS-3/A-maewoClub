import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "./reactQueryProvider";

export const metadata: Metadata = {
  title: "A-maewoClub",
  description: "A-maewoClub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./favicon.ico'
          type='image/x-icon'
        />
      </head>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
