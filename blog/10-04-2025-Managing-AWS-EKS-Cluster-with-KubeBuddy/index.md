Managing AWS EKS Cluster with KubeBuddy requires a couple of additional tasks in order to allow KubeBuddy to connect with AWS EKS Cluster.

#### Checking Prerequisites
#### We are performing this activity on `Windows 11`  machine

- Running EKS Cluster
  
    ![Cluster List](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/clusters.png)

- At least one NodeGroup with 1-2 Nodes
  
    ![Node list](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/nodes.png)

- User added under the `Access` tab with enough access to work with the EKS Cluster
  
    ![EKS CLuster](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/eks_cluster.png)

- AWS Cli installed and logged in with a user added in the last step
  
    ![AWS CLI](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/aws-cli.png)

#### Adding EKS Cluster in KubeBuddy

1.	Fetching kubeconfig for EKS cluster. It will download the kubeconfig file to `~\.kube\config` location
   
    ```
    aws eks update-kubeconfig --name thinknyx-eks-cluster --region us-east-2
    ```
    ![EKS Kube Config](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/eks-config.png)

2. Sample `~\.kube\config`

    ![Sample kube config file](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/sample-kube-config.png)

3. Fetching Token for EKS Cluster

    ```
    aws eks get-token --cluster-name thinknyx-eks-cluster --region us-east-2
    ```
    ![Get EKS Token](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/get-token.png)

4. Adding an Environment with the name `AWS_EKS_TOKEN` with the value mentioned under the token key in the previous output

    ![my-token](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/token.png)

    ![Token in Variable](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/token-in-var.png)

5. Add EKS Cluster in KubeBuddy

  - Log in to the KubeBuddy Application

    ![KubeBuddy Login](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/login.png)

  - Adding EKS Cluster

    ![EKS Cluster Add](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/add-eks-cluster.png)

    ![EKS Clsuter Added](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/added-eks-cluster.png)

  - Checking Cluster details by selecting the newly added cluster

    ![Check Cluster](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/check-cluster.png)

  - Checking Node Details

    ![Node Details](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/node-details.png)

  - Checking Nodes details using buddy terminal

    ![Node Details using Buddy terminal](/blog/10-04-2025-Managing-AWS-EKS-Cluster-with-KubeBuddy/node-details-terminal.png)
