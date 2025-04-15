# Managing AKS with KubeBuddy

KubeBuddy is an AI-powered Kubernetes dashboard designed to simplify cluster management. Whether you're a beginner or an advanced user, KubeBuddy makes it easy to manage Kubernetes clusters through a user-friendly interface.

In this blog, we'll guide you through integrating and managing your AKS (Azure Kubernetes Service) cluster with KubeBuddy. We'll connect the AKS cluster and verify that the connection is successful.

## Prerequisites
- A running AKS cluster
- At least one node pool with 1-2 nodes
- Azure CLI installed

## Step 1: Get the Kubeconfig File

1. **Login to Azure Portal**
   - Navigate to *Kubernetes Services* and select your cluster (e.g., `thinknyx-aks-tf`).

      ![Kubernetes Services](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/k8s-cluster.png)
   <br>

2. **Download the Kubeconfig File**
   - Click on **Connect** in the top navigation bar.
   
      ![Download Kube Config File](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/download-kubeconfig.png)
   
   <br>

   - Choose **Azure CLI**, then follow the instructions to get the kubeconfig file.

      ![Download Kube Config File](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/download-kubeconfig-2.png)
   
      **Note**: By default, the config file is downloaded or updated at `~/.kube/config`, but I have changed the path to my preferred location using the `-f` flag.
   <br>

   - Here you can see the **config** file in my directory.

      ![Kube Config File](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/download-kubeconfig-3.png)


3. **Test the Connection**
   - Open your terminal and run:

     ```bash
     kubectl get nodes --kubeconfig=config
     ```

   - If the output lists your nodes, you're ready to proceed.

      ![Get Nodes](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/get-nodes.png)

## Step 2: Add AKS Cluster to KubeBuddy

1. **Log in to KubeBuddy Dashboard**
   - Go to the KubeBuddy dashboard.
   - Click the **+** button or **Add New Cluster**.


2. **Add Your AKS Cluster**
   - On the *Add Cluster* page, choose **Manual**.
   - Paste the path of your AKS kubeconfig file.
   - Click **GO**.

      ![Kube config](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/kube-config-add.png)

3. **Cluster Appears on Dashboard**
   - You should now see your AKS cluster on the main dashboard.

      ![Clusterlist landing page](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/landing-page.png)

4. **Open the Cluster Dashboard**
   - Click on your cluster to view detailed information.

      ![Dashboard](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/Dashboard.png)

## Step 3: Verify the Cluster Connection

1. **Using Terminal**
   - Run:

     ```bash
     kubectl get nodes --kubeconfig=<path-to-aks-kubeconfig-file>
     ```

2. **Using KubeBuddy**
   - Click on **Nodes** under the *Cluster Management* section.

      ![Get Nodes on Dashboard](/blog/15-04-25-Managing-AKS-Cluster-with-KubeBuddy/get-nodes-dashboard.png)

3. **Compare Results**
   - If the node lists match, the integration is successful.

## You're All Set!
That's it! You've successfully connected your AKS cluster with KubeBuddy. Now, you can manage your AKS cluster easily through the KubeBuddy dashboard.

**Happy KubeBudding!** 🚀

---
*Date:* April 15, 2025  
*Author:* Dheeraj Sain
