---
title: Quick Start
layout: single
slug: quickstart
lastmod: 2022-10-07
weight: 20
menu:
    main:
        parent: Resources

variable2: Variable 2
---

This guide will help you get started with Vanus. We will cover:


* Install and run Vanus core.

* Install and run Vance.

## Vanus core

### 1. Pre-requisites

Install a Kubenetes cluster

### 2. Install with YAML file

```
{
    curl -O http://44.242.140.28:9080/all-in-one/latest.yml
    kubectl apply -f latest.yml
}
```

### 3. Verify the installation

The all-in-one YAML file will create all required resources and run the Vanus core in the vanus namespace.

```
{
    ~ kubectl get po -n vanus
    vanus-controller-0                  1/1     Running   0             30s
    vanus-controller-1                  1/1     Running   0             30s
    vanus-controller-2                  1/1     Running   0             30s
    vanus-gateway-5fd85c7c-vnzcw        1/1     Running   0             30s
    vanus-store-0                       1/1     Running   0             30s
    vanus-store-1                       1/1     Running   0             30s
    vanus-store-2                       1/1     Running   0             30s
    vanus-trigger-75cb74dbbf-k8jsm      1/1     Running   0             30s
}
```

For more details, please see Vanus core repo.

## Vance

Vance is composed of a set of source connectors and sink connectors, as well as a serverless engine.

### 1. Pre-requisites

* Install a Kubenetes cluster.
* Install KEDA.
* Install KEDA-http.

### 2. Install with YAML file

Use an all-in-one YAML file to simply deploy Vance.

```
{
    kubectl apply -f deploy/vance-1.0.0.yaml
}
```

### 3. Verify the installation

The all-in-one YAML file will create vance connector Kubernetes Custom Resource Definitions (CRDs) and run the Vance controller in the vance namespace.

```
{
    ~ kubectl get crds | grep vance
    connectors.vance.io                     2022-05-15T07:50:35Z
}
```

```
{
    ~ kubectl get po -n vance
    NAME                                        READY   STATUS    RESTARTS      AGE
    vance-controller-manager-6d454547f9-lscvv   2/2     Running   4 (80s ago)   11m
}
```

For more details, please see [Vance repo.](https://vancerepo.com)