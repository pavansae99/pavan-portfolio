export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#agentic-ai" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Production-grade services designed for clarity, throughput, and long-term maintainability.",
    items: ["Golang", "Python", "Java", "REST", "gRPC"],
    tone: "lime",
  },
  {
    number: "02",
    title: "Distributed Systems",
    description:
      "Resilient architectures that keep working through scale, latency, and partial failure.",
    items: ["Microservices", "Kafka", "Redis", "PostgreSQL", "Event-driven"],
    tone: "blue",
  },
  {
    number: "03",
    title: "Cloud Native",
    description:
      "Repeatable delivery systems with observability and operational confidence built in.",
    items: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
    tone: "orange",
  },
  {
    number: "04",
    title: "Intelligent Systems",
    description:
      "Practical AI agents that reason over tools, workflows, and real-world context.",
    items: ["Agentic AI", "LLMs", "RAG", "LangGraph", "MCP"],
    tone: "ink",
  },
];

export const experience = [
  {
    period: "APR 2025 — PRESENT",
    company: "Google",
    role: "Senior Software Engineer",
    focus: "Golang, Python & Cloud Infrastructure",
    summary:
      "Building services for the Google Distributed Cloud Hosted compliance platform, with an emphasis on secure automation across multi-cluster Kubernetes environments.",
    highlights: [
      "Develop Go microservices and Python workflows for compliance evidence collection, policy evaluation, and OSCAL reporting.",
      "Engineer secure gRPC communication, RBAC, mTLS, and short-lived authentication for distributed services.",
    ],
    stack: ["Go", "Python", "Kubernetes", "gRPC", "GCP"],
  },
  {
    period: "OCT 2024 — APR 2025",
    company: "DigitalOcean",
    role: "Senior Software Engineer",
    focus: "Identity & Platform Services",
    summary:
      "Developed identity and platform services focused on secure authentication, efficient service communication, and dependable cloud operations.",
    highlights: [
      "Built Go-based SSO and authentication services using gRPC, Protobuf, OAuth2, JWT, and role-based access control.",
      "Created Python automation for identity lifecycle management, service diagnostics, and deployment validation.",
    ],
    stack: ["Go", "Python", "gRPC", "Kubernetes", "OAuth2"],
  },
  {
    period: "MAR 2023 — SEP 2024",
    company: "State Farm",
    role: "Senior Backend Engineer",
    focus: "Golang & Cloud Platforms",
    summary:
      "Designed backend services and data workflows for recruiting and enterprise platforms, combining API reliability with cloud-native delivery.",
    highlights: [
      "Built Go microservices and a background-check API that improved onboarding speed and access to recruiting results.",
      "Developed Python data processing and PyTest automation while supporting Kubernetes and event-driven workloads.",
    ],
    stack: ["Go", "Python", "PostgreSQL", "Kafka", "Kubernetes"],
  },
  {
    period: "JUN 2022 — JAN 2023",
    company: "Bloomberg Law",
    role: "Software Engineer",
    focus: "Golang, Python & Java",
    summary:
      "Built scalable backend and data services for legal technology products, with a focus on high-volume processing, search, and secure APIs.",
    highlights: [
      "Created Go REST and RPC microservices for large PostgreSQL datasets and built FastAPI services for document metadata workflows.",
      "Improved reliability through automated testing, JWT and SSO integrations, and production support across AWS-based systems.",
    ],
    stack: ["Go", "Python", "Java", "PostgreSQL", "AWS"],
  },
];

export const projects = [
  {
    number: "01",
    category: "AI / AUTOMATION",
    title: "AI Job Search Agent",
    description:
      "A multi-step agent that discovers roles, scores fit, researches companies, and turns raw listings into an organized application pipeline.",
    tags: ["Python", "LangGraph", "LLMs", "RAG"],
    featured: true,
  },
  {
    number: "02",
    category: "DISTRIBUTED SYSTEMS",
    title: "Event-Driven Processing Platform",
    description:
      "A resilient processing architecture for high-volume workloads, designed around idempotency, backpressure, and operational clarity.",
    tags: ["Go", "Kafka", "Kubernetes", "OpenTelemetry"],
    featured: false,
  },
  {
    number: "03",
    category: "PLATFORM ENGINEERING",
    title: "Cloud-Native Service Toolkit",
    description:
      "Opinionated service foundations that standardize configuration, health checks, telemetry, testing, and deployment across teams.",
    tags: ["Go", "Docker", "Terraform", "AWS"],
    featured: false,
  },
];

export const agentCapabilities = [
  {
    step: "01",
    title: "Discover",
    text: "Collects and normalizes relevant roles from multiple sources.",
  },
  {
    step: "02",
    title: "Evaluate",
    text: "Scores role fit against skills, goals, seniority, and constraints.",
  },
  {
    step: "03",
    title: "Research",
    text: "Builds focused company context and surfaces useful talking points.",
  },
  {
    step: "04",
    title: "Act",
    text: "Creates tailored materials and a review-ready application queue.",
  },
];

export const aiExperience = [
  "Tool-using agents with explicit state, memory, and human approval gates",
  "Retrieval pipelines grounded in domain-specific knowledge",
  "Structured outputs, evaluations, and guardrails for reliable automation",
  "Model Context Protocol integrations for portable tool access",
];

export const contact = {
  email: "lankalapalli.pavansai@gmail.com",
  github: "https://github.com/pavansae99",
  linkedin: "https://www.linkedin.com/in/pavansailankalapalli",
};
