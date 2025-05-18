class ReviewManager {
    static async fetchReviews() {
        const platforms = ['google', 'yell', 'facebook'];
        let allReviews = [];
        
        for (const platform of platforms) {
            try {
                const response = await fetch(`/api/reviews/${platform}`);
                const reviews = await response.json();
                allReviews = [...allReviews, ...reviews];
            } catch (error) {
                console.error(`Error fetching ${platform} reviews:`, error);
            }
        }
        
        return allReviews;
    }

    static displayReviews(targetElement, reviews) {
        // Review display logic
    }
}
