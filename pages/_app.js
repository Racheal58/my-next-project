import '../styles.css'

export default function Application({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export function reportWebVitals(metric) {
    switch (metric.name) {
        case 'FCP': // First Contentful Paint
            break;
        case 'LCP': // Largest Contentful Paint
            break;
        case 'CLS': // Cumulative Layout Shift
            break;
        case 'FID': // First Input Delay
            break;
        case 'TTFB': // Time to First Bite
            break;
        case 'Next.js-hydration': // The length of time it takes for the page to start and finish hydrating 
            break;
        case 'Next.js-route-change-to-render': // The length of time it takes for a page to start rendering after a route change 
            break;
        case 'Next.js-render': // The length of time it takes for the page to finish rendering after a route change
            break;
        default:
            break;
    }
}