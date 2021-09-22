// package: yandex.cloud.compute.v1.instancegroup
// file: yandex/cloud/compute/v1/instancegroup/instance_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class InstanceGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): InstanceGroup;
    getFolderId(): string;
    setFolderId(value: string): InstanceGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstanceGroup;
    getName(): string;
    setName(value: string): InstanceGroup;
    getDescription(): string;
    setDescription(value: string): InstanceGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasInstanceTemplate(): boolean;
    clearInstanceTemplate(): void;
    getInstanceTemplate(): InstanceTemplate | undefined;
    setInstanceTemplate(value?: InstanceTemplate): InstanceGroup;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): ScalePolicy | undefined;
    setScalePolicy(value?: ScalePolicy): InstanceGroup;

    hasDeployPolicy(): boolean;
    clearDeployPolicy(): void;
    getDeployPolicy(): DeployPolicy | undefined;
    setDeployPolicy(value?: DeployPolicy): InstanceGroup;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): AllocationPolicy | undefined;
    setAllocationPolicy(value?: AllocationPolicy): InstanceGroup;

    hasLoadBalancerState(): boolean;
    clearLoadBalancerState(): void;
    getLoadBalancerState(): LoadBalancerState | undefined;
    setLoadBalancerState(value?: LoadBalancerState): InstanceGroup;

    hasManagedInstancesState(): boolean;
    clearManagedInstancesState(): void;
    getManagedInstancesState(): ManagedInstancesState | undefined;
    setManagedInstancesState(value?: ManagedInstancesState): InstanceGroup;

    hasLoadBalancerSpec(): boolean;
    clearLoadBalancerSpec(): void;
    getLoadBalancerSpec(): LoadBalancerSpec | undefined;
    setLoadBalancerSpec(value?: LoadBalancerSpec): InstanceGroup;

    hasHealthChecksSpec(): boolean;
    clearHealthChecksSpec(): void;
    getHealthChecksSpec(): HealthChecksSpec | undefined;
    setHealthChecksSpec(value?: HealthChecksSpec): InstanceGroup;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): InstanceGroup;
    getStatus(): InstanceGroup.Status;
    setStatus(value: InstanceGroup.Status): InstanceGroup;
    clearVariablesList(): void;
    getVariablesList(): Array<Variable>;
    setVariablesList(value: Array<Variable>): InstanceGroup;
    addVariables(value?: Variable, index?: number): Variable;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): InstanceGroup;

    hasApplicationLoadBalancerSpec(): boolean;
    clearApplicationLoadBalancerSpec(): void;
    getApplicationLoadBalancerSpec(): ApplicationLoadBalancerSpec | undefined;
    setApplicationLoadBalancerSpec(value?: ApplicationLoadBalancerSpec): InstanceGroup;

    hasApplicationLoadBalancerState(): boolean;
    clearApplicationLoadBalancerState(): void;
    getApplicationLoadBalancerState(): ApplicationLoadBalancerState | undefined;
    setApplicationLoadBalancerState(value?: ApplicationLoadBalancerState): InstanceGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstanceGroup.AsObject;
    static toObject(includeInstance: boolean, msg: InstanceGroup): InstanceGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstanceGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstanceGroup;
    static deserializeBinaryFromReader(message: InstanceGroup, reader: jspb.BinaryReader): InstanceGroup;
}

export namespace InstanceGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        instanceTemplate?: InstanceTemplate.AsObject,
        scalePolicy?: ScalePolicy.AsObject,
        deployPolicy?: DeployPolicy.AsObject,
        allocationPolicy?: AllocationPolicy.AsObject,
        loadBalancerState?: LoadBalancerState.AsObject,
        managedInstancesState?: ManagedInstancesState.AsObject,
        loadBalancerSpec?: LoadBalancerSpec.AsObject,
        healthChecksSpec?: HealthChecksSpec.AsObject,
        serviceAccountId: string,
        status: InstanceGroup.Status,
        variablesList: Array<Variable.AsObject>,
        deletionProtection: boolean,
        applicationLoadBalancerSpec?: ApplicationLoadBalancerSpec.AsObject,
        applicationLoadBalancerState?: ApplicationLoadBalancerState.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    STARTING = 1,
    ACTIVE = 2,
    STOPPING = 3,
    STOPPED = 4,
    DELETING = 5,
    PAUSED = 6,
    }

}

export class ApplicationLoadBalancerState extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): ApplicationLoadBalancerState;
    getStatusMessage(): string;
    setStatusMessage(value: string): ApplicationLoadBalancerState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationLoadBalancerState.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationLoadBalancerState): ApplicationLoadBalancerState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationLoadBalancerState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationLoadBalancerState;
    static deserializeBinaryFromReader(message: ApplicationLoadBalancerState, reader: jspb.BinaryReader): ApplicationLoadBalancerState;
}

export namespace ApplicationLoadBalancerState {
    export type AsObject = {
        targetGroupId: string,
        statusMessage: string,
    }
}

export class Variable extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Variable;
    getValue(): string;
    setValue(value: string): Variable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Variable.AsObject;
    static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Variable;
    static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class LoadBalancerState extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): LoadBalancerState;
    getStatusMessage(): string;
    setStatusMessage(value: string): LoadBalancerState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadBalancerState.AsObject;
    static toObject(includeInstance: boolean, msg: LoadBalancerState): LoadBalancerState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadBalancerState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadBalancerState;
    static deserializeBinaryFromReader(message: LoadBalancerState, reader: jspb.BinaryReader): LoadBalancerState;
}

export namespace LoadBalancerState {
    export type AsObject = {
        targetGroupId: string,
        statusMessage: string,
    }
}

export class ManagedInstancesState extends jspb.Message { 
    getTargetSize(): number;
    setTargetSize(value: number): ManagedInstancesState;
    getRunningActualCount(): number;
    setRunningActualCount(value: number): ManagedInstancesState;
    getRunningOutdatedCount(): number;
    setRunningOutdatedCount(value: number): ManagedInstancesState;
    getProcessingCount(): number;
    setProcessingCount(value: number): ManagedInstancesState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManagedInstancesState.AsObject;
    static toObject(includeInstance: boolean, msg: ManagedInstancesState): ManagedInstancesState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManagedInstancesState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManagedInstancesState;
    static deserializeBinaryFromReader(message: ManagedInstancesState, reader: jspb.BinaryReader): ManagedInstancesState;
}

export namespace ManagedInstancesState {
    export type AsObject = {
        targetSize: number,
        runningActualCount: number,
        runningOutdatedCount: number,
        processingCount: number,
    }


    export class Statuses extends jspb.Message { 
        getCreating(): number;
        setCreating(value: number): Statuses;
        getStarting(): number;
        setStarting(value: number): Statuses;
        getOpening(): number;
        setOpening(value: number): Statuses;
        getWarming(): number;
        setWarming(value: number): Statuses;
        getRunning(): number;
        setRunning(value: number): Statuses;
        getClosing(): number;
        setClosing(value: number): Statuses;
        getStopping(): number;
        setStopping(value: number): Statuses;
        getUpdating(): number;
        setUpdating(value: number): Statuses;
        getDeleting(): number;
        setDeleting(value: number): Statuses;
        getFailed(): number;
        setFailed(value: number): Statuses;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Statuses.AsObject;
        static toObject(includeInstance: boolean, msg: Statuses): Statuses.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Statuses, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Statuses;
        static deserializeBinaryFromReader(message: Statuses, reader: jspb.BinaryReader): Statuses;
    }

    export namespace Statuses {
        export type AsObject = {
            creating: number,
            starting: number,
            opening: number,
            warming: number,
            running: number,
            closing: number,
            stopping: number,
            updating: number,
            deleting: number,
            failed: number,
        }
    }

}

export class ScalePolicy extends jspb.Message { 

    hasFixedScale(): boolean;
    clearFixedScale(): void;
    getFixedScale(): ScalePolicy.FixedScale | undefined;
    setFixedScale(value?: ScalePolicy.FixedScale): ScalePolicy;

    hasAutoScale(): boolean;
    clearAutoScale(): void;
    getAutoScale(): ScalePolicy.AutoScale | undefined;
    setAutoScale(value?: ScalePolicy.AutoScale): ScalePolicy;

    hasTestAutoScale(): boolean;
    clearTestAutoScale(): void;
    getTestAutoScale(): ScalePolicy.AutoScale | undefined;
    setTestAutoScale(value?: ScalePolicy.AutoScale): ScalePolicy;

    getScaleTypeCase(): ScalePolicy.ScaleTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: ScalePolicy): ScalePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalePolicy;
    static deserializeBinaryFromReader(message: ScalePolicy, reader: jspb.BinaryReader): ScalePolicy;
}

export namespace ScalePolicy {
    export type AsObject = {
        fixedScale?: ScalePolicy.FixedScale.AsObject,
        autoScale?: ScalePolicy.AutoScale.AsObject,
        testAutoScale?: ScalePolicy.AutoScale.AsObject,
    }


    export class AutoScale extends jspb.Message { 
        getMinZoneSize(): number;
        setMinZoneSize(value: number): AutoScale;
        getMaxSize(): number;
        setMaxSize(value: number): AutoScale;

        hasMeasurementDuration(): boolean;
        clearMeasurementDuration(): void;
        getMeasurementDuration(): google_protobuf_duration_pb.Duration | undefined;
        setMeasurementDuration(value?: google_protobuf_duration_pb.Duration): AutoScale;

        hasWarmupDuration(): boolean;
        clearWarmupDuration(): void;
        getWarmupDuration(): google_protobuf_duration_pb.Duration | undefined;
        setWarmupDuration(value?: google_protobuf_duration_pb.Duration): AutoScale;

        hasStabilizationDuration(): boolean;
        clearStabilizationDuration(): void;
        getStabilizationDuration(): google_protobuf_duration_pb.Duration | undefined;
        setStabilizationDuration(value?: google_protobuf_duration_pb.Duration): AutoScale;
        getInitialSize(): number;
        setInitialSize(value: number): AutoScale;

        hasCpuUtilizationRule(): boolean;
        clearCpuUtilizationRule(): void;
        getCpuUtilizationRule(): ScalePolicy.CpuUtilizationRule | undefined;
        setCpuUtilizationRule(value?: ScalePolicy.CpuUtilizationRule): AutoScale;
        clearCustomRulesList(): void;
        getCustomRulesList(): Array<ScalePolicy.CustomRule>;
        setCustomRulesList(value: Array<ScalePolicy.CustomRule>): AutoScale;
        addCustomRules(value?: ScalePolicy.CustomRule, index?: number): ScalePolicy.CustomRule;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AutoScale.AsObject;
        static toObject(includeInstance: boolean, msg: AutoScale): AutoScale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AutoScale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AutoScale;
        static deserializeBinaryFromReader(message: AutoScale, reader: jspb.BinaryReader): AutoScale;
    }

    export namespace AutoScale {
        export type AsObject = {
            minZoneSize: number,
            maxSize: number,
            measurementDuration?: google_protobuf_duration_pb.Duration.AsObject,
            warmupDuration?: google_protobuf_duration_pb.Duration.AsObject,
            stabilizationDuration?: google_protobuf_duration_pb.Duration.AsObject,
            initialSize: number,
            cpuUtilizationRule?: ScalePolicy.CpuUtilizationRule.AsObject,
            customRulesList: Array<ScalePolicy.CustomRule.AsObject>,
        }
    }

    export class CpuUtilizationRule extends jspb.Message { 
        getUtilizationTarget(): number;
        setUtilizationTarget(value: number): CpuUtilizationRule;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CpuUtilizationRule.AsObject;
        static toObject(includeInstance: boolean, msg: CpuUtilizationRule): CpuUtilizationRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CpuUtilizationRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CpuUtilizationRule;
        static deserializeBinaryFromReader(message: CpuUtilizationRule, reader: jspb.BinaryReader): CpuUtilizationRule;
    }

    export namespace CpuUtilizationRule {
        export type AsObject = {
            utilizationTarget: number,
        }
    }

    export class CustomRule extends jspb.Message { 
        getRuleType(): ScalePolicy.CustomRule.RuleType;
        setRuleType(value: ScalePolicy.CustomRule.RuleType): CustomRule;
        getMetricType(): ScalePolicy.CustomRule.MetricType;
        setMetricType(value: ScalePolicy.CustomRule.MetricType): CustomRule;
        getMetricName(): string;
        setMetricName(value: string): CustomRule;

        getLabelsMap(): jspb.Map<string, string>;
        clearLabelsMap(): void;
        getTarget(): number;
        setTarget(value: number): CustomRule;
        getFolderId(): string;
        setFolderId(value: string): CustomRule;
        getService(): string;
        setService(value: string): CustomRule;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CustomRule.AsObject;
        static toObject(includeInstance: boolean, msg: CustomRule): CustomRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CustomRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CustomRule;
        static deserializeBinaryFromReader(message: CustomRule, reader: jspb.BinaryReader): CustomRule;
    }

    export namespace CustomRule {
        export type AsObject = {
            ruleType: ScalePolicy.CustomRule.RuleType,
            metricType: ScalePolicy.CustomRule.MetricType,
            metricName: string,

            labelsMap: Array<[string, string]>,
            target: number,
            folderId: string,
            service: string,
        }

        export enum RuleType {
    RULE_TYPE_UNSPECIFIED = 0,
    UTILIZATION = 1,
    WORKLOAD = 2,
        }

        export enum MetricType {
    METRIC_TYPE_UNSPECIFIED = 0,
    GAUGE = 1,
    COUNTER = 2,
        }

    }

    export class FixedScale extends jspb.Message { 
        getSize(): number;
        setSize(value: number): FixedScale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FixedScale.AsObject;
        static toObject(includeInstance: boolean, msg: FixedScale): FixedScale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FixedScale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FixedScale;
        static deserializeBinaryFromReader(message: FixedScale, reader: jspb.BinaryReader): FixedScale;
    }

    export namespace FixedScale {
        export type AsObject = {
            size: number,
        }
    }


    export enum ScaleTypeCase {
        SCALE_TYPE_NOT_SET = 0,
        FIXED_SCALE = 1,
        AUTO_SCALE = 2,
    }

}

export class DeployPolicy extends jspb.Message { 
    getMaxUnavailable(): number;
    setMaxUnavailable(value: number): DeployPolicy;
    getMaxDeleting(): number;
    setMaxDeleting(value: number): DeployPolicy;
    getMaxCreating(): number;
    setMaxCreating(value: number): DeployPolicy;
    getMaxExpansion(): number;
    setMaxExpansion(value: number): DeployPolicy;

    hasStartupDuration(): boolean;
    clearStartupDuration(): void;
    getStartupDuration(): google_protobuf_duration_pb.Duration | undefined;
    setStartupDuration(value?: google_protobuf_duration_pb.Duration): DeployPolicy;
    getStrategy(): DeployPolicy.Strategy;
    setStrategy(value: DeployPolicy.Strategy): DeployPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeployPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: DeployPolicy): DeployPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeployPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeployPolicy;
    static deserializeBinaryFromReader(message: DeployPolicy, reader: jspb.BinaryReader): DeployPolicy;
}

export namespace DeployPolicy {
    export type AsObject = {
        maxUnavailable: number,
        maxDeleting: number,
        maxCreating: number,
        maxExpansion: number,
        startupDuration?: google_protobuf_duration_pb.Duration.AsObject,
        strategy: DeployPolicy.Strategy,
    }

    export enum Strategy {
    STRATEGY_UNSPECIFIED = 0,
    PROACTIVE = 1,
    OPPORTUNISTIC = 2,
    }

}

export class AllocationPolicy extends jspb.Message { 
    clearZonesList(): void;
    getZonesList(): Array<AllocationPolicy.Zone>;
    setZonesList(value: Array<AllocationPolicy.Zone>): AllocationPolicy;
    addZones(value?: AllocationPolicy.Zone, index?: number): AllocationPolicy.Zone;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllocationPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: AllocationPolicy): AllocationPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllocationPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllocationPolicy;
    static deserializeBinaryFromReader(message: AllocationPolicy, reader: jspb.BinaryReader): AllocationPolicy;
}

export namespace AllocationPolicy {
    export type AsObject = {
        zonesList: Array<AllocationPolicy.Zone.AsObject>,
    }


    export class Zone extends jspb.Message { 
        getZoneId(): string;
        setZoneId(value: string): Zone;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Zone.AsObject;
        static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Zone;
        static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
    }

    export namespace Zone {
        export type AsObject = {
            zoneId: string,
        }
    }

}

export class InstanceTemplate extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): InstanceTemplate;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getPlatformId(): string;
    setPlatformId(value: string): InstanceTemplate;

    hasResourcesSpec(): boolean;
    clearResourcesSpec(): void;
    getResourcesSpec(): ResourcesSpec | undefined;
    setResourcesSpec(value?: ResourcesSpec): InstanceTemplate;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    hasBootDiskSpec(): boolean;
    clearBootDiskSpec(): void;
    getBootDiskSpec(): AttachedDiskSpec | undefined;
    setBootDiskSpec(value?: AttachedDiskSpec): InstanceTemplate;
    clearSecondaryDiskSpecsList(): void;
    getSecondaryDiskSpecsList(): Array<AttachedDiskSpec>;
    setSecondaryDiskSpecsList(value: Array<AttachedDiskSpec>): InstanceTemplate;
    addSecondaryDiskSpecs(value?: AttachedDiskSpec, index?: number): AttachedDiskSpec;
    clearNetworkInterfaceSpecsList(): void;
    getNetworkInterfaceSpecsList(): Array<NetworkInterfaceSpec>;
    setNetworkInterfaceSpecsList(value: Array<NetworkInterfaceSpec>): InstanceTemplate;
    addNetworkInterfaceSpecs(value?: NetworkInterfaceSpec, index?: number): NetworkInterfaceSpec;

    hasSchedulingPolicy(): boolean;
    clearSchedulingPolicy(): void;
    getSchedulingPolicy(): SchedulingPolicy | undefined;
    setSchedulingPolicy(value?: SchedulingPolicy): InstanceTemplate;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): InstanceTemplate;

    hasNetworkSettings(): boolean;
    clearNetworkSettings(): void;
    getNetworkSettings(): NetworkSettings | undefined;
    setNetworkSettings(value?: NetworkSettings): InstanceTemplate;
    getName(): string;
    setName(value: string): InstanceTemplate;
    getHostname(): string;
    setHostname(value: string): InstanceTemplate;

    hasPlacementPolicy(): boolean;
    clearPlacementPolicy(): void;
    getPlacementPolicy(): PlacementPolicy | undefined;
    setPlacementPolicy(value?: PlacementPolicy): InstanceTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstanceTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: InstanceTemplate): InstanceTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstanceTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstanceTemplate;
    static deserializeBinaryFromReader(message: InstanceTemplate, reader: jspb.BinaryReader): InstanceTemplate;
}

export namespace InstanceTemplate {
    export type AsObject = {
        description: string,

        labelsMap: Array<[string, string]>,
        platformId: string,
        resourcesSpec?: ResourcesSpec.AsObject,

        metadataMap: Array<[string, string]>,
        bootDiskSpec?: AttachedDiskSpec.AsObject,
        secondaryDiskSpecsList: Array<AttachedDiskSpec.AsObject>,
        networkInterfaceSpecsList: Array<NetworkInterfaceSpec.AsObject>,
        schedulingPolicy?: SchedulingPolicy.AsObject,
        serviceAccountId: string,
        networkSettings?: NetworkSettings.AsObject,
        name: string,
        hostname: string,
        placementPolicy?: PlacementPolicy.AsObject,
    }
}

export class PlacementPolicy extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): PlacementPolicy;
    clearHostAffinityRulesList(): void;
    getHostAffinityRulesList(): Array<PlacementPolicy.HostAffinityRule>;
    setHostAffinityRulesList(value: Array<PlacementPolicy.HostAffinityRule>): PlacementPolicy;
    addHostAffinityRules(value?: PlacementPolicy.HostAffinityRule, index?: number): PlacementPolicy.HostAffinityRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementPolicy): PlacementPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementPolicy;
    static deserializeBinaryFromReader(message: PlacementPolicy, reader: jspb.BinaryReader): PlacementPolicy;
}

export namespace PlacementPolicy {
    export type AsObject = {
        placementGroupId: string,
        hostAffinityRulesList: Array<PlacementPolicy.HostAffinityRule.AsObject>,
    }


    export class HostAffinityRule extends jspb.Message { 
        getKey(): string;
        setKey(value: string): HostAffinityRule;
        getOp(): PlacementPolicy.HostAffinityRule.Operator;
        setOp(value: PlacementPolicy.HostAffinityRule.Operator): HostAffinityRule;
        clearValuesList(): void;
        getValuesList(): Array<string>;
        setValuesList(value: Array<string>): HostAffinityRule;
        addValues(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HostAffinityRule.AsObject;
        static toObject(includeInstance: boolean, msg: HostAffinityRule): HostAffinityRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HostAffinityRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HostAffinityRule;
        static deserializeBinaryFromReader(message: HostAffinityRule, reader: jspb.BinaryReader): HostAffinityRule;
    }

    export namespace HostAffinityRule {
        export type AsObject = {
            key: string,
            op: PlacementPolicy.HostAffinityRule.Operator,
            valuesList: Array<string>,
        }

        export enum Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
        }

    }

}

export class ResourcesSpec extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): ResourcesSpec;
    getCores(): number;
    setCores(value: number): ResourcesSpec;
    getCoreFraction(): number;
    setCoreFraction(value: number): ResourcesSpec;
    getGpus(): number;
    setGpus(value: number): ResourcesSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourcesSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ResourcesSpec): ResourcesSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourcesSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourcesSpec;
    static deserializeBinaryFromReader(message: ResourcesSpec, reader: jspb.BinaryReader): ResourcesSpec;
}

export namespace ResourcesSpec {
    export type AsObject = {
        memory: number,
        cores: number,
        coreFraction: number,
        gpus: number,
    }
}

export class AttachedDiskSpec extends jspb.Message { 
    getMode(): AttachedDiskSpec.Mode;
    setMode(value: AttachedDiskSpec.Mode): AttachedDiskSpec;
    getDeviceName(): string;
    setDeviceName(value: string): AttachedDiskSpec;

    hasDiskSpec(): boolean;
    clearDiskSpec(): void;
    getDiskSpec(): AttachedDiskSpec.DiskSpec | undefined;
    setDiskSpec(value?: AttachedDiskSpec.DiskSpec): AttachedDiskSpec;
    getDiskId(): string;
    setDiskId(value: string): AttachedDiskSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedDiskSpec.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedDiskSpec): AttachedDiskSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedDiskSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedDiskSpec;
    static deserializeBinaryFromReader(message: AttachedDiskSpec, reader: jspb.BinaryReader): AttachedDiskSpec;
}

export namespace AttachedDiskSpec {
    export type AsObject = {
        mode: AttachedDiskSpec.Mode,
        deviceName: string,
        diskSpec?: AttachedDiskSpec.DiskSpec.AsObject,
        diskId: string,
    }


    export class DiskSpec extends jspb.Message { 
        getDescription(): string;
        setDescription(value: string): DiskSpec;
        getTypeId(): string;
        setTypeId(value: string): DiskSpec;
        getSize(): number;
        setSize(value: number): DiskSpec;

        hasImageId(): boolean;
        clearImageId(): void;
        getImageId(): string;
        setImageId(value: string): DiskSpec;

        hasSnapshotId(): boolean;
        clearSnapshotId(): void;
        getSnapshotId(): string;
        setSnapshotId(value: string): DiskSpec;
        getPreserveAfterInstanceDelete(): boolean;
        setPreserveAfterInstanceDelete(value: boolean): DiskSpec;

        getSourceOneofCase(): DiskSpec.SourceOneofCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DiskSpec.AsObject;
        static toObject(includeInstance: boolean, msg: DiskSpec): DiskSpec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DiskSpec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DiskSpec;
        static deserializeBinaryFromReader(message: DiskSpec, reader: jspb.BinaryReader): DiskSpec;
    }

    export namespace DiskSpec {
        export type AsObject = {
            description: string,
            typeId: string,
            size: number,
            imageId: string,
            snapshotId: string,
            preserveAfterInstanceDelete: boolean,
        }

        export enum SourceOneofCase {
            SOURCE_ONEOF_NOT_SET = 0,
            IMAGE_ID = 4,
            SNAPSHOT_ID = 5,
        }

    }


    export enum Mode {
    MODE_UNSPECIFIED = 0,
    READ_ONLY = 1,
    READ_WRITE = 2,
    }

}

export class NetworkInterfaceSpec extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): NetworkInterfaceSpec;
    clearSubnetIdsList(): void;
    getSubnetIdsList(): Array<string>;
    setSubnetIdsList(value: Array<string>): NetworkInterfaceSpec;
    addSubnetIds(value: string, index?: number): string;

    hasPrimaryV4AddressSpec(): boolean;
    clearPrimaryV4AddressSpec(): void;
    getPrimaryV4AddressSpec(): PrimaryAddressSpec | undefined;
    setPrimaryV4AddressSpec(value?: PrimaryAddressSpec): NetworkInterfaceSpec;

    hasPrimaryV6AddressSpec(): boolean;
    clearPrimaryV6AddressSpec(): void;
    getPrimaryV6AddressSpec(): PrimaryAddressSpec | undefined;
    setPrimaryV6AddressSpec(value?: PrimaryAddressSpec): NetworkInterfaceSpec;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): NetworkInterfaceSpec;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaceSpec.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaceSpec): NetworkInterfaceSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaceSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaceSpec;
    static deserializeBinaryFromReader(message: NetworkInterfaceSpec, reader: jspb.BinaryReader): NetworkInterfaceSpec;
}

export namespace NetworkInterfaceSpec {
    export type AsObject = {
        networkId: string,
        subnetIdsList: Array<string>,
        primaryV4AddressSpec?: PrimaryAddressSpec.AsObject,
        primaryV6AddressSpec?: PrimaryAddressSpec.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class PrimaryAddressSpec extends jspb.Message { 

    hasOneToOneNatSpec(): boolean;
    clearOneToOneNatSpec(): void;
    getOneToOneNatSpec(): OneToOneNatSpec | undefined;
    setOneToOneNatSpec(value?: OneToOneNatSpec): PrimaryAddressSpec;
    clearDnsRecordSpecsList(): void;
    getDnsRecordSpecsList(): Array<DnsRecordSpec>;
    setDnsRecordSpecsList(value: Array<DnsRecordSpec>): PrimaryAddressSpec;
    addDnsRecordSpecs(value?: DnsRecordSpec, index?: number): DnsRecordSpec;
    getAddress(): string;
    setAddress(value: string): PrimaryAddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimaryAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: PrimaryAddressSpec): PrimaryAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimaryAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimaryAddressSpec;
    static deserializeBinaryFromReader(message: PrimaryAddressSpec, reader: jspb.BinaryReader): PrimaryAddressSpec;
}

export namespace PrimaryAddressSpec {
    export type AsObject = {
        oneToOneNatSpec?: OneToOneNatSpec.AsObject,
        dnsRecordSpecsList: Array<DnsRecordSpec.AsObject>,
        address: string,
    }
}

export class OneToOneNatSpec extends jspb.Message { 
    getIpVersion(): IpVersion;
    setIpVersion(value: IpVersion): OneToOneNatSpec;
    getAddress(): string;
    setAddress(value: string): OneToOneNatSpec;
    clearDnsRecordSpecsList(): void;
    getDnsRecordSpecsList(): Array<DnsRecordSpec>;
    setDnsRecordSpecsList(value: Array<DnsRecordSpec>): OneToOneNatSpec;
    addDnsRecordSpecs(value?: DnsRecordSpec, index?: number): DnsRecordSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneToOneNatSpec.AsObject;
    static toObject(includeInstance: boolean, msg: OneToOneNatSpec): OneToOneNatSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneToOneNatSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneToOneNatSpec;
    static deserializeBinaryFromReader(message: OneToOneNatSpec, reader: jspb.BinaryReader): OneToOneNatSpec;
}

export namespace OneToOneNatSpec {
    export type AsObject = {
        ipVersion: IpVersion,
        address: string,
        dnsRecordSpecsList: Array<DnsRecordSpec.AsObject>,
    }
}

export class DnsRecordSpec extends jspb.Message { 
    getFqdn(): string;
    setFqdn(value: string): DnsRecordSpec;
    getDnsZoneId(): string;
    setDnsZoneId(value: string): DnsRecordSpec;
    getTtl(): number;
    setTtl(value: number): DnsRecordSpec;
    getPtr(): boolean;
    setPtr(value: boolean): DnsRecordSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DnsRecordSpec.AsObject;
    static toObject(includeInstance: boolean, msg: DnsRecordSpec): DnsRecordSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DnsRecordSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DnsRecordSpec;
    static deserializeBinaryFromReader(message: DnsRecordSpec, reader: jspb.BinaryReader): DnsRecordSpec;
}

export namespace DnsRecordSpec {
    export type AsObject = {
        fqdn: string,
        dnsZoneId: string,
        ttl: number,
        ptr: boolean,
    }
}

export class SchedulingPolicy extends jspb.Message { 
    getPreemptible(): boolean;
    setPreemptible(value: boolean): SchedulingPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchedulingPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: SchedulingPolicy): SchedulingPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchedulingPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchedulingPolicy;
    static deserializeBinaryFromReader(message: SchedulingPolicy, reader: jspb.BinaryReader): SchedulingPolicy;
}

export namespace SchedulingPolicy {
    export type AsObject = {
        preemptible: boolean,
    }
}

export class NetworkSettings extends jspb.Message { 
    getType(): NetworkSettings.Type;
    setType(value: NetworkSettings.Type): NetworkSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettings.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettings): NetworkSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettings;
    static deserializeBinaryFromReader(message: NetworkSettings, reader: jspb.BinaryReader): NetworkSettings;
}

export namespace NetworkSettings {
    export type AsObject = {
        type: NetworkSettings.Type,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    SOFTWARE_ACCELERATED = 2,
    HARDWARE_ACCELERATED = 3,
    }

}

export class LoadBalancerSpec extends jspb.Message { 

    hasTargetGroupSpec(): boolean;
    clearTargetGroupSpec(): void;
    getTargetGroupSpec(): TargetGroupSpec | undefined;
    setTargetGroupSpec(value?: TargetGroupSpec): LoadBalancerSpec;

    hasMaxOpeningTrafficDuration(): boolean;
    clearMaxOpeningTrafficDuration(): void;
    getMaxOpeningTrafficDuration(): google_protobuf_duration_pb.Duration | undefined;
    setMaxOpeningTrafficDuration(value?: google_protobuf_duration_pb.Duration): LoadBalancerSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadBalancerSpec.AsObject;
    static toObject(includeInstance: boolean, msg: LoadBalancerSpec): LoadBalancerSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadBalancerSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadBalancerSpec;
    static deserializeBinaryFromReader(message: LoadBalancerSpec, reader: jspb.BinaryReader): LoadBalancerSpec;
}

export namespace LoadBalancerSpec {
    export type AsObject = {
        targetGroupSpec?: TargetGroupSpec.AsObject,
        maxOpeningTrafficDuration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class TargetGroupSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): TargetGroupSpec;
    getDescription(): string;
    setDescription(value: string): TargetGroupSpec;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetGroupSpec.AsObject;
    static toObject(includeInstance: boolean, msg: TargetGroupSpec): TargetGroupSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetGroupSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetGroupSpec;
    static deserializeBinaryFromReader(message: TargetGroupSpec, reader: jspb.BinaryReader): TargetGroupSpec;
}

export namespace TargetGroupSpec {
    export type AsObject = {
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class ApplicationLoadBalancerSpec extends jspb.Message { 

    hasTargetGroupSpec(): boolean;
    clearTargetGroupSpec(): void;
    getTargetGroupSpec(): ApplicationTargetGroupSpec | undefined;
    setTargetGroupSpec(value?: ApplicationTargetGroupSpec): ApplicationLoadBalancerSpec;

    hasMaxOpeningTrafficDuration(): boolean;
    clearMaxOpeningTrafficDuration(): void;
    getMaxOpeningTrafficDuration(): google_protobuf_duration_pb.Duration | undefined;
    setMaxOpeningTrafficDuration(value?: google_protobuf_duration_pb.Duration): ApplicationLoadBalancerSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationLoadBalancerSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationLoadBalancerSpec): ApplicationLoadBalancerSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationLoadBalancerSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationLoadBalancerSpec;
    static deserializeBinaryFromReader(message: ApplicationLoadBalancerSpec, reader: jspb.BinaryReader): ApplicationLoadBalancerSpec;
}

export namespace ApplicationLoadBalancerSpec {
    export type AsObject = {
        targetGroupSpec?: ApplicationTargetGroupSpec.AsObject,
        maxOpeningTrafficDuration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ApplicationTargetGroupSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): ApplicationTargetGroupSpec;
    getDescription(): string;
    setDescription(value: string): ApplicationTargetGroupSpec;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationTargetGroupSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationTargetGroupSpec): ApplicationTargetGroupSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationTargetGroupSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationTargetGroupSpec;
    static deserializeBinaryFromReader(message: ApplicationTargetGroupSpec, reader: jspb.BinaryReader): ApplicationTargetGroupSpec;
}

export namespace ApplicationTargetGroupSpec {
    export type AsObject = {
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class HealthChecksSpec extends jspb.Message { 
    clearHealthCheckSpecsList(): void;
    getHealthCheckSpecsList(): Array<HealthCheckSpec>;
    setHealthCheckSpecsList(value: Array<HealthCheckSpec>): HealthChecksSpec;
    addHealthCheckSpecs(value?: HealthCheckSpec, index?: number): HealthCheckSpec;

    hasMaxCheckingHealthDuration(): boolean;
    clearMaxCheckingHealthDuration(): void;
    getMaxCheckingHealthDuration(): google_protobuf_duration_pb.Duration | undefined;
    setMaxCheckingHealthDuration(value?: google_protobuf_duration_pb.Duration): HealthChecksSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthChecksSpec.AsObject;
    static toObject(includeInstance: boolean, msg: HealthChecksSpec): HealthChecksSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthChecksSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthChecksSpec;
    static deserializeBinaryFromReader(message: HealthChecksSpec, reader: jspb.BinaryReader): HealthChecksSpec;
}

export namespace HealthChecksSpec {
    export type AsObject = {
        healthCheckSpecsList: Array<HealthCheckSpec.AsObject>,
        maxCheckingHealthDuration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class HealthCheckSpec extends jspb.Message { 

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): google_protobuf_duration_pb.Duration | undefined;
    setInterval(value?: google_protobuf_duration_pb.Duration): HealthCheckSpec;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): HealthCheckSpec;
    getUnhealthyThreshold(): number;
    setUnhealthyThreshold(value: number): HealthCheckSpec;
    getHealthyThreshold(): number;
    setHealthyThreshold(value: number): HealthCheckSpec;

    hasTcpOptions(): boolean;
    clearTcpOptions(): void;
    getTcpOptions(): HealthCheckSpec.TcpOptions | undefined;
    setTcpOptions(value?: HealthCheckSpec.TcpOptions): HealthCheckSpec;

    hasHttpOptions(): boolean;
    clearHttpOptions(): void;
    getHttpOptions(): HealthCheckSpec.HttpOptions | undefined;
    setHttpOptions(value?: HealthCheckSpec.HttpOptions): HealthCheckSpec;

    getHealthCheckOptionsCase(): HealthCheckSpec.HealthCheckOptionsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckSpec.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckSpec): HealthCheckSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckSpec;
    static deserializeBinaryFromReader(message: HealthCheckSpec, reader: jspb.BinaryReader): HealthCheckSpec;
}

export namespace HealthCheckSpec {
    export type AsObject = {
        interval?: google_protobuf_duration_pb.Duration.AsObject,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        unhealthyThreshold: number,
        healthyThreshold: number,
        tcpOptions?: HealthCheckSpec.TcpOptions.AsObject,
        httpOptions?: HealthCheckSpec.HttpOptions.AsObject,
    }


    export class TcpOptions extends jspb.Message { 
        getPort(): number;
        setPort(value: number): TcpOptions;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TcpOptions.AsObject;
        static toObject(includeInstance: boolean, msg: TcpOptions): TcpOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TcpOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TcpOptions;
        static deserializeBinaryFromReader(message: TcpOptions, reader: jspb.BinaryReader): TcpOptions;
    }

    export namespace TcpOptions {
        export type AsObject = {
            port: number,
        }
    }

    export class HttpOptions extends jspb.Message { 
        getPort(): number;
        setPort(value: number): HttpOptions;
        getPath(): string;
        setPath(value: string): HttpOptions;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HttpOptions.AsObject;
        static toObject(includeInstance: boolean, msg: HttpOptions): HttpOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HttpOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HttpOptions;
        static deserializeBinaryFromReader(message: HttpOptions, reader: jspb.BinaryReader): HttpOptions;
    }

    export namespace HttpOptions {
        export type AsObject = {
            port: number,
            path: string,
        }
    }


    export enum HealthCheckOptionsCase {
        HEALTH_CHECK_OPTIONS_NOT_SET = 0,
        TCP_OPTIONS = 5,
        HTTP_OPTIONS = 6,
    }

}

export class ManagedInstance extends jspb.Message { 
    getId(): string;
    setId(value: string): ManagedInstance;
    getStatus(): ManagedInstance.Status;
    setStatus(value: ManagedInstance.Status): ManagedInstance;
    getInstanceId(): string;
    setInstanceId(value: string): ManagedInstance;
    getFqdn(): string;
    setFqdn(value: string): ManagedInstance;
    getName(): string;
    setName(value: string): ManagedInstance;
    getStatusMessage(): string;
    setStatusMessage(value: string): ManagedInstance;
    getZoneId(): string;
    setZoneId(value: string): ManagedInstance;
    clearNetworkInterfacesList(): void;
    getNetworkInterfacesList(): Array<NetworkInterface>;
    setNetworkInterfacesList(value: Array<NetworkInterface>): ManagedInstance;
    addNetworkInterfaces(value?: NetworkInterface, index?: number): NetworkInterface;

    hasStatusChangedAt(): boolean;
    clearStatusChangedAt(): void;
    getStatusChangedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStatusChangedAt(value?: google_protobuf_timestamp_pb.Timestamp): ManagedInstance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManagedInstance.AsObject;
    static toObject(includeInstance: boolean, msg: ManagedInstance): ManagedInstance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManagedInstance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManagedInstance;
    static deserializeBinaryFromReader(message: ManagedInstance, reader: jspb.BinaryReader): ManagedInstance;
}

export namespace ManagedInstance {
    export type AsObject = {
        id: string,
        status: ManagedInstance.Status,
        instanceId: string,
        fqdn: string,
        name: string,
        statusMessage: string,
        zoneId: string,
        networkInterfacesList: Array<NetworkInterface.AsObject>,
        statusChangedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING_INSTANCE = 11,
    UPDATING_INSTANCE = 12,
    DELETING_INSTANCE = 13,
    STARTING_INSTANCE = 14,
    STOPPING_INSTANCE = 15,
    AWAITING_STARTUP_DURATION = 16,
    CHECKING_HEALTH = 17,
    OPENING_TRAFFIC = 18,
    AWAITING_WARMUP_DURATION = 19,
    CLOSING_TRAFFIC = 20,
    RUNNING_ACTUAL = 21,
    RUNNING_OUTDATED = 22,
    STOPPED = 23,
    DELETED = 24,
    }

}

export class NetworkInterface extends jspb.Message { 
    getIndex(): string;
    setIndex(value: string): NetworkInterface;
    getMacAddress(): string;
    setMacAddress(value: string): NetworkInterface;
    getSubnetId(): string;
    setSubnetId(value: string): NetworkInterface;

    hasPrimaryV4Address(): boolean;
    clearPrimaryV4Address(): void;
    getPrimaryV4Address(): PrimaryAddress | undefined;
    setPrimaryV4Address(value?: PrimaryAddress): NetworkInterface;

    hasPrimaryV6Address(): boolean;
    clearPrimaryV6Address(): void;
    getPrimaryV6Address(): PrimaryAddress | undefined;
    setPrimaryV6Address(value?: PrimaryAddress): NetworkInterface;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterface.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterface): NetworkInterface.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterface, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterface;
    static deserializeBinaryFromReader(message: NetworkInterface, reader: jspb.BinaryReader): NetworkInterface;
}

export namespace NetworkInterface {
    export type AsObject = {
        index: string,
        macAddress: string,
        subnetId: string,
        primaryV4Address?: PrimaryAddress.AsObject,
        primaryV6Address?: PrimaryAddress.AsObject,
    }
}

export class PrimaryAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): PrimaryAddress;

    hasOneToOneNat(): boolean;
    clearOneToOneNat(): void;
    getOneToOneNat(): OneToOneNat | undefined;
    setOneToOneNat(value?: OneToOneNat): PrimaryAddress;
    clearDnsRecordsList(): void;
    getDnsRecordsList(): Array<DnsRecord>;
    setDnsRecordsList(value: Array<DnsRecord>): PrimaryAddress;
    addDnsRecords(value?: DnsRecord, index?: number): DnsRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimaryAddress.AsObject;
    static toObject(includeInstance: boolean, msg: PrimaryAddress): PrimaryAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimaryAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimaryAddress;
    static deserializeBinaryFromReader(message: PrimaryAddress, reader: jspb.BinaryReader): PrimaryAddress;
}

export namespace PrimaryAddress {
    export type AsObject = {
        address: string,
        oneToOneNat?: OneToOneNat.AsObject,
        dnsRecordsList: Array<DnsRecord.AsObject>,
    }
}

export class OneToOneNat extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): OneToOneNat;
    getIpVersion(): IpVersion;
    setIpVersion(value: IpVersion): OneToOneNat;
    clearDnsRecordsList(): void;
    getDnsRecordsList(): Array<DnsRecord>;
    setDnsRecordsList(value: Array<DnsRecord>): OneToOneNat;
    addDnsRecords(value?: DnsRecord, index?: number): DnsRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneToOneNat.AsObject;
    static toObject(includeInstance: boolean, msg: OneToOneNat): OneToOneNat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneToOneNat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneToOneNat;
    static deserializeBinaryFromReader(message: OneToOneNat, reader: jspb.BinaryReader): OneToOneNat;
}

export namespace OneToOneNat {
    export type AsObject = {
        address: string,
        ipVersion: IpVersion,
        dnsRecordsList: Array<DnsRecord.AsObject>,
    }
}

export class DnsRecord extends jspb.Message { 
    getFqdn(): string;
    setFqdn(value: string): DnsRecord;
    getDnsZoneId(): string;
    setDnsZoneId(value: string): DnsRecord;
    getTtl(): number;
    setTtl(value: number): DnsRecord;
    getPtr(): boolean;
    setPtr(value: boolean): DnsRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DnsRecord.AsObject;
    static toObject(includeInstance: boolean, msg: DnsRecord): DnsRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DnsRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DnsRecord;
    static deserializeBinaryFromReader(message: DnsRecord, reader: jspb.BinaryReader): DnsRecord;
}

export namespace DnsRecord {
    export type AsObject = {
        fqdn: string,
        dnsZoneId: string,
        ttl: number,
        ptr: boolean,
    }
}

export class LogRecord extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LogRecord;
    getMessage(): string;
    setMessage(value: string): LogRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogRecord.AsObject;
    static toObject(includeInstance: boolean, msg: LogRecord): LogRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogRecord;
    static deserializeBinaryFromReader(message: LogRecord, reader: jspb.BinaryReader): LogRecord;
}

export namespace LogRecord {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        message: string,
    }
}

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
}
