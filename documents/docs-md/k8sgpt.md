# K8sGPT Insights

KubeBuddy now integrates with K8sGPT, providing instant AI-driven diagnostics and remediation tips for your Kubernetes clusters.

## What is K8sGPT?

K8sGPT is an open-source tool that scans your Kubernetes cluster and uses AI to analyze and explain issues, helping platform engineers quickly understand and fix problems.

Key features include:

- AI-Powered Diagnostics: Utilizes AI to interpret complex Kubernetes signals into simple, actionable insights.

- Multiple AI Backend Support: Compatible with OpenAI, Azure OpenAI, Cohere, Amazon Bedrock, Google Gemini, and local models.

- Local AI Models: Option to use supported local AI models to keep data within your environment.

## Providers Support
Supports any cluster type:

- GKE (Google Kubernetes Engine)

- AKS (Azure Kubernetes Service)

- EKS (Amazon Elastic Kubernetes Service)

- Native Kubernetes

- Openshift

- Minikube

- kind

## Prerequisites

Before using K8sGPT with KubeBuddy:

1. Install K8sGPT: Ensure that K8sGPT is installed on your machine. Installation guides are available in the K8sGPT documentation.

2. Authenticate with AI Backend: Configure K8sGPT with your preferred AI backend (e.g., OpenAI). This typically involves generating an API token and adding it to K8sGPT.

## Note
- KubeBuddy is utilizing anonymize flag of K8sGPT to make sure sensitive data is protected. <a href="https://github.com/k8sgpt-ai/k8sgpt?tab=readme-ov-file#key-features">For more information.</a>

<!-- - Anonymization does not currently apply to events. -->

<a href="#terminal">
  <button class="btn btn-secondary btn-sm"> << Previous: Terminal </button>
</a>

<a href="#kube-bench">
  <button class="btn btn-primary btn-sm">Next: Kube-bench >> </button>
</a>