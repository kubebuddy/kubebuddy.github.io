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
     aws eks update-kubeconfig --region <your-region> --name <your-cluster-name>
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

- **[Git](https://git-scm.com/downloads)**:

  Required to clone the Kubebuddy repository, manage source code, and contribute to development. It is an essential version control tool for handling project changes.

---

## Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kubebuddy/kubebuddy.git
   ```
   ```bash
   git switch Latest -detach
   ```
2. **Create a Virtual Environment**:

   ```bash
   python -m venv buddyenv
   ```
   - You can change the name of your virtual environment `buddyenv`.
   
**Note**: If you get "Command 'python' not found" try using python3. If neither works, make sure the Python packages are installed.

**Note**: On Debian/Ubuntu systems, you need to install the python3-venv package using "apt update && apt install -y python3.12-venv" before creating your Virtual environment.

3. **Activate the Virtual Environment**:

   - **Linux/Mac**:

     ```bash
     source buddyenv/bin/activate
     ```

   - **Windows**:
     ```powershell
     .\buddyenv\Scripts\activate
     ```

4. **Install Dependencies**:

   ```bash
   cd kubebuddy
   pip install -r requirements.txt
   ```

5. **Configure Environment Variables**:

   - **Linux/Mac**
     ```bash
     SUPERUSER_USERNAME=admin
     SUPERUSER_PASSWORD=admin
     ```
   - **Windows**
     Create an .env file in your project directory and set these variables inside:
     ```
     SUPERUSER_USERNAME=admin
     SUPERUSER_PASSWORD=admin
     ```

**Note**: These are the default environment variables (SUPERUSER_USERNAME & SUPERUSER_PASSWORD), you need not to set if you wish to go with the default once.

6. **Apply Database Migrations**:

   ```bash
   python manage.py makemigrations main
   python manage.py migrate
   ```

7. **Run the Application**:

   ```bash
   python manage.py runserver
   ```

**Note**: You may choose to run the application process in the background using 'python manage.py runserver &'.

**Note**: Each time you want to run KubeBuddy, navigate to application directory, activate the virtual environment,
and run the application.

```bash
python manage.py runserver <your-server-ip>:<custom-port>
```

For example, to run KubeBuddy on 0.0.0.0 (to allow access from other machines) and port 8000, use:

```bash
python manage.py runserver 0.0.0.0:8000
```

If you need to access KubeBuddy from another machine, ensure that the host is set to 0.0.0.0 (or the appropriate host) and the specified port is open in the firewall. You can then access the application using the following URL:

```bash
http://<your-server-ip>:<custom-port>
```

---

## Important Instructions

- You can modify `SUPERUSER_USERNAME` and `SUPERUSER_PASSWORD` as needed.
- Ensure your Kubernetes cluster is running before executing these steps.
- Check that your `kubeconfig` file is correctly set up.
- You may change the application port with a custom one, while running the application:
  ```bash
  python manage.py runserver <your-custom-port>
  ```

<a href="#introduction">
  <button class="btn btn-secondary btn-sm"> << Previous: Introduction </button>
</a>

<a href="#platform">
  <button class="btn btn-primary btn-sm">Next: Package Installation >> </button>
</a>
