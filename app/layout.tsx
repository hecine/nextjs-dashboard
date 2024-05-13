import '@/app/ui/global.css';
import { inter, notoKufi } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoKufi.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
