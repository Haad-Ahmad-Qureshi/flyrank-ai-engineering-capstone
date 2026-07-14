# FlyRank AI Engineering Capstone

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A portfolio-ready capstone project for the [FlyRank AI Internship](https://internship.flyrank.ai/) — focused on building reliable, reviewable AI engineering systems with clear ownership, evaluation evidence, and production-minded design.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Purpose of This Repository](#purpose-of-this-repository)
- [License](#license)

---

## Project Overview

This repository contains the final capstone submission for the **FlyRank AI Engineering** track. The project demonstrates end-to-end AI engineering skills — from API design and model integration through evaluation, failure handling, and documentation.

The capstone is built as a **public, inspectable artifact** that reviewers, mentors, and recruiters can evaluate directly. It emphasizes practical delivery over theory: working code, measurable outputs, and honest notes on limitations and trade-offs.

> **Status:** Active development. Core application code and deployment links will be added as implementation progresses.

---

## Features

| Area | Description |
|------|-------------|
| **AI Backend Workflow** | HTTP API or service layer that orchestrates model calls with defined inputs, outputs, and constraints |
| **Retrieval or Structured Output** | RAG pipeline with citations, structured-output extraction/classification, or agent/tool-calling workflow |
| **Evaluation Harness** | Small test set with a rubric to compare outputs and document quality |
| **Failure-Mode Documentation** | Notes on edge cases, retries, auth, and what would be monitored in production |
| **Deployment-Ready Setup** | Runnable locally and deployable to a hosted environment with clear environment configuration |

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Runtime** | Node.js / TypeScript *(or Python — update as implementation is finalized)* |
| **API / Backend** | Next.js Route Handlers, Express, or FastAPI |
| **AI / LLM** | OpenAI, Anthropic, Google AI Studio, or local models |
| **Data / Storage** | SQLite, Supabase, Neon, or hosted Postgres |
| **Evaluation** | CSV/JSON test sets, notebooks, or small eval scripts |
| **Tooling** | Git, `.env` configuration, ESLint/Prettier *(as applicable)* |

> Update this table once the final stack is chosen and dependencies are added to the project.

---

## Installation

### Prerequisites

- **Git** — to clone the repository
- **Node.js 18+** *(or Python 3.10+)* — depending on the chosen stack
- An **API key** for your selected LLM provider (stored in environment variables, never committed)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/flyrank-ai-engineering-capstone.git
   cd flyrank-ai-engineering-capstone
   ```

2. **Install dependencies**

   ```bash
   # Node.js example — adjust once package.json is added
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Add your API keys and any database or service URLs to `.env`. Do not commit secrets to version control.

4. **Run locally**

   ```bash
   # Example — replace with the actual start command
   npm run dev
   ```

---

## Usage

### Running the Application

Once the application is implemented, start the local server using the command documented in `package.json` (or the equivalent for your stack). The API or UI should be accessible at the configured port (e.g. `http://localhost:3000`).

### Example Request

```bash
# Example — update with your actual endpoint and payload
curl -X POST http://localhost:3000/api/query \
  -H "Content-Type: application/json" \
  -d '{"question": "Your test prompt here"}'
```

### Evaluation

Run the evaluation harness against your test set and record results in the repository (e.g. `eval/results.md` or `outputs/`). Include:

- Input/output pairs or sample responses
- Rubric scores or pass/fail criteria
- Known failure modes and recommended improvements

### Deployment

Deploy to a hosted platform (Vercel, Railway, Render, Fly.io, etc.) and add the live URL to this README once available:

```
Live demo: https://your-deployment-url.example
```

---

## Purpose of This Repository

This repository serves three related goals:

1. **Capstone submission** — Primary proof-of-work for the FlyRank AI Engineering track. Reviewers use this repo to assess technical ownership, safe AI use, and the quality of supporting evidence.

2. **Portfolio artifact** — A public record of what was built, how it was evaluated, and what was learned. It is intended to be shared with recruiters and included in professional profiles.

3. **Living documentation** — README, code comments, and eval notes explain design decisions, constraints, and limitations so others can inspect and understand the work without a walkthrough.

This project is **not** a paid client deliverable or a FlyRank product. It is practical learning evidence created as part of the internship program.

---

## License

This project is licensed under the [MIT License](LICENSE).

Copyright © 2026 [Haad-Ahmad-Qureshi](https://github.com/haad-ahmad-qureshi)
