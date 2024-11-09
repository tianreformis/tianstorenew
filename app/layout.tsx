import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ModalProvider from '@/providers/modal-provier';
import ModalProvier from '@/providers/modal-provier';
import db from '@/lib/db';
import { ToasterProvider } from '@/providers/toast-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <ClerkProvider 
    afterSignOutUrl="/sign-in"
    
    >
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvier />
          {children}
          
          </body>
      </html>
    </ClerkProvider>
  );
}
