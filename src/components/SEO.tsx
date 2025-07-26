import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  schema?: Record<string, any>;
  noIndex?: boolean;
  noFollow?: boolean;
  children?: React.ReactNode;
};

export const SEO: React.FC<SEOProps> = ({
  title = 'MessageMirror - Backup and Search Your Messages',
  description = 'Securely back up all your messages, find any conversation instantly, and keep them forever. MessageMirror makes your message history searchable and safe across all your devices.',
  keywords = ['message backup', 'text message search', 'SMS backup', 'chat history', 'message archive', 'secure messaging', 'privacy focused', 'cross-platform'],
  canonicalUrl = 'https://messagemirror.app',
  ogType = 'website',
  ogImage = 'https://messagemirror.app/images/og-image.jpg',
  ogImageAlt = 'MessageMirror - Never lose your important messages',
  ogImageWidth = '1200',
  ogImageHeight = '630',
  twitterCard = 'summary_large_image',
  twitterSite = '@messagemirror',
  twitterCreator = '@messagemirror',
  schema,
  noIndex = false,
  noFollow = false,
  children,
}) => {
  // Set the page title in the browser tab
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Generate meta robots content
  const robots = [];
  if (noIndex) robots.push('noindex');
  if (noFollow) robots.push('nofollow');
  const robotsContent = robots.length > 0 ? robots.join(', ') : 'index, follow';

  // Default schema.org data
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MessageMirror',
    url: 'https://messagemirror.app',
    description: description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    ...schema,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:site_name" content="MessageMirror" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#1a1a2e" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify(defaultSchema)}
      </script>

      {/* Additional children elements */}
      {children}
    </Helmet>
  );
};

export default SEO;
