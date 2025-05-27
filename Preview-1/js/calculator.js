/**
 * Class for calculating service prices based on garden size and options
 */
class ServiceCalculator {
    // Base price configurations for different services and sizes
    static prices = {
        garden: {
            small: 30,   // Up to 50 sqm
            medium: 45,  // 51-100 sqm
            large: 60    // 101+ sqm
        },
        jetWash: {
            driveway: 80,  // Standard driveway
            patio: 70,     // Up to 20 sqm
            decking: 90    // Up to 15 sqm
        }
    };

    /**
     * Calculate total estimate for a service
     * @param {string} service - Type of service (garden/jetWash)
     * @param {string} size - Size category
     * @param {Array} extras - Additional services
     * @returns {number} Total price estimate
     */
    static calculateEstimate(service, size, extras = []) {
        // Get base price for the service and size
        let basePrice = this.prices[service][size];
        // Calculate total for any extra services
        let extrasTotal = extras.reduce((sum, extra) => sum + this.prices.extras[extra], 0);
        return basePrice + extrasTotal;
    }
}
