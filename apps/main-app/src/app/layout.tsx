import './global.css';
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      allowedRedirectOrigins={[process.env.SATELLITE_APP_ROOT_URL || '']}
    >
      <html lang="en">
        <body className="p-5">
          <header className="flex justify-between">
            <h1 className="text-xl mb-6">Main App</h1>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
