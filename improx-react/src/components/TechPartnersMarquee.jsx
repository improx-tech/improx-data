import React from 'react';

export default function TechPartnersMarquee() {
  const partners = [
    {
      name: "Snowflake",
      role: "Cloud Data Warehouse",
      logo: "/logos/snowflake.svg"
    },
    {
      name: "Google Cloud",
      role: "BigQuery & Cloud Storage",
      logo: "/logos/googlecloud.svg"
    },
    {
      name: "Amazon AWS",
      role: "S3, Redshift & Glue",
      logo: "/logos/aws.svg"
    },
    {
      name: "Salesforce",
      role: "CRM Data Migration",
      logo: "/logos/salesforce.svg"
    },
    {
      name: "Microsoft Azure",
      role: "Cloud Infrastructure",
      logo: "/logos/azure.svg"
    },
    {
      name: "PostgreSQL",
      role: "Relational DBs & ETL",
      logo: "/logos/postgresql.svg"
    },
    {
      name: "Power BI",
      role: "Executive Dashboards",
      logo: "/logos/powerbi.svg"
    },
    {
      name: "Tableau",
      role: "Visual Analytics",
      logo: "/logos/tableau.png"
    },
    {
      name: "Databricks",
      role: "Lakehouse Pipelines",
      logo: "/logos/databricks.svg"
    },
    {
      name: "Python",
      role: "Data Harvesting & Pandas",
      logo: "/logos/python.svg"
    },
    {
      name: "Apache Airflow",
      role: "Pipeline Orchestration",
      logo: "/logos/airflow.svg"
    },
    {
      name: "MongoDB",
      role: "NoSQL & Document Stores",
      logo: "/logos/mongodb.svg"
    }
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-7 sm:py-8 bg-white border-y border-[#d9e2e4] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center gap-6">
        
        {/* Section Label */}
        <div className="shrink-0 text-center md:text-left md:pr-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Ecosystem & Tools
          </span>
          <span className="text-sm sm:text-base font-extrabold text-[#0052FF] tracking-tight">
            Integrated Technologies
          </span>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block h-10 w-px bg-slate-200" />

        {/* Marquee Track with Real Corporate Logos */}
        <div className="flex-1 overflow-hidden relative w-full">
          {/* Subtle gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-infinite-scroll flex items-center gap-12 sm:gap-16 py-2 whitespace-nowrap">
            {marqueeList.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-default"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 sm:h-9 w-auto max-w-[130px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
