import Topbar from '@/components/Topbar/Topbar';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
