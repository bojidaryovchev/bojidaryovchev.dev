# SRE / DevOps Interview Prep — Roadmap

Personal study plan for the **Site Reliability Engineer (SRE) – AWS & Terraform** role.
Companion to the tailored CV at `/sre`. The goal is simple: **by interview time, every skill the CV
presents should be something I can actually defend under hands-on questioning.**

> Honesty principle: the CV lists these skills confidently. This document is the contract that makes
> that true. Front-loaded by _risk_ — the things most likely to get probed and most currently thin
> come first.

---

## 1. Where I really stand (be honest with myself)

| Area                                          | Reality today                                      | Risk in interview                                        |
| --------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| AWS (core services)                           | Real, developer-flavored (3 yrs deploying via IaC) | **Medium** — need reliability/ops depth, not just deploy |
| Terraform / IaC                               | Real but ~1 yr                                     | **Medium** — modules, state, drift questions             |
| CI/CD                                         | Real (GitHub Actions, BitBucket)                   | Low–Medium                                               |
| Docker / Kubernetes                           | Real at IKEA, but not deep on K8s internals        | **Medium–High**                                          |
| Python                                        | Real (2 yrs, FastAPI)                              | Low                                                      |
| **Linux administration**                      | Thin — used it, never _operated_ it                | **HIGH**                                                 |
| **Bash scripting**                            | Thin                                               | **HIGH**                                                 |
| **Observability** (metrics/logs/traces)       | Mostly new                                         | **HIGH**                                                 |
| **SLI/SLO/error budgets**                     | New (concepts only)                                | **HIGH**                                                 |
| **Incident response / on-call / postmortems** | No formal experience                               | **HIGH**                                                 |
| Networking (TCP/IP, DNS, TLS, VPC)            | Working knowledge, not deep                        | Medium                                                   |

**Front-load the HIGH items.** They are the highest-probability, highest-embarrassment questions and
the ones where the gap between the CV and reality is widest.

---

## 2. The single most important thing: build one real reliable system

The fastest way to turn an aspirational CV into an honest one is to **build a small but complete,
production-shaped system** and operate it. One weekend-to-two-week project lets me truthfully answer
almost every question below with "here's how I did it."

### Capstone project: "Reliable service on AWS, fully IaC'd and observable"

Build a small web service (reuse a Node/Python API — I already have these) and:

- [ ] Provision **everything** with **Terraform**: VPC (public/private subnets), an ALB, ECS Fargate
      **or** EKS, an RDS PostgreSQL instance, security groups, IAM roles (least privilege), S3 for
      state, DynamoDB for state locking.
- [ ] Remote **Terraform state** in S3 + locking; use **modules** and at least two **workspaces**
      (staging/prod). Deliberately cause and then resolve **state drift**.
- [ ] **CI/CD** with GitHub Actions: build → test → `terraform plan` on PR → `terraform apply` on
      merge; container image build and deploy. Add a **manual approval** gate for prod.
- [ ] **Observability**: CloudWatch metrics/alarms + a **Prometheus + Grafana** stack (or Amazon
      Managed Prometheus/Grafana). Instrument the app with **OpenTelemetry** for traces.
- [ ] Define **SLIs and SLOs** for the service (availability + latency), wire **alerting** to burn
      rate, and write down the **error budget** policy.
- [ ] Write a **runbook** and a **blameless postmortem** template. Then **break it on purpose**
      (kill a task, exhaust connections, push a bad deploy) and practice **debugging + writing the
      postmortem**.
- [ ] A **Bash script** or two that automate a real toil task (log grep + summarize, rotate
      something, health-check loop).

Put the repo on GitHub and link it from the portfolio. This project alone covers Terraform, AWS,
CI/CD, Docker/K8s, observability, SLOs, incident response, Linux and Bash — the entire HIGH list.

---

## 3. Phased study plan (~6–8 weeks, adjustable)

### Week 1 — Linux + Bash (the highest risk)

The classic SRE screen: _"here's a slow/broken Linux box — debug it."_ Must be reflexive.

- **Fundamentals**: processes & signals, `systemd`/`systemctl`, file permissions & ownership, users,
  `/proc` and `/sys`, the boot sequence, disk & filesystems, cron.
- **Troubleshooting toolkit** — practice until fluent:
  - CPU/mem: `top`, `htop`, `vmstat`, `mpstat`, `free`, `uptime` (load average!)
  - Disk/IO: `df`, `du`, `iostat`, `lsof`, `iotop`
  - Network: `ss`/`netstat`, `ip`, `ping`, `traceroute`, `dig`/`nslookup`, `curl -v`, `tcpdump`,
    `nc`
  - Processes: `ps aux`, `strace`, `ltrace`, `/proc/<pid>`, `kill`/`nice`/`renice`
  - Logs: `journalctl`, `dmesg`, `tail -f`, `grep`/`awk`/`sed`
- **Bash**: variables, quoting, `if`/`for`/`while`, functions, exit codes, pipes & redirection,
  `set -euo pipefail`, `trap`, arguments (`$1`, `$@`), text processing (`awk`/`sed`/`cut`/`sort`/`uniq`).
- **Drill**: "disk is full — find the culprit," "a process is eating CPU — why," "the service won't
  start — diagnose via `systemctl`/`journalctl`," "port 443 not responding — walk the stack."
- Resources: _The Linux Command Line_ (William Shotts, free PDF), Julia Evans' zines (debugging,
  networking), OverTheWire **Bandit** (fun shell drills).

### Week 2 — Networking + Cloud/AWS fundamentals

- **Networking**: OSI vs TCP/IP, the life of an HTTP request, DNS resolution end to end, TCP
  handshake & connection states, TLS handshake, HTTP/1.1 vs 2 vs 3, load balancing (L4 vs L7),
  subnets/CIDR, NAT, routing.
- **AWS core** (know when and why, not just what):
  - Compute: EC2, **ECS/Fargate**, **EKS**, Lambda, Auto Scaling
  - Networking: **VPC**, subnets, route tables, **security groups vs NACLs**, ALB/NLB, Route 53,
    CloudFront, VPC endpoints
  - Storage/DB: S3 (durability/consistency), **RDS** (Multi-AZ vs read replicas), DynamoDB, EBS
  - **IAM**: users/roles/policies, least privilege, assume-role, instance profiles
  - Ops: **CloudWatch** (metrics/logs/alarms), CloudTrail, Systems Manager, Secrets Manager/SSM
    Parameter Store
  - Resilience: **AZs vs Regions**, multi-AZ, backups, RTO/RPO
- Resources: AWS **Well-Architected Framework** (esp. Reliability + Operational Excellence pillars),
  Adrian Cantrill or Stephane Maarek courses if going for a cert.

### Week 3 — Terraform / IaC (depth)

- Core: providers, resources, variables, outputs, `terraform plan/apply/destroy`, the dependency
  graph.
- **State**: what it is, **remote state** (S3 + DynamoDB lock), `terraform state` subcommands,
  `import`, **drift**, `-target`, `-refresh`.
- **Structure**: **modules** (inputs/outputs/versioning), workspaces vs directory-per-env, DRY
  patterns, `for_each`/`count`, `dynamic` blocks.
- **Practices**: keeping plans small & reviewable, secrets handling, `terraform fmt`/`validate`,
  policy-as-code (Sentinel/OPA — awareness), CI integration (plan on PR).
- Common interview Qs: "how do you manage state across a team," "someone changed infra in the
  console — what happens," "how do you structure modules for multiple environments," "how do you do
  zero-downtime changes."

### Week 4 — Containers + Kubernetes

- **Docker**: images vs containers, layers & caching, multi-stage builds, networking, volumes,
  registries, image size/security.
- **Kubernetes**: Pods, ReplicaSets, **Deployments**, Services (ClusterIP/NodePort/LoadBalancer),
  **Ingress**, ConfigMaps/Secrets, namespaces, resource requests/limits, liveness/readiness probes,
  HPA, rollouts & rollbacks, DaemonSets/StatefulSets.
- **Debugging**: `kubectl get/describe/logs/exec`, events, `CrashLoopBackOff`, `ImagePullBackOff`,
  OOMKilled, pending pods (scheduling), why a service has no endpoints.
- Tie back to IKEA experience (Docker + K8s + Terraform on GCP) — this is a real story, deepen it.

### Week 5 — Observability + SRE core concepts

- **Three pillars**: metrics, logs, traces — what each is for, cardinality, sampling.
- **Prometheus**: pull model, exporters, PromQL basics, `node_exporter`, recording/alerting rules,
  Alertmanager. **Grafana**: dashboards, panels, data sources.
- **OpenTelemetry**: instrumentation, spans, context propagation; where CloudWatch/X-Ray/Datadog fit.
- **The Google SRE playbook** (read these — free online):
  - **SLI / SLO / SLA**, **error budgets**, and how they drive decisions
  - The **Four Golden Signals** (latency, traffic, errors, saturation)
  - **Toil** — definition and elimination
  - **Incident management**, on-call, **blameless postmortems**
  - **RED** (Rate/Errors/Duration) and **USE** (Utilization/Saturation/Errors) methods
- Resources: **Google SRE Book** + **SRE Workbook** (sre.google/books — free), _Observability
  Engineering_ (Honeycomb).

### Week 6 — System design + incident/behavioral + mock loops

- **Reliability-focused system design**: design a scalable, highly-available service on AWS; design
  a monitoring/alerting system; design a CI/CD pipeline; capacity planning; caching; queues;
  failure modes and blast-radius reduction; graceful degradation; retries/backoff/idempotency;
  circuit breakers.
- **Incident scenarios** (practice out loud): "traffic spike → latency up, what do you do,"
  "deploy caused errors → roll back or forward," "database at 100% CPU," "cascading failure."
- **Behavioral / STAR** — see section 5.
- Do **2–3 mock interviews** (peer, or paid). This is where fluency is proven.

> Weeks are a scaffold, not a straitjacket — collapse or extend based on how the real gaps feel.

---

## 4. Question bank by JD requirement

Map each JD line to what I must be able to answer.

**"Design/maintain scalable, reliable AWS infrastructure"**

- Design a multi-AZ web app; where are the single points of failure? How do you remove them?
- ALB vs NLB? When do you use each?
- How do you achieve zero-downtime deploys?

**"Terraform / IaC"**

- How is remote state stored and locked? Why does locking matter?
- Module design for multiple environments?
- Someone edited infra by hand — how do you detect and reconcile drift?

**"CI/CD"**

- Rolling vs blue/green vs canary — trade-offs?
- How do you gate a risky deploy? Progressive delivery?
- How do you roll back safely (including DB migrations)?

**"Reliability objectives, availability, performance metrics"**

- Define an SLI and an SLO for a checkout API. What's the error budget?
- What do you do when the error budget is exhausted?
- Four Golden Signals — what would you alert on and why?

**"Observability — monitoring, logging, tracing, alerting"**

- Metrics vs logs vs traces — when each?
- What makes a _good_ alert? (actionable, symptom-based, low noise)
- How do you reduce alert fatigue?

**"Incident response, RCA, post-incident reviews"**

- Walk me through an incident from page to resolution.
- What goes in a blameless postmortem? Why blameless?
- MTTR/MTTD — how do you reduce them?

**"Linux troubleshooting"**

- Server is slow — walk me through diagnosis.
- Disk full / high load / process hung / port unreachable — live debugging.

**"Networking & security"**

- What happens when I type a URL and hit enter?
- Security groups vs NACLs? Least-privilege IAM in practice?
- How does TLS work at a high level?

**"Reduce toil through automation"**

- Give an example of toil you automated. (Prepare a real one — even from dev work.)

---

## 5. STAR stories to prepare (grounded in real experience)

Build 5–6 stories in **Situation / Task / Action / Result** form. Use _real_ work, framed for
reliability. Don't invent incidents — reframe genuine ones.

1. **Ownership & reliability (IKEA rewrite)** — inherited a debt-laden, hard-to-change codebase;
   rewrote frontend + backend to best practices on a K8s/Terraform/GCP platform with CI/CD test
   gating. Result: maintainable, reliably deployable service I owned end to end.
2. **Infrastructure as code (Freelance)** — designing/provisioning AWS environments with
   Terraform/Pulumi/SST so environments are reproducible and cost-efficient. Pick one concrete
   engagement.
3. **CI/CD & safe delivery (IKEA / LogicFlow)** — automated test suites gating every PR before merge
   (GitHub Actions / BitBucket Pipelines) as an acceptance criterion.
4. **Debugging under pressure** — a real production/staging bug you root-caused. This is your proxy
   for "tell me about an incident." Practice narrating the diagnosis method.
5. **Performance/resilience (Taxback)** — client-side response caching with IndexedDB to cut
   redundant calls and improve resilience.
6. **Collaboration / driving a decision (Taxback React Native, or a design call)** — proposing an
   approach, aligning the team, delivering.

> If asked directly about production on-call/paging experience I don't have: be honest, then pivot —
> "I haven't carried a formal pager yet; here's the closest real debugging I've owned, here's how I
> think about incident response, and here's the on-call runbook I built for my own project."

---

## 6. Optional but high-leverage

- **AWS certification** — a real credibility shortcut given the "AWS certifications" nice-to-have.
  - **Solutions Architect Associate (SAA-C03)** — best general foundation, most recognized.
  - **SysOps Administrator Associate** or **DevOps Engineer Professional** — more ops/SRE-aligned if
    time allows after SAA.
- **CKA (Certified Kubernetes Administrator)** — if the role turns out to be K8s-heavy.
- Read one full book cover to cover for depth: **Google SRE Book** (free) is the canonical one.

---

## 7. Interview-day checklist

- [ ] Can debug a broken Linux box out loud without hesitation.
- [ ] Can write a clean Bash script with `set -euo pipefail` and explain it.
- [ ] Can whiteboard a reliable multi-AZ AWS architecture and name the failure modes.
- [ ] Can explain Terraform state, locking, modules, and drift from memory.
- [ ] Can define an SLI/SLO/error budget for a given service and design its alerts.
- [ ] Can narrate an incident end to end and describe a blameless postmortem.
- [ ] Have the capstone repo deployed and can screen-share/walk through it.
- [ ] Have 5–6 STAR stories rehearsed.
- [ ] Have 3–4 sharp questions to ask _them_ (on-call rotation, SLO culture, toil, incident process).

---

## Key free resources

- **Google SRE Book + SRE Workbook** — https://sre.google/books/
- **AWS Well-Architected Framework** — Reliability & Operational Excellence pillars
- **The Linux Command Line** (Shotts) — free PDF
- **Julia Evans zines** (wizardzines.com) — debugging, networking, bash
- **Terraform docs** — Get Started + State + Modules guides
- **Kubernetes docs** — "Concepts" section
- **OverTheWire Bandit** — hands-on shell practice
