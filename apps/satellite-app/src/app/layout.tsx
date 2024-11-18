import './global.css';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
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
