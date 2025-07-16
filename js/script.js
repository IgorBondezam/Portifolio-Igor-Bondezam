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

const translations = {
    pt: {
        'nav.home': 'Home',
        'nav.about': 'Sobre',
        'nav.skills': 'Skills',
        'nav.projects': 'Projetos',
        'nav.certificates': 'Certificados',
        'nav.contact': 'Contato',
        'hero.name': 'Igor Bondezam França',
        'hero.subtitle': 'Desenvolvedor FullStack Java/Angular',
        'hero.description': 'Transformando ideias em código com criatividade, lógica e uma pitada de diversão. Gamer por paixão, desenvolvedor por vocação.',
        'hero.projects': 'Ver Projetos',
        'hero.contact': 'Contato',
        'about.title': 'Sobre Mim',
        'about.who': 'Quem sou eu?',
        'about.intro': 'Sou Igor Bondezam França, um desenvolvedor FullStack apaixonado por tecnologia e inovação. Atualmente cursando Engenharia de Software na UniCesumar (8° semestre) e trabalhando como Desenvolvedor Júnior FullStack na Elotech Gestão Pública.',
        'about.journey': 'Minha jornada começou com o sonho de ser físico, mas descobri na programação uma forma ainda mais fascinante de resolver problemas complexos. Toco piano nas horas vagas e sou um gamer entusiasta - características que me ajudam a pensar de forma criativa e estratégica no desenvolvimento.',
        'about.creative': 'Criativo',
        'about.problem': 'Solucionador de Problemas',
        'about.gamer': 'Gamer',
        'about.pianist': 'Pianista',
        'about.years': 'Anos de Experiência',
        'about.projects': 'Projetos Concluídos',
        'about.hours': 'Horas de Estudo',
        'skills.title': 'Habilidades & Tecnologias',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.tools': 'Ferramentas',
        'skills.git': 'Git',
        'skills.junit': 'JUnit',
        'skills.rabbitmq': 'RabbitMQ',
        'skills.scrum': 'Scrum/Kanban',
        'projects.title': 'Projetos',
        'certificates.title': 'Certificados',
        'contact.title': 'Vamos Conversar?',
        'contact.email': 'Email',
        'contact.email_value': 'igorbondezamfranca@gmail.com',
        'contact.phone': 'Telefone',
        'contact.phone_value': '(44) 9 9993-3306',
        'contact.location': 'Localização',
        'contact.location_value': 'Maringá - Paraná',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer': '&copy; 2025 Igor Bondezam França. Desenvolvido com ❤️ e muito ☕',
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.certificates': 'Certificates',
        'nav.contact': 'Contact',
        'hero.name': 'Igor Bondezam França',
        'hero.subtitle': 'FullStack Java/Angular Developer',
        'hero.description': 'Turning ideas into code with creativity, logic, and a touch of fun. Gamer by passion, developer by vocation.',
        'hero.projects': 'View Projects',
        'hero.contact': 'Contact',
        'about.title': 'About Me',
        'about.who': 'Who am I?',
        'about.intro': "I'm Igor Bondezam França, a FullStack developer passionate about technology and innovation. Currently studying Software Engineering at UniCesumar (8th semester) and working as a Junior FullStack Developer at Elotech Gestão Pública.",
        'about.journey': 'My journey began with the dream of becoming a physicist, but I found in programming an even more fascinating way to solve complex problems. I play piano in my free time and am an enthusiastic gamer—traits that help me think creatively and strategically in development.',
        'about.creative': 'Creative',
        'about.problem': 'Problem Solver',
        'about.gamer': 'Gamer',
        'about.pianist': 'Pianist',
        'about.years': 'Years of Experience',
        'about.projects': 'Completed Projects',
        'about.hours': 'Study Hours',
        'skills.title': 'Skills & Technologies',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.tools': 'Tools',
        'skills.git': 'Git',
        'skills.junit': 'JUnit',
        'skills.rabbitmq': 'RabbitMQ',
        'skills.scrum': 'Scrum/Kanban',
        'projects.title': 'Projects',
        'certificates.title': 'Certificates',
        'contact.title': "Let's Talk?",
        'contact.email': 'Email',
        'contact.email_value': 'igorbondezamfranca@gmail.com',
        'contact.phone': 'Phone',
        'contact.phone_value': '(44) 9 9993-3306',
        'contact.location': 'Location',
        'contact.location_value': 'Maringá - Paraná',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer': '&copy; 2025 Igor Bondezam França. Developed with ❤️ and lots of ☕',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.certificates': 'Certificados',
        'nav.contact': 'Contacto',
        'hero.name': 'Igor Bondezam França',
        'hero.subtitle': 'Desarrollador FullStack Java/Angular',
        'hero.description': 'Transformando ideas en código con creatividad, lógica y un toque de diversión. Gamer por pasión, desarrollador por vocación.',
        'hero.projects': 'Ver Proyectos',
        'hero.contact': 'Contacto',
        'about.title': 'Sobre Mí',
        'about.who': '¿Quién soy?',
        'about.intro': 'Soy Igor Bondezam França, un desarrollador FullStack apasionado por la tecnología y la innovación. Actualmente estudio Ingeniería de Software en UniCesumar (8º semestre) y trabajo como Desarrollador FullStack Junior en Elotech Gestión Pública.',
        'about.journey': 'Mi camino comenzó con el sueño de ser físico, pero descubrí en la programación una forma aún más fascinante de resolver problemas complejos. Toco el piano en mi tiempo libre y soy un gamer entusiasta, características que me ayudan a pensar de manera creativa y estratégica en el desarrollo.',
        'about.creative': 'Creativo',
        'about.problem': 'Solucionador de Problemas',
        'about.gamer': 'Gamer',
        'about.pianist': 'Pianista',
        'about.years': 'Años de Experiencia',
        'about.projects': 'Proyectos Completados',
        'about.hours': 'Horas de Estudio',
        'skills.title': 'Habilidades y Tecnologías',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.tools': 'Herramientas',
        'skills.git': 'Git',
        'skills.junit': 'JUnit',
        'skills.rabbitmq': 'RabbitMQ',
        'skills.scrum': 'Scrum/Kanban',
        'projects.title': 'Proyectos',
        'certificates.title': 'Certificados',
        'contact.title': '¿Hablamos?',
        'contact.email': 'Correo electrónico',
        'contact.email_value': 'igorbondezamfranca@gmail.com',
        'contact.phone': 'Teléfono',
        'contact.phone_value': '(44) 9 9993-3306',
        'contact.location': 'Ubicación',
        'contact.location_value': 'Maringá - Paraná',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer': '&copy; 2025 Igor Bondezam França. Desarrollado con ❤️ y mucho ☕',
    }
};

translations.pt.projects_data = [
    {
        name: 'Card Magic Spring API',
        description: 'Este aplicativo é uma API criada para fãs de Magic: The Gathering (MTG), com foco específico no formato Commander. Ele permite que os usuários pesquisem, filtrem e explorem a vasta biblioteca de cartas de MTG, obtidas diretamente da API oficial do Magic: The Gathering. O objetivo é oferecer uma maneira fácil e eficiente de interagir com os dados das cartas, sendo útil tanto para desenvolvedores quanto para jogadores.',
        link: 'https://github.com/IgorBondezam/Card-Magic-Spring',
        languages: ['Java', 'Spring Boot', 'Gradle', 'PostgreSQL', 'Spring Security', 'Swagger']
    },
    {
        name: 'Jogo-PizzaEnter',
        description: 'Jogo realizado em VISUALG inspirado no cookie clicker. Pressionando "Enter" gerará ponto e moedas, que é possível comprar itens para melhorar sua pontuação. Bom Jogo para todos.',
        link: 'https://github.com/IgorBondezam/Jogo-PizzaEnter',
        languages: ['Portugol']
    },
    {
        name: 'Angular Projects Examples',
        description: 'Alguns projetos feitos em angular durante meu aprendizado. Tentando explicar e deixar um exemplo caso precise no futuro. Explicando para o que cada parte é utilizada.',
        link: 'https://github.com/IgorBondezam/Angular-projects-examples',
        languages: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Node.Js']
    }
];
translations.en.projects_data = [
    {
        name: 'Card Magic Spring API',
        description: 'This application is an API created for Magic: The Gathering (MTG) fans, specifically focused on the Commander format. It allows users to search, filter, and explore the vast MTG card library, fetched directly from the official Magic: The Gathering API. The goal is to provide an easy and efficient way to interact with card data, useful for both developers and players.',
        link: 'https://github.com/IgorBondezam/Card-Magic-Spring',
        languages: ['Java', 'Spring Boot', 'Gradle', 'PostgreSQL', 'Spring Security', 'Swagger']
    },
    {
        name: 'Jogo-PizzaEnter',
        description: 'Game made in VISUALG inspired by cookie clicker. Pressing "Enter" will generate points and coins, which can be used to buy items to improve your score. Have fun!',
        link: 'https://github.com/IgorBondezam/Jogo-PizzaEnter',
        languages: ['Portugol']
    },
    {
        name: 'Angular Projects Examples',
        description: 'Some projects made in Angular during my learning process. Trying to explain and leave an example in case I need it in the future. Explaining what each part is used for.',
        link: 'https://github.com/IgorBondezam/Angular-projects-examples',
        languages: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Node.Js']
    }
];
translations.es.projects_data = [
    {
        name: 'Card Magic Spring API',
        description: 'Esta aplicación es una API creada para fanáticos de Magic: The Gathering (MTG), con un enfoque específico en el formato Commander. Permite a los usuarios buscar, filtrar y explorar la vasta biblioteca de cartas de MTG, obtenidas directamente de la API oficial de Magic: The Gathering. El objetivo es ofrecer una forma fácil y eficiente de interactuar con los datos de las cartas, siendo útil tanto para desarrolladores como para jugadores.',
        link: 'https://github.com/IgorBondezam/Card-Magic-Spring',
        languages: ['Java', 'Spring Boot', 'Gradle', 'PostgreSQL', 'Spring Security', 'Swagger']
    },
    {
        name: 'Jogo-PizzaEnter',
        description: 'Juego realizado en VISUALG inspirado en cookie clicker. Presionando "Enter" se generan puntos y monedas, que se pueden usar para comprar ítems y mejorar tu puntuación. ¡Buen juego a todos!',
        link: 'https://github.com/IgorBondezam/Jogo-PizzaEnter',
        languages: ['Portugol']
    },
    {
        name: 'Angular Projects Examples',
        description: 'Algunos proyectos hechos en Angular durante mi aprendizaje. Intentando explicar y dejar un ejemplo por si lo necesito en el futuro. Explicando para qué se utiliza cada parte.',
        link: 'https://github.com/IgorBondezam/Angular-projects-examples',
        languages: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Node.Js']
    }
];

translations.pt.projects_github = 'Ver no GitHub';
translations.en.projects_github = 'View on GitHub';
translations.es.projects_github = 'Ver en GitHub';

translations.pt.certificates_data = [
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
];
translations.en.certificates_data = [
    {
        title: 'Java BootCamp',
        institution: 'TI Academy',
        hours: '360h',
        description: 'Java, DB, OOP, Spring Boot',
        date: '2022',
        link: 'https://drive.google.com/file/d/1CSf3Fv4PNWOORbACUwMmnInZQA50TDl9/view?usp=sharing'
    },
    {
        title: 'Java and Spring Boot Training',
        institution: 'Alura',
        hours: '34h',
        description: 'Development with Spring Framework',
        date: '2024',
        link: 'https://drive.google.com/file/d/1dMGFotgVHmoItCDD4b5tv7W_AyDFXQT3/view?usp=sharing'
    },
    {
        title: 'Best Practices in Java Training',
        institution: 'Alura',
        hours: '31h',
        description: 'SOLID, Design Patterns, Clean Code',
        date: '2024',
        link: 'https://drive.google.com/file/d/12f8xNwC9OFvL1rwARs7ReY2LernNnmLo/view?usp=sharing'
    },
    {
        title: 'Java COMPLETE OOP + Projects',
        institution: 'Udemy - Nélio Alves',
        hours: '54h',
        description: 'Object-Oriented Programming',
        date: '2023',
        link: 'https://drive.google.com/file/d/1KERjP7PXXUYsQAr-RXFvKx8JT2AcF3C1/view?usp=sharing'
    },
    {
        title: 'Threads in Java',
        institution: 'Alura',
        hours: '16h',
        description: 'Parallel Programming in Java',
        date: '2024',
        link: 'https://drive.google.com/file/d/1ND3njUrKntre5qLf0sAJcSkRXWeaE1iH/view?usp=sharing'
    },
    {
        title: 'Other Certificates',
        institution: '',
        hours: 'View All',
        description: '',
        date: 'Access',
        link: 'https://drive.google.com/drive/folders/1fDQQ5WT2rfmsID_n3TApCacO9RLcnXIn?usp=sharing'
    }
];
translations.es.certificates_data = [
    {
        title: 'BootCamp Java',
        institution: 'TI Academy',
        hours: '360h',
        description: 'Java, BD, POO, Spring Boot',
        date: '2022',
        link: 'https://drive.google.com/file/d/1CSf3Fv4PNWOORbACUwMmnInZQA50TDl9/view?usp=sharing'
    },
    {
        title: 'Formación Java y Spring Boot',
        institution: 'Alura',
        hours: '34h',
        description: 'Desarrollo con Spring Framework',
        date: '2024',
        link: 'https://drive.google.com/file/d/1dMGFotgVHmoItCDD4b5tv7W_AyDFXQT3/view?usp=sharing'
    },
    {
        title: 'Formación Buenas Prácticas en Java',
        institution: 'Alura',
        hours: '31h',
        description: 'SOLID, Design Patterns, Clean Code',
        date: '2024',
        link: 'https://drive.google.com/file/d/12f8xNwC9OFvL1rwARs7ReY2LernNnmLo/view?usp=sharing'
    },
    {
        title: 'Java COMPLETO POO + Proyectos',
        institution: 'Udemy - Nélio Alves',
        hours: '54h',
        description: 'Programación Orientada a Objetos',
        date: '2023',
        link: 'https://drive.google.com/file/d/1KERjP7PXXUYsQAr-RXFvKx8JT2AcF3C1/view?usp=sharing'
    },
    {
        title: 'Threads en Java',
        institution: 'Alura',
        hours: '16h',
        description: 'Programación Paralela en Java',
        date: '2024',
        link: 'https://drive.google.com/file/d/1ND3njUrKntre5qLf0sAJcSkRXWeaE1iH/view?usp=sharing'
    },
    {
        title: 'Otros Certificados',
        institution: '',
        hours: 'Ver Todos',
        description: '',
        date: 'Acceder',
        link: 'https://drive.google.com/drive/folders/1fDQQ5WT2rfmsID_n3TApCacO9RLcnXIn?usp=sharing'
    }
];

translations.pt.cert_label_access = 'Acessar';
translations.pt.cert_label_viewall = 'Visualizar Todos';

translations.en.cert_label_access = 'Access';
translations.en.cert_label_viewall = 'View All';

translations.es.cert_label_access = 'Acceder';
translations.es.cert_label_viewall = 'Ver Todos';

function getCurrentLang() {
    const languageSelect = document.getElementById('language-select');
    return languageSelect ? languageSelect.value : 'pt';
}

function createProjects() {
    const lang = getCurrentLang();
    const projects = translations[lang].projects_data;
    return projects.map((project, idx) => `
        <div class="project-card" onclick="openProject('${project.link}')">
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-tech">
                ${createLanguageTagProjects(project.languages)}
            </div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                    <i class="fab fa-github"></i>
                    ${translations[lang].projects_github}
                </a>
            </div>
        </div>
    `).join('');
}

function createLanguageTagProjects(languages) {
    let spans = '';
    languages.forEach(l => {
        spans += `<span class="tech-tag">${l}</span>`
    })
    return spans;
}

function initializeCertificates() {
    const cardDeck = document.getElementById('card-deck');
    const lang = getCurrentLang();
    const certificates = translations[lang].certificates_data;
    const certLabels = translations[lang];
    cardDeck.innerHTML = certificates.map((cert, index) => {
        let hoursLabel = cert.hours ? `<div class='card-hours'>${cert.hours}</div>` : '';
        let institutionLabel = cert.institution ? `<p class='card-institution'>${cert.institution}</p>` : '';
        let description = cert.description ? `<p class='card-description'>${cert.description}</p>` : '';
        let dateLabel = cert.date ? `<p class='card-date'>${cert.date}</p>` : '';
        if (index === certificates.length - 1) {
            hoursLabel = `<div class='card-hours'><strong>${certLabels.cert_label_viewall}</strong></div>`;
            dateLabel = `<p class='card-date'><strong>${certLabels.cert_label_access}</strong></p>`;
            institutionLabel = '';
            description = '';
        }
        return `
            <div class="certificate-card" style="animation-delay: ${index * 0.1}s" onclick="flipCard(this, '${cert.link}')">
                <div class="card-header">
                    <h3 class="card-title">${cert.title}</h3>
                    ${institutionLabel}
                </div>
                <div class="card-content">
                    ${hoursLabel}
                    ${description}
                </div>
                <div class="card-footer">
                    ${dateLabel}
                </div>
            </div>
        `;
    }).join('');
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

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    if (document.getElementById('projects-grid')) {
        document.getElementById('projects-grid').innerHTML = createProjects();
    }
    if (document.getElementById('card-deck')) {
        document.getElementById('card-deck').innerHTML = '';
        initializeCertificates();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeSkillBars();
    initializeCounters();
    loadGitHubProjects();
    initializeCertificates();
    initializeScrollEffects();
    initializeParticles();
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            setLanguage(this.value);
        });
        setLanguage(languageSelect.value);
    }
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

function loadGitHubProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = createProjects();
}

function openProject(url) {
    window.open(url, '_blank');
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

    const imageIgor = document.getElementById('image-igor');
    imageIgor.src = 'images/igor-formal.png'
    document.body.appendChild(message);


    setTimeout(() => {
        document.body.removeChild(message);
        imageIgor.src = 'images/igor-casual.png'
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

