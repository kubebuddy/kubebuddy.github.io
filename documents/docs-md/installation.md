# Installation

Kubebuddy is a versatile solution that can be deployed across multiple platforms, including Linux, Windows, and macOS. Its cross-platform compatibility ensures that organizations can seamlessly integrate it into diverse IT environments.

## Prerequisites

- **Kubernetes Cluster**: Kubebuddy requires a fully functional Kubernetes cluster to monitor and analyze its resources. The cluster must be properly configured, accessible via `kubectl`, and have the necessary permissions to retrieve events, logs, and status updates from Kubernetes components. Depending on your needs, you can set up a cluster in different ways:

  1. **Native Kubernetes Deployments (Self-Hosted Clusters)**:

     - Kubebuddy is fully compatible with self-hosted Kubernetes clusters running on bare metal or virtual machines.
     - These are suitable for production environments.

  2. **Kind (Kubernetes in Docker)**:

     - Best suited for local development and testing.
     - Runs an entire Kubernetes cluster inside Docker containers.

  3. **Docker Desktop**:
     - A lightweight, single-node Kubernetes cluster.
     - Ideal for development and learning.

- **Kubeconfig File**:

  - The `kubeconfig` file is crucial for connecting your local system to a Kubernetes cluster. This file contains authentication details, cluster configuration, and access credentials. Default kubeconfig location:
    - **Linux/macOS**: `~/.kube/config`
    - **Windows**: `%USERPROFILE%\.kube\config`

- **[Python 3.10](https://www.python.org/downloads/) or above**:

  - Kubebuddy relies on Python for various API interactions. To ensure compatibility, you must install Python 3.10 or later.

- **[Git](https://git-scm.com/downloads)**:
  - Required to clone the Kubebuddy repository, manage source code, and contribute to development. It is an essential version control tool for handling project changes.

---

## Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kubebuddy/kubebuddy.git
   ```

2. **Create a Virtual Environment**:

   ```bash
   python -m venv <your-env-name>
   ```
**Note**: If you get "Command 'python' not found" try using python3. If neither works, make sure the Python packages are installed. 

**Note**: On Debian/Ubuntu systems, you need to install the python3-venv package using "apt update && apt install -y python3.12-venv" before creating your Virtual environment.

3. **Activate the Virtual Environment**:

   - **Linux/Mac**:

     ```bash
     source <your-env-name>/bin/activate
     ```

   - **Windows**:
     ```powershell
     .\<your-env-name>\Scripts\activate
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

**Note**: If you are running KubeBuddy on Virtual Machines, start the application process using 'python manage.py runserver 0.0.0.0:8000 &'. You may use port of your choice instead of 8000.
   
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
  <button class="btn btn-primary btn-sm">Next: Platform >> </button>
</a>
