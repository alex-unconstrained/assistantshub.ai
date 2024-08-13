import { Flowbite, ThemeModeScript } from 'flowbite-react';
import { Inter } from 'next/font/google';
import './globals.css';
import { flowbiteTheme } from './theme';
import { Analytics } from '@vercel/analytics/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>UnconstrainED</title>
        <meta
          name='title'
          content='UnconstrainED | Empowering Educators with AI-Driven Tools'
        />
        <meta
          name='description'
          content='UnconstrainED provides innovative AI-driven tools designed to enhance educational outcomes by offering personalized feedback, customizable AI assistants, and seamless integration with educational platforms.'
        />
        <meta
          name='keywords'
          content='AI in education, educational technology, personalized feedback, AI tools, educational platforms, AI integration, UnconstrainED'
        />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='UnconstrainED' />
        <meta
          property='og:title'
          content='UnconstrainED | Empowering Educators with AI-Driven Tools'
        />
        <meta
          property='og:description'
          content='UnconstrainED offers AI-powered tools that empower educators to provide personalized feedback, integrate AI assistants, and enhance student outcomes through technology.'
        />
        <meta property='og:url' content='https://unconstrained.co' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://unconstrained.co/og-image.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='UnconstrainED | Empowering Educators with AI-Driven Tools'
        />
        <meta
          name='twitter:description'
          content='Explore UnconstrainED to discover AI-driven tools that help educators provide personalized feedback and integrate AI seamlessly into educational platforms.'
        />
        <meta
          name='twitter:image'
          content='https://unconstrained.co/twitter-image.png'
        />
        <ThemeModeScript />
      </head>
      <body
        className={inter.className}
        suppressHydrationWarning={process.env.NODE_ENV === 'development'}
      >
        <Flowbite theme={{ theme: flowbiteTheme }}>
          <UserProvider>{children}</UserProvider>
          <Analytics />
          <GoogleAnalytics
            gaId={
              process.env.GOOGLE_ANALYTICS_ID
                ? process.env.GOOGLE_ANALYTICS_ID
                : ''
            }
          />
        </Flowbite>
      </body>
    </html>
  );
}
