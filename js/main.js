document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with fixed settings
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        disable: 'mobile'
    });

    // Modal Handling
    const aboutModal = document.getElementById('aboutModal');
    if (aboutModal) {
        aboutModal.addEventListener('show.bs.modal', function() {
            // Reset AOS animations inside modal
            setTimeout(() => AOS.refresh(), 100);
        });
        
        // Handle tab changes
        aboutModal.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
            tab.addEventListener('shown.bs.tab', function() {
                AOS.refresh();
            });
        });
    }

    // Handle deep linking
    if (window.location.hash && window.location.hash.startsWith('#about-')) {
        const targetTab = window.location.hash.replace('about-', '');
        const modal = new bootstrap.Modal(aboutModal);
        modal.show();
        aboutModal.querySelector(`[data-bs-target="#${targetTab}"]`)?.click();
    }

    // Initialize VanillaTilt for cards
    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
        max: 5,
        speed: 400,
        glare: false
    });

    // Fix Counter Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                function updateCounter() {
                    if (current < target) {
                        current = Math.min(current + step, target);
                        counter.textContent = Math.round(current);
                        requestAnimationFrame(updateCounter);
                    }
                }

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Info Card Handler
document.addEventListener('DOMContentLoaded', function() {
    const infoCard = document.getElementById('aboutPreviewCard');
    
    if (infoCard) {
        infoCard.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link or button inside the card
            if (e.target.closest('a, button:not(.card-toggle)')) {
                return;
            }
            
            this.classList.toggle('expanded');
            
            // Refresh AOS animations when card expands
            setTimeout(() => {
                AOS.refresh();
            }, 500);
        });

        // Prevent card toggle when clicking links inside
        infoCard.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', e => e.stopPropagation());
        });
    }
});

// Enhanced Card UI Handlers
class CardUI {
    constructor(element) {
        this.card = element;
        this.header = element.querySelector('.card-header');
        this.content = element.querySelector('.card-body');
        this.icon = element.querySelector('.card-toggle i');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.header.addEventListener('click', () => this.toggle());
        this.addHoverEffect();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.card.classList.toggle('expanded');
        this.icon.style.transform = this.isOpen ? 'rotate(180deg)' : 'rotate(0)';
        
        if (this.isOpen) {
            this.content.style.maxHeight = `${this.content.scrollHeight}px`;
        } else {
            this.content.style.maxHeight = '0';
        }

        // Refresh AOS animations
        setTimeout(() => AOS.refresh(), 300);
    }

    addHoverEffect() {
        this.card.addEventListener('mouseenter', () => {
            if (!this.isOpen) {
                this.card.classList.add('hover');
            }
        });
        
        this.card.addEventListener('mouseleave', () => {
            this.card.classList.remove('hover');
        });
    }
}

// Initialize Card UIs
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing code
    // ...existing code...

    // Initialize Card UI
    const cards = document.querySelectorAll('.info-card');
    cards.forEach(card => new CardUI(card));
});

// Loading Animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loading-overlay');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 300);
    }, 500);
});

// Emergency Contact Popup
function showEmergencyPopup() {
    const now = new Date();
    const hour = now.getHours();
    
    // Show popup outside business hours (before 8am or after 6pm)
    if (hour < 8 || hour > 18) {
        const popup = document.querySelector('.emergency-popup');
        popup.classList.add('show');
        
        // Hide after 10 seconds
        setTimeout(() => popup.classList.remove('show'), 10000);
    }
}

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', function() {
    // ...existing initialization code...
    
    // Initialize emergency popup
    setTimeout(showEmergencyPopup, 3000);
    
    // Initialize service card flip
    document.querySelectorAll('.service-card-flip').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-card-inner').style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-card-inner').style.transform = 'rotateY(0)';
        });
    });
});

// Company Info Popup Handler
const companyInfoBtn = document.querySelector('.company-info-btn');
const infoPopup = document.querySelector('.company-info-popup');

if (companyInfoBtn && infoPopup) {
    companyInfoBtn.addEventListener('click', () => {
        infoPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    infoPopup.querySelector('.close-popup').addEventListener('click', () => {
        infoPopup.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// TikTok Gallery Handler
const tiktokVideos = [
    '7123456789012345678', // Replace with actual TikTok video IDs
    '7123456789012345679',
    '7123456789012345680'
];

function loadTikTokGallery() {
    const gallery = document.querySelector('.tiktok-grid');
    if (!gallery) return;

    tiktokVideos.forEach(videoId => {
        const embed = document.createElement('blockquote');
        embed.className = 'tiktok-embed';
        embed.setAttribute('cite', `https://www.tiktok.com/@aasyardmen/video/${videoId}`);
        embed.setAttribute('data-video-id', videoId);
        gallery.appendChild(embed);
    });

    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(script);
}

// Gallery Filter System
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterGalleryItems(filter);
        
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Initialize Masonry
document.addEventListener('DOMContentLoaded', function() {
    const masonryGrid = new Masonry('.gallery-grid', {
        itemSelector: '.gallery-item',
        percentPosition: true
    });

    // Load TikTok Videos
    const tiktokVideos = [
        { id: 'VIDEO_ID_1', title: 'Lawn Transformation' },
        { id: 'VIDEO_ID_2', title: 'Garden Makeover' },
        // Add more videos
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    tiktokVideos.forEach(video => {
        const template = `
            <div class="gallery-item col-md-4 mb-4">
                <div class="card border-0 shadow-sm">
                    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@username/video/${video.id}">
                        <section></section>
                    </blockquote>
                    <div class="card-body">
                        <h5 class="card-title">${video.title}</h5>
                    </div>
                </div>
            </div>
        `;
        galleryGrid.insertAdjacentHTML('beforeend', template);
    });

    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(script);
});

// Enhanced Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Bootstrap Tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
