export const keyTechSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'Kubernetes, Helm, Kustomize',
    iconUrl: '/assets/portfolio/projects/icons/docker.svg',
  },
  {
    text: 'Docker, Docker Swarm, Docker Compose',
    iconUrl: '/assets/portfolio/projects/icons/docker.svg',
  },
  {
    text: 'GitHub Actions, CodeQL, Trivy, CI/CD',
    iconUrl: '/assets/portfolio/skills/github-original.svg',
  },
  {
    text: 'Go, Python, Java, TypeScript',
    iconUrl: '/assets/portfolio/projects/icons/go.svg',
  },
  {
    text: 'React, Vite, FastAPI, Spring Boot',
    iconUrl: '/assets/portfolio/skills/react-original.svg',
  },
  {
    text: 'PostgreSQL, Redis, MongoDB, MySQL',
    iconUrl: '/assets/portfolio/skills/postgresql-original.svg',
  },
  {
    text: 'AWS, Linux, Nginx, Traefik, Portainer',
    iconUrl: '/assets/portfolio/skills/aws.svg',
  },
  {
    text: 'Prometheus, Grafana, Jaeger, Zabbix, alerting',
    iconUrl: '/assets/portfolio/skills/git-original.svg',
  },
];

export const otherSkills: { text: string; iconUrl: string }[] = [
  {
    text: 'Incident analysis, logs, metrics, and runbooks',
    iconUrl: '/assets/portfolio/projects/icons/shell.svg',
  },
  {
    text: 'OWASP, RBAC, TLS, audit logs, hardening',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'Open-source PRs, tests, docs, and review',
    iconUrl: '/assets/portfolio/skills/python-original.svg',
  },
  {
    text: 'Arabic native, French C1, English C2, Chinese B1',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'GitHub Foundations, Actions, Advanced Security, Administration',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'AWS Cloud Practitioner, Huawei Cloud, Cisco Data Analytics',
    iconUrl: '/assets/portfolio/skills/check.svg',
  },
  {
    text: 'Chess leadership: founding president, Mundiapolis Chess Club',
    iconUrl: '/assets/portfolio/skills/wasm.svg',
  },
  {
    text: 'Chess ratings: rapid 2205, blitz 1922, FIDE 1851',
    iconUrl: '/assets/portfolio/skills/vitals.webp',
  },
];

export const resumeProjectHighlights: { title: string; text: string; url?: string }[] = [
  {
    title: 'KubeLens AI',
    text:
      'AI-assisted Kubernetes diagnostics platform with inventory, deterministic incident analysis, runbooks, controlled remediation, postmortems, Prometheus/Grafana observability, Jaeger tracing, audit trails, and assistant workflows.',
    url: 'https://github.com/AnouarMohamed/KubLens-AI',
  },
  {
    title: 'StateSight',
    text:
      'GitOps forensic platform still in active development. It compares Git desired state with live Kubernetes state, records provenance, groups drift into incidents, and keeps remediation intentional rather than automatic.',
    url: 'https://github.com/AnouarMohamed/StateSight',
  },
  {
    title: 'DockerSwarmLens',
    text:
      'Docker Swarm operations console with live inventory, deterministic diagnostics, incident workflows, approvals, assistant SSE streaming, append-only audit logs, telemetry, and production deployment docs.',
    url: 'https://github.com/AnouarMohamed/DockerSwarmLens',
  },
  {
    title: 'PentestBoard',
    text:
      'Authorized web security assessment platform covering scope, targets, OWASP-style checklists, findings, evidence metadata, remediation tracking, activity logs, report approval, and C++ evidence processing.',
    url: 'https://github.com/AnouarMohamed/PentestBoard',
  },
  {
    title: 'TCP Command Channel',
    text:
      'Go TCP command channel with TLS, token auth, length-prefixed frames, allowlisted execution, single-session control, heartbeat handling, output caps, reconnect logic, and NDJSON audit logs.',
    url: 'https://github.com/AnouarMohamed/TCP',
  },
  {
    title: 'AWS/Zabbix Hybrid Monitoring',
    text:
      'AWS-hosted Zabbix 7.0 monitoring lab over Docker Compose, supervising Linux and Windows Server infrastructure with VPC/security-group design, passive agent polling, dashboards, and alerting.',
    url: 'https://github.com/AnouarMohamed/AWS-Zabbix-Hybrid-Monitoring',
  },
  {
    title: 'Mundiapolis Library',
    text:
      'Production university library platform with Next.js, React, TypeScript, PostgreSQL, borrowing, renewals, reviews, admin approvals, circulation, fines, reminders, analytics, exports, and CI.',
    url: 'https://github.com/AnouarMohamed/Mundia_library',
  },
];

export const openSourceHighlights: { title: string; text: string; url?: string }[] = [
  {
    title: 'NVIDIA Nodewright / Skyhook',
    text:
      'Major contribution area of roughly 10K lines according to my CV, across fixes, workflows, tests, stability improvements, and Kubernetes operator behavior. The project is explicitly being renamed from Skyhook to Nodewright.',
    url: 'https://github.com/NVIDIA/nodewright',
  },
  {
    title: 'BigWheels, GKE Policy Automation, Kubernetes',
    text:
      'Contribution areas around PRs, tests, documentation, and review, with roughly 1K lines each tracked in my CV.',
    url: 'https://github.com/AnouarMohamed',
  },
  {
    title: 'Additional professional codebases',
    text:
      'Worked across Flipt, Oracle FDR, cronet-transport-for-okhttp, aws-xray-sdk-node, GPU Operator, and other public repositories visible on my GitHub profile.',
    url: 'https://github.com/AnouarMohamed',
  },
];

export const operationalStrengths: { title: string; text: string }[] = [
  {
    title: 'Production and exploitation',
    text:
      'Real deployments, reverse proxies, VPS administration, Docker Compose, Docker Swarm, uptime controls, monitoring, and deployment documentation.',
  },
  {
    title: 'Diagnostics',
    text:
      'Incident analysis, log reading, metric correlation, deterministic findings, runbook writing, and evidence-first operational workflows.',
  },
  {
    title: 'Security',
    text:
      'Dependency control, CodeQL, Trivy, OWASP practices, RBAC, TLS, audit logs, container hardening, secrets handling, and safer write-action gates.',
  },
  {
    title: 'Collaboration',
    text:
      'Open-source PRs, tests, reproducible fixes, code review, technical documentation, and communication across professional codebases.',
  },
];

export const professionalExperience: IProfessionalExperience[] = [
  {
    variant: 'withResponsibilities',
    company: 'ITO',
    companyImg: '/assets/portfolio/projects/icons/docker.svg',
    role: 'DevSecOps and Infrastructure Intern',
    shortSummary:
      'Pre-hire internship focused on production infrastructure, service migration, deployment automation, CI/CD hardening, monitoring, and operational documentation.',
    timeFrame: 'Jan 2026 - Jun 2026',
    responsibilities: [
      {
        text: 'Administered VPS infrastructure and migrated roughly 6 application services to Docker Swarm, Portainer, Traefik, then Nginx.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Hardened CI/CD with tests, CodeQL, dependency scanning, API monitoring, and production uptime supervision.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Reduced recurring manual pre-deployment checks by roughly 30% through automation and documented deployment procedures.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Set up observability and uptime controls to accelerate incident diagnosis in production environments.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'withResponsibilities',
    company: 'Finatech Group',
    companyImg: '/assets/portfolio/skills/aws.svg',
    role: 'Deployment, Virtualization, and Monitoring Intern',
    shortSummary:
      'Infrastructure internship covering virtualized environments, monitoring dashboards, alerting, network segmentation, hardening, and operations documentation.',
    timeFrame: 'Jun 2025 - Aug 2025',
    responsibilities: [
      {
        text: 'Deployed 8 virtualized environments and 4 monitoring dashboards with alerting for internal services.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Contributed to network segmentation across 3 logical zones and hardened baseline configurations.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Documented deployment and monitoring procedures for repeatable operations.',
        iconUrl: '/assets/portfolio/check.svg',
      },
      {
        text: 'Reduced recurring manual monitoring checks by roughly 30%.',
        iconUrl: '/assets/portfolio/check.svg',
      },
    ],
  },
  {
    variant: 'simple',
    company: 'CHP Casablanca',
    companyImg: '/assets/portfolio/skills/check.svg',
    role: 'Digitalization and Workflows Intern',
    shortSummary:
      'Digitized patient workflows around registrations, transfers, queues, and operational dashboards, improving traceability in a real hospital environment with strong operational constraints.',
    timeFrame: '2024',
  },
];

export type IProfessionalExperience =
  | {
      variant: 'withResponsibilities';
      company: string;
      companyImg: string;
      role: string;
      timeFrame: string;
      shortSummary: string;
      responsibilities: { text: string; iconUrl: string; url?: string }[];
    }
  | {
      variant: 'simple';
      role: string;
      company: string;
      companyImg: string;
      timeFrame: string;
      shortSummary: string;
    };
