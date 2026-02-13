'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type WebVitalsMetric = {
  name: string;
  value: number;
  id: string;
  label?: string;
};

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined') {
      // You can integrate Google Analytics, Plausible, or other analytics here
      console.log('Page view:', pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

// Web Vitals reporting for performance monitoring
export function reportWebVitals(metric: WebVitalsMetric) {
  if (typeof window !== 'undefined') {
    // Log Core Web Vitals
    console.log(metric);
    
    // You can send to analytics service here
    // Example: sendToAnalytics(metric);
  }
}
