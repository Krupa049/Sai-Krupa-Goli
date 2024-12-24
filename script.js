// Navigation and Scroll
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

// Portfolio Filtering
const portfolioFilters = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioFilters.forEach(filter => {
    filter?.addEventListener('click', () => {
        // Remove active class from all filters
        portfolioFilters.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked filter
        filter.classList.add('active');
        
        const category = filter.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact Form Handling using Formspree (free service)
const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Using Formspree as a free form handling service
        const response = await fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
        console.error('Error:', error);
    }
});

// Project Cards Template
function createProjectCard(project) {
    return `
        <div class="portfolio-item ${project.category} fade-in">
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-btn">
                            <i class="bi bi-github"></i> View Code
                        </a>
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" class="project-btn">
                                <i class="bi bi-box-arrow-up-right"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add your projects data here
    const projects = [
        {
            title: "AI-Powered Image Recognition",
            description: "A deep learning model built with TensorFlow that can classify images with 95% accuracy. Implemented transfer learning using ResNet50 architecture.",
            image: "path/to/project1-image.jpg",
            category: "ai-ml",
            github: "https://github.com/yourusername/image-recognition",
            demo: "https://demo-link.com",
            technologies: ["Python", "TensorFlow", "OpenCV", "Flask"]
        },
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
            image: "path/to/project2-image.jpg",
            category: "web",
            github: "https://github.com/yourusername/ecommerce",
            demo: "https://demo-link.com",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
        },
        // Add more projects...
    ];
    
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        projects.forEach(project => {
            portfolioGrid.innerHTML += createProjectCard(project);
        });
    }
}); 