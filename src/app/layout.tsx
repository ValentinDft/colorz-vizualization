import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colorz Vizualization',
  description:
    'Colorz Vizialization gives you a preview of the colors you want to use in your portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
