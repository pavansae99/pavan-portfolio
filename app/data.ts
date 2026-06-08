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
    period: "CURRENT",
    role: "Senior Software Engineer",
    focus: "Cloud & Distributed Systems",
    summary:
      "Leading the design and delivery of cloud-native backend platforms, with a focus on service reliability, developer velocity, and systems that scale cleanly.",
    highlights: [
      "Architect distributed services and APIs in Go, Python, and Java.",
      "Build Kubernetes-first platforms with automated delivery and observability.",
      "Drive technical direction through design reviews, mentorship, and pragmatic standards.",
    ],
    stack: ["Go", "Kubernetes", "AWS", "Kafka", "PostgreSQL"],
  },
  {
    period: "FOUNDATION",
    role: "Software Engineer",
    focus: "Backend Platforms & Automation",
    summary:
      "Built the backend foundations and automation workflows that turn complex business requirements into dependable, measurable software.",
    highlights: [
      "Developed high-throughput microservices and asynchronous workflows.",
      "Improved operational visibility with metrics, tracing, and structured logging.",
      "Partnered across product and engineering to ship incremental, low-risk changes.",
    ],
    stack: ["Python", "Java", "Docker", "Redis", "CI/CD"],
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
  email: "pavansailankalapalli@gmail.com",
  github: "https://github.com/pavansae99",
  linkedin: "https://www.linkedin.com/in/pavansailankalapalli",
};
