sclass Analytics {
    static trackPageView() {
        if (navigator.sendBeacon) {
            const data = {
                path: window.location.pathname,
                referrer: document.referrer,
                screen: `${window.innerWidth}x${window.innerHeight}`,
                timestamp: new Date().toISOString()
            };
            navigator.sendBeacon('/api/analytics', JSON.stringify(data));
        }
    }
}

document.addEventListener('DOMContentLoaded', Analytics.trackPageView);
