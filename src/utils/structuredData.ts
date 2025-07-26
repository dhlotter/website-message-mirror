/**
 * Structured data utilities for SEO and rich snippets
 */

/**
 * Generates structured data for a web application
 */
export const generateWebAppStructuredData = (options: {
  name: string;
  description: string;
  url: string;
  operatingSystem: string;
  applicationCategory?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
  aggregateRating?: {
    ratingValue: string;
    ratingCount: string;
  };
  screenshot?: string;
  sameAs?: string[];
}) => {
  const {
    name,
    description,
    url,
    operatingSystem,
    applicationCategory = 'UtilitiesApplication',
    offers = {
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating,
    screenshot,
    sameAs = [],
  } = options;

  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      ...offers,
    },
  };

  if (aggregateRating) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ...aggregateRating,
    };
  }

  if (screenshot) {
    data.screenshot = screenshot;
  }

  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  return data;
};

/**
 * Generates FAQ structured data
 */
export const generateFaqStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

/**
 * Generates breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; item: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.item,
    })),
  };
};

/**
 * Generates organization structured data
 */
export const generateOrganizationStructuredData = (options: {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  };
}) => {
  const { name, url, logo, sameAs = [], contactPoint } = options;

  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
  };

  if (logo) {
    data.logo = logo;
  }

  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  if (contactPoint) {
    data.contactPoint = {
      '@type': 'ContactPoint',
      ...contactPoint,
    };
  }

  return data;
};

/**
 * Generates website structured data
 */
export const generateWebsiteStructuredData = (options: {
  name: string;
  url: string;
  description?: string;
  searchAction?: {
    target: string;
    queryInput: string;
  };
}) => {
  const { name, url, description, searchAction } = options;

  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
  };

  if (description) {
    data.description = description;
  }

  if (searchAction) {
    data.potentialAction = {
      '@type': 'SearchAction',
      target: searchAction.target,
      'query-input': searchAction.queryInput,
    };
  }

  return data;
};

/**
 * Generates local business structured data
 */
export const generateLocalBusinessStructuredData = (options: {
  name: string;
  image?: string;
  url: string;
  telephone?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  openingHoursSpecification?: Array<{
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  priceRange?: string;
}) => {
  const { name, image, url, telephone, address, geo, openingHoursSpecification, priceRange } = options;

  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
  };

  if (image) {
    data.image = image;
  }

  if (telephone) {
    data.telephone = telephone;
  }

  if (geo) {
    data.geo = {
      '@type': 'GeoCoordinates',
      ...geo,
    };
  }

  if (openingHoursSpecification && openingHoursSpecification.length > 0) {
    data.openingHoursSpecification = openingHoursSpecification.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      ...hours,
    }));
  }

  if (priceRange) {
    data.priceRange = priceRange;
  }

  return data;
};
