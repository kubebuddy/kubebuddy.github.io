# How to install KubeBuddy on Windows Server

## What is KubeBuddy?

KubeBuddy, an AI-powered Kubernetes dashboard by Thinknyx Technologies LLP, aims to simplify the complexities of Kubernetes management. By integrating AI platforms like Gemini and OpenAI, it provides intelligent insights, real-time error analysis, and streamlined troubleshooting. This dashboard focuses on an intuitive user interface and multi-cluster support, striving to be an "intelligent companion" that makes Kubernetes more accessible and efficient for users of all expertise levels.

## Pre-requisites for installation:

Before installation, you should have the following things done: 

 - Kubernetes Cluster: KubeBuddy's functionality hinges on a well-established Kubernetes cluster. This cluster must be configured for seamless interaction with kubectl, granting KubeBuddy the necessary permissions to access crucial data like events, logs, and component statuses for effective monitoring and analysis.
 - Docker-Desktop installed on server
 - Kind cluster present 
 - Kubeconfig file: The kubeconfig file plays a vital role in connecting your local system to a Kubernetes cluster, as it stores essential information such as authentication credentials, cluster configuration, and access details.
 - Python (version 3.10 or above)
 - Django (version  5.1.7 or above)
 - Git (required for cloning KubeBuddy repo)
 - WSL (optional)

## Installation:

Now, let’s begin with the installation. Open command prompt as administrator and check all the dependencies.

 - Python: ```python –version```
 - Docker: ```Docker --version```
 - Git: ```git --version```
 - Kubectl command: ```kubectl version```

![CMD](/blog/10-04-2025-How-to-install-KubeBuddy-on-Windows-Server/cmd.png)

### After this, clone the repository by typing following command:

```git clone https://github.com/kubebuddy/kubebuddy.git```

### Create a Virtual Environment:

```python -m venv <name-of-your-env> ```

### Activate Virtual Enviornment:

```.\< name-of-your-env >\Scripts\activate ```

### Install dependencies from requirnment.txt file:

```cd kubebuddy```
```pip install -r requirnment.txt```

### Configure Environment Variables (optional):

Create an .env file in your project directory and set these variables inside:

SUPERUSER_USERNAME=admin

SUPERUSER_PASSWORD=admin

**Note**: These are the default environment variables (SUPERUSER_USERNAME & SUPERUSER_PASSWORD), you need not to set if you wish to go with the default once.

### Apply Data Migrations:

```python manage.py makemigrations main```

```python manage.py migrate```

### Run KubeBuddy:

```python mange.py runserver```

**Now you can access kubebuddy on port number 8000 of your server.**

## Conclusion

Once you've completed the installation steps, KubeBuddy will be successfully up and running on your Windows Server and can be accessed via port 8000. With everything set up, you're now ready to experience a more streamlined and intelligent approach to Kubernetes management. KubeBuddy, powered by advanced AI integrations like Gemini and OpenAI, offers real-time error detection, smart recommendations, and actionable insights that significantly reduce the time and effort required for troubleshooting and monitoring.

Its clean, intuitive dashboard, along with support for multiple Kubernetes clusters, makes it a powerful tool for both beginners and seasoned DevOps professionals. Whether you're managing development environments, staging clusters, or complex production setups, KubeBuddy helps you stay in control with greater clarity and confidence. By simplifying the complexities of Kubernetes and offering a centralized, AI-enhanced view of your infrastructure, KubeBuddy truly becomes the intelligent companion you need for modern Kubernetes operations.
