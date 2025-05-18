class ServiceCalculator {
    static prices = {
        garden: {
            small: 30,
            medium: 45,
            large: 60
        },
        jetWash: {
            driveway: 80,
            patio: 70,
            decking: 90
        }
    };

    static calculateEstimate(service, size, extras = []) {
        let basePrice = this.prices[service][size];
        let extrasTotal = extras.reduce((sum, extra) => sum + this.prices.extras[extra], 0);
        return basePrice + extrasTotal;
    }
}
