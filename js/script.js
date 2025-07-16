const CONFIG = {
    githubUsername: 'IgorBondezam',
    githubApiUrl: 'https://api.github.com/users/IgorBondezam/repos',
    certificates: [
        {
            title: 'BootCamp Java',
            institution: 'TI Academy',
            hours: '360h',
            description: 'Java, BD, POO, Spring Boot',
            date: '2022',
            link: 'https://drive.google.com/file/d/1CSf3Fv4PNWOORbACUwMmnInZQA50TDl9/view?usp=sharing'
        },
        {
            title: 'Formação Java e Spring Boot',
            institution: 'Alura',
            hours: '34h',
            description: 'Desenvolvimento com Spring Framework',
            date: '2024',
            link: 'https://drive.google.com/file/d/1dMGFotgVHmoItCDD4b5tv7W_AyDFXQT3/view?usp=sharing'
        },
        {
            title: 'Formação Boas Práticas em Java',
            institution: 'Alura',
            hours: '31h',
            description: 'SOLID, Design Patterns, Clean Code',
            date: '2024',
            link: 'https://drive.google.com/file/d/12f8xNwC9OFvL1rwARs7ReY2LernNnmLo/view?usp=sharing'
        },
        {
            title: 'Java COMPLETO POO + Projetos',
            institution: 'Udemy - Nélio Alves',
            hours: '54h',
            description: 'Programação Orientada a Objetos',
            date: '2023',
            link: 'https://drive.google.com/file/d/1KERjP7PXXUYsQAr-RXFvKx8JT2AcF3C1/view?usp=sharing'
        },
        {
            title: 'Threads em Java',
            institution: 'Alura',
            hours: '16h',
            description: 'Programação Paralela em Java',
            date: '2024',
            link: 'https://drive.google.com/file/d/1ND3njUrKntre5qLf0sAJcSkRXWeaE1iH/view?usp=sharing'
        },
        {
            title: 'Outros Certificados',
            institution: '',
            hours: 'Visualizar Todos',
            description: '',
            date: 'Acessar',
            link: 'https://drive.google.com/drive/folders/1fDQQ5WT2rfmsID_n3TApCacO9RLcnXIn?usp=sharing'
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeSkillBars();
    initializeCounters();
    loadGitHubProjects();
    initializeCertificates();
    initializeScrollEffects();
    initializeParticles();
});

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        }
    });
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.about-card, .skill-category, .stat-card, .project-card, .certificate-card, .contact-item, .social-link');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 200);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

async function loadGitHubProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = createProjects();
}

function createProjects() {
    const projects = [
        {
            name: 'Card Magic Spring API',
            description: 'Este aplicativo é uma API criada para fãs de Magic: The Gathering (MTG), com foco específico no formato Commander. Ele permite que os usuários pesquisem, filtrem e explorem a vasta biblioteca de cartas de MTG, obtidas diretamente da API oficial do Magic: The Gathering. O objetivo é oferecer uma maneira fácil e eficiente de interagir com os dados das cartas, sendo útil tanto para desenvolvedores quanto para jogadores.',
            tech: ['Java', 'Spring Boot', 'PostgreSQL'],
            github: 'https://github.com/IgorBondezam/Card-Magic-Spring'
        },
        {
            name: 'Jogo-PizzaEnter',
            description: 'Jogo realizado em VISUALG inspirado no cookie clicker. Pressionando "Enter" gerará ponto e moedas, que é possível comprar itens para melhorar sua pontuação. Bom Jogo para todos.',
            tech: ['Portugol'],
            github: 'https://github.com/IgorBondezam/Jogo-PizzaEnter'
        },
        {
            name: 'Angular Projects Examples',
            description: 'Alguns projetos feitos em angular durante meu aprendizado. Tentando explicar e deixar um exemplo caso precise no futuro. Explicando para o que cada parte é utilizada.',
            tech: ['Angular', 'TypeScript', 'HTML/CSS', 'RxJS'],
            github: 'https://github.com/IgorBondezam/Angular-projects-examples'
        }
    ];

    return projects.map(project => `
        <div class="project-card" onclick="openProject('${project.github}')">
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                    <i class="fab fa-github"></i>
                    Ver no GitHub
                </a>
            </div>
        </div>
    `).join('');
}

function openProject(url) {
    window.open(url, '_blank');
}

function initializeCertificates() {
    const cardDeck = document.getElementById('card-deck');
    
    const certificateCards = CONFIG.certificates.map((cert, index) => {
        return `
            <div class="certificate-card" style="animation-delay: ${index * 0.1}s" onclick="flipCard(this, '${cert.link}')">
                <div class="card-header">
                    <h3 class="card-title">${cert.title}</h3>
                    <p class="card-institution">${cert.institution}</p>
                </div>
                <div class="card-content">
                    <div class="card-hours">${cert.hours}</div>
                    <p class="card-description">${cert.description}</p>
                </div>
                <div class="card-footer">
                    <p class="card-date">${cert.date}</p>
                </div>
            </div>
        `;
    }).join('');
    
    cardDeck.innerHTML = certificateCards;
    
    const cards = cardDeck.querySelectorAll('.certificate-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateY(-15deg)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateY(0deg)';
        }, index * 100);
    });
}

function flipCard(card, link) {
    card.style.transform = 'rotateY(180deg) scale(1.05)';
    
    setTimeout(() => {
        card.style.transform = 'rotateY(0deg) scale(1)';
    }, 600);
    
    card.style.boxShadow = '0 0 30px rgba(37, 99, 235, 0.8)';
    setTimeout(() => {
        card.style.boxShadow = '';
        if(!!link) {
            window.open(link, '_blank')
        }
    }, 1000);

}

function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.stars, .floating-particles');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

function initializeParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(hero, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${index * 0.5}s;
        opacity: ${Math.random() * 0.8 + 0.2};
        z-index: -1;
    `;
    
    container.appendChild(particle);
}

const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

function initializeEasterEggs() {
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateGamerMode();
            konamiCode = [];
        }
    });
}

function activateGamerMode() {
    document.body.style.filter = 'hue-rotate(180deg)';
    
    for (let i = 0; i < 50; i++) {
        createExplosionParticle();
    }
    
    const message = document.createElement('div');
    message.textContent = '🎮 GAMER MODE ACTIVATED! 🎮';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #2563eb, #06b6d4);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-family: 'Orbitron', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(37, 99, 235, 0.8);
        animation: pulse 0.5s ease-in-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        document.body.removeChild(message);
        document.body.style.filter = '';
    }, 5000);
}

function createExplosionParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: ${['#2563eb', '#06b6d4', '#8b5cf6', '#10b981'][Math.floor(Math.random() * 4)]};
        border-radius: 50%;
        left: 50%;
        top: 50%;
        z-index: 9999;
        pointer-events: none;
        animation: explode 1s ease-out forwards;
    `;
    
    const angle = Math.random() * 360;
    const velocity = Math.random() * 200 + 100;
    
    particle.style.setProperty('--angle', angle + 'deg');
    particle.style.setProperty('--velocity', velocity + 'px');
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        document.body.removeChild(particle);
    }, 1000);
}

const explosionStyle = document.createElement('style');
explosionStyle.textContent = `
    @keyframes explode {
        0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--velocity));
            opacity: 0;
        }
    }
`;
document.head.appendChild(explosionStyle);

initializeEasterEggs();

function copyEmail() {
    const email = 'igorbondezamfranca@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        showNotification('Email copiado para a área de transferência!');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #06b6d4);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.querySelector('.contact-item p');
    if (emailElement && emailElement.textContent.includes('@')) {
        emailElement.style.cursor = 'pointer';
        emailElement.addEventListener('click', copyEmail);
    }
});

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

initializeLazyLoading();

