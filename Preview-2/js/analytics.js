/**
 * Class for handling website analytics and tracking
 */
class Analytics {
    /**
     * Track page views using the Navigator.sendBeacon API
     * Sends non-blocking analytics data to the server
     */
    static trackPageView() {
        if (navigator.sendBeacon) {
            // Prepare analytics data payload
            const data = {
                path: window.location.pathname,
                referrer: document.referrer,
                screen: `${window.innerWidth}x${window.innerHeight}`,
                timestamp: new Date().toISOString()
            };
            // Send analytics data to server
            navigator.sendBeacon('/api/analytics', JSON.stringify(data));
        }
    }
}

// Initialize page view tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', Analytics.trackPageView);
