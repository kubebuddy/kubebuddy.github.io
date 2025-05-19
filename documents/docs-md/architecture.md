# KubeBuddy Architecture

This page outlines the system architecture of KubeBuddy and how its components interact to deliver a seamless experience to users.

![KubeBuddy Architecture](../../images/kubebuddy-architecture.svg)
#### 1. Cluster Sources
KubeBuddy can connect to a wide range of Kubernetes deployments via the standard Kubernetes API over HTTPS. Supported providers include:

- GKE (Google Kubernetes Engine)
- AKS (Azure Kubernetes Service)
- EKS (Amazon Elastic Kubernetes Service)
- Native Kubernetes
- Openshift
- Minikube

#### 2. Exposed Kubernetes API
All supported cluster providers expose the standard Kubernetes API, which KubeBuddy interacts with to perform read/write operations based on user commands.

#### 3. Django Server
This is the core of the system and is responsible for:

- Utilizing the Kubernetes Python client to interact with the API server.
- Rendering cluster data (e.g., workloads, nodes, pods) through visual dashboards and graphs.
- Secure communication with the AI backend and the Kubernetes API.

#### 4. Database (SQLite)
KubeBuddy uses a local SQLite database to persist:

- kubeconfig paths for accessing clusters securely.
- Cluster metadata, such as name and context.
- API keys for external AI integrations (OpenAI and Gemini).

#### 5. AI Integration
KubeBuddy uses LLMs (via HTTPS) to:

- Understand user queries in natural language.
- Convert those queries into actionable Kubernetes operations (e.g., kubectl commands or YAML specs).
- Suggest optimal configurations, detect potential issues, or explain errors in simple terms.

API keys for these services are securely stored in SQLite and used only during active queries.

<a href="#platform">
  <button class="btn btn-secondary btn-sm"> << Previous: Platform </button>
</a>

<a href="#getting-started">
  <button class="btn btn-primary btn-sm">Next: Guide: Getting Started >> </button>
</a>