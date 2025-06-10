# Cluster Hotspot Overview

The **Cluster Hotspot** feature in KubeBuddy provides a concise yet powerful overview of potential issues and optimization areas across your Kubernetes cluster. It analyzes several key metrics and flags resource usage or configuration hotspots that may affect the performance, security, or reliability of the system.

---

## What It Does

This feature inspects various components within your cluster and organizes findings into the following categories:

### 1. Empty Namespaces
- Detects namespaces that do not contain any running resources such as Pods, Deployments, Services, etc.
- Helps identify stale or unused namespaces that can be cleaned up to reduce clutter.

### 2. Pods Using Latest Tags
- Lists all pods that use container images tagged with `:latest`.
- Using the `latest` tag is discouraged in production due to lack of version control and reproducibility.

### 3. Orphaned ConfigMaps
- Identifies ConfigMaps that are not mounted or referenced by any Pod or Deployment.
- Helps reduce unnecessary resource consumption and improves cluster hygiene.

### 4. Orphaned Secrets
- Detects Secrets that are not in use anywhere in the cluster.
- Helps prevent accidental exposure of sensitive data and promotes secure practices.

### 5. Containers Missing Probes
- Flags containers that are missing liveness or readiness probes.
- Proper probes ensure that unhealthy containers are restarted and services are marked as ready appropriately.

### 6. Containers with High Restart Counts
- Highlights containers with excessive restarts which may indicate issues like crashes, misconfigurations, or resource limits.
- Allows operators to identify unstable workloads quickly.

### 7. Privileged Containers
- Lists containers running with elevated privileges (i.e., `privileged: true`).
- Elevated privileges pose a security risk and should be used only when absolutely necessary.

<a href="#kube-bench">
  <button class="btn btn-secondary btn-sm"> << Previous: Kube-bench </button>
</a>