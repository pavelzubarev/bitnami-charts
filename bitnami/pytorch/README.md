<!--- app-name: PyTorch -->

# PyTorch packaged by Bitnami

PyTorch is a deep learning platform that accelerates the transition from research prototyping to production deployment. Bitnami image includes Torchvision for specific computer vision support.

[Overview of PyTorch](https://pytorch.org/)

Trademarks: This software listing is packaged by Bitnami. The respective trademarks mentioned in the offering are owned by the respective companies, and use of them does not imply any affiliation or endorsement.

## TL;DR

```console
helm install my-release oci://registry-1.docker.io/bitnamicharts/pytorch
```

## Introduction

This chart bootstraps a [PyTorch](https://github.com/bitnami/containers/tree/main/bitnami/pytorch) deployment on a [Kubernetes](https://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

Python is built for full integration into Python that enables you to use it with its libraries and main packages.

Bitnami charts can be used with [Kubeapps](https://kubeapps.dev/) for deployment and management of Helm Charts in clusters.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+
- PV provisioner support in the underlying infrastructure
- ReadWriteMany volumes for deployment scaling

## Installing the Chart

To install the chart with the release name `my-release`:

```console
helm install my-release oci://registry-1.docker.io/bitnamicharts/pytorch
```

These commands deploy PyTorch on the Kubernetes cluster in the default configuration. The [Parameters](#parameters) section lists the parameters that can be configured.

> **Tip**: List all releases using `helm list`

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```console
helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Parameters

### Global parameters

| Name                      | Description                                     | Value |
| ------------------------- | ----------------------------------------------- | ----- |
| `global.imageRegistry`    | Global Docker image registry                    | `""`  |
| `global.imagePullSecrets` | Global Docker registry secret names as an array | `[]`  |
| `global.storageClass`     | Global StorageClass for Persistent Volume(s)    | `""`  |

### Common parameters

| Name                     | Description                                                                                  | Value          |
| ------------------------ | -------------------------------------------------------------------------------------------- | -------------- |
| `kubeVersion`            | Override Kubernetes version                                                                  | `""`           |
| `nameOverride`           | String to partially override common.names.fullname template (will maintain the release name) | `""`           |
| `commonLabels`           | Labels to add to all deployed objects                                                        | `{}`           |
| `commonAnnotations`      | Annotations to add to all deployed objects                                                   | `{}`           |
| `fullnameOverride`       | String to fully override common.names.fullname template                                      | `""`           |
| `extraDeploy`            | Array of extra objects to deploy with the release                                            | `[]`           |
| `diagnosticMode.enabled` | Enable diagnostic mode (all probes will be disabled and the command will be overridden)      | `false`        |
| `diagnosticMode.command` | Command to override all containers in the deployment                                         | `["sleep"]`    |
| `diagnosticMode.args`    | Args to override all containers in the deployment                                            | `["infinity"]` |

### PyTorch parameters

| Name                                              | Description                                                                                                              | Value                |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `image.registry`                                  | PyTorch image registry                                                                                                   | `docker.io`          |
| `image.repository`                                | PyTorch image repository                                                                                                 | `bitnami/pytorch`    |
| `image.tag`                                       | PyTorch image tag (immutable tags are recommended)                                                                       | `2.0.1-debian-11-r0` |
| `image.digest`                                    | PyTorch image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag                  | `""`                 |
| `image.pullPolicy`                                | PyTorch image pull policy                                                                                                | `IfNotPresent`       |
| `image.pullSecrets`                               | Specify docker-registry secret names as an array                                                                         | `[]`                 |
| `worldSize`                                       | Number of nodes that will run the code                                                                                   | `1`                  |
| `containerPorts.pytorch`                          | PyTorch master port. `MASTER_PORT` will be set to this value                                                             | `49875`              |
| `livenessProbe.enabled`                           | Enable livenessProbe                                                                                                     | `true`               |
| `livenessProbe.initialDelaySeconds`               | Initial delay seconds for livenessProbe                                                                                  | `5`                  |
| `livenessProbe.periodSeconds`                     | Period seconds for livenessProbe                                                                                         | `5`                  |
| `livenessProbe.timeoutSeconds`                    | Timeout seconds for livenessProbe                                                                                        | `5`                  |
| `livenessProbe.failureThreshold`                  | Failure threshold for livenessProbe                                                                                      | `5`                  |
| `livenessProbe.successThreshold`                  | Success threshold for livenessProbe                                                                                      | `1`                  |
| `readinessProbe.enabled`                          | Enable readinessProbe                                                                                                    | `true`               |
| `readinessProbe.initialDelaySeconds`              | Initial delay seconds for readinessProbe                                                                                 | `5`                  |
| `readinessProbe.periodSeconds`                    | Period seconds for readinessProbe                                                                                        | `5`                  |
| `readinessProbe.timeoutSeconds`                   | Timeout seconds for readinessProbe                                                                                       | `3`                  |
| `readinessProbe.failureThreshold`                 | Failure threshold for readinessProbe                                                                                     | `5`                  |
| `readinessProbe.successThreshold`                 | Success threshold for readinessProbe                                                                                     | `1`                  |
| `startupProbe.enabled`                            | Enable startupProbe                                                                                                      | `true`               |
| `startupProbe.initialDelaySeconds`                | Initial delay seconds for startupProbe                                                                                   | `5`                  |
| `startupProbe.periodSeconds`                      | Period seconds for startupProbe                                                                                          | `5`                  |
| `startupProbe.timeoutSeconds`                     | Timeout seconds for startupProbe                                                                                         | `3`                  |
| `startupProbe.failureThreshold`                   | Failure threshold for startupProbe                                                                                       | `5`                  |
| `startupProbe.successThreshold`                   | Success threshold for startupProbe                                                                                       | `1`                  |
| `customLivenessProbe`                             | Custom livenessProbe that overrides the default one                                                                      | `{}`                 |
| `customReadinessProbe`                            | Custom readinessProbe that overrides the default one                                                                     | `{}`                 |
| `customStartupProbe`                              | Custom startupProbe that overrides the default one                                                                       | `{}`                 |
| `podSecurityContext.enabled`                      | Enabled Pytorch pods' Security Context                                                                                   | `true`               |
| `podSecurityContext.fsGroup`                      | Set Pytorch pods' Security Context fsGroup                                                                               | `1001`               |
| `podSecurityContext.runAsUser`                    | Set Pytorch pods' Security Context runAsUser                                                                             | `1001`               |
| `containerSecurityContext.enabled`                | Enabled Pytorch containers' Security Context                                                                             | `true`               |
| `containerSecurityContext.runAsUser`              | Set Pytorch containers' Security Context runAsUser                                                                       | `1001`               |
| `containerSecurityContext.runAsNonRoot`           | Set Pytorch containers' Security Context runAsNonRoot                                                                    | `true`               |
| `containerSecurityContext.readOnlyRootFilesystem` | Set Pytorch containers' Security Context runAsNonRoot                                                                    | `false`              |
| `resources.limits`                                | The resources limits for the Pytorch containers                                                                          | `{}`                 |
| `resources.requests`                              | The requested resources for the Pytorch containers                                                                       | `{}`                 |
| `entrypoint.file`                                 | Main entrypoint to your application                                                                                      | `""`                 |
| `entrypoint.args`                                 | Args required by your entrypoint                                                                                         | `[]`                 |
| `architecture`                                    | Run PyTorch in standalone or distributed mode. Possible values: `standalone`, `distributed`                              | `standalone`         |
| `hostAliases`                                     | Deployment pod host aliases                                                                                              | `[]`                 |
| `command`                                         | Override default container command (useful when using custom images)                                                     | `[]`                 |
| `args`                                            | Override default container args (useful when using custom images)                                                        | `[]`                 |
| `podLabels`                                       | Extra labels for Pytorch pods                                                                                            | `{}`                 |
| `podAnnotations`                                  | Annotations for Pytorch pods                                                                                             | `{}`                 |
| `existingConfigmap`                               | Config map that contains the files you want to load in PyTorch                                                           | `""`                 |
| `cloneFilesFromGit.enabled`                       | Enable in order to download files from git repository                                                                    | `false`              |
| `cloneFilesFromGit.repository`                    | Repository that holds the files                                                                                          | `""`                 |
| `cloneFilesFromGit.revision`                      | Revision from the repository to checkout                                                                                 | `""`                 |
| `cloneFilesFromGit.extraVolumeMounts`             | Add extra volume mounts for the Git container                                                                            | `[]`                 |
| `podAffinityPreset`                               | Pod affinity preset. Ignored if `affinity` is set. Allowed values: `soft` or `hard`                                      | `""`                 |
| `podAntiAffinityPreset`                           | Pod anti-affinity preset. Ignored if `affinity` is set. Allowed values: `soft` or `hard`                                 | `soft`               |
| `nodeAffinityPreset.type`                         | Node affinity preset type. Ignored if `affinity` is set. Allowed values: `soft` or `hard`                                | `""`                 |
| `nodeAffinityPreset.key`                          | Node label key to match Ignored if `affinity` is set.                                                                    | `""`                 |
| `nodeAffinityPreset.values`                       | Node label values to match. Ignored if `affinity` is set.                                                                | `[]`                 |
| `affinity`                                        | Affinity for pod assignment. Evaluated as a template.                                                                    | `{}`                 |
| `nodeSelector`                                    | Node labels for pod assignment. Evaluated as a template.                                                                 | `{}`                 |
| `tolerations`                                     | Tolerations for pod assignment. Evaluated as a template.                                                                 | `[]`                 |
| `updateStrategy.type`                             | Pytorch statefulset strategy type                                                                                        | `RollingUpdate`      |
| `podManagementPolicy`                             | Statefulset Pod management policy, it needs to be Parallel to be able to complete the cluster join                       | `OrderedReady`       |
| `priorityClassName`                               | Pytorch pods' priorityClassName                                                                                          | `""`                 |
| `topologySpreadConstraints`                       | Topology Spread Constraints for pod assignment spread across your cluster among failure-domains. Evaluated as a template | `[]`                 |
| `schedulerName`                                   | Name of the k8s scheduler (other than default) for Pytorch pods                                                          | `""`                 |
| `terminationGracePeriodSeconds`                   | Seconds Redmine pod needs to terminate gracefully                                                                        | `""`                 |
| `lifecycleHooks`                                  | for the Pytorch container(s) to automate configuration before or after startup                                           | `{}`                 |
| `extraEnvVars`                                    | Array with extra environment variables to add to Pytorch nodes                                                           | `[]`                 |
| `extraEnvVarsCM`                                  | Name of existing ConfigMap containing extra env vars for Pytorch nodes                                                   | `""`                 |
| `extraEnvVarsSecret`                              | Name of existing Secret containing extra env vars for Pytorch nodes                                                      | `""`                 |
| `extraVolumes`                                    | Optionally specify extra list of additional volumes for the Pytorch pod(s)                                               | `[]`                 |
| `extraVolumeMounts`                               | Optionally specify extra list of additional volumeMounts for the Pytorch container(s)                                    | `[]`                 |
| `sidecars`                                        | Add additional sidecar containers to the Pytorch pod(s)                                                                  | `[]`                 |
| `initContainers`                                  | Add additional init containers to the %%MAIN_CONTAINER_NAME%% pod(s)                                                     | `[]`                 |

### Traffic Exposure Parameters

| Name                               | Description                                                                        | Value       |
| ---------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `service.type`                     | Kubernetes service type                                                            | `ClusterIP` |
| `service.ports.pytorch`            | Scheduler Service port                                                             | `49875`     |
| `service.nodePorts.pytorch`        | Node port for Pytorch                                                              | `""`        |
| `service.clusterIP`                | Pytorch service Cluster IP                                                         | `""`        |
| `service.loadBalancerIP`           | Pytorch service Load Balancer IP                                                   | `""`        |
| `service.loadBalancerSourceRanges` | Pytorch service Load Balancer sources                                              | `[]`        |
| `service.externalTrafficPolicy`    | Pytorch service external traffic policy                                            | `Cluster`   |
| `service.annotations`              | Additional custom annotations for Pytorch service                                  | `{}`        |
| `service.extraPorts`               | Extra ports to expose in Pytorch service (normally used with the `sidecars` value) | `[]`        |
| `service.sessionAffinity`          | Control where client requests go, to the same pod or round-robin                   | `None`      |
| `service.sessionAffinityConfig`    | Additional settings for the sessionAffinity                                        | `{}`        |
| `service.headless.annotations`     | Annotations for the headless service.                                              | `{}`        |

### Init Container Parameters

| Name                                   | Description                                                                                                                                               | Value                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `git.registry`                         | Git image registry                                                                                                                                        | `docker.io`             |
| `git.repository`                       | Git image repository                                                                                                                                      | `bitnami/git`           |
| `git.tag`                              | Git image tag (immutable tags are recommended)                                                                                                            | `2.40.1-debian-11-r4`   |
| `git.digest`                           | Git image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag                                                       | `""`                    |
| `git.pullPolicy`                       | Git image pull policy                                                                                                                                     | `IfNotPresent`          |
| `git.pullSecrets`                      | Specify docker-registry secret names as an array                                                                                                          | `[]`                    |
| `volumePermissions.enabled`            | Enable init container that changes volume permissions in the data directory (for cases where the default k8s `runAsUser` and `fsUser` values do not work) | `false`                 |
| `volumePermissions.image.registry`     | Init container volume-permissions image registry                                                                                                          | `docker.io`             |
| `volumePermissions.image.repository`   | Init container volume-permissions image repository                                                                                                        | `bitnami/bitnami-shell` |
| `volumePermissions.image.tag`          | Init container volume-permissions image tag (immutable tags are recommended)                                                                              | `11-debian-11-r114`     |
| `volumePermissions.image.digest`       | Init container volume-permissions image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag                         | `""`                    |
| `volumePermissions.image.pullPolicy`   | Init container volume-permissions image pull policy                                                                                                       | `IfNotPresent`          |
| `volumePermissions.image.pullSecrets`  | Specify docker-registry secret names as an array                                                                                                          | `[]`                    |
| `volumePermissions.resources.limits`   | The resources limits for the container                                                                                                                    | `{}`                    |
| `volumePermissions.resources.requests` | The requested resources for the container                                                                                                                 | `{}`                    |

### Persistence Parameters

| Name                        | Description                                                                                             | Value               |
| --------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------- |
| `persistence.enabled`       | Enable persistence using Persistent Volume Claims                                                       | `true`              |
| `persistence.mountPath`     | Path to mount the volume at.                                                                            | `/bitnami/pytorch`  |
| `persistence.subPath`       | The subdirectory of the volume to mount to, useful in dev environments and one PV for multiple services | `""`                |
| `persistence.storageClass`  | Storage class of backing PVC                                                                            | `""`                |
| `persistence.annotations`   | Persistent Volume Claim annotations                                                                     | `{}`                |
| `persistence.accessModes`   | Persistent Volume Access Modes                                                                          | `["ReadWriteOnce"]` |
| `persistence.size`          | Size of data volume                                                                                     | `8Gi`               |
| `persistence.existingClaim` | The name of an existing PVC to use for persistence                                                      | `""`                |
| `persistence.selector`      | Selector to match an existing Persistent Volume for WordPress data PVC                                  | `{}`                |
| `persistence.dataSource`    | Custom PVC data source                                                                                  | `{}`                |

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
helm install my-release \
  --set mode=distributed \
  --set worldSize=4 \
    oci://registry-1.docker.io/bitnamicharts/pytorch
```

The above command create 4 pods for PyTorch: one master and three workers.

Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart. For example,

```console
helm install my-release -f values.yaml oci://registry-1.docker.io/bitnamicharts/pytorch
```

> **Tip**: You can use the default [values.yaml](values.yaml)

## Configuration and installation details

### [Rolling VS Immutable tags](https://docs.bitnami.com/containers/how-to/understand-rolling-tags-containers/)

It is strongly recommended to use immutable tags in a production environment. This ensures your deployment does not change automatically if the same tag is updated with a different image.

Bitnami will release a new chart updating its containers if a new version of the main container, significant changes, or critical vulnerabilities exist.

### Loading your files

The PyTorch chart supports three different ways to load your files. In order of priority, they are:

  1. Existing config map
  2. Files under the `files` directory
  3. Cloning a git repository

This means that if you specify a config map with your files, it won't look for the `files/` directory nor the git repository.

In order to use use an existing config map, set the `configMap=my-config-map` parameter.

To load your files from the `files/` directory you don't have to set any option. Just copy your files inside and don't specify a `ConfigMap`.

Finally, if you want to clone a git repository you can use those parameters:

```console
cloneFilesFromGit.enabled=true
cloneFilesFromGit.repository=https://github.com/my-user/oci://registry-1.docker.io/bitnamicharts
cloneFilesFromGit.revision=master
```

## Persistence

The [Bitnami PyTorch](https://github.com/bitnami/containers/tree/main/bitnami/pytorch) image can persist data. If enabled, the persisted path is `/bitnami/pytorch` by default.

The chart mounts a [Persistent Volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) at this location. The volume is created using dynamic volume provisioning.

### Adjust permissions of persistent volume mountpoint

As the image run as non-root by default, it is necessary to adjust the ownership of the persistent volume so that the container can write data into it.

By default, the chart is configured to use Kubernetes Security Context to automatically change the ownership of the volume. However, this feature does not work in all Kubernetes distributions.
As an alternative, this chart supports using an initContainer to change the ownership of the volume before mounting it in the final destination.

You can enable this initContainer by setting `volumePermissions.enabled` to `true`.

### Setting Pod's affinity

This chart allows you to set your custom affinity using the `affinity` parameter. Find more information about Pod's affinity in the [kubernetes documentation](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity).

As an alternative, you can use of the preset configurations for pod affinity, pod anti-affinity, and node affinity available at the [bitnami/common](https://github.com/bitnami/charts/tree/main/bitnami/common#affinities) chart. To do so, set the `podAffinityPreset`, `podAntiAffinityPreset`, or `nodeAffinityPreset` parameters.

## Troubleshooting

Find more information about how to deal with common errors related to Bitnami's Helm charts in [this troubleshooting guide](https://docs.bitnami.com/general/how-to/troubleshoot-helm-chart-issues).

## Upgrading

### To 2.1.0

This version introduces `bitnami/common`, a [library chart](https://helm.sh/docs/topics/library_charts/#helm) as a dependency. More documentation about this new utility could be found [here](https://github.com/bitnami/charts/tree/main/bitnami/common#bitnami-common-library-chart). Please, make sure that you have updated the chart dependencies before executing any upgrade.

### To 2.0.0

[On November 13, 2020, Helm v2 support was formally finished](https://github.com/helm/charts#status-of-the-project), this major version is the result of the required changes applied to the Helm Chart to be able to incorporate the different features added in Helm v3 and to be consistent with the Helm project itself regarding the Helm v2 EOL.

#### What changes were introduced in this major version?

- Previous versions of this Helm Chart use `apiVersion: v1` (installable by both Helm 2 and 3), this Helm Chart was updated to `apiVersion: v2` (installable by Helm 3 only). [Here](https://helm.sh/docs/topics/charts/#the-apiversion-field) you can find more information about the `apiVersion` field.
- The different fields present in the *Chart.yaml* file has been ordered alphabetically in a homogeneous way for all the Bitnami Helm Charts

#### Considerations when upgrading to this version

- If you want to upgrade to this version from a previous one installed with Helm v3, you shouldn't face any issues
- If you want to upgrade to this version using Helm v2, this scenario is not supported as this version doesn't support Helm v2 anymore
- If you installed the previous version with Helm v2 and wants to upgrade to this version with Helm v3, please refer to the [official Helm documentation](https://helm.sh/docs/topics/v2_v3_migration/#migration-use-cases) about migrating from Helm v2 to v3

#### Useful links

- <https://docs.bitnami.com/tutorials/resolve-helm2-helm3-post-migration-issues/>
- <https://helm.sh/docs/topics/v2_v3_migration/>
- <https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/>

## License

Copyright &copy; 2023 Bitnami

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.