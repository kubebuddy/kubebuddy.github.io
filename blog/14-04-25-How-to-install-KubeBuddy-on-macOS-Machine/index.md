# How to Install KubeBuddy on a macOS Machine

**KubeBuddy** is an AI-powered Kubernetes dashboard built to make cluster management easier. Whether you’re just starting out with Kubernetes or you're already experienced, KubeBuddy helps simplify your workflow with a clean and friendly interface.

In this guide, we’ll walk you through the steps to install KubeBuddy on a macOS system. These instructions have been tested on **macOS Sonoma** and **macOS Sequoia**, and should work on any modern macOS version with **Python 3.10 or higher**.

---

## Prerequisites

- Python **3.10 or higher** must be installed.
- Git should be installed.
- You should have access to the terminal.

---

## Step-by-Step Installation Guide

### Step 1: Clone the KubeBuddy GitHub Repository

Open your terminal and run:

```bash
git clone https://github.com/kubebuddy/kubebuddy.git
```

![Cloning KubeBuddy](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/clone.png)


---

### Step 2: Create a Python Virtual Environment

Navigate to your preferred directory and run:

```bash
python3 -m venv <your-env-name>
```

Replace `<your-env-name>` with any name you like.

![Virtual Environment Setup](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/environment-setup.png) 

Note:
If you get a `command not found` error, make sure Python is installed. You can install it using Homebrew:

```bash
brew install python@3.12
```

---

### Step 3: Activate the Virtual Environment

Activate your environment with:

```bash
source <your-env-name>/bin/activate
```

Once activated, you’ll see the environment name at the beginning of your terminal prompt.

![Activating Virtual Environment](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/env-activate.png) 

---

### Step 4: Install Required Dependencies

Move into the project directory and install the packages:

```bash
cd kubebuddy
pip install -r requirements.txt
```

![Installing Dependencies](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/install-requirements.png)

---

### Step 5: Apply Database Migrations

Run these commands to set up the backend database:

```bash
python manage.py makemigrations main
python manage.py migrate
```

![Applying Migrations](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/migrations.png) 

---

### Step 6: Start the KubeBuddy Application

Start the server:

```bash
python manage.py runserver
```

This runs the app on all network interfaces, using port `8000`.

![Running Server](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/running-app.png) 

---

### Step 7: Access the Dashboard

Open your web browser and go to:

```
http://localhost:8000
```

Use the default login credentials:

- Username: `admin`
- Password: `admin`

![Accessing Dashboard](/blog/14-04-25-How-to-install-KubeBuddy-on-macOS-Machine/acc-dashboard.png)

---

## You're All Set!

Now that KubeBuddy is running, you can add your Kubernetes clusters and start exploring the dashboard. The interface is AI-powered and designed to make managing your environments easy and intuitive.

---

*Date*: April 14, 2025
*Author*: Dheeraj Sain
