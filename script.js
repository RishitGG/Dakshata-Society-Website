// ============================================
// HERO SECTION IMAGE CAROUSEL
// ============================================
const heroImages = [
    'rohit_raju.jpeg',
    'DDAC1.jpeg',
    'jitesh_v_patil.jpeg',
    'vikrant_kumar.jpeg',
    'bhaskar_naik.jpeg'
];

let currentHeroImageIndex = 0;

function rotateHeroBackground() {
    const heroCarousel = document.querySelector('.hero-carousel');
    if (!heroCarousel) return;
    
    currentHeroImageIndex = (currentHeroImageIndex + 1) % heroImages.length;
    const nextImage = heroImages[currentHeroImageIndex];
    
    // Create new image element
    const img = document.createElement('img');
    img.src = nextImage;
    img.alt = `Hero Background ${currentHeroImageIndex + 1}`;
    img.className = 'hero-bg-image';
    
    // Fade out old image
    const oldImage = heroCarousel.querySelector('.hero-bg-image');
    if (oldImage) {
        oldImage.style.opacity = '0';
        setTimeout(() => oldImage.remove(), 1500);
    }
    
    // Add new image
    heroCarousel.appendChild(img);
}

// Rotate hero images every 4 seconds
setInterval(rotateHeroBackground, 4000);

// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HIGHLIGHT ACTIVE NAV LINK
// ============================================
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// DONATE BUTTON FUNCTIONALITY
// ============================================
document.querySelector('.donate-btn').addEventListener('click', () => {
    showDonateModal();
});

document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Donate')) {
        btn.addEventListener('click', () => {
            showDonateModal();
        });
    }
});

function showDonateModal() {
    alert('Thank you for your interest in supporting Dakshata Society!\\n\\nPlease visit our donation page or contact us at:\\ninfo@dakshatasociety.org');
}

// ============================================
// VOLUNTEER BUTTON FUNCTIONALITY
// ============================================
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Volunteer')) {
        btn.addEventListener('click', () => {
            alert('We appreciate your interest in volunteering!\n\nPlease fill out our volunteer form at:\nwww.dakshatasociety.org/volunteer');
        });
    }
});

// ============================================
// NEWSLETTER FORM SUBMISSION
// ============================================
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`Thank you for subscribing with ${email}!\n\nYou'll receive our newsletter updates shortly.`);
        e.target.reset();
    }
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe program cards and story cards for fade-in animation
document.querySelectorAll('.program-card, .story-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// ACTIVE NAV LINK STYLING
// ============================================
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// ============================================
// PARTNER WITH US BUTTON
// ============================================
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Partner')) {
        btn.addEventListener('click', () => {
            alert('Partnership opportunities!\n\nWe\'d love to collaborate with you.\n\nContact our partnerships team:\npartners@dakshatasociety.org');
        });
    }
});

// ============================================
// LEARN MORE FUNCTIONALITY
// ============================================
document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const programTitle = link.closest('.program-card').querySelector('h3').textContent;
        alert(`More information about ${programTitle}:\n\nThis is a comprehensive program designed to create lasting impact in our communities.\n\nFor detailed information, please visit our website or contact us.`);
    });
});

// ============================================
// GET INVOLVED BUTTON
// ============================================
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.includes('Get Involved')) {
        btn.addEventListener('click', () => {
            document.querySelector('.cta').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// ============================================
// LEARN MORE (Hero Section)
// ============================================
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Learn More') && btn.closest('.hero')) {
        btn.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

console.log('Dakshata Society website loaded successfully!');
