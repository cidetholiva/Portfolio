import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CaseStudyLayout } from "../components/CaseStudyLayout";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface DataPageProps {
  onBack: () => void;
}

export function DataPage({ onBack }: DataPageProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = {
    analytics: {
      title: "User Analytics Dashboard",
      description: "Comprehensive analytics platform for tracking user behavior, conversion funnels, and product engagement metrics.",
      role: "Product Analyst & Designer",
      tools: ["SQL", "Python", "Tableau", "Google Analytics", "Mixpanel"],
      duration: "6 months (2023-2024)",
      problem: "Product team lacked visibility into user behavior patterns and struggled to make data-informed decisions. Existing analytics tools provided raw data but no actionable insights or intuitive visualizations.",
      solution: "Designed and built a custom analytics dashboard that surfaces key metrics, identifies trends, and highlights anomalies. Created automated reporting systems and designed visualizations optimized for decision-making.",
      process: [
        "Requirements Gathering: Interviewed 10+ stakeholders to understand analytics needs",
        "Data Modeling: Designed database schema and tracking infrastructure",
        "SQL Development: Wrote complex queries for user segmentation and funnel analysis",
        "Dashboard Design: Created wireframes and high-fidelity mockups in Figma",
        "Visualization Development: Built interactive charts using Tableau and custom D3.js",
        "Automation: Set up automated reporting and alert systems for key metrics",
        "User Training: Created documentation and conducted training sessions",
      ],
      outcome: "Reduced time-to-insight from 3 days to real-time. Enabled product team to identify and fix conversion bottleneck, improving conversion by 25%. Dashboard used daily by 30+ team members.",
      reflection: "Good analytics is about asking the right questions, not just collecting data. The dashboard needed to tell a story, not just display numbers. Balancing detail with simplicity was key to creating something people actually use.",
      tags: ["Analytics", "SQL", "Dashboard", "Data Viz", "Python"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      ],
    },
    ml: {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for predictive modeling, including data processing, model training, and deployment systems.",
      role: "ML Engineer & Data Scientist",
      tools: ["Python", "TensorFlow", "Scikit-learn", "Docker", "AWS"],
      duration: "8 months (2024)",
      problem: "Manual processes for customer churn prediction were time-consuming and relied on intuition rather than data. The business needed automated, scalable systems for identifying at-risk customers before they churned.",
      solution: "Built complete ML pipeline from data ingestion to model deployment. Developed models achieving 85% accuracy in churn prediction, enabling proactive customer retention efforts.",
      process: [
        "Data Collection: Aggregated data from 5+ sources including CRM, usage logs, and support tickets",
        "Feature Engineering: Created 50+ features capturing user behavior patterns",
        "Model Development: Tested multiple algorithms (Random Forest, XGBoost, Neural Networks)",
        "Model Evaluation: Used cross-validation and A/B testing to validate predictions",
        "Pipeline Automation: Built automated retraining system with MLOps best practices",
        "API Development: Created REST API for real-time predictions",
        "Monitoring: Implemented model performance tracking and drift detection",
      ],
      outcome: "Achieved 85% accuracy in predicting customer churn. Retention team saved 200+ customers in first quarter using model predictions. Automated pipeline reduced model update time from weeks to hours.",
      reflection: "Machine learning is 20% modeling and 80% data engineering. The hardest part wasn't building models - it was creating reliable data pipelines and monitoring systems. Production ML requires different skills than Kaggle competitions.",
      tags: ["Machine Learning", "Python", "MLOps", "Predictive Analytics"],
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      ],
    },
    systems: {
      title: "Data Systems Architecture",
      description: "Scalable data infrastructure design for handling millions of events, supporting real-time analytics and reporting.",
      role: "Data Engineer & Architect",
      tools: ["PostgreSQL", "Redis", "Kafka", "Airflow", "AWS"],
      duration: "10 months (2023-2024)",
      problem: "Legacy data systems couldn't handle growing data volumes and were failing during peak traffic. Analytics queries took hours to run, and data pipeline failures caused reporting delays.",
      solution: "Redesigned data architecture with modern event streaming, data warehousing, and caching layers. Implemented scalable systems that handle 10M+ events daily while maintaining sub-second query performance.",
      process: [
        "System Assessment: Audited existing infrastructure and identified bottlenecks",
        "Architecture Design: Designed event-driven architecture with Kafka and microservices",
        "Migration Planning: Created zero-downtime migration strategy from legacy systems",
        "Database Optimization: Redesigned schemas, added indexes, and implemented partitioning",
        "Caching Layer: Implemented Redis caching for frequently accessed data",
        "Monitoring: Set up comprehensive observability with metrics, logs, and alerts",
        "Documentation: Created architecture diagrams and runbooks for team",
      ],
      outcome: "Reduced query times from hours to seconds. System now handles 10M+ daily events with 99.9% uptime. Enabled real-time analytics that were previously impossible. Reduced infrastructure costs by 40%.",
      reflection: "Data systems design requires thinking about scale from day one. The best architecture is one that's invisible to end users. Documentation and monitoring are as important as the code itself.",
      tags: ["Data Engineering", "Systems Design", "PostgreSQL", "Kafka", "AWS"],
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
      ],
    },
  };

  if (selectedProject && projects[selectedProject as keyof typeof projects]) {
    return (
      <CaseStudyLayout
        project={projects[selectedProject as keyof typeof projects]}
        onBack={() => setSelectedProject(null)}
        gradientFrom="from-rose-300/20"
        gradientTo="to-pink-300/20"
      />
    );
  }

  return (
    <div className="min-h-screen pt-32 px-8 pb-24 relative">
      {/* Background blurred gradients */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="glass-strong rounded-full px-6 py-3 flex items-center gap-2 mb-12 hover:scale-105 transition-all duration-300 glow-pink"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>

        <h1 className="text-7xl mb-6 gradient-text">Data Analytics & Systems</h1>
        <p className="text-2xl opacity-80 mb-16 max-w-3xl">
          Data-driven solutions, analytics platforms, and scalable systems infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects).map(([key, project]) => (
            <button
              key={key}
              onClick={() => setSelectedProject(key)}
              className="group glass-strong rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 text-left glow-pink hover:glow-warm"
            >
              {/* Preview Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-rose-300/20 to-pink-300/20">
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl mb-4 group-hover:text-rose-300 transition-colors duration-300">{project.title}</h3>
                <p className="opacity-80 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="glass px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-rose-500 group-hover:text-rose-300 group-hover:translate-x-2 transition-all duration-300">
                  View Case Study →
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}