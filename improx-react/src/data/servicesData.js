export const servicesData = [
  {
    id: "data-entry",
    slug: "data-entry",
    title: "Data Entry & Document Digitization",
    shortTitle: "Data Entry",
    category: "Document Operations",
    tagline: "High-Precision Human-in-the-Loop Document Keying with Guaranteed 99.94% Accuracy",
    heroDescription: "Eliminate manual keystroke backlogs, OCR hallucinations, and messy archives. Improx deploys dual-blind parallel transcription and senior QA auditing to convert complex paper files, handwritten records, and legal archives into clean, structured digital databases.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    sla: "99.94% Accuracy SLA",
    turnaround: "24-Hour Turnaround Shifts",
    security: "HIPAA & Mutual NDA Compliant",
    overview: [
      "Modern businesses still struggle with mountains of physical documents, low-resolution scans, handwritten patient intake forms, and legacy mortgage files. Automated OCR software frequently hallucinates on cursive handwriting, skewed scans, and multi-format tables, requiring hours of costly manual rework.",
      "Improx solves this with an industrial-grade Dual-Blind Keying Protocol: two independent certified data operators transcribe identical records in separate, sandboxed environments with zero cross-visibility. Our automated diff engines flag any discrepancy down to the character level, which is then arbitrated by a Senior QA lead against the original source file.",
      "The result is audit-ready structured data delivered directly to your database, cloud warehouse, or ERP without hiring headaches, operational overhead, or keystroke errors."
    ],
    capabilities: [
      {
        title: "Mortgage & Real Estate File Digitization",
        desc: "High-volume transcription of promissory notes, warranty deeds, title insurance policies, tax schedules, and closing disclosures.",
        deliverables: ["Parcel ID and legal description extraction", "Two-pass validation on financial figures", "Direct upload to Encompass or LOS"]
      },
      {
        title: "Medical & Clinical Records Transcription",
        desc: "Converting handwritten physician encounter notes, patient intake sheets, laboratory reports, and CMS-1500 claim forms under strict confidentiality.",
        deliverables: ["HIPAA-compliant sandboxed VPN enclaves", "ICD-10 and CPT code indexing", "EMR/EHR data migration readiness"]
      },
      {
        title: "Invoices, Receipts & Financial Documents",
        desc: "Automated batch sorting, line-item parsing, ledger reconciliation, and OCR error-checking for multi-currency accounts payable workflows.",
        deliverables: ["Line-item quantity and unit cost matching", "Three-way PO reconciliation", "QuickBooks, NetSuite & SAP export"]
      },
      {
        title: "Legacy Archive & Microfiche Conversion",
        desc: "Digitizing decades of historic municipal records, corporate governance archives, legal binders, and microfiche films into searchable text.",
        deliverables: ["PDF/A long-term preservation standards", "Full-text OCR with bounding metadata", "Custom taxonomy and hierarchical indexing"]
      }
    ],
    workflow: [
      { step: "01", title: "Encrypted Ingestion", desc: "Batch ingestion via secure SFTP or encrypted VPN enclaves with custom validation dictionaries." },
      { step: "02", title: "Dual-Blind Parallel Keying", desc: "Two independent operators key identical records in parallel with zero mutual workspace visibility." },
      { step: "03", title: "Character-Level Diff Audit", desc: "Automated diff software flags any character variance between entries instantly." },
      { step: "04", title: "Senior QA & Schema Injection", desc: "Senior analysts arbitrate variances against the source scan before delivering clean data to your cloud warehouse." }
    ],
    techStack: ["Snowflake", "BigQuery", "Amazon S3", "PostgreSQL", "Salesforce", "Microsoft Azure", "Google Cloud"],
    metrics: [
      { value: "5M+", label: "Records Keyed", desc: "Mortgage, healthcare & financial files" },
      { value: "99.94%", label: "Accuracy SLA", desc: "Independently verified" },
      { value: "24h", label: "Cycle Speed", desc: "Overnight delivery shifts" },
      { value: "0%", label: "Data Leakage", desc: "Delaware Mutual NDA protected" }
    ],
    faq: [
      {
        q: "How does the Dual-Blind Verification Protocol work?",
        a: "Two separate certified operators key the exact same document simultaneously without knowing who the other person is. Our system compares both outputs character-by-character. If there is a single character difference, it is instantly escalated to a senior QA specialist for verification against the source file."
      },
      {
        q: "What file formats do you accept for processing?",
        a: "We support PDF, TIFF, JPEG, PNG, scanned paper archives, ZIP archives, legacy microfilm scans, and direct SFTP/API feeds."
      },
      {
        q: "How do you guarantee confidentiality and compliance?",
        a: "All operations occur inside restricted VPN sandboxes with screen watermarking, disabled local storage, strict role-based permissions, and mutual non-disclosure agreements executed under Delaware law."
      },
      {
        q: "What is your pricing structure for data entry?",
        a: "We offer simple volume-based pricing per record or per page for backlog projects, as well as dedicated full-time equivalent (FTE) squads integrated directly into your communication channels."
      }
    ]
  },
  {
    id: "web-scraping",
    slug: "web-scraping",
    title: "Web Scraping & Data Extraction",
    shortTitle: "Web Scraping",
    category: "Marketplace Intelligence",
    tagline: "Industrial-Grade Automated Web Data Harvesting & Competitor SKU Price Feeds",
    heroDescription: "Harvest competitor prices, catalog inventory, real estate listings, and business registries at scale. Improx builds resilient scraping pipelines with residential proxy rotation, CAPTCHA bypass, and automated schema normalization.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    sla: "99.8% Feed Reliability SLA",
    turnaround: "Daily / Real-Time Sync",
    security: "Ethical & Robots.txt Scoped",
    overview: [
      "Web scraping at enterprise scale breaks down when websites implement Cloudflare bot protections, dynamic JavaScript rendering, changing DOM layouts, and strict IP rate limits. In-house scraping scripts frequently crash without engineering maintenance.",
      "Improx engineers turnkey web scraping infrastructure. We deploy headless browser fleets, residential proxy networks, fingerprint spoofing, and automated DOM mutation observers to extract structured data continuously without failure.",
      "Our feeds are delivered clean, deduplicated, and mapped directly to your product catalog, data lake, or pricing engine on automated daily, hourly, or streaming schedules."
    ],
    capabilities: [
      {
        title: "E-Commerce Competitor Price Intelligence",
        desc: "Monitoring daily product prices, stock availability, discount promotions, and seller ratings across Amazon, Walmart, Target, and niche retailers.",
        deliverables: ["SKU-level price variance tracking", "Out-of-stock alert webhooks", "Variant mapping (color, size, bundle)"]
      },
      {
        title: "Real Estate & Property Listings Extraction",
        desc: "Aggregating MLS listings, tax assessor records, historical price changes, zoning codes, and rental yields across regional property portals.",
        deliverables: ["Geolocation and parcel ID normalization", "Image asset preservation and CDN hosting", "Historical listing timeline diffs"]
      },
      {
        title: "Directory, B2B Lead & Job Market Aggregation",
        desc: "Harvesting company directories, trade association registries, LinkedIn job postings, and state licensing boards.",
        deliverables: ["Contact deduplication and email verification", "Standardized job taxonomy and salary ranges", "CRM-ready CSV and JSON feeds"]
      },
      {
        title: "Financial & Regulatory Data Extraction",
        desc: "Extracting SEC filings, court dockets, government tender notices, and currency/commodity exchange feeds for algorithmic analysis.",
        deliverables: ["Tabular financial table parsing", "Real-time webhook notifications", "Historical backfill archives"]
      }
    ],
    workflow: [
      { step: "01", title: "Target & Schema Discovery", desc: "We analyze target domain architectures, anti-bot mechanisms, rate limits, and output schema specifications." },
      { step: "02", title: "Scraper Architecture & Proxy Setup", desc: "Deploying custom Python/Playwright extractors with residential proxy pools and automated fingerprint rotation." },
      { step: "03", title: "Normalization & Hygiene", desc: "Extracted data is cleaned, deduplicated, and validated against custom business logic." },
      { step: "04", title: "Automated Warehouse Sync", desc: "Feeds delivered directly to Snowflake, BigQuery, AWS S3, or webhook endpoints with zero downtime." }
    ],
    techStack: ["Python", "Apache Airflow", "BigQuery", "Amazon S3", "MongoDB", "PostgreSQL", "Databricks"],
    metrics: [
      { value: "800K+", label: "Daily SKUs Harvested", desc: "Across retail & catalog portals" },
      { value: "99.8%", label: "Uptime SLA", desc: "Automated layout repair" },
      { value: "0", label: "IP Blockages", desc: "Residential proxy pools" },
      { value: "Hourly", label: "Refresh Frequencies", desc: "Flexible cron schedules" }
    ],
    faq: [
      {
        q: "What happens when a target website updates its layout?",
        a: "Our monitoring monitors parse success rates 24/7. When a DOM structure shifts or fields fail validation, our dedicated scrapers squad updates the extraction selectors immediately under our uptime SLA guarantee."
      },
      {
        q: "How do you bypass modern bot protections like Cloudflare?",
        a: "We utilize real headless browser orchestration (Playwright/Puppeteer) with humanized mouse trajectories, realistic TLS fingerprinting, and ethically sourced residential IP pools."
      },
      {
        q: "What format do you deliver extracted data in?",
        a: "We deliver directly into your cloud warehouse (BigQuery, Snowflake, Redshift), PostgreSQL/MySQL databases, cloud object storage (S3, GCS), or structured CSV/JSON/Parquet files via SFTP."
      },
      {
        q: "Is web scraping legal and compliant?",
        a: "Yes. Improx focuses strictly on publicly accessible data, respects robots.txt directives, adheres to ethical crawling bandwidth limits, and ensures GDPR/CCPA privacy standards."
      }
    ]
  },
  {
    id: "data-processing",
    slug: "data-processing",
    title: "Data Cleaning & CRM Deduplication",
    shortTitle: "Data Processing",
    category: "Database Hygiene",
    tagline: "Comprehensive Database Hygiene, Fuzzy Deduplication, and Multi-Format Document Standardization",
    heroDescription: "Fix dirty databases, duplicate CRM records, and corrupted legacy files. Improx sanitizes contact records, normalizes addresses with CASS certification, and converts disparate PDF/EDI files into validated enterprise schemas.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    sla: "Zero Data Loss Guarantee",
    turnaround: "Fast Multi-GB Batch Processing",
    security: "Preserves History & Engagement Notes",
    overview: [
      "Over time, enterprise CRM systems like Salesforce, HubSpot, and Zoho accumulate duplicate leads, outdated phone numbers, invalid emails, and conflicting field values. Sales teams waste hours chasing dead leads, and marketing campaigns trigger spam flags.",
      "Improx delivers systematic CRM and database hygiene. We execute fuzzy record matching, phone and address standardization, email ping validation, and parent-child account merges while meticulously preserving all historical interaction logs, closed opportunities, and engagement timestamps.",
      "We also handle high-volume data transformation across unstructured file formats: converting legacy XML, EDIFACT, scanned PDF invoices, and CSV dumps into unified relational schemas."
    ],
    capabilities: [
      {
        title: "CRM Deduplication & Lead Merging",
        desc: "Safe deduplication across Salesforce, HubSpot, Zoho, and Marketo without losing engagement history or custom fields.",
        deliverables: ["Fuzzy matching algorithms on company names & emails", "Parent-child account hierarchy restructuring", "Automated backup before merge execution"]
      },
      {
        title: "Address Standardization & CASS Certification",
        desc: "Validating global mailing addresses against official postal databases, adding ZIP+4 codes, and standardizing street nomenclature.",
        deliverables: ["USPS CASS certification validation", "Geocoding coordinates (latitude/longitude)", "Standardized international formatting"]
      },
      {
        title: "Contact Enrichment & Decay Cleansing",
        desc: "Identifying departed employees, updating corporate job titles, verifying MX records, and enriching missing direct-dial phone numbers.",
        deliverables: ["Email syntax and deliverability ping audit", "LinkedIn job title alignment", "Bounce rate reduction to under 1%"]
      },
      {
        title: "Multi-Format Parsing (PDF, EDI, XML, CSV)",
        desc: "Parsing complex nested documents into normalized tabular datasets ready for data warehouse injection.",
        deliverables: ["EDI 850, 810, 856 supply chain parsing", "Multi-page PDF table extraction to SQL", "Character encoding remediation (UTF-8)"]
      }
    ],
    workflow: [
      { step: "01", title: "Database Audit & Profiling", desc: "We run deep profiling to quantify duplicate ratios, missing field percentages, and schema anomalies." },
      { step: "02", title: "Custom Merge & Rule Mapping", desc: "Establishing strict business rules to define which record survives as the master authority." },
      { step: "03", title: "Automated Fuzzy Execution & Human QA", desc: "Algorithmic deduplication paired with human arbitration on ambiguous edge-case matches." },
      { step: "04", title: "Safe CRM Injection & Reconciled Audit", desc: "Executing safe sandbox testing followed by verified production sync and complete diff documentation." }
    ],
    techStack: ["Salesforce", "PostgreSQL", "Python", "Snowflake", "BigQuery", "Amazon S3", "Databricks"],
    metrics: [
      { value: "1.2M+", label: "Contacts Sanitized", desc: "Across enterprise CRMs" },
      { value: "0%", label: "Data Loss", desc: "Zero history loss guarantee" },
      { value: "98%+", label: "Deliverability Rate", desc: "Post-hygiene email score" },
      { value: "48h", label: "Average Turnaround", desc: "Complete CRM deduplication" }
    ],
    faq: [
      {
        q: "Will we lose any customer notes or historical activities during CRM deduplication?",
        a: "Never. Our merge scripts specifically aggregate and re-associate all historical activity logs, emails, attachments, and open opportunities from duplicate records into the designated master record."
      },
      {
        q: "Do you take a backup before making changes in our live CRM?",
        a: "Yes. Before any script touches production data, we take a full database snapshot and run all merge protocols in a dedicated sandbox environment for your team's sign-off."
      },
      {
        q: "Can you handle custom fields and complex CRM objects?",
        a: "Yes. We configure custom field mappings to ensure no unique company data points are overwritten or discarded during consolidation."
      },
      {
        q: "Can you clean data directly in our database or via CSV exports?",
        a: "Both. We can connect securely through authorized API credentials, or you can send us raw CSV/SQL exports for offline cleansing."
      }
    ]
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Business Intelligence & Reporting",
    shortTitle: "Data Analytics",
    category: "Analytics & BI",
    tagline: "Executive Power BI, Tableau & Looker Dashboards Grounded in Unified Cloud Warehouses",
    heroDescription: "Transform scattered spreadsheets into automated, real-time executive dashboards. Improx designs high-performance Power BI, Tableau, and Google Looker analytics pipelines that empower leadership to make confident, data-backed decisions.",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    sla: "Daily Automated Refresh",
    turnaround: "Turnkey Dashboard in 5 Days",
    security: "Row-Level Security & Role Governance",
    overview: [
      "Executives spend too many hours cobbling together manual weekly Excel reports from disconnected platforms — CRM, ERP, accounting, and marketing. By the time leadership reads the report, the data is already stale and prone to human formula errors.",
      "Improx engineers unified business intelligence architectures. We connect directly to your underlying data stores, build clean star-schema dimensional models, and deliver intuitive, interactive dashboards in Power BI, Tableau, or Looker.",
      "From daily executive revenue summaries to granular operational throughput metrics, our dashboards refresh automatically and deliver automated PDF/Slack snapshots to stakeholders."
    ],
    capabilities: [
      {
        title: "Executive KPI & Operational Dashboards",
        desc: "Single-pane-of-glass dashboards tracking MRR, cash flow, customer churn, operational backlog, and team productivity.",
        deliverables: ["Interactive drill-down hierarchies", "Mobile-optimized executive layouts", "Automated daily scheduled email digests"]
      },
      {
        title: "Sales & Marketing Attribution Analytics",
        desc: "Multi-touch attribution models linking ad spend across Google/Meta/LinkedIn directly to closed revenue in Salesforce.",
        deliverables: ["Customer Acquisition Cost (CAC) vs. LTV analysis", "Pipeline velocity and sales rep quotas", "Cohort retention and repeat purchase curves"]
      },
      {
        title: "Supply Chain & Inventory Intelligence",
        desc: "Visualizing warehouse fulfillment speed, stockout predictions, supplier lead times, and freight cost optimizations.",
        deliverables: ["Real-time inventory burn rate charts", "Safety stock threshold alerts", "Vendor SLA scorecard tracking"]
      },
      {
        title: "Data Warehouse Modeling (Star Schema & dbt)",
        desc: "Architecting performant dimensional models in Snowflake or BigQuery to ensure lightning-fast dashboard queries.",
        deliverables: ["Fact and dimension table architecture", "dbt transformation pipelines", "Row-level security (RLS) policies"]
      }
    ],
    workflow: [
      { step: "01", title: "Metrics Alignment & KPI Definition", desc: "We interview stakeholders to establish exact calculation formulas and reporting hierarchies." },
      { step: "02", title: "Data Integration & Modeling", desc: "Connecting raw sources to Snowflake/BigQuery and modeling clean dimensional tables." },
      { step: "03", title: "Interactive UX/UI Dashboard Build", desc: "Crafting intuitive visual dashboards in Power BI or Tableau with custom corporate styling." },
      { step: "04", title: "Automated Refresh & User Training", desc: "Setting automated cron refreshes, role-based access, and conducting team walkthroughs." }
    ],
    techStack: ["Power BI", "Tableau", "Snowflake", "BigQuery", "Databricks", "PostgreSQL", "Python"],
    metrics: [
      { value: "50+", label: "Dashboards Deployed", desc: "For C-suite & operations leads" },
      { value: "<2s", label: "Query Load Speeds", desc: "Optimized dimensional models" },
      { value: "100%", label: "Automated Refresh", desc: "No manual weekly compiling" },
      { value: "RLS", label: "Role-Level Security", desc: "Granular access governance" }
    ],
    faq: [
      {
        q: "Which BI tool do you recommend: Power BI, Tableau, or Looker?",
        a: "If your organization uses Microsoft 365, Power BI offers seamless integration and unbeatable cost efficiency. For deep visual exploration and data science teams, Tableau excels. For teams operating on Google Cloud / BigQuery, Looker provides native semantic modeling."
      },
      {
        q: "Can the dashboards pull data from multiple disconnected software tools?",
        a: "Yes. We ingest data from CRMs (Salesforce), accounting software (QuickBooks/Xero), advertising platforms (Google Ads/Meta), and custom SQL databases into a unified warehouse layer."
      },
      {
        q: "Who owns the dashboard reports and underlying data models?",
        a: "You own 100% of the intellectual property, dashboards, SQL queries, and models. We hand over complete administrative credentials upon deployment."
      },
      {
        q: "Do you provide ongoing dashboard maintenance and report tweaks?",
        a: "Yes. We provide flexible monthly maintenance packages to build new reports, update calculation logic, and onboard new data sources as your business grows."
      }
    ]
  },
  {
    id: "admin-assistant",
    slug: "admin-assistant",
    title: "Virtual Administrative Assistance",
    shortTitle: "Admin Assistant",
    category: "Dedicated Remote Staff",
    tagline: "Dedicated, Enterprise-Trained Executive Virtual Assistants and Back-Office Operations Squads",
    heroDescription: "Save executive hours and accelerate back-office queues. Improx provides dedicated, college-educated remote administrative professionals who seamlessly integrate into your Slack, manage executive calendars, process vendor invoices, and handle daily operational workflows.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    sla: "Zero Hiring Overhead",
    turnaround: "Onboarded in Under 72 Hours",
    security: "Dedicated FTEs Under Mutual NDA",
    overview: [
      "Founders, executives, and department leads routinely lose 15+ hours each week to repetitive administrative drudgery: sorting through crowded inboxes, rescheduling meetings across time zones, tracking unpaid vendor invoices, and updating CRM records.",
      "Improx delivers dedicated Executive Virtual Assistants and back-office squads. Our assistants are college-educated, fluent English communicators, and rigorously trained in modern business tools including Google Workspace, Microsoft 365, Slack, Salesforce, and Asana.",
      "Unlike generic freelancer marketplaces with high turnover, our assistants are full-time Improx employees backed by team leads, structured SOPs, and strict enterprise security protocols."
    ],
    capabilities: [
      {
        title: "Executive Calendar & Email Management",
        desc: "Proactive inbox triage, VIP email escalation, calendar scheduling across time zones, and meeting briefing preparation.",
        deliverables: ["Zero-inbox management protocols", "Complex multi-party meeting scheduling", "Drafting routine correspondence"]
      },
      {
        title: "Invoicing, Bookkeeping & Vendor Reconciliation",
        desc: "Matching purchase orders against vendor invoices, logging receipts, and updating QuickBooks or Xero.",
        deliverables: ["Accounts payable bill tracking", "Monthly bank and expense reconciliations", "Discrepancy flagging and follow-up"]
      },
      {
        title: "Customer Ticket Routing & Order Processing",
        desc: "Triaging support tickets in Zendesk/Intercom, processing e-commerce orders, and managing customer inquiries.",
        deliverables: ["First-response times under 15 minutes", "Order fulfillment tracking and carrier updates", "FAQ knowledge base updates"]
      },
      {
        title: "CRM Hygiene & Routine Data Updates",
        desc: "Logging post-meeting notes into Salesforce, verifying inbound leads, and maintaining pipeline hygiene.",
        deliverables: ["Contact info verification from email signatures", "Opportunity stage progression tracking", "Weekly sales activity digests"]
      }
    ],
    workflow: [
      { step: "01", title: "Role Profiling & SOP Review", desc: "We map your daily tasks, tool ecosystem, required working hours, and standard operating procedures." },
      { step: "02", title: "Candidate Handshake & Matching", desc: "You meet your matched dedicated assistant to align on communication cadence and tone." },
      { step: "03", title: "Seamless Tool Integration", desc: "Assistant connects directly into your Slack, Google Workspace, and project boards under mutual NDA." },
      { step: "04", title: "Daily Execution & Weekly Review", desc: "Daily task logs and weekly performance syncs overseen by an Improx operations manager." }
    ],
    techStack: ["Salesforce", "Google Cloud", "Microsoft Azure", "Power BI", "Amazon S3", "Tableau"],
    metrics: [
      { value: "15h+", label: "Hours Saved Weekly", desc: "Per executive supported" },
      { value: "<72h", label: "Onboarding Speed", desc: "From kickoff to daily tasks" },
      { value: "1:1", label: "Dedicated Staff", desc: "No shared freelancer models" },
      { value: "99%", label: "Retention Rate", desc: "Long-term staff stability" }
    ],
    faq: [
      {
        q: "Are the assistants shared across multiple clients?",
        a: "No. When you hire an Improx assistant, they are 100% dedicated to your company during your contracted hours and never split their focus."
      },
      {
        q: "What time zones do your assistants work in?",
        a: "We support US Eastern (EST), Central (CST), Pacific (PST), UK (GMT), and European time zones. Your assistant works during your active business hours."
      },
      {
        q: "What happens if my assistant is sick or on vacation?",
        a: "Because all tasks are documented under standardized SOPs, an internal certified backup assistant steps in seamlessly so your operations never pause."
      },
      {
        q: "What is the minimum contract term?",
        a: "We offer flexible month-to-month contracts. You can scale your dedicated squad up or down without long-term lock-in or severance overhead."
      }
    ]
  },
  {
    id: "data-services",
    slug: "data-services",
    title: "Managed Cloud & Data Pipelines",
    shortTitle: "Data Services",
    category: "Cloud Operations",
    tagline: "Turnkey Cloud Data Lake Ingestion, ETL Orchestration, and 24/7 Pipeline Maintenance",
    heroDescription: "Build resilient, modern cloud data architectures without hiring costly in-house data engineering teams. Improx designs, deploys, and monitors automated ETL/ELT pipelines across Snowflake, BigQuery, AWS, and Azure.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    sla: "24/7 Pipeline Health Monitoring",
    turnaround: "Zero-Downtime Data Lake Sync",
    security: "SOC2 & Enterprise Encryption Standards",
    overview: [
      "Companies frequently struggle with fragmented data: transaction databases in PostgreSQL, marketing data in third-party APIs, and legacy files on on-premise servers. Without unified pipelines, analysis is slow, brittle, and manually compiled.",
      "Improx manages your cloud data operations from end to end. We build reliable Airflow and dbt pipelines that continuously extract, normalize, and load data into modern cloud data warehouses like Snowflake, BigQuery, or Databricks.",
      "Our team acts as your dedicated cloud data engineering arm, managing schema evolutions, monitoring pipeline health around the clock, and eliminating pipeline failures before they reach decision-makers."
    ],
    capabilities: [
      {
        title: "Automated ETL & ELT Pipeline Engineering",
        desc: "Building robust data flows using Apache Airflow, dbt, and cloud-native ingestion tools for seamless transformations.",
        deliverables: ["Incremental loading to minimize cloud compute cost", "Automated retry logic and error alert webhooks", "Schema evolution handling for changing APIs"]
      },
      {
        title: "Cloud Data Warehouse Architecture",
        desc: "Designing and optimizing high-performance storage in Snowflake, Google BigQuery, and Amazon Redshift.",
        deliverables: ["Clustering and partitioning strategies", "Cost optimization and compute auto-suspend tuning", "Centralized role-based access control"]
      },
      {
        title: "Data Lake Ingestion & Storage Organization",
        desc: "Ingesting structured, semi-structured (JSON/Parquet), and unstructured files into Amazon S3 or Google Cloud Storage.",
        deliverables: ["Bronze/Silver/Gold medallion architecture", "Parquet compression reducing storage costs by 70%", "Lifecycle policies for cost-effective archiving"]
      },
      {
        title: "24/7 Managed Data Operations & Monitoring",
        desc: "Round-the-clock incident response, pipeline monitoring, and continuous schema maintenance by data engineers.",
        deliverables: ["Guaranteed response times under 30 minutes", "Weekly pipeline health scorecards", "Ongoing query performance tuning"]
      }
    ],
    workflow: [
      { step: "01", title: "Source Audit & Target Architecture", desc: "Cataloging all input sources, volume velocity, target schemas, and security requirements." },
      { step: "02", title: "Pipeline Development & dbt Modeling", desc: "Writing modular transformation code with automated data testing and CI/CD version control." },
      { step: "03", title: "End-to-End Validation & Staging", desc: "Reconciling source vs. destination records with character and row-count checksums." },
      { step: "04", title: "Continuous 24/7 Operations", desc: "Transitioning to active monitoring with automated alerting and continuous performance optimization." }
    ],
    techStack: ["Snowflake", "BigQuery", "Amazon S3", "Apache Airflow", "Python", "Databricks", "PostgreSQL", "MongoDB"],
    metrics: [
      { value: "10B+", label: "Rows Processed", desc: "Across cloud data warehouses" },
      { value: "99.99%", label: "Pipeline Uptime", desc: "With automated failover" },
      { value: "70%", label: "Cost Reduction", desc: "Via Parquet & cluster optimization" },
      { value: "24/7", label: "Incident Coverage", desc: "Dedicated cloud engineers" }
    ],
    faq: [
      {
        q: "How do you keep cloud warehouse costs under control?",
        a: "We engineer incremental loads, implement optimal micro-partitioning, compress raw files to columnar Parquet, and configure automated warehouse suspension policies so you only pay for compute when queries run."
      },
      {
        q: "Can you take over and maintain our existing legacy pipelines?",
        a: "Yes. We perform a thorough audit of your current code and infrastructure, document the pipeline flow, and take over ongoing maintenance and optimization."
      },
      {
        q: "What security measures protect our cloud data?",
        a: "All data in transit is encrypted with TLS 1.3, and at rest with AES-256. We connect via VPC peering, private endpoints, or IAM role delegation without storing copies on external machines."
      },
      {
        q: "What is dbt and why do you use it?",
        a: "dbt (data build tool) enables reliable transformation of data directly inside your cloud warehouse using modular SQL and version control. It automatically generates documentation and runs data-quality tests on every batch."
      }
    ]
  },
  {
    id: "ai-annotation",
    slug: "ai-annotation",
    title: "AI Training Data Annotation & Labeling",
    shortTitle: "AI Annotation",
    category: "Machine Learning Ops",
    tagline: "High-Precision Human-Verified Data Labeling for Computer Vision, NLP & LLM Fine-Tuning",
    heroDescription: "High-quality ground truth data is the bedrock of performant AI models. Improx delivers high-precision bounding boxes, polygon segmentation, text NER, and multi-tier human consensus labeling with strict accuracy benchmarks.",
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    sla: "99.5% Inter-Annotator Agreement",
    turnaround: "Flexible High-Velocity Sprints",
    security: "Delaware Mutual NDA & Secure Enclaves",
    overview: [
      "AI and machine learning teams spend up to 80% of their development cycle cleaning and labeling training data. Low-quality annotations, inconsistent edge-case labeling, and poor consensus scoring lead to degraded model inference and costly retraining cycles.",
      "Improx provides enterprise-grade data annotation squads trained specifically on your taxonomy and guidelines. We implement multi-pass review protocols: annotator labeling, independent peer review, and automated programmatic sanity checks.",
      "Whether you are training autonomous computer vision models, fine-tuning domain-specific LLMs, or categorizing multi-lingual voice feeds, Improx delivers audit-ready datasets in your required format."
    ],
    capabilities: [
      {
        title: "Computer Vision (Bounding Boxes & Polygons)",
        desc: "Pixel-accurate 2D/3D bounding boxes, polygon segmentation, keypoint estimation, and object tracking across images and video feeds.",
        deliverables: ["COCO, YOLO, Pascal VOC, and JSON exports", "Sub-pixel precision on complex edge cases", "Video frame interpolation and trajectory tracking"]
      },
      {
        title: "NLP, NER & Sentiment Tagging",
        desc: "Named Entity Recognition (NER), intent classification, parts-of-speech tagging, and conversational sentiment categorization.",
        deliverables: ["Domain-specific tagging (Legal, Medical, Finance)", "Multi-lingual token annotation", "CoNLL and SpaCy format compatibility"]
      },
      {
        title: "LLM Fine-Tuning & RLHF Human Feedback",
        desc: "Pairwise response ranking, hallucination identification, safety guardrail scoring, and domain knowledge prompt-response authoring.",
        deliverables: ["Curated high-quality Q&A instruction pairs", "Detailed critique rubrics and ranking scores", "Toxicity and factual accuracy audits"]
      },
      {
        title: "Document & OCR Ground Truth Verification",
        desc: "Validating synthetic OCR outputs, line-level transcription, and bounding table cells for document AI models.",
        deliverables: ["Word-level and character-level coordinates", "Multi-column layout understanding tags", "Handwritten sample pairing"]
      }
    ],
    workflow: [
      { step: "01", title: "Guideline Calibration & Pilot", desc: "We review your annotation manual, calibrate edge-case rules, and run a benchmark test batch." },
      { step: "02", title: "Dedicated Squad Training", desc: "Annotators are trained and certified specifically on your taxonomy and precision thresholds." },
      { step: "03", title: "Multi-Pass Labeling & Consensus", desc: "Dual annotation with automated inter-annotator agreement (IAA) verification algorithms." },
      { step: "04", title: "Senior Lead Audit & Export", desc: "Senior ML data managers inspect batches before delivering structured training files." }
    ],
    techStack: ["Python", "Amazon S3", "Google Cloud", "Snowflake", "PostgreSQL", "BigQuery", "Databricks"],
    metrics: [
      { value: "2M+", label: "Objects Annotated", desc: "Images, videos & text tokens" },
      { value: "99.5%", label: "Consensus Agreement", desc: "Multi-pass verification" },
      { value: "100%", label: "Client IP Ownership", desc: "Strict proprietary security" },
      { value: "Zero", label: "Model Hallucinations", desc: "Ground-truth certified data" }
    ],
    faq: [
      {
        q: "What annotation tools and platforms do you support?",
        a: "We work seamlessly across Label Studio, CVAT, Roboflow, Prodigy, V7 Labs, or your proprietary internal labeling tools."
      },
      {
        q: "How do you ensure high inter-annotator agreement (IAA)?",
        a: "We run dual-pass annotation on benchmark sample sets and calculate Cohen's Kappa or Fleiss' Kappa scores. Discrepancies are reviewed with the client to update guidelines dynamically."
      },
      {
        q: "Can your team label sensitive or proprietary data?",
        a: "Yes. All labeling occurs inside secure, sandboxed workstations with disabled copy/paste, screen watermarks, and under strict Delaware mutual NDAs."
      },
      {
        q: "What is your pricing structure for AI labeling?",
        a: "We offer flexible pricing per bounding box/task for modular batches, or dedicated hourly squads for dynamic research and agile model training."
      }
    ]
  },
  {
    id: "cloud-migration",
    slug: "cloud-migration",
    title: "Legacy Data Migration & Cloud Warehousing",
    shortTitle: "Cloud Migration",
    category: "Enterprise Modernization",
    tagline: "Zero-Downtime Migration of Legacy Databases, On-Premises Archives & Siloed ERPs into Modern Cloud Warehouses",
    heroDescription: "Escape the limitations, license fees, and maintenance headaches of legacy on-premises databases. Improx executes end-to-end data migrations to Snowflake, BigQuery, and Databricks with complete schema mapping and zero operational disruption.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    sla: "Zero Downtime Guarantee",
    turnaround: "Parallel Sync Protocols",
    security: "SOC2 & Encryption in Transit / Rest",
    overview: [
      "Legacy databases like on-premises Oracle, Microsoft SQL Server, MySQL, and older Access systems create severe bottlenecks: slow query response times, exorbitant hardware and licensing fees, and vulnerability to catastrophic hardware failures.",
      "Improx executes risk-mitigated, zero-downtime database modernization journeys. We analyze your legacy schema, map incompatible legacy data types to modern cloud equivalents, run pre-migration automated integrity audits, and execute parallel synchronization.",
      "Your existing business operations continue running smoothly on the old system while the cloud warehouse syncs in the background, culminating in a cutover verified down to the exact row count and checksum."
    ],
    capabilities: [
      {
        title: "On-Premises to Cloud Warehouse Migration",
        desc: "Migrating legacy SQL Server, Oracle, and DB2 databases to Snowflake, Google BigQuery, or Amazon Redshift.",
        deliverables: ["Schema and stored procedure conversion", "Automated CDC (Change Data Capture) replication", "Column-level data type normalization"]
      },
      {
        title: "Legacy Document Archive Migration",
        desc: "Transferring millions of historical scanned PDFs, TIFFs, and file shares to Amazon S3 or Google Cloud Storage.",
        deliverables: ["Metadata extraction and tagging during transfer", "Intelligent tiering for long-term archival savings", "Checksum hash verification for every asset"]
      },
      {
        title: "ERP & Legacy System Data Extraction",
        desc: "Extracting historical transaction records from legacy AS400, SAP ECC, or older ERP systems into cloud data lakes.",
        deliverables: ["Custom ODBC/JDBC connectors and staging dumps", "De-nesting multi-decade legacy tables", "Complete historical audit preservation"]
      },
      {
        title: "Post-Migration Audit & Performance Tuning",
        desc: "Validating row counts, sum totals, and running stress tests to ensure lightning-fast analytics on the new warehouse.",
        deliverables: ["Automated reconciliation audit documentation", "Query indexing and clustering optimization", "Comprehensive team training and handoff"]
      }
    ],
    workflow: [
      { step: "01", title: "Legacy Assessment & Schema Mapping", desc: "We analyze database dependencies, table sizes, stored procedures, and build a conversion matrix." },
      { step: "02", title: "Target Architecture & Sandbox Sync", desc: "Setting up modern cloud schemas and testing sample migrations in isolated environments." },
      { step: "03", title: "Parallel Sync & CDC Replication", desc: "Continuously synchronizing delta changes in the background while business operations continue uninterrupted." },
      { step: "04", title: "Checksum Audit & Final Cutover", desc: "Row-by-row checksum verification followed by official cutover with zero downtime." }
    ],
    techStack: ["Snowflake", "BigQuery", "Amazon S3", "PostgreSQL", "Microsoft Azure", "Python", "Apache Airflow", "Databricks"],
    metrics: [
      { value: "100%", label: "Data Integrity", desc: "Automated checksum validation" },
      { value: "0", label: "Downtime Hours", desc: "Parallel sync execution" },
      { value: "50%+", label: "License Cost Savings", desc: "Retiring on-prem legacy hardware" },
      { value: "10x", label: "Query Speedup", desc: "On modern columnar cloud stores" }
    ],
    faq: [
      {
        q: "Will our daily business operations experience any downtime during migration?",
        a: "No. We implement Change Data Capture (CDC) and parallel synchronization. Your production applications continue interacting with the existing system normally until the final validated cutover."
      },
      {
        q: "How do you verify that no data is lost or corrupted during the move?",
        a: "We run automated pre- and post-migration checksum algorithms, comparing row counts, column values, and cryptographic hashes for every table before declaring the migration complete."
      },
      {
        q: "What happens to our legacy stored procedures and complex queries?",
        a: "We refactor incompatible legacy procedural SQL (e.g., T-SQL or PL/SQL) into modern, maintainable cloud SQL models using dbt and modern analytics design patterns."
      },
      {
        q: "How long does an enterprise database migration take?",
        a: "Typical database migrations take between 2 to 6 weeks depending on volume, schema complexity, and network bandwidth, fully managed by our senior data engineers."
      }
    ]
  }
];
