# How to Install KubeBuddy on an Windows Machine

KubeBuddy is an AI-powered Kubernetes dashboard built by Thinknyx Technologies LLP to make managing Kubernetes easier for everyone. It’s designed with simplicity and accessibility in mind, no matter if you're new to Kubernetes or a seasoned expert, it’s designed to be easy for everyone. With its smart insights and clean interface, KubeBuddy helps you stay on top of your Kubernetes environment no extra setup or in-cluster installations required. Just simple, efficient Kubernetes management.

## Installation
Kubebuddy works on different platforms, but in this blog, I’ll be showing you how to install it on Windows.

# Prerequisites
Before installing KubeBuddy, ensure you have:

## Kubernetes Cluster
Kubebuddy requires a fully functional Kubernetes cluster to monitor and analyze its resources. The cluster must be properly configured, accessible via kubectl, and have the necessary permissions to retrieve events, logs, and status updates from Kubernetes components. Depending on your needs, you can set up a cluster in different ways:

### Kind (Kubernetes in Docker)
   Best suited for local development and testing.
   Runs an entire Kubernetes cluster inside Docker containers.

### Docker Desktop
   A lightweight, single-node Kubernetes cluster.
   Ideal for development and learning.

### Kubeconfig File
The kubeconfig file is crucial for connecting your local system to a Kubernetes cluster. This file contains authentication details, cluster configuration, and access credentials. 

**Default kubeconfig location**
  Windows: %USERPROFILE%\.kube\config

### Python 3.10 or above
Kubebuddy relies on Python for various API interactions. To ensure compatibility, you must install Python 3.10 or later.

### Git
Required to clone the Kubebuddy repository, manage source code, and contribute to development. It is an essential version control tool for handling project changes.

### Install WSL (Optional but Recommended)
Open PowerShell as Administrator and run:
wsl --install
Restart your computer if required.

## Note:
Prerequisites: Make sure you already have Docker Desktop, WSL (Windows Subsystem for Linux), Python, Git, and kubectl (Kubernetes CLI) installed and properly configured on your laptop.

![Version](/blog/14-04-2025-How-to-Install-KubeBuddy-on-an-Windows-Machine/version.png)

---

## Step-by-Step Installation Guide

Ensure your Kubernetes cluster is running before executing these steps.

### Step 1: Clone the KubeBuddy GitHub Repository

Start by cloning the official KubeBuddy repository:

```bash
git clone https://github.com/kubebuddy/kubebuddy.git
```

---

### Step 2: Create a Python Virtual Environment

Navigate to your preferred working directory and run:

```bash
python -m venv <your-env-name>
```

**Note:**
- If you get a `Command 'python' not found` error, try replacing `python` with `python3`.
- On Debian/Ubuntu systems, if the virtual environment command still fails, make sure to install the required package using:

```bash
sudo apt update && sudo apt install -y python3.12-venv
```

---

### Step 3: Activate the Virtual Environment

For Windows:

```bash
.\<your-env-name>\Scripts\activate
```
**Note: If you get “PowerShell execution policy” error**

![Policy Error](/blog/14-04-2025-How-to-Install-KubeBuddy-on-an-Windows-Machine/error.png)

**Open PowerShell as Administrator**
Right-click on the Windows PowerShell icon and select "Run as administrator". 

**Verify**
To verify the change, type Get-ExecutionPolicy. 

**Run the Command**
Type Set-ExecutionPolicy Unrestricted and press Enter. 
Confirmation
You might be prompted for confirmation. Type "Y" and press Enter to proceed. 

### Important Note ###
Setting the execution policy to "Unrestricted" allows any script to be executed, including unsigned scripts, which could pose a security risk.

---

### Step 4: Install Dependencies

Navigate into the cloned project directory and install the required Python packages:

```bash
cd kubebuddy
pip install -r requirements.txt
```

---

### Step 5: Apply Database Migrations

Run the following commands to set up the database for the Django backend:

```bash
python manage.py makemigrations main
python manage.py migrate
```

---

### Step 6: Start the KubeBuddy Application

Now you’re ready to launch KubeBuddy:

```bash
python manage.py runserver
```

---

### Step 7: Access the Dashboard on your browser


Log in using the default credentials:

- **Username:** `admin`
- **Password:** `admin`

---

## You're All Set!

Now that KubeBuddy is up and running, you can start adding your Kubernetes clusters and populate the dashboard. From here, you'll have an intuitive, AI-powered interface to monitor and manage your Kubernetes environments effortlessly.

**Happy KubeBudding!** 🚀

---
*Date:* April 14, 2025  
*Author:* Aman Kumar
