# CV facts needed

Facts that would materially strengthen the CV. None of them are on the site or in the PDFs today, because nothing in the repository supports them and the CV does not estimate.

How to use this file:

- Fill in only what is true and that you would be comfortable defending in an interview. A missing number is better than a rounded-up one.
- Blanks are written as `<N>`. The "how it would read" column shows where the fact would go, not what the number is.
- Once you have a fact, edit the bullet in [src/constants.tsx](src/constants.tsx) (experience, skills, education) or [src/cv-profiles.ts](src/cv-profiles.ts) (summaries). Every CV profile and both PDF layouts pick it up.
- After editing, run `npm run build && npm run cv:pdf`. It fails if any CV grows past two pages.

## 1. Missing history

The highest-impact gap: the CV shows no employer after December 2024.

| Fact needed                                                               | What it strengthens                                                                                                  |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Any employment or long engagement since IKEA ended (December 2024)        | A new entry at the top of `experiences`. Recruiters read the most recent role first.                                 |
| Whether freelance has been full-time since then, and roughly since when   | The Freelance description, which currently does not say whether this is side work or the main job.                   |
| Whether you worked alone or directed other people on any freelance system | The "Senior / Lead" headlines of the Full-Stack and Frontend profiles, which today rest on ownership, not on a team. |

## 2. Freelance

This block carries the architect positioning, and it is the one with the least concrete evidence. Two or three engagements, anonymized if needed, would change that.

| Fact needed                                                                                                        | Bullet it strengthens                                                                                                                                                       | How it would read                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Number of systems or clients delivered, and the kind of product (SaaS, internal tool, e-commerce, ...)             | Description: "Client projects where I own the technical side end to end, from requirements to delivery."                                                                    | "`<N>` client systems (`<kinds>`) where I own the technical side end to end..."                                                       |
| Users, traffic or request volume of the largest system                                                             | "Choose the architecture and managed services by weighing expected load, operational complexity and running cost..."                                                        | "...for systems serving `<N>` users / `<N>` requests per day."                                                                        |
| Monthly infrastructure cost of a system, or a cost reduction you achieved and how                                  | Same bullet ("running cost"), and "Cost Optimization" in Skills                                                                                                             | "...keeping a `<N>`-user system at `<cost>` per month" or "cut hosting cost by `<N>`% by `<change>`."                                 |
| AWS services actually used in production (Lambda, ECS/Fargate, API Gateway, SQS, SNS, EventBridge, S3, CloudFront) | "Provision AWS infrastructure as code with SST, Pulumi and Terraform..." and the Cloud & Infrastructure skills, which name no AWS services today                            | "Provision AWS infrastructure (`<services>`) as code with SST, Pulumi and Terraform..."                                               |
| A queue-based, event-driven or realtime system you built for a client                                              | Turns "Event-Driven Architecture", "Queues & Pub/Sub" and "Realtime Systems" from stated competencies into demonstrated experience. Today no experience bullet claims them. | A new bullet, or better, a case study: the problem, why asynchronous or realtime was the right call, what it cost and what it bought. |
| A design decision where you chose the simpler option and why (monolith over services, managed over self-hosted...) | "...keeping each system as simple as its requirements allow."                                                                                                               | One concrete example makes this bullet evidence instead of a principle.                                                               |
| How deployments work: pipeline, environments, how often you release                                                | "Own testing and delivery: unit and end-to-end tests, deployment and consistent code standards."                                                                            | "...with `<pipeline>` deploying to `<environments>` `<frequency>`."                                                                   |
| Duration or contract value of the larger engagements (only if you are comfortable sharing)                         | Description                                                                                                                                                                 | "...including a `<N>`-month build for a `<kind of client>`."                                                                          |

The best form for most of this is a case study. Add entries to `caseStudies` in [src/constants.tsx](src/constants.tsx): a section then appears on the site and in every CV. Each needs the problem and constraints, the decisions and trade-offs, and the technologies.

## 3. IKEA

| Fact needed                                                                                      | Bullet it strengthens                                                                                                         | How it would read                                                                     |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Size of the rewrite: screens, components, endpoints or lines of code, and how long it took       | "Assessed the inherited codebase ... and completed a full rewrite of both the Vue frontend and the Python/FastAPI backend..." | "...a full rewrite (`<N>` screens, `<N>` endpoints) over `<N>` months..."             |
| Whether the rewrite was your proposal, who approved it, and whether others worked on it with you | Same bullet. Today it says you did it; it does not say you initiated or led it, because the repository does not say so.       | "Proposed and led..." or "Proposed, got buy-in from `<role>` and completed..."        |
| Team size                                                                                        | Same bullet, and "Shaped solutions with Product, UI and Data; reviewed pull requests and supported teammates."                | "...in a team of `<N>`."                                                              |
| Who used ROIT: number of stores, markets or co-workers                                           | Description: "ROIT (Range Offer Input Tool), an internal tool for optimizing the range of articles in physical stores..."     | "...used by `<N>` stores across `<N>` markets."                                       |
| Any measurable effect of the rewrite: delivery speed, defect rate, build or deploy time          | Same rewrite bullet                                                                                                           | "...which cut `<metric>` from `<before>` to `<after>`."                               |
| Number of tests written, or coverage before and after                                            | "Wrote unit (Jest) and end-to-end (Cypress) tests that gated every pull request in GitHub Actions."                           | "Wrote `<N>` unit and `<N>` end-to-end tests, taking coverage from `<N>`% to `<N>`%." |
| What the infrastructure work actually was (a Terraform module, a Kubernetes change, a pipeline)  | "Worked in a GCP environment on Docker, Kubernetes and Terraform, with occasional infrastructure work."                       | Replaces "occasional infrastructure work" with the specific change.                   |

## 4. LogicFlow

| Fact needed                                                                       | Bullet it strengthens                                                                                      | How it would read                                                           |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Migration size: screens, components, modules or lines of code                     | Description: "...migrating a large AngularJS frontend to Angular v12+." ("large" is unquantified)          | "...migrating a `<N>`-screen AngularJS frontend to Angular v12+."           |
| Team size, and how much of the migration was yours                                | "Moved application code from AngularJS to Angular v12+, porting the existing unit and end-to-end tests..." | "Migrated `<N>` of `<N>` modules in a team of `<N>`..."                     |
| Number of tests ported and written                                                | Same bullet                                                                                                | "...porting `<N>` tests and writing `<N>` new ones..."                      |
| Whether you shaped the migration approach (order, coexistence of both frameworks) | Would support a bullet on migration strategy. Today the CV says only that you did the migration.           | "Defined the migration order and ran AngularJS and Angular side by side..." |

## 5. Taxback International

| Fact needed                                             | Bullet it strengthens                                                                         | How it would read                                                |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Effect of the caching: fewer requests, faster screens   | "Implemented client-side response caching on IndexedDB to cut redundant network requests."    | "...cutting requests by `<N>`% / load time from `<a>` to `<b>`." |
| What happened to the React Native app: shipped, to whom | "Proposed React Native for the mobile port; the team lead agreed and we started building it." | "...and shipped it to `<N>` users."                              |
| What the architectural changes with the tech lead were  | "Worked with the tech lead on architectural changes and system design; mentored teammates."   | Names the change instead of the activity.                        |
| How many people you mentored                            | Same bullet                                                                                   | "...mentored `<N>` developers."                                  |

## 6. WeTrack

| Fact needed                                               | Bullet it strengthens                                                                                                       | How it would read                                                 |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Number of custom components, or share of the UI you built | "Built a substantial part of the Angular frontend, including a large set of custom components."                             | "...including `<N>` custom components."                           |
| What the backend refactoring changed, and your part in it | "Delivered backend features in .NET Core and Entity Framework ... and contributed to refactoring the backend architecture." | Names the refactoring (for example, the layering or data access). |
| Who used the platform: customers, events, users           | Description: "Project and risk management platform on Azure..."                                                             | "...used by `<N>` organizations / for `<kind of events>`."        |
| Team size, and how many junior developers you mentored    | "Mentored junior developers and reviewed pull requests."                                                                    | "Mentored `<N>` junior developers in a team of `<N>`."            |

## 7. Profile

| Fact needed                                                                                    | Where it goes                                                                                                                      |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| LinkedIn URL                                                                                   | Contact line of every CV and the site's structured data (`profiles` in [src/site-config.ts](src/site-config.ts)).                  |
| Languages and level (Bulgarian, English, others)                                               | A line in the CV header or after Education. Often screened for in remote EU roles; the CV says nothing about it today.             |
| SoftUni: exact program name, years attended, whether you completed it, any certificate         | The Education entry, which says "Professional program in software engineering" and gives no dates because the repository has none. |
| Certifications (AWS or others)                                                                 | A new section. None are claimed today.                                                                                             |
| Availability details you want public: start date, hours of overlap, notice period              | Next to "Remote · B2B / Contract". Only what you want every reader to see.                                                         |
| Two year counts to confirm: PostgreSQL (shown as 1 year) and GitHub Actions (shown as 3 years) | Technology Depth on the site. PostgreSQL looks low for something described as a regular choice since 2020.                         |
| Public repositories or write-ups that show a design you are proud of                           | Case studies, and the GitHub link carries more weight if it leads somewhere specific.                                              |
