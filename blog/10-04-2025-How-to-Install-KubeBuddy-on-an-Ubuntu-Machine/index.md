# How to Install KubeBuddy on an Ubuntu Machine

KubeBuddy is an AI-powered Kubernetes dashboard designed for a simplified user experience to streamline your Kubernetes management. Whether you're a beginner or an advanced user, KubeBuddy helps reduce complexity and provides an intuitive interface to manage your clusters.

In this blog, we'll walk you through the steps to install KubeBuddy on an Ubuntu machine. We’ve tested these steps on an AWS EC2 instance running Ubuntu 24.04, but the same process will work on any Ubuntu system across different environments or cloud platforms.

---

## Step-by-Step Installation Guide

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

For Linux/macOS:

```bash
source <your-env-name>/bin/activate
```

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
python manage.py runserver 0.0.0.0:8000 &
```

This will start the server on all network interfaces, listening on port 8000.

---

### Step 7: Access the Dashboard

Open your browser and navigate to:

```
http://<your-ip>:8000
```

Log in using the default credentials:

- **Username:** `admin`
- **Password:** `admin`

---

## You're All Set!

Now that KubeBuddy is up and running, you can start adding your Kubernetes clusters and populate the dashboard. From here, you'll have an intuitive, AI-powered interface to monitor and manage your Kubernetes environments effortlessly.

**Happy KubeBudding!** 🚀

---
*Date:* April 10, 2025  
*Author:* Yogesh Raheja
