import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/300.css'; // Specify weight
import '@fontsource/poppins/400.css'; // Specify weight
import '@fontsource/poppins/500.css'; // Specify weight
import '@fontsource/poppins/700.css'; // Specify weight
import '@fontsource/poppins/900.css'; // Specify weight
import '@fontsource/poppins/400-italic.css'; // Specify weight and style

export const metadata: Metadata = {
  title: 'hyperhire - Home',
  description: 'Find your best member for your work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
