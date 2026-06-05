import { ICarouselQuote } from '../../../types/portfolio';

export const projectDetailsQuotes: ICarouselQuote[] = [
  {
    id: 4,
    title: 'KubeLens AI',
    quote:
      'A Kubernetes operations console built to turn noisy cluster signals into deterministic diagnostics, incident workflows, and safe next actions.',
  },
  {
    id: 1,
    title: 'The operator view',
    quote:
      'Pods, nodes, deployments, RBAC, events, metrics, alerts, remediation proposals, postmortems, and assistant context sit in one product surface.',
  },
  {
    id: 2,
    title: 'The stack',
    quote:
      'React/Vite, Go APIs, FastAPI prediction, Kubernetes APIs, Helm, Kustomize, Prometheus, Grafana, Jaeger tracing, SSE/WebSocket streaming, RBAC, and audit trails.',
  },
  {
    id: 3,
    title: 'What it proves',
    quote:
      'The AI layer explains deterministic evidence instead of replacing it, so the workflow stays usable for production-style operations and safer triage.',
  },
];

export const stateSightProjectDetailQuotes: ICarouselQuote[] = [
  {
    id: 1,
    title: 'StateSight',
    quote: `A GitOps forensic platform for Kubernetes that compares desired Git state with live cluster state, explains drift, and groups findings into incidents.`,
  },
  {
    id: 2,
    title: 'Still being developed',
    quote: `The current baseline is intentionally scoped: semantic drift detection, provenance records, ignore rules, OIDC API boundaries, and no auto-remediation yet.`,
  },
  {
    id: 3,
    title: 'Evidence first',
    quote:
      'It records Git and kubectl provenance, uses managedFields as ownership evidence, and avoids inventing an actor when the data only proves a field changed.',
  },
  {
    id: 4,
    title: 'Implementation',
    quote:
      'Go API, Redis worker queue, PostgreSQL migrations, React/Vite/Tailwind UI, Docker Compose, Makefile flows, health checks, metrics, and docs checks.',
  },
];

export const nodewrightProjectDetailQuotes: ICarouselQuote[] = [
  {
    id: 1,
    title: 'Nodewright',
    quote:
      'Formerly known as Skyhook, Nodewright is a Kubernetes-aware package manager and operator for host OS customization at cluster scale.',
  },
  {
    id: 2,
    title: 'Contribution surface',
    quote:
      'My resume tracks this as a major open-source contribution area, roughly 10K lines across fixes, workflows, tests, stability work, and operator behavior.',
  },
  {
    id: 3,
    title: 'Why it matters',
    quote:
      'It handles node selectors, interruption budgets, workload-sensitive changes, runtime-required taints, package lifecycle, Helm installation, and resource validation.',
  },
];
