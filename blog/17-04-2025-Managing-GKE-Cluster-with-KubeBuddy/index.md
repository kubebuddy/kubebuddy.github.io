KubeBuddy is an AI-powered Kubernetes dashboard designed to simplify cluster management. Whether you are a beginner or an advanced user, KubeBuddy makes it easy to manage Kubernetes clusters through a user-friendly interface.

In this blog, we will guide you through integrating and managing your GKE (Google Kubernetes Engine) cluster with KubeBuddy. We will connect the GKE cluster and verify that the connection is successful.

### Prerequisite

- A running GKE cluster

  ![GKE Cluster](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/GKE-cluster.png)

- At least one node pool with 1-2 nodes

  ![GKE Cluster Node Pool](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/GKE-cluster-node-pool.png)

- gcloud CLI installed

  ![gcloud version](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/gcloud-version.png)

### Configuring GKE cluster using gcloud CLI

- Fetching kubeconfig file for your cluster. It will download the content to kubeconfig file located at ~\.kube\config

  ```bash
  gcloud container clusters get-credentials test --zone us-central1-c --project thinknyx-microservices
  ```

  ![gcloud kubeconfig](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/gcloud-kubeconfig.png)

- Sample ~\.kube\config

  ![kubeconfig](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/kubeconfig.png)

- Acquire new user credentials to use for Application Default Credentials

  ```bash
  gcloud auth application-default login
  ```

  ![gcloud login](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/gcloud-login.png)
  <br><br>
  ![gcloud login confirm](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/gcloud-login-confirm.png)

  You will be redirected to your default browser. Obtains user access credentials via a web flow and puts them in the well-known location for Application Default Credentials (ADC).

### Configuring GKE cluster in KubeBuddy

- Log in to KubeBuddy Application

  ![kubebuddy login](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/kubebuddy-login-1.png)

- Add the GKE cluster

  ![kubebuddy path](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/kubebuddy-path-1.png)
  <br><br>
  ![kubebuddy select](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/kubebuddy-select.png)

- Checking cluster details

  ![kubebuddy dashboard](/blog/17-04-2025-Managing-GKE-Cluster-with-KubeBuddy/kubebuddy-dashboard.png)
