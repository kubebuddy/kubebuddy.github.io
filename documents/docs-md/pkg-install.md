# Installation

Kubebuddy is a versatile solution that can be deployed across multiple platforms, including Linux, Windows, and macOS. Its cross-platform compatibility ensures that organizations can seamlessly integrate it into diverse IT environments.

## Prerequisites

- **Kubernetes Cluster**: Kubebuddy requires a fully functional Kubernetes cluster to monitor and analyze its resources. The cluster must be properly configured, accessible via `kubectl`, and have the necessary permissions to retrieve events, logs, and status updates from Kubernetes components. Depending on your needs, you can set up a cluster in different ways:

  1. **Native Kubernetes Deployments (Self-Hosted Clusters)**:

     - Kubebuddy is fully compatible with self-hosted Kubernetes clusters running on bare metal or virtual machines.
     - These are suitable for production environments. <br/><br/>

  2. **Kind (Kubernetes in Docker)**:

     - Best suited for local development and testing.
     - Runs an entire Kubernetes cluster inside Docker containers.<br/><br/>

  3. **Docker Desktop**:

     - A lightweight, single-node Kubernetes cluster.
     - Ideal for development and learning.<br/><br/>

  4. **Minikube**

     - Popular for local Kubernetes experimentation and lightweight workloads.
     - Simple to install and run on most systems.<br><br>

  5. **AKS (Azure Kubernetes Service)**

     - A managed Kubernetes service provided by Microsoft Azure.
     - Ideal for users running infrastructure on Azure.<br/><br/>
     - Ensure that the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/) is installed on your system.
     - Authenticate with your Azure account:
     ```bash
     az login
     ```
     - Use the following command to merge your AKS cluster’s kubeconfig into your local kubeconfig file:
     ```bash
     az aks get-credentials --resource-group <your-resource-group> --name <your-aks-cluster-name>
     ```

  6. **EKS (Elastic Kubernetes Service)**

     - Amazon Web Services' managed Kubernetes offering.
     - Great for deploying workloads in the AWS ecosystem.<br/><br/>
     - Make sure the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) is installed.
     - Set your AWS credentials and region:
     ```bash
     aws configure
     ```
     - Run the following command to add your EKS cluster context to your kubeconfig:
     ```bash
     aws eks --region <your-region> update-kubeconfig --name <your-cluster-name>
     ```
     If you are running KubeBuddy on a linux machine:
     - Set an environment variable `AWS_EKS_TOKEN` with the token obtained from running:
     ```bash
     aws eks get-token --region <your-region> --cluster-name <your-cluster-name>
     ```

  7. **GKE (Google Kubernetes Engine)**

     - Managed Kubernetes solution by Google Cloud Platform.
     - Offers high scalability and integration with GCP services.<br/><br/>
     - Install [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) (gcloud)
     - Login to your Google account:
     ```bash
     gcloud auth login
     ```
     - Use the following command to update your kubeconfig with the GKE cluster context:
     ```bash
     gcloud container clusters get-credentials <your-cluster-name> --zone <your-cluster-zone>
     ```
     - Authenticate for Application Default Credentials
     ```bash
     gcloud auth application-default login
     ```

- **Kubeconfig File**:

  The `kubeconfig` file is crucial for connecting your local system to a Kubernetes cluster. This file contains authentication details, cluster configuration, and access credentials. Default kubeconfig location:

  - **Linux/macOS**: `~/.kube/config`
  - **Windows**: `%USERPROFILE%\.kube\config`<br/><br/>

- **[Python 3.10](https://www.python.org/downloads/) or above**:

  Kubebuddy relies on Python for various API interactions. To ensure compatibility, you must install Python 3.10 or later.<br/>

- **venv & pip**

  Make sure both `venv` (python module) and `pip` (package installer for python) are installed on your machine. These are used internally during installation to manage dependencies.

---

## Installation Steps

<br>

#### Installation on Windows

```bash
curl -L -o kubebuddy_2.0.0_win64.tar.gz https://github.com/kubebuddy/kubebuddy/releases/download/v2.0.0/KubeBuddy_2.0.0_win64.tar.gz
tar -xvzf kubebuddy_2.0.0_win64.tar.gz
cd kubebuddy
install.bat
```

After installation, you can run Kubebuddy anytime by navigating to the `kubebuddy` directory and executing:

```bash
run.bat
```

- To use a custom superuser username and password, set the environment variables before installing the application:

```bash
set SUPERUSER_USERNAME=your_username
set SUPERUSER_PASSWORD=your_password
```

---

#### Installation on MacOS

```bash
curl -L -o kubebuddy_2.0.0_macos.tar.gz https://github.com/kubebuddy/kubebuddy/releases/download/v2.0.0/KubeBuddy_2.0.0_macos.tar.gz
tar -xvzf kubebuddy_2.0.0_macos.tar.gz
cd kubebuddy
bash install.sh
```

After installation, you can run Kubebuddy anytime by navigating to the `kubebuddy` directory and executing:

```bash
bash run.sh
```

- To set a custom superuser username and password, export environment variables before installing the app:

```bash
export SUPERUSER_USERNAME=your_username
export SUPERUSER_PASSWORD=your_password
```

---

#### Installation on Linux

```bash
curl -L -o kubebuddy_2.0.0_linux.tar.gz https://github.com/kubebuddy/kubebuddy/releases/download/v2.0.0/KubeBuddy_2.0.0_linux.tar.gz
tar -xvzf kubebuddy_2.0.0_linux.tar.gz
cd kubebuddy
bash install.sh
```

After installation, you can run Kubebuddy anytime by navigating to the `kubebuddy` directory and executing:

```bash
bash run.sh
```

- To set a custom superuser username and password, export environment variables before installing the app:

```bash
export SUPERUSER_USERNAME=your_username
export SUPERUSER_PASSWORD=your_password
```

---

#### Important Instructions

<br>

By default, the application runs on port 8000 and binds to the localhost.

To run the application on a custom host or port, you can pass the following arguments when running the script:

- `--host` for the host (e.g., `0.0.0.0` to allow access from other machines)
- `--port` for the port (e.g., `8080`)

For example, to run the application on host `0.0.0.0` and port `8080`, use the following command:

```bash
# For Linux/MacOS
bash run.sh --host 0.0.0.0 --port 8080
```

```bash
# For Windows
run.bat --host 0.0.0.0 --port 8080
```

If you need to access KubeBuddy from another machine, ensure that the host is set to 0.0.0.0 (or the appropriate host) and the specified port is open in the firewall. You can then access the application using the following URL:

```bash
http://<your-server-ip>:<custom-port>
```

- Ensure `Python 3.10+`, `venv`, and `pip` are installed on your system.

- Your Kubernetes cluster must be running and your `kubeconfig` file correctly set up.

- Default credentials used if no environment variables are set:

  - Username: `admin`

  - Password: `admin`

- You can change your password later from within the application by navigating to the **Settings → Change Password** section.

---

<a href="#introduction">
  <button class="btn btn-secondary btn-sm"> << Previous: Repo Installation </button>
</a>

<a href="#platform">
  <button class="btn btn-primary btn-sm">Next: Platform >> </button>
</a>
