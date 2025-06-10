# kube-bench report

KubeBuddy now supports CIS Kubernetes Benchmark scanning using kube-bench, allowing users to assess the security posture of their clusters with a single click.

## What is a kube-bench report?

**kube-bench** is a tool that checks whether Kubernetes is deployed securely by running the checks documented in the CIS Kubernetes Benchmark.

## Providers Support

Supports any cluster type:

- GKE (Google Kubernetes Engine)
- AKS (Azure Kubernetes Service)*
- EKS (Amazon Elastic Kubernetes Service)
- Native Kubernetes
- Openshift
- Minikube
- kind

## How to use

1. Connect your cluster to KubeBuddy using your kubeconfig.
2. Click the "CIS Benchmark Report" button in the GUI.
3. KubeBuddy will:
    - Deploy a benchmark job to your cluster.
    - Run the security audit via a pod.
    - Collect and format the results from the pod.
    - Delete the benchmark job.

## Report Output

- The raw `kube-bench` results are automatically converted into a downloadable PDF report.
- You will be prompted to download the PDF once the scan completes.

## Permissions Required

- The user in your `kubeconfig` must have read and write access to all namespaces and cluster resources.
- No manual setup, RBAC configuration, or image uploads are needed.

## Notes

> The job is ephemeral — it's cleaned up automatically after the scan.  
> \* AKS - AKS clusters must have a server URL containing `azmk8s.io` for proper detection. If this pattern is missing, the system will treat the cluster as non-AKS and perform a generic scan.

If this pattern is missing, the system will treat it as a non-AKS cluster and run a generic scan.

<a href="#k8sgpt">
  <button class="btn btn-secondary btn-sm"> << Previous: K8sGPT </button>
</a>

<a href="#hotspot">
  <button class="btn btn-primary btn-sm">Next: Cluster-hotspot >> </button>
</a>