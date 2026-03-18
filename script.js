document.addEventListener('DOMContentLoaded', () => {

    // 2. Global Fade-up Reveal (Intersection Observer)
    const revealOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Check if it's a skill group to trigger bars
                if (entry.target.classList.contains('skill-group')) {
                    animateSkillBars(entry.target);
                }
            }
        });
    }, revealOptions);

    document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));

    // Stagger delays for grid children
    const gridSelectors = ['.projects-grid', '.skills-grid', '.about-text'];
    gridSelectors.forEach(sel => {
        const grid = document.querySelector(sel);
        if (grid) {
            const children = grid.querySelectorAll('.fade-up');
            children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`;
            });
        }
    });


    // 4. Skill Bar Animation
    function animateSkillBars(container) {
        const bars = container.querySelectorAll('.bar-fill');
        bars.forEach((bar, i) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }, i * 120);
        });
    }

    // 5. Hero Parallax
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const heroBg = document.getElementById('hero-parallax');

        if (scrollY < heroHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.18}px)`;
        }
    }, { passive: true });

    // 6. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                const burger = document.getElementById('nav-burger');
                const mobileMenu = document.getElementById('nav-mobile-menu');
                if (burger && burger.classList.contains('open')) {
                    burger.classList.remove('open');
                    mobileMenu.classList.remove('open');
                    burger.setAttribute('aria-expanded', 'false');
                    mobileMenu.setAttribute('aria-hidden', 'true');
                }

                const offset = target.offsetTop - 68; // Adjusted for nav height
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Navbar Logic
    const burger = document.getElementById('nav-burger');
    const mobileMenu = document.getElementById('nav-mobile-menu');
    const navLinks = document.querySelectorAll('.pill-links a, .mobile-links a');
    const sections = document.querySelectorAll('section[id]');

    // Burger Toggle
    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            const isOpen = burger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            burger.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-hidden', !isOpen);
        });
    }

    // Close mobile menu when a mobile link is clicked
    document.querySelectorAll('.mobile-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (burger && mobileMenu) {
                mobileMenu.classList.remove('open');
                burger.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });
    });

    // Handle Active States on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const offset = 100; // Offset for top navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - offset) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    // Stagger skill group entrance animation
    document.querySelectorAll('.skill-group-v2').forEach((group, i) => {
        group.style.transitionDelay = `${i * 0.1}s`;
    });

    // Scroll Progress & Active Links

    // Active Link Highlighting (Intersection Observer)
    const navObserverOptions = {
        threshold: 0.35,
        rootMargin: '-10% 0px -55% 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    // 8. Translation Engine
    const translations = {
        en: {
            nav_about_short: "About",
            nav_projects_short: "Projects",
            nav_skills_short: "Skills",
            nav_contact_short: "Contact",
            hero_name_first: "MOHAMMED",
            hero_name_last: "EZZAHAR",
            hero_eyebrow: "Financial Analyst · AI/Data Engineer · Accounting Automation",
            hero_tagline: "Engineering the intersection of Accounting Integrity, Python Automation, and AI-Driven Financial Intelligence — from Morocco to global markets.",
            hero_status: "Global Market Alignment Active",
            about_eyebrow: "THE PHILOSOPHY",
            about_h2: "The Convergence of <em>Logic & Capital</em>",
            about_lead: "95% Error Reduction · 91% Fraud Precision · 20% Tax Savings Modeled · 5 Production Projects",
            about_p1: "A rare hybrid profile bridging **Accounting Integrity** and **AI-Driven Financial Intelligence**. Trained in the academic rigour of **Université Moulay Ismail** and battle-tested in the high-stakes startup ecosystem at **ALIFFA**, I specialize in building audit-grade automation pipelines and predictive models that transform institutional risk into strategic advantage.",
            about_p2: "As a multi-disciplinary engineer, I translate complex CFO-level mandates — from IFRS/GAAP tax optimization to multi-modal sentiment signal extraction — into production-ready Python, SQL, and Power BI environments. I am built for the 2026 market: where accounting reliability meets the frontier of AI scalability.",
            projects_eyebrow: "SELECTED WORKS",
            projects_h2: "Market-Driven <em>Engineering</em>",
            proj_f_eyebrow: "FEATURED · FINTECH & AI",
            proj_f_title: "Fraud Detection & AI Recommender",
            proj_f_p: "91% Precision XGBoost classifier and Transformer-driven personalization engine for institutional asset management.",
            proj_1_eyebrow: "ACCOUNTING · AUTOMATION",
            proj_1_title: "Bank Reconciliation Pipeline",
            proj_1_p: "Big 4-grade automated ETL pipeline matching 100% of transaction populations with fuzzy-logic matching.",
            proj_2_eyebrow: "ALT DATA · EQUITY RESEARCH",
            proj_2_title: "Sentiment-AI Market Bot",
            proj_2_p: "NLP pipeline utilizing FinBERT to extract proprietary sentiment signals from unstructured Bloomberg/Reuters data.",
            proj_3_eyebrow: "TAX ADVISORY · ECONOMETRICS",
            proj_3_title: "Corporate Tax Impact Study",
            proj_3_p: "Power BI diagnostic modeling for Moroccan Free Trade Zone optimizations, projected 20% IS tax savings.",
            proj_4_eyebrow: "AI · WEALTH ADVIZORY",
            proj_4_title: "Deep Recommender System",
            proj_4_p: "Latent space vector search engine (FAISS) for matching high-net-worth clients to structured financial products.",
            skills_eyebrow: "TECHNICAL ARSENAL",
            method_3_p_1: "Developed a dashboard to isolate unmatched entries...",
            proj_2_long_p1: "This AI bot monitors financial news in real-time...",
            proj_2_challenge: "Massive volumes of news are published every second...",
            proj_2_solution: "We built an NLP pipeline using transformer models...",
            proj_2_conclusion: "The bot successfully automates the first layer of market sentiment analysis...",
            method_1_h_2: "News Ingestion",
            method_1_p_2: "Designed a real-time scraper for Reuters and Twitter...",
            method_2_h_2: "NLP Classification",
            method_2_p_2: "Fine-tuned a FinBERT model for financial nuances...",
            method_3_h_2: "Signal Generation",
            method_3_p_2: "Calculated weighted sentiment scores for signals...",
            proj_3_long_p1: "This study analyzes the fiscal landscape for corporations in Morocco...",
            proj_3_challenge: "Navigating Moroccan tax laws is complex for foreign investors...",
            proj_3_solution: "I developed a diagnostic framework that evaluates tax scenarios...",
            proj_3_conclusion: "The study served as a key reference for institutional tax planning...",
            method_1_h_3: "Contextual Analysis",
            method_1_p_3: "Mapped reforms in the Moroccan Finance Law...",
            method_2_h_3: "Risk Quantification",
            method_2_p_3: "Modeled potential fiscal liabilities in Excel...",
            method_3_h_3: "Strategic Roadmap",
            method_3_p_3: "Delivered prioritized compliance actions...",
            proj_4_long_p1: "This recommendation engine matches customers with financial products...",
            proj_4_challenge: "Traditional schemes are often too rigid for nuanced needs...",
            proj_4_solution: "I developed an architecture based on deep embedding networks...",
            proj_4_conclusion: "The system has fundamentally improved customer engagement...",
            method_1_h_4: "Embedding Design",
            method_1_p_4: "Built an auto-encoder to compress user features...",
            method_2_h_4: "Vector Search Integration",
            method_2_p_4: "Implemented FAISS for similarity lookups...",
            method_3_h_4: "A/B Validation",
            method_3_p_4: "Tested against collaborative filtering baselines, achieving a 20% higher conversion rate.",
            // New keys
            testimonial_text: "\"The work Mohammed and his team produced wasn't just technical\u2014it was <strong>generational</strong> in Morocco's financial landscape.\"",
            testimonial_author: "\u2014 From official Mentors &amp; Referees",
            contact_eyebrow: "OPEN TO OPPORTUNITIES",
            contact_h2: "Let's Build <em>Something Real</em>",
            contact_location: "Mekn\u00e8s, Morocco \u00b7 Available Remotely",
            footer_role: "Financial &amp; Data Analyst \u00b7 AI Developer",
            footer_location: "Mekn\u00e8s, Morocco",
            nav_about_short: "About",
            nav_projects_short: "Projects",
            nav_skills_short: "Skills",
            nav_contact_short: "Contact",
            proj_2_eyebrow: "DATA SCIENCE \u00b7 FINANCE",
            proj_2_title: "Sentiment-AI Market Bot",
            proj_2_p: "Natural Language Processing bot filtering market sentiment from news feeds to forecast trends.",
            proj_3_eyebrow: "FINANCE \u00b7 TAX STRATEGY",
            proj_3_title: "Corporate Tax Impact Study",
            proj_3_p: "Comprehensive analysis of Moroccan fiscal frameworks for institutional investment planning.",
            proj_4_eyebrow: "AI \u00b7 MULTI-MODAL",
            proj_4_title: "Deep Recommender System",
            proj_4_p: "Multi-vector recommendation engine for personalized financial product matching."
        },
        fr: {
            nav_about_short: "À propos",
            nav_projects_short: "Projets",
            nav_skills_short: "Compétences",
            nav_contact_short: "Contact",
            hero_name_first: "MOHAMMED",
            hero_name_last: "EZZAHAR",
            hero_eyebrow: "Analyste Financier · Ingénieur IA/Données · Automatisation Comptable",
            hero_tagline: "Ingénierie à l'intersection de l'Intégrité Comptable, de l'Automatisation Python et de l'Intelligence Financière — du Maroc aux marchés mondiaux.",
            hero_status: "Alignement Marché Mondial Actif",
            about_eyebrow: "LA PHILOSOPHIE",
            about_h2: "La Convergence de la <em>Logique et du Capital</em>",
            about_lead: "Réduction d'Erreurs 95% · Précision Fraude 91% · Épargne Fiscale 20% · 5 Projets en Production",
            about_p1: "Un profil hybride rare fusionnant **l'Intégrité Comptable** et **l'Intelligence Financière pilotée par l'IA**. Formé à la rigueur académique de l'**Université Moulay Ismaïl** et éprouvé dans l'écosystème agile des startups chez **ALIFFA**, je me spécialise dans la construction de pipelines d'automatisation de grade audit et de modèles prédictifs transformant le risque institutionnel en avantage stratégique.",
            about_p2: "En tant qu'ingénieur multidisciplinaire, je traduis des mandats complexes de niveau CFO — de l'optimisation fiscale IFRS/GAAP à l'extraction de signaux de sentiment multi-modaux — en environnements Python, SQL et Power BI prêts pour la production. Je suis bâti pour le marché de 2026 : là où la fiabilité comptable rencontre la frontière de la scalabilité de l'IA.",
            projects_eyebrow: "PROJETS SÉLECTIONNÉS",
            projects_h2: "Ingénierie <em>Orientée Marché</em>",
            proj_f_eyebrow: "VEDETTE · FINTECH & IA",
            proj_f_title: "Détection de Fraude & Recommandeur IA",
            proj_f_p: "Classifieur XGBoost de précision 91% et moteur de personnalisation via Transformers pour la gestion d'actifs institutionnels.",
            proj_1_eyebrow: "COMPTABILITÉ · AUTOMATISATION",
            proj_1_title: "Pipeline de Rapprochement Bancaire",
            proj_1_p: "Pipeline ETL automatisé de grade Big 4 matching 100% des populations de transactions via logique floue.",
            proj_2_eyebrow: "DONNÉES ALT · RECHERCHE ACTIONS",
            proj_2_title: "Sentiment-AI Market Bot",
            proj_2_p: "Pipeline NLP utilisant FinBERT pour extraire des signaux de sentiment propriétaires à partir de données Bloomberg/Reuters non structurées.",
            proj_3_eyebrow: "CONSEIL FISCAL · ÉCONOMÉTRIE",
            proj_3_title: "Étude d'Impact Fiscal des Entreprises",
            proj_3_p: "Modélisation diagnostique Power BI pour l'optimisation des Zones Franches marocaines, projection de 20% d'épargne fiscale (IS).",
            proj_4_eyebrow: "IA · GESTION DE PATRIMOINE",
            proj_4_title: "Système de Recommandation Profond",
            proj_4_p: "Moteur de recherche vectorielle en espace latent (FAISS) pour l'appariement de clients fortunés à des produits financiers structurés.",
            skills_eyebrow: "ARSENAL TECHNIQUE",
            skills_h2: "Infrastructure <em>Marché</em>",
            skills_g5: "Modélisation Financière & Valorisation",
            skills_g6: "Cloud, ERP & Infrastructure",
            market_fit_eyebrow: "CIBLE DE CARRIÈRE",
            market_fit_h2: "Alignement <em>Marché</em>",
            market_card_1_h3: "Big 4 & Données d'Audit",
            market_card_1_p: "Deloitte · PwC · EY · KPMG",
            market_card_2_h3: "Banque d'Investissement & Fintech",
            market_card_2_p: "JPMorgan · Goldman Sachs · Firmes FinTech",
            market_card_3_h3: "Finance Quantitative & Recherche",
            market_card_3_p: "Hedge Funds · Gestionnaires d'Actifs · Équipes de Recherche",
            cert_eyebrow: "CERTIFICATIONS",
            cert_h2: "Validation <em>Professionnelle</em>",
            cert_status_completed: "Terminé",
            cert_status_progress: "En Cours",
            cert_1_h3: "Droit Financier Marocain & Cadre Fiscal IS",
            cert_1_p: "Démontré via le projet Étude d'Impact Fiscal",
            cert_2_h3: "Python pour la Data Science",
            cert_2_p: "Démontré via 4+ projets IA de grade production",
            cert_3_h3: "SQL & Ingénierie de Bases de Données",
            cert_3_p: "Démontré via le Pipeline ETL de Rapprochement Bancaire",
            cert_4_h3: "Connaissance des Normes IFRS",
            cert_4_p: "Démontré via le Reporting & Analyse Financière",
            cert_5_h3: "Candidat CFA Niveau 1",
            cert_5_p: "Vise des rôles Seniors en Banque d'Investissement/Hedge Fund",
            cert_6_h3: "FMVA® — Analyste en Modélisation Financière & Valorisation",
            cert_6_p: "CFI Institute · Modélisation Pratique 3-Statement & DCF",
            cert_7_h3: "Analyste de Données Power BI (PL-300)",
            cert_7_p: "Microsoft Certified Associate",
            cert_8_h3: "AWS Cloud Practitioner",
            cert_8_p: "Déploiement de Pipelines IA/Données sur le Cloud",
            contact_lead: "Que vous recrutiez pour l'<strong>analyse financière Big 4</strong>, un rôle en <strong>data science fintech</strong>, ou que vous bâtissiez à l'intersection de l'<strong>IA et de la finance institutionnelle</strong> — je construis des systèmes de grade production qui combinent la rigueur comptable avec la précision du machine learning. Ouvert aux opportunités à plein temps, à distance et à l'international.",
            contact_avail: "Prêt pour les Déploiements Marché 2026",
            contact_h2: "Construisons <em>Quelque Chose de Réel</em>",
            contact_location: "Meknès, Maroc · Disponible à Distance",
            footer_role: "Analyste Financier · Ingénieur IA/Données",
            footer_location: "Meknès, Maroc"
        },
        ar: {
            nav_about_short: "من أنا",
            nav_projects_short: "المشاريع",
            nav_skills_short: "المهارات",
            nav_contact_short: "تواصل",
            hero_name_first: "مـحـمد",
            hero_name_last: "الـزهـر",
            hero_eyebrow: "محلل مالي · مهندس بيانات وذكاء اصطناعي · أتمتة المحاسبة",
            hero_tagline: "هندسة التقاطع بين نزاهة المحاسبة، أتمتة بايثون، والذكاء المالي المدفوع بالذكاء الاصطناعي — من المغرب إلى الأسواق العالمية.",
            hero_status: "تفعيل التوافق مع السوق العالمي",
            about_eyebrow: "الفلسفة",
            about_h2: "التقاء <em>المنطق ورأس المال</em>",
            about_lead: "95% تقليل أخطاء · 91% دقة كشف احتيال · 20% نمذجة توفير ضريبي · 5 مشاريع إنتاجية",
            about_p1: "ملف هجين نادر يربط بين **نزاهة المحاسبة** و **الذكاء المالي المدفوع بالذكاء الاصطناعي**. تدربت على الدقة الأكاديمية في **جامعة مولاي إسماعيل** وصقلت مهاراتي في بيئة الشركات الناشئة عالية المخاطر في **ALIFFA**. أتخصص في بناء مسارات أتمتة من درجة التدقيق ونماذج تنبؤية تحول المخاطر المؤسسية إلى ميزة استراتيجية.",
            about_p2: "كمهندس متعدد التخصصات، أقوم بترجمة مهام مستوى الإدارة المالية المعقدة — من تحسين الضرائب وفق معايير IFRS/GAAP إلى استخراج إشارات المشاعر متعددة الأنماط — إلى بيئات Python و SQL و Power BI جاهزة للإنتاج. أنا مصمم لسوق 2026: حيث تلتقي موثوقية المحاسبة مع آفاق توسع الذكاء الاصطناعي.",
            projects_eyebrow: "أعمال مختارة",
            projects_h2: "هندسة <em>موجهة للسوق</em>",
            proj_f_eyebrow: "مميز · التكنولوجيا المالية والذكاء الاصطناعي",
            proj_f_title: "كشف الاحتيال ونظام التوصية الذكي",
            proj_f_p: "مصنف XGBoost بدقة 91% ومحرك تخصيص قائم على Transformers لإدارة الأصول المؤسسية.",
            proj_1_eyebrow: "المحاسبة · الأتمتة",
            proj_1_title: "مسار مطابقة الحسابات البنكية",
            nav_skills_short: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a",
            nav_contact_short: "\u062a\u0648\u0627\u0635\u0644",
            proj_2_eyebrow: "\u0639\u0644\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u00b7 \u0627\u0644\u0645\u0627\u0644\u064a\u0629",
            proj_2_title: "\u0628\u0648\u062a \u0633\u0648\u0642 \u0627\u0644\u0645\u0634\u0627\u0639\u0631-\u0630\u0643\u0627\u0621",
            proj_2_p: "\u0628\u0648\u062a \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629 \u0644\u062a\u0635\u0641\u064a\u0629 \u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u0633\u0648\u0642 \u0645\u0646 \u0645\u0635\u0627\u062f\u0631 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0644\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a.",
            proj_3_eyebrow: "\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u00b7 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629",
            proj_3_title: "\u062f\u0631\u0627\u0633\u0629 \u062a\u0623\u062b\u064a\u0631 \u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062a",
            proj_3_p: "\u062a\u062d\u0644\u064a\u0644 \u0634\u0627\u0645\u0644 \u0644\u0644\u0623\u0637\u0631 \u0627\u0644\u0636\u0631\u064a\u0628\u064a\u0629 \u0627\u0644\u0645\u063a\u0631\u0628\u064a\u0629 \u0644\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0627\u0644\u0645\u0624\u0633\u0633\u064a.",
            proj_4_eyebrow: "\u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u00b7 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0623\u0648\u0636\u0627\u0639",
            proj_4_title: "\u0646\u0638\u0627\u0645 \u062a\u0648\u0635\u064a\u0629 \u0639\u0645\u064a\u0642",
            proj_4_p: "\u0645\u062d\u0631\u0643 \u062a\u0648\u0635\u064a\u0629 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u062a\u062c\u0647\u0627\u062a \u0644\u0645\u0637\u0627\u0628\u0642\u0629 \u0634\u062e\u0635\u064a\u0629 \u0644\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0645\u0627\u0644\u064a\u0629."
        }
    };

    function switchLanguage(lang) {
        const data = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                el.innerHTML = data[key];
            }
        });

        // Handle direction and language attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('preferred_lang', lang);
    }

    // Event listeners for lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Initialize from local storage
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    switchLanguage(savedLang);

    // --- Project Page Interactivity ---

    // Parallax Effect for Hero
    const heroBg = document.querySelector('.project-detail-hero .hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        });
    }

    // Scroll Reveal for Gallery and Sections
    const revealElements = document.querySelectorAll('.gallery-img, .detail-text h3, .tech-item');
    const projectRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                projectRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        projectRevealObserver.observe(el);
    });
});
