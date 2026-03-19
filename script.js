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
            cta_location: "Meknès, Morocco",
            back_to_projects: "Back to Projects →",
            detail_h_challenge: "The Challenge",
            detail_h_solution: "The Solution",
            detail_role: "Role",
            detail_tech: "Tech Stack",
            detail_impact: "Impact",
            detail_year: "Year",
            proj_f_long_p1: "This mission-critical platform was engineered to handle high-velocity financial data, applying advanced machine learning models to identify risk patterns and optimize asset allocation in real-time.",
            proj_f_challenge: "Financial institutions often struggle with fragmented data and delayed risk signals. The objective was to build a unified engine that could ingest multi-channel data and provide actionable intelligence within milliseconds.",
            proj_f_solution: "We deployed a series of neural networks specialized in time-series forecasting and anomaly detection. By integrating these models directly into the data pipeline, the system achieved a significant reduction in false positives and improved decision accuracy by 35%.",
            proj_f_role: "Lead Developer & Analyst",
            proj_f_impact: "40% Efficiency Gain",
            proj_1_long_p1: "Manual bank reconciliation is slow and error-prone. This project involved building an automated ETL pipeline using Python to match transactions between bank statements and internal accounting records.",
            proj_1_challenge: "Processing thousands of transactions across multiple bank accounts manually was creating a bottleneck during monthly closings. Inconsistent descriptions and date offsets further complicated the matching process.",
            proj_1_solution: "We developed a custom matching algorithm that uses fuzzy logic for description similarity and dynamic date windows for transaction pairing. This automated 80% of the verification process, allowing accountants to focus only on high-risk discrepancies.",
            proj_1_role: "Automation Engineer",
            proj_1_impact: "80% Manual Reduction",
            proj_2_long_p1: "This AI bot monitors financial news and social media sentiment in real-time, using Natural Language Processing (NLP) to gauge potential market movements.",
            proj_2_challenge: "Massive volumes of financial news are published every second. Traders cannot process this manually to identify sentiment shifts that might impact asset prices.",
            proj_2_solution: "We built an NLP pipeline using transformer models to categorize news into bullish, bearish, or neutral sentiments. The system then aggregates these signals per asset, providing a sentiment score that correlates with short-term price volatility.",
            proj_2_role: "AI Researcher",
            proj_2_impact: "Automated News Analysis",
            proj_3_long_p1: "This comprehensive study analyzes the fiscal landscape for corporations in Morocco, offering insights into tax optimization and compliance strategies for institutional investors.",
            proj_3_challenge: "Navigating Moroccan tax laws is complex for foreign and domestic institutional investors. Small changes in legislation can have significant impact on ROI.",
            proj_3_solution: "I developed a diagnostic framework that evaluates tax scenarios for varied investment vehicles. This provided clarity on tax incentives, deferred liabilities, and optimal structuring for a 5-year investment horizon.",
            proj_3_role: "Financial Consultant",
            proj_3_impact: "Strategic Investment Clarity",
            proj_4_long_p1: "This multi-vector recommendation engine was built to match customers with high-end financial products based on their behavioral data and financial history.",
            proj_4_challenge: "Traditional recommendation schemes are often too rigid for the nuanced needs of financial clients. The problem was to capture hidden relationships between risk tolerance, spending habits, and long-term goals.",
            proj_4_solution: "I developed an architecture based on deep embedding networks, projecting users and products into the same latent space. This allowed the system to perform real-time similarity searches, delivering highly personalized product suggestions.",
            proj_4_role: "Lead AI Developer",
            proj_4_impact: "Enhanced Personalization"
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
            cta_location: "Meknès, Maroc",
            back_to_projects: "Retour aux Projets →",
            detail_h_challenge: "Le Défi",
            detail_h_solution: "La Solution",
            detail_role: "Rôle",
            detail_tech: "Technologies",
            detail_impact: "Impact",
            detail_year: "Année",
            proj_f_long_p1: "Cette plateforme critique a été conçue pour gérer des données financières à haute vélocité, en appliquant des modèles d'apprentissage automatique avancés pour identifier les schémas de risque et optimiser l'allocation d'actifs en temps réel.",
            proj_f_challenge: "Les institutions financières luttent souvent contre des données fragmentées et des signaux de risque retardés. L'objectif était de construire un moteur unifié capable d'ingérer des données multicanaux et de fournir une intelligence exploitable en quelques millisecondes.",
            proj_f_solution: "Nous avons déployé une série de réseaux de neurones spécialisés dans la prévision de séries chronologiques et la détection d'anomalies. En intégrant ces modèles directement dans le pipeline de données, le système a réduit considérablement les faux positifs et amélioré la précision des décisions de 35%.",
            proj_f_role: "Développeur Principal & Analyste",
            proj_f_impact: "Gain d'efficacité de 40%",
            proj_1_long_p1: "Le rapprochement bancaire manuel est lent et sujet aux erreurs. Ce projet consistait à construire un pipeline ETL automatisé utilisant Python pour faire correspondre les transactions entre les relevés bancaires et les registres comptables internes.",
            proj_1_challenge: "Le traitement manuel de milliers de transactions sur plusieurs comptes bancaires créait un goulot d'étranglement lors des clôtures mensuelles. Des descriptions incohérentes et des décalages de dates compliquaient davantage le processus de correspondance.",
            proj_1_solution: "Nous avons développé un algorithme de correspondance personnalisé utilisant la logique floue pour la similitude des descriptions et des fenêtres de dates dynamiques pour l'appariement des transactions. Cela a automatisé 80% du processus de vérification.",
            proj_1_role: "Ingénieur en Automatisation",
            proj_1_impact: "Réduction Manuelle de 80%",
            proj_2_long_p1: "Ce bot IA surveille les actualités financières et le sentiment des médias sociaux en temps réel, utilisant le Traitement du Langage Naturel (NLP) pour évaluer les mouvements potentiels du marché.",
            proj_2_challenge: "Des volumes massifs d'actualités financières sont publiés chaque seconde. Les traders ne peuvent pas traiter cela manuellement pour identifier les changements de sentiment.",
            proj_2_solution: "Nous avons construit un pipeline NLP utilisant des modèles transformeurs pour catégoriser les nouvelles en sentiments haussiers, baissiers ou neutres. Le système agrège ensuite ces signaux par actif.",
            proj_2_role: "Chercheur en IA",
            proj_2_impact: "Analyse Automatisée des Nouvelles",
            proj_3_long_p1: "Cette étude complète analyse le paysage fiscal des entreprises au Maroc, offrant des perspectives sur l'optimisation fiscale et les stratégies de conformité pour les investisseurs institutionnels.",
            proj_3_challenge: "Naviguer dans les lois fiscales marocaines est complexe pour les investisseurs institutionnels. De petits changements législatifs peuvent avoir un impact significatif sur le ROI.",
            proj_3_solution: "J'ai développé un cadre de diagnostic qui évalue les scénarios fiscaux pour divers véhicules d'investissement. Cela a apporté de la clarté sur les incitations fiscales et les structures optimales.",
            proj_3_role: "Consultant Financier",
            proj_3_impact: "Clarté de l'Investissement Stratégique",
            proj_4_long_p1: "Ce moteur de recommandation multi-vecteurs a été conçu pour faire correspondre les clients avec des produits financiers haut de gamme en fonction de leurs données comportementales et de leur historique financier.",
            proj_4_challenge: "Les schémas de recommandation traditionnels sont souvent trop rigides. Le problème était de capturer les relations cachées entre la tolérance au risque, les habitudes de dépense et les objectifs à long terme.",
            proj_4_solution: "J'ai développé une architecture basée sur des réseaux d'intégration profonde, projetant les utilisateurs et les produits dans le même espace latent. Cela a permis des recherches de similitude en temps réel.",
            proj_4_role: "Développeur IA Principal",
            proj_4_impact: "Personnalisation Accrue"
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
            cta_location: "مكناس، المغرب",
            back_to_projects: "العودة للمشاريع ←",
            detail_h_challenge: "التحدي",
            detail_h_solution: "الحل",
            detail_role: "الدور",
            detail_tech: "التقنيات المستخدمة",
            detail_impact: "الأثر",
            detail_year: "السنة",
            proj_f_long_p1: "تم تصميم هذه المنصة الحساسة للتعامل مع البيانات المالية عالية السرعة، مع تطبيق نماذج تعلم آلي متقدمة لتحديد أنماط المخاطر وتحسين تخصيص الأصول في الوقت الفعلي.",
            proj_f_challenge: "غالباً ما تعاني المؤسسات المالية من تشتت البيانات وتأخر إشارات المخاطر. كان الهدف هو بناء محرك موحد يمكنه استيعاب البيانات من قنوات متعددة وتقديم معلومات قابلة للتنفيذ في غضون أجزاء من الثانية.",
            proj_f_solution: "قمنا بنشر سلسلة من الشبكات العصبية المتخصصة في التنبؤ بالسلاسل الزمنية وكشف الانحرافات. ومن خلال دمج هذه النماذج مباشرة في تدفق البيانات، حقق النظام انخفاضاً كبيراً في النتائج الإيجابية الخاطئة وحسن دقة القرار بنسبة 35٪.",
            proj_f_role: "مطور رئيسي ومحلل",
            proj_f_impact: "زيادة الكفاءة بنسبة 40٪",
            proj_1_long_p1: "تعد مطابقة الحسابات البنكية اليدوية بطيئة وعرضة للأخطاء. تضمن هذا المشروع بناء تدفق ETL مؤتمت باستخدام بايثون لمطابقة المعاملات بين الكشوف البنكية والسجلات المحاسبية الداخلية.",
            proj_1_challenge: "كانت معالجة آلاف المعاملات عبر حسابات بنكية متعددة يدوياً تخلق عائقاً أثناء الإغلاق الشهري. زاد عدم تناسق الأوصاف وفروق التواريخ من تعقيد عملية المطابقة.",
            proj_1_solution: "قمنا بتطوير خوارزمية مطابقة مخصصة تستخدم المنطق الضبابي لتشابه الأوصاف ونوافذ زمنية ديناميكية لازدواج المعاملات. أدى ذلك إلى أتمتة 80٪ من عملية التحقق.",
            proj_1_role: "مهندس أتمتة",
            proj_1_impact: "تقليل العمل اليدوي بنسبة 80٪",
            proj_2_long_p1: "يقوم هذا البوت المدعوم بالذكاء الاصطناعي بمراقبة الأخبار المالية ومشاعر وسائل التواصل الاجتماعي في الوقت الفعلي، باستخدام معالجة اللغة الطبيعية (NLP) لتقييم تحركات السوق المحتملة.",
            proj_2_challenge: "يتم نشر كميات هائلة من الأخبار المالية كل ثانية. لا يستطيع المتداولون معالجة هذا يدوياً لتحديد التحولات في المشاعر التي قد تؤثر على أسعار الأصول.",
            proj_2_solution: "قمنا ببناء تدفق NLP باستخدام نماذج المحولات لتصنيف الأخبار إلى مشاعر إيجابية أو سلبية أو محايدة. يقوم النظام بعد ذلك بتجميع هذه الإشارات لكل أصل.",
            proj_2_role: "باحث في الذكاء الاصطناعي",
            proj_2_impact: "تحليل أخبار مؤتمت",
            proj_3_long_p1: "تحلل هذه الدراسة الشاملة المنظومة الضريبية للشركات في المغرب، وتقدم رؤى حول تحسين الضرائب واستراتيجيات الامتثال للمستثمرين المؤسسيين.",
            proj_3_challenge: "يعد التنقل في القوانين الضريبية المغربية أمراً معقداً للمستثمرين المؤسسيين. التغييرات الصغيرة في التشريعات يمكن أن يكون لها تأثير كبير على العائد على الاستثمار.",
            proj_3_solution: "قمت بتطوير إطار عمل تشخيصي يقيم السيناريوهات الضريبية لمختلف أوعية الاستثمار. وفر هذا وضوحاً بشأن الحوافز الضريبية والالتزامات المؤجلة والهيكلة المثلى.",
            proj_3_role: "مستشار مالي",
            proj_3_impact: "وضوح الاستثمار الاستراتيجي",
            proj_4_long_p1: "تم بناء محرك التوصية متعدد المتجهات هذا لمطابقة العملاء مع المنتجات المالية الراقية بناءً على بياناتهم السلوكية وتاريخهم المالي.",
            proj_4_challenge: "غالباً ما تكون مخططات التوصية التقليدية جامدة للغاية لاحتياجات العملاء الماليين. كانت المشكلة تكمن في التقاط العلاقات الخفية بين تحمل المخاطر وعادات الإنفاق والأهداف طويلة المدى.",
            proj_4_solution: "قمت بتطوير بنية تعتمد على شبكات التضمين العميق، لعرض المستخدمين والمنتجات في نفس المساحة الكامنة. أدى هذا إلى تمكين عمليات البحث عن التشابه في الوقت الفعلي.",
            proj_4_role: "مطور ذكاء اصطناعي رئيسي",
            proj_4_impact: "تعزيز التخصيص الشخصي"

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
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });
});
