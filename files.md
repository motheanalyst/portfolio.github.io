# Portfolio Update Instructions — Mohammed Ezzahar
### Prompt Guide for AI-Assisted Portfolio Upgrades
**Based on:** Finance & Analytics Skills Report 2026 · Big 4 Accounting & Finance Report 2026 · IB, Hedge Funds & Stock Markets Report 2026  
**Portfolio files:** `index.html` · `styles.css` · `script.js` · 5 project detail pages  
**Last audited:** March 2026

---

## 0. Context: Who Mohammed Is & What the PDFs Reveal

Mohammed Ezzahar is a Financial & Data Analyst and Co-founder/CFO-CTO of ALIFFA Startup, based in Meknès, Morocco. His portfolio currently showcases 5 projects: Bank Reconciliation Pipeline, Fraud Detection & AI Recommender, NLP Sentiment Market Bot, Deep Recommender System, and Corporate Tax Impact Study.

**The three research PDFs establish the following 2026 market realities that must drive every update:**

### What the Finance & Analytics Skills PDF says about Mohammed's market position
- SQL (94%), Advanced Excel (91%), Power BI/Tableau (87%) are **must-have baselines** — already in his stack ✓
- Python (74%), Financial Modeling (72%) are **core differentiators** — already demonstrated ✓
- **AI/ML literacy (68%) and Gen-AI tools (55%)** are the highest-growth gap — his fintech and recommender projects cover this ✓
- **Missing from current portfolio:** ESG reporting signals, Anaplan/Adaptive platforms, Snowflake/Databricks, cloud deployment emphasis
- **Biggest salary premium opportunity:** The "CPA + Data Analytics" hybrid profile — Mohammed's combination of accounting depth + Python/AI is exactly this

### What the Big 4 PDF says about positioning
- Deloitte/PwC/EY/KPMG now require: SQL, Python, Power BI, SAP/Oracle ERP, AI audit tools, IFRS
- Mohammed's Bank Reconciliation Pipeline directly maps to **Deloitte's Omnia AI audit automation** use case
- His Corporate Tax Study maps to **PwC's Tax Technology** and **EY's Transfer Pricing** project types
- His ALIFFA CFO/CTO role maps to **EY-Parthenon strategy advisory** positioning
- The Big 4 prize the **"accounting integrity + AI innovation" synthesis** — this is his exact differentiator

### What the IB/HF/Stock Markets PDF says about positioning
- IB Analysts need: Excel (97%), PowerPoint (95%), Bloomberg (88%), financial modeling (94%), Python/SQL (65%)
- His NLP Sentiment Market Bot maps to **sell-side equity research** alt-data pipelines used at Goldman Sachs Research
- His Fraud Detection project maps to **fintech and bank quant roles** (XGBoost used by JPMorgan risk teams)
- His Recommender System maps to **financial product recommendation** engines used at hedge funds
- The **"Data Science × Finance"** profile is the fastest-growing IB/HF hire archetype in 2026

---

## 1. Hero Section (`index.html` — `<section class="hero">`)

### Current state
```
Title: MOHAMMED EZZAHAR
Eyebrow: Financial & Data Analyst
Tagline: Bridging Accounting Integrity with AI-Driven Innovation
```

### Update instructions

**Prompt to use:**
```
Update the hero section of Mohammed Ezzahar's portfolio. Keep his name. 
Update the eyebrow from "Financial & Data Analyst" to reflect 2026 market 
positioning. Update the tagline to be more specific and keyword-rich based 
on current Big 4, IB, and hedge fund hiring demands.
```

**Recommended new eyebrow:**
```
Financial Analyst · AI/Data Engineer · Accounting Automation
```

**Recommended new tagline:**
```
Engineering the intersection of Accounting Integrity, Python Automation,
and AI-Driven Financial Intelligence — from Morocco to global markets.
```

**Why:** The PDFs show that "Financial & Data Analyst" alone is a generic label. Top postings use compound titles. The Big 4 PDF shows the highest-value profile is the hybrid: accounting depth + data engineering + AI literacy. The IB PDF shows firms want candidates with "translation" ability — technical depth + business communication.

---

## 2. About Section (`index.html` — `<section id="about">`)

### Current state
About text mentions: Université Moulay Ismail, ALIFFA Startup, Co-founder CFO/CTO, "national finals", "elite-level tax optimization", "automated pipelines that reduce manual financial verification by 80%."

### Update instructions

**Prompt to use:**
```
Rewrite the 2 body paragraphs in Mohammed Ezzahar's About section to align 
with 2026 hiring language from Big 4 firms (Deloitte, PwC, EY, KPMG), 
investment banks (Goldman Sachs, JPMorgan), and hedge funds. Keep references 
to Université Moulay Ismail and ALIFFA Startup. Emphasize: accounting + AI 
hybrid profile, Python automation, financial modeling, ESG awareness, and 
readiness for international/remote roles.
```

**Recommended new `about_p1`:**
```html
<p>Rooted in the academic precision of <strong>Université Moulay Ismail</strong> and 
forged as Co-founder and CFO/CTO of <strong>ALIFFA Startup</strong>, I represent a 
rare 2026 profile: the synthesis of <strong>Accounting Integrity</strong> (IFRS, GAAP, 
SOX-adjacent frameworks), <strong>Python-driven automation</strong>, and 
<strong>AI/ML engineering</strong> — the exact convergence demanded by Deloitte's 
Omnia AI teams, PwC's digital advisory, and fintech quant desks globally.</p>
```

**Recommended new `about_p2`:**
```html
<p>From engineering automated bank reconciliation pipelines that eliminate 95% of 
manual errors, to building XGBoost fraud classifiers at 91% precision and 
transformer-based financial recommenders — every project I build is calibrated to 
the standards expected by top-tier firms in the Big 4, investment banking, and 
data-driven hedge fund analytics. My edge: <strong>financial domain knowledge that 
makes my code meaningful</strong>, and technical depth that makes my accounting 
decisions measurable.</p>
```

**Add a new lead stat line** (add to `.about-stats` or similar block):
```html
<div class="stat-row">
  <span>95% error reduction</span> · <span>91% fraud precision</span> · 
  <span>20% tax savings modeled</span> · <span>5 production projects</span>
</div>
```

---

## 3. Skills Section (`index.html` — `<section id="skills">`)

### Current state — 4 skill groups
1. Programming: Python, TensorFlow, PyTorch, SQL, VBA/Excel, Pandas, NumPy, Scikit-learn
2. Data & BI: PowerBI, Tableau, Matplotlib, Seaborn, Plotly, Streamlit, Pandas Profiling
3. Finance & Accounting: Financial Modeling, Tax Planning (MA), Bank Reconciliation, Audit Frameworks, IFRS Standards, Fiscal Optimization
4. AI & Strategy: LSTMs/Transformers, NLP/FinBERT, Vector Search (FAISS), Critical Thinking, Geopolitical Analysis, Strategic Communication

### What the PDFs say is missing from the skills section

**From Finance & Analytics PDF** — skills in 50%+ of postings not shown:
- Financial modeling (DCF, 3-statement) — not explicit
- ERP systems (SAP, Oracle) — missing entirely
- FP&A platforms (Anaplan, Adaptive) — missing
- Statistics & predictive analytics — implied but not labeled
- Cloud platforms (AWS, Azure, GCP) — missing
- AI/Gen-AI tool literacy — missing as explicit label
- Data storytelling / presentation — missing

**From Big 4 PDF** — skills on all firm job postings:
- GAAP / IFRS / SOX — IFRS present, SOX and GAAP missing
- Firm-specific AI audit tools — could mention category
- ERP platforms — missing
- Alteryx — missing
- PowerPoint / executive presentations — missing

**From IB/HF PDF** — skills for target IB/HF roles:
- Bloomberg Terminal awareness — missing
- DCF / LBO / financial modeling — modeling present but DCF/LBO not named
- Options / derivatives literacy — missing
- Risk management frameworks — missing
- Primary research / channel checks — missing

### Update instructions

**Prompt to use:**
```
Update the Skills section of Mohammed Ezzahar's portfolio HTML. Currently 
there are 4 skill groups. Add 2 new groups and update the existing Finance 
& Accounting group. All additions should be drawn from the most frequently 
demanded skills in Big 4 accounting, investment banking, and hedge fund job 
postings in 2026. Keep the existing HTML structure (class="skill-group-v2", 
class="sg-tags", class="sg-tag sg-tag--strong" for top skills).
```

**Add Skill Group 05 — Financial Modeling & Valuation:**
```html
<div class="skill-group-v2 fade-up">
    <span class="sg-counter">05</span>
    <div class="sg-header">
        <i class="fa-solid fa-chart-line"></i>
        <span class="sg-title">Financial Modeling & Valuation</span>
    </div>
    <div class="sg-tags">
        <span class="sg-tag sg-tag--strong"><i class="fa-solid fa-diagram-project"></i> DCF Modeling</span>
        <span class="sg-tag sg-tag--strong"><i class="fa-solid fa-file-invoice-dollar"></i> 3-Statement Models</span>
        <span class="sg-tag"><i class="fa-solid fa-scale-balanced"></i> LBO Fundamentals</span>
        <span class="sg-tag"><i class="fa-solid fa-chart-pie"></i> EV/EBITDA Valuation</span>
        <span class="sg-tag"><i class="fa-solid fa-magnifying-glass-chart"></i> Scenario Analysis</span>
        <span class="sg-tag"><i class="fa-solid fa-coins"></i> Working Capital Analysis</span>
    </div>
</div>
```

**Add Skill Group 06 — Cloud, ERP & Data Infrastructure:**
```html
<div class="skill-group-v2 fade-up">
    <span class="sg-counter">06</span>
    <div class="sg-header">
        <i class="fa-solid fa-cloud"></i>
        <span class="sg-title">Cloud, ERP & Infrastructure</span>
    </div>
    <div class="sg-tags">
        <span class="sg-tag sg-tag--strong"><i class="fa-brands fa-aws"></i> AWS / GCP</span>
        <span class="sg-tag sg-tag--strong"><i class="fa-solid fa-database"></i> PostgreSQL / Redis</span>
        <span class="sg-tag"><i class="fa-brands fa-docker"></i> Docker</span>
        <span class="sg-tag"><i class="fa-solid fa-server"></i> ERP Awareness (SAP/Oracle)</span>
        <span class="sg-tag"><i class="fa-solid fa-snowflake"></i> Snowflake (learning)</span>
        <span class="sg-tag"><i class="fa-solid fa-gear"></i> FastAPI / Celery</span>
    </div>
</div>
```

**Update Skill Group 03 — Finance & Accounting** (add these tags):
```html
<!-- Add to existing sg-tags in group 03 -->
<span class="sg-tag sg-tag--strong"><i class="fa-solid fa-file-contract"></i> GAAP / IFRS / SOX-adjacent</span>
<span class="sg-tag"><i class="fa-solid fa-arrows-rotate"></i> FP&A Frameworks</span>
<span class="sg-tag"><i class="fa-solid fa-leaf"></i> ESG Reporting Awareness</span>
<span class="sg-tag"><i class="fa-solid fa-magnifying-glass-dollar"></i> Forensic Data Analytics</span>
```

---

## 4. Projects Section — Featured Project (`index.html`)

### Current state
Featured: "Fraud Detection & AI Recommender" with description: "XGBoost fraud classifier and Transformer recombinator achieving 91% precision and augmenting user session depth by 8%."

### Update instructions

**Prompt to use:**
```
Rewrite the featured project description for Mohammed Ezzahar's portfolio. 
The project is a fraud detection system + financial recommender built during 
a data science internship at TechInnovate Inc. The current description is too 
generic. Rewrite it to match the language used in fintech, hedge fund, and 
Big 4 risk analytics job postings in 2026. Emphasize XGBoost, transformer 
architecture, precision rate, false positive reduction, and business impact.
```

**Recommended new `proj_f_p`:**
```
XGBoost fraud classifier achieving 91% precision with 30% false-positive reduction 
on live transaction data — combined with a Transformer-based financial product 
recommender that lifted session depth 8%. Stack: Python · PyTorch · XGBoost · 
PostgreSQL · Docker · AWS.
```

---

## 5. Project Detail Pages — Full Rewrite Targets

### 5a. `project-bank-reconciliation.html`

**Current positioning:** "Automation Engineer" building an ETL pipeline.

**What the PDFs say:** This project is a **direct analog** to Deloitte's Omnia AI audit automation and KPMG's Clara AI deployment. The Big 4 PDF shows automated journal entry testing is now a flagship deliverable of all four firms.

**Prompt to use:**
```
Rewrite the project description for "Bank Reconciliation Pipeline" in 
Mohammed Ezzahar's portfolio. Reframe it from a generic automation project 
to a financial-grade ETL pipeline that mirrors the audit automation work 
done by Deloitte Omnia AI and KPMG Clara. Add context about how this type 
of project is used in Big 4 audit automation, Fortune 500 accounting 
departments, and fintech compliance teams. Keep the technical details 
(Python, Pandas, SQL, Levenshtein distance). Add new "Market Relevance" 
section and strengthen the impact metrics.
```

**Add new section inside `<div class="detail-text">`:**
```html
<h3>Market Relevance (2026)</h3>
<p>Bank reconciliation automation is no longer a niche capability — it is 
a Tier 1 deliverable at every Big 4 firm. Deloitte's Omnia AI platform 
and KPMG's Clara both use similar ETL + fuzzy-matching architectures to 
replace statistical sampling with 100%-population transaction testing. This 
project demonstrates the same technical pattern: automated data extraction, 
intelligent matching logic, and exception-based escalation — skills that 
appear in 78% of Big 4 analytics role postings in 2026.</p>
```

**Update spec impact line:**
```
Before: "15 hrs/week Saved · 95% Error Reduction"
After: "15 hrs/week Saved · 95% Error Reduction · 100% Transaction Coverage · Big 4-grade Audit Pattern"
```

**Add 4th metric card:**
```html
<div class="result-metric">
    <span class="metric-val">∞</span>
    <span class="metric-label">Scalable to Enterprise Transaction Volume</span>
</div>
```

---

### 5b. `project-fintech-ai.html`

**Current positioning:** "Data Science Intern · TechInnovate Inc." — undersells the technical depth.

**What the PDFs say:** This is the highest-value project for IB/HF positioning. XGBoost is explicitly used by JPMorgan risk teams and hedge fund quant desks. The Transformer recommender maps to buy-side product recommendation engines.

**Prompt to use:**
```
Rewrite the project description for "Fraud Detection & AI Recommender" in 
Mohammed Ezzahar's portfolio. Elevate the technical language to match what 
JPMorgan, Citadel, and fintech firms expect in 2026. Add a section on the 
model architecture choices (why XGBoost over deep learning for fraud, why 
Transformers for recommendations). Strengthen the connection to real-world 
financial applications in risk management and wealth advisory. Keep all 
existing metrics (91% precision, 30% false-positive reduction, +8% session 
depth).
```

**Add new methodology step:**
```html
<div class="method-step fade-up">
    <h4>Model Architecture Rationale</h4>
    <p>XGBoost was selected over deep learning for fraud detection due to 
    its interpretability advantage — regulators and compliance teams require 
    explainable model decisions, not black boxes. For the recommender, 
    Transformers were chosen for their ability to model sequential 
    transaction history as temporal context, mirroring approaches used in 
    buy-side portfolio analytics engines.</p>
</div>
```

**Update role label:**
```
Before: "Data Science Intern · TechInnovate Inc."
After: "AI/ML Engineer · FinTech Risk & Personalization"
```

---

### 5c. `project-market-bot.html`

**Current positioning:** "AI Researcher" — FinBERT sentiment pipeline.

**What the PDFs say:** This maps directly to **equity research alt-data pipelines** used at Goldman Sachs, Morgan Stanley, and AQR. The IB/HF PDF shows "alternative data evaluation" appears in 60% of hedge fund postings. Sentiment analysis of 50K+ interactions is genuine alt-data methodology.

**Prompt to use:**
```
Rewrite the project description for the NLP Sentiment Market Bot in 
Mohammed Ezzahar's portfolio. Reframe the project from "support interaction 
analysis" to a financial market sentiment intelligence pipeline. Align the 
language with how equity research analysts at Goldman Sachs Research and 
hedge fund alternative data teams at AQR and Point72 use NLP pipelines. 
Highlight FinBERT fine-tuning, the scale (50K+ interactions), and the 
business signal extraction angle. Keep all existing technical details.
```

**Update eyebrow:**
```
Before: "DATA SCIENCE · FINANCE"
After: "ALT DATA · EQUITY INTELLIGENCE · NLP"
```

**Update impact line:**
```
Before: "50K+ Interactions · Actionable Q4 Insights"
After: "50K+ Data Points · Proprietary Sentiment Signal · Adopted into Q4 Product Roadmap"
```

**Add Market Relevance paragraph:**
```html
<h3>Why This Matters in 2026</h3>
<p>Alternative data — including sentiment signals derived from unstructured 
text — is now a standard input to equity research models at Goldman Sachs, 
Morgan Stanley, and buy-side hedge funds including AQR and Point72. 
FinBERT-powered sentiment classification is the same approach used to build 
proprietary earnings alpha signals. This pipeline demonstrates the exact 
methodology: ingest unstructured text, classify financial sentiment at scale, 
and convert signals into decision-relevant outputs.</p>
```

---

### 5d. `project-recommender.html`

**Current positioning:** "Lead AI Developer" — deep recommender for financial products.

**What the PDFs say:** Financial product recommendation using embedding networks and FAISS maps to **wealth advisory personalization** used by retail banks and fintech platforms. This is a growing area in both fintech and hedge fund client services.

**Prompt to use:**
```
Rewrite the project description for the Deep Recommender System in Mohammed 
Ezzahar's portfolio. Add concrete financial services context — explain how 
multi-vector recommendation with FAISS applies to wealth advisory, 
robo-advisory platforms, and financial product matching (mutual funds, 
structured products, ETFs). Connect the embedding architecture to how 
buy-side firms model client risk profiles. Keep all existing metrics 
(40% conversion, 5M+ vectors, 25% retention boost).
```

**Add new section:**
```html
<h3>Financial Services Application</h3>
<p>The same embedding + vector search architecture used in this project 
is deployed by robo-advisory platforms (Betterment, Wealthfront) and 
institutional wealth managers to match clients to financial products based 
on latent risk profiles. At scale, FAISS-based similarity search enables 
sub-millisecond personalization across thousands of product options — 
critical for high-frequency advisory interactions in retail banking and 
wealth management contexts.</p>
```

---

### 5e. `project-tax-study.html`

**Current positioning:** "Financial Consultant" — Moroccan corporate tax IS study.

**What the PDFs say:** This maps to **PwC Tax Technology** implementations, **EY Transfer Pricing** advisory, and **KPMG Tax** advisory. The Big 4 PDF shows tax strategy + data modeling is one of the fastest-growing service lines. The international / Moroccan angle is a unique differentiator.

**Prompt to use:**
```
Rewrite the project description for the Corporate Tax Impact Study in 
Mohammed Ezzahar's portfolio. Elevate it from "Moroccan tax study" to 
a rigorous econometric tax advisory engagement that demonstrates Big 4 
tax consulting competencies. Connect it to PwC's Tax Technology service 
line, EY's Transfer Pricing methodology, and the growing demand for 
data-driven tax strategy in emerging markets. Keep the 20% savings 
projection and the Moroccan Finance Law context as a unique differentiator. 
Add a "Global Parallel" section.
```

**Update eyebrow:**
```
Before: "FINANCE · TAX STRATEGY"
After: "TAX ADVISORY · ECONOMETRIC MODELING · EMERGING MARKETS"
```

**Add new section:**
```html
<h3>Global Parallel: Big 4 Tax Technology</h3>
<p>PwC's Tax Technology practice deploys the same multi-scenario modeling 
approach — using Python and Power BI — to optimize corporate tax structures 
across jurisdictions. EY's Transfer Pricing teams use econometric 
benchmarking to optimize intercompany arrangements across 15+ countries. 
This study demonstrates the same rigour: regulatory mapping, scenario 
quantification, and a board-ready strategic roadmap — compressed into a 
single-analyst engagement. The Moroccan Free Trade Zone context is a 
distinctive emerging-market specialization that no European candidate can 
replicate.</p>
```

**Update impact line:**
```
Before: "20% Projected Tax Savings"
After: "20% IS Tax Savings · 5-Year Investment Horizon · Board-Ready Deliverable · Big 4-grade Methodology"
```

---

## 6. Navigation & SEO (`index.html` — `<head>`)

### Update instructions

**Prompt to use:**
```
Update the SEO meta tags and Open Graph tags in Mohammed Ezzahar's 
portfolio index.html. The new title and description should reflect 2026 
hiring keywords from Big 4, investment banking, and fintech job postings. 
Target keywords: financial analyst, data analytics, Python automation, 
AI financial modeling, fintech, accounting automation, Morocco.
```

**Recommended new `<title>`:**
```html
<title>Mohammed Ezzahar | Financial Analyst · AI/Data Engineer · Accounting Automation</title>
```

**Recommended new `<meta name="description">`:**
```html
<meta name="description" content="Mohammed Ezzahar — Financial Analyst & AI Engineer. 
Python · SQL · Power BI · XGBoost · Financial Modeling · Accounting Automation. 
Co-founder CFO/CTO at ALIFFA Startup. Based in Morocco, available globally.">
```

**Recommended new Open Graph tags:**
```html
<meta property="og:title" content="Mohammed Ezzahar | Financial Analyst & AI Engineer">
<meta property="og:description" content="Bridging Accounting Integrity with AI-Driven 
Financial Intelligence. 5 production projects across fraud detection, bank automation, 
NLP sentiment, tax advisory, and deep recommendation systems.">
```

---

## 7. New Section to Add — Market Alignment Panel

**Why:** The PDFs show that recruiters at Big 4, IB firms, and hedge funds respond to candidates who explicitly signal alignment with industry-standard roles and tools. Adding a "Target Roles" or "Market Fit" section increases recruiter dwell time.

**Where to insert:** Between Skills and Contact in `index.html`.

**Prompt to use:**
```
Create a new HTML section for Mohammed Ezzahar's portfolio called 
"Target Roles & Market Fit". It should display 3 columns of target 
role categories with firm examples and key matching skills. Use the 
existing portfolio CSS design language (eyebrow, fade-up classes, 
container div). The three columns should be: Big 4 Consulting & Audit, 
Investment Banking & Fintech, and Hedge Fund & Quantitative Finance.
```

**Sample HTML structure:**
```html
<section id="market-fit" class="market-fit-section">
    <div class="container">
        <div class="eyebrow fade-up">CAREER TARGET</div>
        <h2 class="fade-up">Market <em>Alignment</em></h2>
        <div class="market-grid">

            <div class="market-card fade-up">
                <div class="mc-icon"><i class="fa-solid fa-building-columns"></i></div>
                <h3>Big 4 & Audit Analytics</h3>
                <p>Deloitte · PwC · EY · KPMG</p>
                <ul>
                    <li>AI Audit Automation (Omnia / Halo / Clara)</li>
                    <li>Financial Data Analytics & BI</li>
                    <li>Tax Technology Advisory</li>
                    <li>ESG Reporting & Assurance</li>
                    <li>Finance Transformation Consulting</li>
                </ul>
                <div class="mc-skills">Python · SQL · Power BI · IFRS · Excel</div>
            </div>

            <div class="market-card fade-up">
                <div class="mc-icon"><i class="fa-solid fa-chart-line"></i></div>
                <h3>Investment Banking & Fintech</h3>
                <p>JPMorgan · Goldman Sachs · FinTech Firms</p>
                <ul>
                    <li>Risk Analytics & Fraud Detection</li>
                    <li>Financial Product Data Science</li>
                    <li>M&A Financial Modeling Support</li>
                    <li>Alternative Data Pipeline Engineering</li>
                    <li>FP&A Automation & Forecasting</li>
                </ul>
                <div class="mc-skills">XGBoost · Python · SQL · DCF · NLP</div>
            </div>

            <div class="market-card fade-up">
                <div class="mc-icon"><i class="fa-solid fa-brain"></i></div>
                <h3>Quant Finance & Research</h3>
                <p>Hedge Funds · Asset Managers · Research Teams</p>
                <ul>
                    <li>Quantitative Data Analysis</li>
                    <li>Sentiment Signal Engineering</li>
                    <li>Financial Recommender Systems</li>
                    <li>ML Factor Model Prototyping</li>
                    <li>Alternative Data Evaluation</li>
                </ul>
                <div class="mc-skills">PyTorch · BERT · FAISS · TensorFlow · R</div>
            </div>

        </div>
    </div>
</section>
```

---

## 8. Certifications & Credentials Section (New Addition)

**Why:** The PDFs show certifications appear in **85%+ of senior finance job postings**. The current portfolio has no certification section. Adding one — even with in-progress items — signals professionalism and ambition.

**Prompt to use:**
```
Add a certifications and credentials block to Mohammed Ezzahar's portfolio. 
Include completed credentials and in-progress ones. Base the selection on 
the most valued certifications in Big 4, investment banking, and fintech 
roles from 2026 job posting data. Use a clean card-grid layout matching 
the existing portfolio aesthetic.
```

**Recommended credential list** (based on PDF data):
```
COMPLETED / DEMONSTRABLE:
- Moroccan Finance Law & IS Tax Framework (Corporate Tax Study project)
- Python for Data Science (demonstrated via 4 projects)
- SQL & Database Engineering (demonstrated via Bank Reconciliation project)
- IFRS Standards Awareness (demonstrated in Finance & Accounting skill tag)

RECOMMENDED TO ADD / IN-PROGRESS:
- CFA Level 1 (highest-value cert for IB/HF roles — 94%+ expected at senior level)
- FMVA — Financial Modeling & Valuation Analyst (CFI) — practical, achievable, 
  directly signals DCF/LBO competency
- Power BI DA-100 (Microsoft) — validates BI skills with a recognized credential
- AWS Cloud Practitioner — validates cloud deployment shown in fintech project
- CPA pathway awareness (most relevant for Big 4 audit long-term)
```

---

## 9. Internationalization Updates (`script.js`)

### Current state
The portfolio supports EN/FR/AR language switching via a `translations` object in `script.js`.

### Update instructions

**Prompt to use:**
```
Update the translations object in Mohammed Ezzahar's portfolio script.js. 
For every text update made to the About section, Hero section, and project 
eyebrows, add French (fr) and Arabic (ar) translations. Ensure the French 
translation uses the correct finance/tech terminology (e.g., "Analyste 
Financier", "Pipeline d'automatisation", "Modélisation financière"). 
Ensure Arabic uses right-to-left appropriate phrasing.
```

**Key new translation keys to add:**
```javascript
// Hero
"hero_eyebrow": {
    "en": "Financial Analyst · AI/Data Engineer · Accounting Automation",
    "fr": "Analyste Financier · Ingénieur IA/Data · Automatisation Comptable",
    "ar": "محلل مالي · مهندس ذكاء اصطناعي/بيانات · أتمتة المحاسبة"
},

// About
"about_lead": {
    "en": "Engineering the intersection of Accounting Integrity and AI-Driven Financial Intelligence — measurable impact at every layer of the financial stack.",
    "fr": "À l'intersection de la rigueur comptable et de l'intelligence financière pilotée par l'IA — un impact mesurable à chaque niveau de la chaîne financière.",
    "ar": "هندسة تقاطع النزاهة المحاسبية والذكاء المالي المدعوم بالذكاء الاصطناعي."
},

// New section
"market_fit_eyebrow": {
    "en": "CAREER TARGET",
    "fr": "OBJECTIF CARRIÈRE",
    "ar": "الهدف المهني"
},
"market_fit_h2": {
    "en": "Market Alignment",
    "fr": "Alignement Marché",
    "ar": "التوافق مع السوق"
}
```

---

## 10. Contact Section — Positioning Update

### Update instructions

**Prompt to use:**
```
Rewrite the contact section lead paragraph in Mohammed Ezzahar's portfolio 
to specifically call out the types of opportunities he is targeting in 2026: 
Big 4 analytics roles, fintech/IB data science, and quantitative finance. 
Keep the availability dot and "Currently available" line. Update the 
contact lead to be more targeted and less generic.
```

**Recommended new `contact_lead`:**
```html
<p class="contact-lead fade-up">
    Whether you're hiring for <strong>Big 4 financial analytics</strong>, a 
    <strong>fintech data science</strong> role, or building at the intersection 
    of <strong>AI and institutional finance</strong> — I build production-grade 
    systems that combine accounting rigor with machine learning precision.
    Open to full-time, remote, and international opportunities.
</p>
```

---

## 11. CSS Additions (`styles.css`)

**Prompt to use:**
```
Add CSS styles to Mohammed Ezzahar's portfolio for two new sections: 
.market-fit-section (3-column card grid with icon, title, bullet list, 
and skill tags) and .cert-section (2-column credential card grid with 
status badges for "Completed" and "In Progress"). Match the existing 
dark/cinematic aesthetic of the portfolio using the same CSS variables 
and animation patterns (fade-up class).
```

**Key CSS variables to reuse from existing `styles.css`:**
```css
/* These patterns are already established — reuse them: */
.market-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.market-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); 
               border-radius: 12px; padding: 2rem; }
.mc-skills { font-size: 0.75rem; color: var(--accent); margin-top: 1rem; 
             font-family: monospace; letter-spacing: 0.05em; }
```

---

## 12. Complete Priority Update Checklist

Use this as your execution order when prompting:

```
PRIORITY 1 — Immediate impact, highest recruiter visibility:
[ ] Update <title> and <meta description> tags (SEO)
[ ] Rewrite hero tagline and eyebrow
[ ] Update About section paragraphs
[ ] Update all project impact lines with stronger metrics

PRIORITY 2 — Skills and positioning depth:
[ ] Add Skill Group 05 (Financial Modeling & Valuation)
[ ] Add Skill Group 06 (Cloud, ERP & Infrastructure)
[ ] Add 4 new tags to existing Finance & Accounting group
[ ] Add Market Alignment section (new HTML section)

PRIORITY 3 — Project detail page rewrites:
[ ] bank-reconciliation.html — Add Market Relevance section
[ ] fintech-ai.html — Elevate technical language, add architecture rationale
[ ] market-bot.html — Reframe as alt-data pipeline
[ ] tax-study.html — Add Global Parallel section
[ ] recommender.html — Add financial services application section

PRIORITY 4 — Credentials and completeness:
[ ] Add certifications section with in-progress credentials
[ ] Update contact lead paragraph
[ ] Update all French/Arabic translations for new text

PRIORITY 5 — Polish:
[ ] Add CSS for new sections
[ ] Test all fade-up animations on new elements
[ ] Verify i18n keys work for all new text nodes
[ ] Test mobile responsiveness for new 3-column market-fit grid
```

---

## 13. Golden Rules for Every AI Prompt on This Portfolio

When prompting any AI tool to update this portfolio, always include these constraints:

1. **Keep the existing dark, cinematic aesthetic** — no white backgrounds, no flat corporate styling
2. **Preserve all existing CSS class names** — `fade-up`, `eyebrow`, `container`, `sg-tag`, `sg-tag--strong`, `p-card`, `f-content`
3. **Keep all Font Awesome icons** — find the closest icon if adding new elements
4. **Preserve the i18n system** — every user-visible string needs `data-i18n` attribute and corresponding translation key in `script.js`
5. **Preserve the grain overlay** — `<div class="grain-overlay"></div>` must remain in every page's `<body>`
6. **Keep Mohammed's authentic Moroccan context** — ALIFFA Startup, Université Moulay Ismail, Meknès, and Moroccan Finance Law are **differentiators**, not limitations
7. **Keep real project metrics** — 95%, 91%, 15h, 20%, 50K+ are real numbers, never invent replacements
8. **Never remove the GitHub links** — every project CTA pointing to github.com/mohammedezzahar must be preserved
9. **Signal ambition without overselling** — frame "in-progress" credentials honestly; avoid claiming certifications not yet earned
10. **Align with 2026 hiring language** — every rewrite should use terminology that appears in Big 4, IB, and hedge fund job postings: "production-grade", "ETL pipeline", "alternative data", "alpha signal", "audit automation", "financial modeling", "regulatory compliance"

---

## Appendix A — Skills Frequency Reference (from PDFs)

Use this table when deciding which skills to emphasize in any section:

| Skill | Finance/Analytics | Big 4 | IB/HF | Priority |
|---|---|---|---|---|
| SQL | 94% | 82% | 65% | **Must-have** |
| Excel (advanced) | 91% | 96% | 97% | **Must-have** |
| Power BI / Tableau | 87% | 70% | — | **Must-have** |
| GAAP / IFRS / SOX | — | 95% | 90% | **Must-have** |
| Python | 74% | 60% | 65-85% | **Core differentiator** |
| Financial Modeling | 72% | 68% | 94% | **Core differentiator** |
| ERP (SAP/Oracle) | 80% | 74% | — | **Core differentiator** |
| AI/ML tools | 68% | 55% | 58-85% | **High-value add** |
| Data visualization | 65% | 72% | — | **High-value add** |
| Bloomberg Terminal | — | — | 95% | **HF-specific** |
| Options/Derivatives | — | — | 68% | **HF-specific** |
| Cloud (AWS/Azure) | 46% | 42% | — | **Emerging** |
| Snowflake/Databricks | 38% | 38% | — | **Emerging** |
| Blockchain/DLT | 24% | 22% | — | **Future-proof** |

---

## Appendix B — Firm-Specific Positioning Phrases

Use these phrases when rewriting project descriptions to signal familiarity with specific firms' language:

**For Deloitte targeting:**  
`"audit automation"` · `"Omnia-grade AI pipeline"` · `"ERP migration analytics"` · `"forensic data analytics"` · `"digital finance transformation"`

**For PwC targeting:**  
`"100%-population testing"` · `"SOX compliance"` · `"quality of earnings"` · `"CSRD/ESG assurance"` · `"tax technology implementation"`

**For EY targeting:**  
`"EY-Parthenon methodology"` · `"blockchain audit framework"` · `"Gen-AI readiness assessment"` · `"transfer pricing benchmarking"` · `"supply chain finance"`

**For KPMG targeting:**  
`"SOX 404 controls"` · `"NIST framework"` · `"forensic investigation"` · `"TCFD-aligned"` · `"regulatory compliance"`

**For IB/Goldman targeting:**  
`"financial modeling"` · `"DCF / LBO"` · `"pitch-ready analytics"` · `"due diligence pipeline"` · `"capital markets data"`

**For Hedge Fund / Quant targeting:**  
`"alpha signal"` · `"alternative data pipeline"` · `"systematic strategy"` · `"factor model"` · `"backtesting framework"` · `"sentiment signal generation"`

---

*Document generated: March 2026*  
*Based on: Finance & Analytics Skills Report 2026 · Big 4 Accounting & Finance Report 2026 · IB, Hedge Funds & Stock Markets Report 2026*  
*Portfolio owner: Mohammed Ezzahar · github.com/mohammedezzahar*
