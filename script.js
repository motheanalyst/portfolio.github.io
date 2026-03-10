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
    const gridSelectors = ['.method-grid', '.projects-grid', '.skills-grid', '.about-text'];
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
            nav_about: "01 About",
            nav_experience: "02 Experience",
            nav_projects: "03 Projects",
            nav_skills: "04 Skills",
            hero_name_first: "MOHAMMED",
            hero_name_last: "EZZAHAR",
            hero_eyebrow: "Financial & Data Analyst",
            hero_tagline: "Mastery in Accounting & AI Modeling",
            hero_status: "Active Analysis",
            about_eyebrow: "THE PHILOSOPHY",
            about_h2: "The Convergence of <em>Logic & Capital</em>",
            about_lead: "Bridge the gap between raw data and monumental decisions. My approach transcends simple analysis—it is about architecting clarity in a world of financial noise.",
            about_p1: "Rooted in the academic precision of <strong>Université Moulay Ismail</strong> and forged in the high-stakes environment of <strong>ALIFFA Startup</strong>, my work represents a rare synthesis of <strong>Accounting Integrity</strong> and <strong>AI-Driven Innovation</strong>.",
            about_p2: "As a Co-founder and CFO/CTO, I don't just build models; I engineer strategic advantages. From national finals to elite-level tax optimization, my mission is to deliver the technical certainty the global market demands.",
            about_s1: "Strategic Vision",
            about_s2: "Technical Depth",
            about_s3: "Fiscal Precision",
            method_eyebrow: "MY METHODOLOGY",
            method_h2: "From Data <em>To Decision</em>",
            method_c1_h: "Extraction",
            method_c1_p: "Gathering raw financial and commercial data from diverse digital and institutional sources.",
            method_c2_h: "Processing",
            method_c2_p: "Applying AI models and accounting logic to clean, structure, and validate information integrity.",
            method_c3_h: "Analysis",
            method_c3_p: "Identifying trends, risks, and strategic opportunities using advanced financial frameworks.",
            method_c4_h: "Reporting",
            method_c4_p: "Delivering high-end dashboards and actionable intelligence for professional stakeholders.",
            projects_eyebrow: "SELECTED WORKS",
            projects_h2: "Portfolio <em>Excellence</em>",
            proj_f_eyebrow: "FEATURED · FINTECH & AI",
            proj_f_title: "Fintech & AI Analytics Engine",
            proj_f_p: "A comprehensive risk management platform specializing in the deployment of AI for real-time asset management and automated data analysis.",
            proj_1_eyebrow: "ACCOUNTING · AUTOMATION",
            proj_1_title: "Bank Reconciliation Pipeline",
            proj_1_p: "Automated reconciliation system reducing manual verification by 80% using custom Python logic.",
            proj_2_eyebrow: "DATA SCIENCE · FINANCE",
            proj_2_title: "Sentiment-AI Market Bot",
            proj_2_p: "Natural Language Processing bot filtering market sentiment from news feeds to forecast trends.",
            proj_3_eyebrow: "FINANCE · TAX STRATEGY",
            proj_3_title: "Corporate Tax Impact Study",
            proj_3_p: "Comprehensive analysis of Moroccan fiscal frameworks for institutional investment planning.",
            proj_4_eyebrow: "AI · MULTI-MODAL",
            proj_4_title: "Deep Recommender System",
            proj_4_p: "Multi-vector recommendation engine for personalized financial product matching.",
            proj_view_arch: "Review Architecture →",
            skills_h2: "Technical <em>Infrastructure</em>",
            skills_g1: "PROGRAMMING",
            skill_excel: "VBA / Excel",
            skills_g2: "DATA ANALYSIS & BI",
            skills_g3: "FINANCE & ACCOUNTING",
            skill_modeling: "Financial Modeling",
            skill_tax: "Tax Planning (Moroccan Law)",
            skills_g4: "SOFT SKILLS & STRATEGY",
            skill_politics: "Politics & Geopolitics Understanding",
            skill_critical: "Critical Thinking & Analysis",
            skill_comm: "Strategic Communication",
            cta_h2: "Let's Build the <em>Future of Finance</em>",
            cta_p: "Open for collaborations in Data Engineering, Financial Analysis, and AI Research.",
            cta_location: "Meknès, Morocco"
        },
        fr: {
            nav_about: "01 À propos",
            nav_experience: "02 Expérience",
            nav_projects: "03 Projets",
            nav_skills: "04 Compétences",
            hero_name_first: "MOHAMMED",
            hero_name_last: "EZZAHAR",
            hero_eyebrow: "Analyste Financier & de Données",
            hero_tagline: "Maîtrise de la Comptabilité et de la Modélisation IA",
            hero_status: "Analyse Active",
            about_eyebrow: "LA PHILOSOPHIE",
            about_h2: "La Convergence de la <em>Logique et du Capital</em>",
            about_lead: "Combler le fossé entre les données brutes et les décisions monumentales. Mon approche transcende l'analyse simple—il s'agit d'architecturer la clarté dans un monde de bruit financier.",
            about_p1: "Enraciné dans la précision académique de l'<strong>Université Moulay Ismaïl</strong> et forgé dans l'environnement à enjeux élevés de la <strong>Startup ALIFFA</strong>, mon travail représente une synthèse rare d'<strong>Intégrité Comptable</strong> et d'<strong>Innovation Guidée par l'IA</strong>.",
            about_p2: "En tant que co-fondateur et CFO/CTO, je ne me contente pas de construire des modèles ; j'ingénie des avantages stratégiques. Des finales nationales à l'optimisation fiscale d'élite, ma mission est de fournir la certitude technique qu'exige le marché mondial.",
            about_s1: "Vision Stratégique",
            about_s2: "Profondeur Technique",
            about_s3: "Précision Fiscale",
            method_eyebrow: "MA MÉTHODOLOGIE",
            method_h2: "Des Données <em>à la Décision</em>",
            method_c1_h: "Extraction",
            method_c1_p: "Collecte de données financières et commerciales brutes à partir de diverses sources numériques et institutionnelles.",
            method_c2_h: "Traitement",
            method_c2_p: "Application de modèles d'IA et de logique comptable pour nettoyer, structurer et valider l'intégrité de l'information.",
            method_c3_h: "Analyse",
            method_c3_p: "Identification des tendances, des risques et des opportunités stratégiques à l'aide de cadres financiers avancés.",
            method_c4_h: "Reporting",
            method_c4_p: "Livraison de tableaux de bord haut de gamme et d'intelligence exploitable pour les parties prenantes professionnelles.",
            projects_eyebrow: "TRAVAUX SÉLECTIONNÉS",
            projects_h2: "Excellence du <em>Portfolio</em>",
            proj_f_eyebrow: "VEDETTE · FINTECH & IA",
            proj_f_title: "Moteur d'Analyse Fintech & IA",
            proj_f_p: "Une plateforme complète de gestion des risques spécialisée dans le déploiement de l'IA pour la gestion d'actifs en temps réel.",
            proj_1_eyebrow: "COMPTABILITÉ · AUTOMATISATION",
            proj_1_title: "Pipeline de Rapprochement Bancaire",
            proj_1_p: "Système de rapprochement automatisé réduisant la vérification manuelle de 80% grâce à Python.",
            proj_2_eyebrow: "DATA SCIENCE · FINANCE",
            proj_2_title: "Bot de Marché Sentiment-IA",
            proj_2_p: "Bot de traitement du langage naturel filtrant le sentiment du marché pour prévoir les tendances.",
            proj_3_eyebrow: "FINANCE · STRATÉGIE FISCALE",
            proj_3_title: "Étude d'Impact Fiscal des Entreprises",
            proj_3_p: "Analyse complète des cadres fiscaux marocains pour la planification des investissements institutionnels.",
            proj_4_eyebrow: "IA · MULTIMODAL",
            proj_4_title: "Système de Recommandation Profonde",
            proj_4_p: "Moteur de recommandation multi-vecteurs pour un appariement personnalisé de produits financiers.",
            proj_view_arch: "Consulter l'Architecture →",
            skills_h2: "Infrastructure <em>Technique</em>",
            skills_g1: "PROGRAMMATION",
            skill_excel: "VBA / Excel",
            skills_g2: "ANALYSE DE DONNÉES & BI",
            skills_g3: "FINANCE & COMPTABILITÉ",
            skill_modeling: "Modélisation Financière",
            skill_tax: "Planification Fiscale (Droit Marocain)",
            skills_g4: "SOFT SKILLS & STRATÉGIE",
            skill_politics: "Compréhension Politique et Géopolitique",
            skill_critical: "Pensée Critique et Analyse",
            skill_comm: "Communication Stratégique",
            cta_h2: "Bâtissons l'<em>Avenir de la Finance</em>",
            cta_p: "Ouvert aux collaborations en ingénierie des données, analyse financière et recherche en IA.",
            cta_location: "Meknès, Maroc"
        },
        ar: {
            nav_about: "01 من أنا",
            nav_experience: "02 الخبرة",
            nav_projects: "03 المشاريع",
            nav_skills: "04 المهارات",
            hero_name_first: "مـحـمد",
            hero_name_last: "الـزهـر",
            hero_eyebrow: "محلل مالي ومحلل بيانات",
            hero_tagline: "إتقان المحاسبة ونمذجة الذكاء الاصطناعي",
            hero_status: "تحليل نشط",
            about_eyebrow: "الفلسفة",
            about_h2: "التقاء <em>المنطق ورأس المال</em>",
            about_lead: "سد الفجوة بين البيانات الخام والقرارات المصيرية. نهجي يتجاوز التحليل البسيط - يتعلق الأمر بهيكلة الوضوح في عالم من الضجيج المالي.",
            about_p1: "متجذر في الدقة الأكاديمية لـ <strong>جامعة مولاي إسماعيل</strong> ومصقول في بيئة المخاطر العالية لـ <strong>شركة أليفا الناشئة</strong>، يمثل عملي تركيبًا نادرًا بين <strong>نزاهة المحاسبة</strong> و <strong>الابتكار المدفوع بالذكاء الاصطناعي</strong>.",
            about_p2: "بصفتي مؤسسًا مشاركًا ومديرًا ماليًا وتقنيًا، أنا لا أبني نماذج فحسب؛ بل أصنع مزايا استراتيجية. من النهائيات الوطنية إلى تحسين الضرائب على مستوى النخبة، مهمتي هي تقديم اليقين التقني الذي يتطلبه السوق العالمي.",
            about_s1: "الرؤية الاستراتيجية",
            about_s2: "العمق التقني",
            about_s3: "الدقة المالية",
            method_eyebrow: "منهجيتي",
            method_h2: "من البيانات <em>إلى القرار</em>",
            method_c1_h: "الاستخراج",
            method_c1_p: "جمع البيانات المالية والتجارية الخام من مصادر رقمية ومؤسسية متنوعة.",
            method_c2_h: "المعالجة",
            method_c2_p: "تطبيق نماذج الذكاء الاصطناعي ومنطق المحاسبة لتنظيف وهيكلة والتحقق من سلامة المعلومات.",
            method_c3_h: "التحليل",
            method_c3_p: "تحديد الاتجاهات والمخاطر والفرص الاستراتيجية باستخدام أطر مالية متقدمة.",
            method_c4_h: "التقارير",
            method_c4_p: "تقديم لوحات معلومات عالية المستوى ومعلومات استخباراتية قابلة للتنفيذ لأصحاب المصلحة المهنيين.",
            projects_eyebrow: "أعمال مختارة",
            projects_h2: "تميز <em>المحفظة</em>",
            proj_f_eyebrow: "مميز · التكنولوجيا المالية والذكاء الاصطناعي",
            proj_f_title: "محرك تحليلات التكنولوجيا المالية والذكاء الاصطناعي",
            proj_f_p: "منصة شاملة لإدارة المخاطر مخصصة لنشر الذكاء الاصطناعي لإدارة الأصول في الوقت الفعلي وتحليل البيانات التلقائي.",
            proj_1_eyebrow: "المحاسبة · الأتمتة",
            proj_1_title: "مسار مطابقة الحسابات البنكية",
            proj_1_p: "نظام مطابقة مؤتمت يقلل من التحقق اليدوي بنسبة 80٪ باستخدام منطق بايثون المخصص.",
            proj_2_eyebrow: "علم البيانات · المالية",
            proj_2_title: "بوت تتبع مشاعر السوق بالذكاء الاصطناعي",
            proj_2_p: "بوت معالجة اللغة الطبيعية لتصنيف مشاعر السوق من موجزات الأخبار للتنبؤ بالاتجاهات.",
            proj_3_eyebrow: "المالية · الاستراتيجية الضريبية",
            proj_3_title: "درساة تأثير ضريبة الشركات",
            proj_3_p: "تحليل شامل للأطر المالية المغربية لتخطيط الاستثمار المؤسسي.",
            proj_4_eyebrow: "الذكاء الاصطناعي · متعدد الوسائط",
            proj_4_title: "نظام توصية عميق",
            proj_4_p: "محرك توصية متعدد المتجهات لمطابقة المنتجات المالية الشخصية.",
            proj_view_arch: "مراجعة الهندسة البرمجية ←",
            skills_h2: "البنية التحتية <em>التقنية</em>",
            skills_g1: "البرمجة",
            skill_excel: "VBA / Excel",
            skills_g2: "تحليل البيانات وذكاء الأعمال",
            skills_g3: "المالية والمحاسبة",
            skill_modeling: "النمذجة المالية",
            skill_tax: "التخطيط الضريبي (القانون المغربي)",
            skills_g4: "المهارات الشخصية والاستراتيجية",
            skill_politics: "فهم السياسة والجيوسياسة",
            skill_critical: "التفكير النقدي والتحليل",
            skill_comm: "التواصل الاستراتيجي",
            cta_h2: "لنبنِ <em>مستقبل التمويل</em>",
            cta_p: "متاح للتعاون في هندسة البيانات والتحليل المالي وأبحاث الذكاء الاصطناعي.",
            cta_location: "مكناس، المغرب"
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
});
