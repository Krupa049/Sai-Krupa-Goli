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
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        // AI/ML Projects
        {
            title: "ANN (Artificial Neural Network)",
            description: "Implementation of a custom Artificial Neural Network from scratch.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/ANN",
            technologies: ["Python", "NumPy", "TensorFlow"]
        },
        {
            title: "Machine Learning Model",
            description: "Comprehensive machine learning model implementation with various algorithms.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Machine-Learning-Model",
            technologies: ["Python", "Scikit-learn", "Pandas"]
        },
        {
            title: "AI Tic-Tac-Toe",
            description: "AI-powered Tic-Tac-Toe game using minimax algorithm.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/AI-Tic-Tac-Toe",
            technologies: ["Python", "AI Algorithms"]
        },
        {
            title: "Gaussian Maximum Likelihood",
            description: "Implementation of Gaussian Maximum Likelihood estimation.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Gaussian_Maximum_Likelihood",
            technologies: ["Python", "Statistics", "NumPy"]
        },
        {
            title: "Multiple Object Tracking",
            description: "Real-time multiple object tracking system using computer vision.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Multiple-Object-Tracking",
            technologies: ["Python", "OpenCV", "Deep Learning"]
        },
        {
            title: "Auto-GPT Implementation",
            description: "Implementation of autonomous GPT system.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Auto-GPT",
            technologies: ["Python", "OpenAI", "NLP"]
        },
        {
            title: "Face Recognition System",
            description: "Advanced face recognition system using deep learning.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Face-Recognition",
            technologies: ["Python", "OpenCV", "Deep Learning"]
        },
        {
            title: "Micrograd Implementation",
            description: "Implementation of a tiny autograd engine.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Micrograd",
            technologies: ["Python", "Deep Learning"]
        },
        {
            title: "MLP From Scratch",
            description: "Multi-Layer Perceptron implemented from scratch.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/MLP",
            technologies: ["Python", "Neural Networks"]
        },
        {
            title: "Transformer Model",
            description: "Implementation of transformer architecture for NLP tasks.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Transformer-Model",
            technologies: ["Python", "PyTorch", "NLP"]
        },
        {
            title: "Tokenization System",
            description: "Custom tokenization system for NLP applications.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Tokenization",
            technologies: ["Python", "NLP"]
        },
        {
            title: "RAG Implementation",
            description: "Retrieval-Augmented Generation system implementation.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/RAG",
            technologies: ["Python", "NLP", "Vector Databases"]
        },
        {
            title: "Gradient Descent",
            description: "Implementation of various gradient descent optimization algorithms.",
            category: "ai-ml",
            github: "https://github.com/Krupa049/Gradient-Descent",
            technologies: ["Python", "Mathematics", "Optimization"]
        },

        // Web Development Projects
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects and skills.",
            category: "web",
            github: "https://github.com/Krupa049/Sai-Krupa-Goli",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "TODO Application",
            description: "Feature-rich TODO application with user authentication.",
            category: "web",
            github: "https://github.com/Krupa049/TO-DO",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "AI Platform",
            description: "Web platform for AI model deployment and testing.",
            category: "web",
            github: "https://github.com/Krupa049/AI-Platform",
            technologies: ["React", "Python", "Flask"]
        },
        {
            title: "Social Network",
            description: "Full-featured social networking platform.",
            category: "web",
            github: "https://github.com/Krupa049/Social-Network",
            technologies: ["React", "Node.js", "MongoDB"]
        },

        // Data Engineering/Science Projects
        {
            title: "Fraud Detection System",
            description: "Real-time fraud detection using PySpark and Kafka.",
            category: "data",
            github: "https://github.com/Krupa049/Fraud-Detection_PySpark-Kafka",
            technologies: ["PySpark", "Kafka", "Machine Learning"]
        },
        {
            title: "Image Classification CNN",
            description: "Image classification using Convolutional Neural Networks.",
            category: "data",
            github: "https://github.com/Krupa049/Image-Class-CNN",
            technologies: ["Python", "TensorFlow", "Deep Learning"]
        },
        {
            title: "Tesla Stock Prediction",
            description: "Stock price prediction model for Tesla using time series analysis.",
            category: "data",
            github: "https://github.com/Krupa049/Tesla-Stock-Prediction",
            technologies: ["Python", "Time Series", "Machine Learning"]
        },
        {
            title: "Fake News Detection",
            description: "ML model to detect fake news articles.",
            category: "data",
            github: "https://github.com/Krupa049/Fake-News-Detection",
            technologies: ["Python", "NLP", "Machine Learning"]
        },
        {
            title: "Sentiment Analysis",
            description: "Text sentiment analysis using advanced NLP techniques.",
            category: "data",
            github: "https://github.com/Krupa049/Sentiment-Analysis",
            technologies: ["Python", "NLP", "Deep Learning"]
        },
        {
            title: "Accuracy Prediction",
            description: "Model accuracy prediction and optimization system.",
            category: "data",
            github: "https://github.com/Krupa049/Accuracy-Prediction",
            technologies: ["Python", "Machine Learning", "Statistics"]
        },
        {
            title: "Spam Email Detector",
            description: "Email spam detection system using ML algorithms.",
            category: "data",
            github: "https://github.com/Krupa049/Spam-Email-Detector",
            technologies: ["Python", "NLP", "Machine Learning"]
        }
    ];
    
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        projects.forEach(project => {
            portfolioGrid.innerHTML += createProjectCard(project);
        });
    }
}); 