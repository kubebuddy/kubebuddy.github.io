# Platform

KubeBuddy is designed to work across multiple environments, including different web browsers and Kubernetes providers.

## Browser Compatibility

| Browser         | Supported | Notes                             |
| --------------- | --------- | --------------------------------- |
| Google Chrome   | ✅        | Fully Supported                   |
| Mozilla Firefox | ✅        | Fully Supported                   |
| Microsoft Edge  | ✅        | Fully Supported                   |
| Safari          | ✅        | May have minor UI inconsistencies |

---

## Kubernetes Provider Support

| Provider          | Supported  |
| ----------------- | ---------- |
| AWS EKS           | ✅ Yes     |
| Google GKE        | ✅ Yes     |
| Azure AKS         | ✅ Yes     |
| OpenShift         | ✅ Yes     |
| Minikube          | ✅ Yes     |
| Kind              | ✅ Yes     |
| Docker Desktop    | ✅ Yes     |
| Native Kubernetes | ✅ Yes     |

---

## Kubernetes Version Support

| KubeBuddy Version | Kubernetes Version Supported |
| ----------------- | ---------------------------- |
| 2.0.0             | 1.30, 1.31 and 1.32          |
| 1.0.1             | 1.30, 1.31 and 1.32          |
---

## Notes

- Ensure your browser is updated for the best experience.
- For Kubernetes providers, install the required CLI tools before running setup commands.

  - **Amazon Elastic Kubernetes Service (EKS)**: Make sure that AWS CLI is installed and you are logged in as an authorized user. Fetch `kubeconfig` for EKS cluster using AWS CLI. Fetch token using CLI and add it as an environment variable `AWS_EKS_TOKEN`.
  - **Azure Kubernetes Service (AKS)**: Make sure that Azure CLI is installed and you are logged in as an authorized user. Fetch `kubeconfig` for AKS cluster using Azure CLI.
  - **Google Kubernetes Engine (GKE)**: Make sure Google cloud CLI is installed and you are logged in as an authorized user. Fetch `kubeconfig` for GKE cluster using Google cloud CLI. Acquire new user credentials to use for Application Default Credentials using-

    ```bash
    gcloud auth application-default login
    ```

- Cloud providers may require authentication before configuring clusters.

<a href="#installation">
  <button class="btn btn-secondary btn-sm"> << Previous: Installation </button>
</a>

<a href="#getting-started">
  <button class="btn btn-primary btn-sm">Next: Getting Started >> </button>
</a>
