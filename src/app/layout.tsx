import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';

// NOTES: required for fixing very large sized fontawesome icon 
// due to nextjs implementation of css
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {ReactLenis} from "../util/lenis";
config.autoAddCss = false

const atrotisSemiSans = localFont({
  src: [
    {
      path: '../../public/fonts/ATRotisSemiSans-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans-ExtraBold.woff2',
      weight: '800',
      style: 'extrabold',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans-Italic.woff2',
      weight: '400',
      style: 'italic',      
    },
    {
      path: '../../public/fonts/ATRotisSemiSans-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/ATRotisSemiSans.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-atrotissemisans'
})

export const metadata: Metadata = {
  title: "Blackwell Global Service",
  description: "Copy trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ViewTransitions>
        <html lang="en">
          <ReactLenis root>
            <body
              className={`${atrotisSemiSans.variable} antialiased`}
            >
              {children}
            </body>
          </ReactLenis>
        </html>
      </ViewTransitions>
  );
}
