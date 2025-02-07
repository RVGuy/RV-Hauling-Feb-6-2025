import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "RV HAULING - Professional RV Transport Services in Western Canada",
  description = "Professional RV transportation services across Western Canada. Safe and reliable RV hauling with experienced drivers and modern equipment. Serving Alberta, British Columbia, Saskatchewan, and Manitoba.",
  canonicalUrl
}) => {
  const location = useLocation();
  const baseUrl = "https://friendly-kulfi-4c7ef1.netlify.app";
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  React.useEffect(() => {
    // Update meta tags
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullUrl);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);
  }, [title, description, fullUrl]);

  return null;
};

export default SEOHead;