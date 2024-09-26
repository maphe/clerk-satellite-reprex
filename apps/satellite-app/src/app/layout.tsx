import './global.css';
import { ClerkProvider, UserButton } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="p-5">
          <header className="flex justify-between">
            <h1 className="text-xl mb-6">Satellite App</h1>
            <UserButton />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
