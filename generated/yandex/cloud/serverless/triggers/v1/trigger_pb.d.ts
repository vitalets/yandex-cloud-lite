// package: yandex.cloud.serverless.triggers.v1
// file: yandex/cloud/serverless/triggers/v1/trigger.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_logging_v1_log_entry_pb from "../../../../../yandex/cloud/logging/v1/log_entry_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Trigger extends jspb.Message { 
    getId(): string;
    setId(value: string): Trigger;
    getFolderId(): string;
    setFolderId(value: string): Trigger;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Trigger;
    getName(): string;
    setName(value: string): Trigger;
    getDescription(): string;
    setDescription(value: string): Trigger;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasRule(): boolean;
    clearRule(): void;
    getRule(): Trigger.Rule | undefined;
    setRule(value?: Trigger.Rule): Trigger;
    getStatus(): Trigger.Status;
    setStatus(value: Trigger.Status): Trigger;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trigger.AsObject;
    static toObject(includeInstance: boolean, msg: Trigger): Trigger.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trigger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trigger;
    static deserializeBinaryFromReader(message: Trigger, reader: jspb.BinaryReader): Trigger;
}

export namespace Trigger {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        rule?: Trigger.Rule.AsObject,
        status: Trigger.Status,
    }


    export class Rule extends jspb.Message { 

        hasTimer(): boolean;
        clearTimer(): void;
        getTimer(): Trigger.Timer | undefined;
        setTimer(value?: Trigger.Timer): Rule;

        hasMessageQueue(): boolean;
        clearMessageQueue(): void;
        getMessageQueue(): Trigger.MessageQueue | undefined;
        setMessageQueue(value?: Trigger.MessageQueue): Rule;

        hasIotMessage(): boolean;
        clearIotMessage(): void;
        getIotMessage(): Trigger.IoTMessage | undefined;
        setIotMessage(value?: Trigger.IoTMessage): Rule;

        hasObjectStorage(): boolean;
        clearObjectStorage(): void;
        getObjectStorage(): Trigger.ObjectStorage | undefined;
        setObjectStorage(value?: Trigger.ObjectStorage): Rule;

        hasContainerRegistry(): boolean;
        clearContainerRegistry(): void;
        getContainerRegistry(): Trigger.ContainerRegistry | undefined;
        setContainerRegistry(value?: Trigger.ContainerRegistry): Rule;

        hasCloudLogs(): boolean;
        clearCloudLogs(): void;
        getCloudLogs(): Trigger.CloudLogs | undefined;
        setCloudLogs(value?: Trigger.CloudLogs): Rule;

        hasLogging(): boolean;
        clearLogging(): void;
        getLogging(): Trigger.Logging | undefined;
        setLogging(value?: Trigger.Logging): Rule;

        hasBillingBudget(): boolean;
        clearBillingBudget(): void;
        getBillingBudget(): BillingBudget | undefined;
        setBillingBudget(value?: BillingBudget): Rule;

        hasDataStream(): boolean;
        clearDataStream(): void;
        getDataStream(): DataStream | undefined;
        setDataStream(value?: DataStream): Rule;

        getRuleCase(): Rule.RuleCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rule.AsObject;
        static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rule;
        static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
    }

    export namespace Rule {
        export type AsObject = {
            timer?: Trigger.Timer.AsObject,
            messageQueue?: Trigger.MessageQueue.AsObject,
            iotMessage?: Trigger.IoTMessage.AsObject,
            objectStorage?: Trigger.ObjectStorage.AsObject,
            containerRegistry?: Trigger.ContainerRegistry.AsObject,
            cloudLogs?: Trigger.CloudLogs.AsObject,
            logging?: Trigger.Logging.AsObject,
            billingBudget?: BillingBudget.AsObject,
            dataStream?: DataStream.AsObject,
        }

        export enum RuleCase {
            RULE_NOT_SET = 0,
            TIMER = 2,
            MESSAGE_QUEUE = 3,
            IOT_MESSAGE = 4,
            OBJECT_STORAGE = 5,
            CONTAINER_REGISTRY = 6,
            CLOUD_LOGS = 9,
            LOGGING = 10,
            BILLING_BUDGET = 11,
            DATA_STREAM = 12,
        }

    }

    export class Timer extends jspb.Message { 
        getCronExpression(): string;
        setCronExpression(value: string): Timer;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionOnce | undefined;
        setInvokeFunction(value?: InvokeFunctionOnce): Timer;

        hasInvokeFunctionWithRetry(): boolean;
        clearInvokeFunctionWithRetry(): void;
        getInvokeFunctionWithRetry(): InvokeFunctionWithRetry | undefined;
        setInvokeFunctionWithRetry(value?: InvokeFunctionWithRetry): Timer;

        hasInvokeContainerWithRetry(): boolean;
        clearInvokeContainerWithRetry(): void;
        getInvokeContainerWithRetry(): InvokeContainerWithRetry | undefined;
        setInvokeContainerWithRetry(value?: InvokeContainerWithRetry): Timer;

        getActionCase(): Timer.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Timer.AsObject;
        static toObject(includeInstance: boolean, msg: Timer): Timer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Timer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Timer;
        static deserializeBinaryFromReader(message: Timer, reader: jspb.BinaryReader): Timer;
    }

    export namespace Timer {
        export type AsObject = {
            cronExpression: string,
            invokeFunction?: InvokeFunctionOnce.AsObject,
            invokeFunctionWithRetry?: InvokeFunctionWithRetry.AsObject,
            invokeContainerWithRetry?: InvokeContainerWithRetry.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_FUNCTION_WITH_RETRY = 103,
            INVOKE_CONTAINER_WITH_RETRY = 104,
        }

    }

    export class MessageQueue extends jspb.Message { 
        getQueueId(): string;
        setQueueId(value: string): MessageQueue;
        getServiceAccountId(): string;
        setServiceAccountId(value: string): MessageQueue;

        hasBatchSettings(): boolean;
        clearBatchSettings(): void;
        getBatchSettings(): BatchSettings | undefined;
        setBatchSettings(value?: BatchSettings): MessageQueue;

        hasVisibilityTimeout(): boolean;
        clearVisibilityTimeout(): void;
        getVisibilityTimeout(): google_protobuf_duration_pb.Duration | undefined;
        setVisibilityTimeout(value?: google_protobuf_duration_pb.Duration): MessageQueue;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionOnce | undefined;
        setInvokeFunction(value?: InvokeFunctionOnce): MessageQueue;

        hasInvokeContainer(): boolean;
        clearInvokeContainer(): void;
        getInvokeContainer(): InvokeContainerOnce | undefined;
        setInvokeContainer(value?: InvokeContainerOnce): MessageQueue;

        getActionCase(): MessageQueue.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MessageQueue.AsObject;
        static toObject(includeInstance: boolean, msg: MessageQueue): MessageQueue.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MessageQueue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MessageQueue;
        static deserializeBinaryFromReader(message: MessageQueue, reader: jspb.BinaryReader): MessageQueue;
    }

    export namespace MessageQueue {
        export type AsObject = {
            queueId: string,
            serviceAccountId: string,
            batchSettings?: BatchSettings.AsObject,
            visibilityTimeout?: google_protobuf_duration_pb.Duration.AsObject,
            invokeFunction?: InvokeFunctionOnce.AsObject,
            invokeContainer?: InvokeContainerOnce.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_CONTAINER = 102,
        }

    }

    export class IoTMessage extends jspb.Message { 
        getRegistryId(): string;
        setRegistryId(value: string): IoTMessage;
        getDeviceId(): string;
        setDeviceId(value: string): IoTMessage;
        getMqttTopic(): string;
        setMqttTopic(value: string): IoTMessage;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionWithRetry | undefined;
        setInvokeFunction(value?: InvokeFunctionWithRetry): IoTMessage;

        hasInvokeContainer(): boolean;
        clearInvokeContainer(): void;
        getInvokeContainer(): InvokeContainerWithRetry | undefined;
        setInvokeContainer(value?: InvokeContainerWithRetry): IoTMessage;

        getActionCase(): IoTMessage.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): IoTMessage.AsObject;
        static toObject(includeInstance: boolean, msg: IoTMessage): IoTMessage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: IoTMessage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): IoTMessage;
        static deserializeBinaryFromReader(message: IoTMessage, reader: jspb.BinaryReader): IoTMessage;
    }

    export namespace IoTMessage {
        export type AsObject = {
            registryId: string,
            deviceId: string,
            mqttTopic: string,
            invokeFunction?: InvokeFunctionWithRetry.AsObject,
            invokeContainer?: InvokeContainerWithRetry.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_CONTAINER = 102,
        }

    }

    export class ObjectStorage extends jspb.Message { 
        clearEventTypeList(): void;
        getEventTypeList(): Array<Trigger.ObjectStorageEventType>;
        setEventTypeList(value: Array<Trigger.ObjectStorageEventType>): ObjectStorage;
        addEventType(value: Trigger.ObjectStorageEventType, index?: number): Trigger.ObjectStorageEventType;
        getBucketId(): string;
        setBucketId(value: string): ObjectStorage;
        getPrefix(): string;
        setPrefix(value: string): ObjectStorage;
        getSuffix(): string;
        setSuffix(value: string): ObjectStorage;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionWithRetry | undefined;
        setInvokeFunction(value?: InvokeFunctionWithRetry): ObjectStorage;

        hasInvokeContainer(): boolean;
        clearInvokeContainer(): void;
        getInvokeContainer(): InvokeContainerWithRetry | undefined;
        setInvokeContainer(value?: InvokeContainerWithRetry): ObjectStorage;

        getActionCase(): ObjectStorage.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ObjectStorage.AsObject;
        static toObject(includeInstance: boolean, msg: ObjectStorage): ObjectStorage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ObjectStorage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ObjectStorage;
        static deserializeBinaryFromReader(message: ObjectStorage, reader: jspb.BinaryReader): ObjectStorage;
    }

    export namespace ObjectStorage {
        export type AsObject = {
            eventTypeList: Array<Trigger.ObjectStorageEventType>,
            bucketId: string,
            prefix: string,
            suffix: string,
            invokeFunction?: InvokeFunctionWithRetry.AsObject,
            invokeContainer?: InvokeContainerWithRetry.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_CONTAINER = 102,
        }

    }

    export class ContainerRegistry extends jspb.Message { 
        clearEventTypeList(): void;
        getEventTypeList(): Array<Trigger.ContainerRegistryEventType>;
        setEventTypeList(value: Array<Trigger.ContainerRegistryEventType>): ContainerRegistry;
        addEventType(value: Trigger.ContainerRegistryEventType, index?: number): Trigger.ContainerRegistryEventType;
        getRegistryId(): string;
        setRegistryId(value: string): ContainerRegistry;
        getImageName(): string;
        setImageName(value: string): ContainerRegistry;
        getTag(): string;
        setTag(value: string): ContainerRegistry;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionWithRetry | undefined;
        setInvokeFunction(value?: InvokeFunctionWithRetry): ContainerRegistry;

        hasInvokeContainer(): boolean;
        clearInvokeContainer(): void;
        getInvokeContainer(): InvokeContainerWithRetry | undefined;
        setInvokeContainer(value?: InvokeContainerWithRetry): ContainerRegistry;

        getActionCase(): ContainerRegistry.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContainerRegistry.AsObject;
        static toObject(includeInstance: boolean, msg: ContainerRegistry): ContainerRegistry.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContainerRegistry, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContainerRegistry;
        static deserializeBinaryFromReader(message: ContainerRegistry, reader: jspb.BinaryReader): ContainerRegistry;
    }

    export namespace ContainerRegistry {
        export type AsObject = {
            eventTypeList: Array<Trigger.ContainerRegistryEventType>,
            registryId: string,
            imageName: string,
            tag: string,
            invokeFunction?: InvokeFunctionWithRetry.AsObject,
            invokeContainer?: InvokeContainerWithRetry.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_CONTAINER = 102,
        }

    }

    export class CloudLogs extends jspb.Message { 
        clearLogGroupIdList(): void;
        getLogGroupIdList(): Array<string>;
        setLogGroupIdList(value: Array<string>): CloudLogs;
        addLogGroupId(value: string, index?: number): string;

        hasBatchSettings(): boolean;
        clearBatchSettings(): void;
        getBatchSettings(): CloudLogsBatchSettings | undefined;
        setBatchSettings(value?: CloudLogsBatchSettings): CloudLogs;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionWithRetry | undefined;
        setInvokeFunction(value?: InvokeFunctionWithRetry): CloudLogs;

        hasInvokeContainer(): boolean;
        clearInvokeContainer(): void;
        getInvokeContainer(): InvokeContainerWithRetry | undefined;
        setInvokeContainer(value?: InvokeContainerWithRetry): CloudLogs;

        getActionCase(): CloudLogs.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CloudLogs.AsObject;
        static toObject(includeInstance: boolean, msg: CloudLogs): CloudLogs.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CloudLogs, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CloudLogs;
        static deserializeBinaryFromReader(message: CloudLogs, reader: jspb.BinaryReader): CloudLogs;
    }

    export namespace CloudLogs {
        export type AsObject = {
            logGroupIdList: Array<string>,
            batchSettings?: CloudLogsBatchSettings.AsObject,
            invokeFunction?: InvokeFunctionWithRetry.AsObject,
            invokeContainer?: InvokeContainerWithRetry.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_CONTAINER = 102,
        }

    }

    export class Logging extends jspb.Message { 
        getLogGroupId(): string;
        setLogGroupId(value: string): Logging;
        clearResourceTypeList(): void;
        getResourceTypeList(): Array<string>;
        setResourceTypeList(value: Array<string>): Logging;
        addResourceType(value: string, index?: number): string;
        clearResourceIdList(): void;
        getResourceIdList(): Array<string>;
        setResourceIdList(value: Array<string>): Logging;
        addResourceId(value: string, index?: number): string;
        clearLevelsList(): void;
        getLevelsList(): Array<yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level>;
        setLevelsList(value: Array<yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level>): Logging;
        addLevels(value: yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level, index?: number): yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level;

        hasBatchSettings(): boolean;
        clearBatchSettings(): void;
        getBatchSettings(): LoggingBatchSettings | undefined;
        setBatchSettings(value?: LoggingBatchSettings): Logging;

        hasInvokeFunction(): boolean;
        clearInvokeFunction(): void;
        getInvokeFunction(): InvokeFunctionWithRetry | undefined;
        setInvokeFunction(value?: InvokeFunctionWithRetry): Logging;

        hasInvokeContainer(): boolean;
        clearInvokeContainer(): void;
        getInvokeContainer(): InvokeContainerWithRetry | undefined;
        setInvokeContainer(value?: InvokeContainerWithRetry): Logging;

        getActionCase(): Logging.ActionCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Logging.AsObject;
        static toObject(includeInstance: boolean, msg: Logging): Logging.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Logging, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Logging;
        static deserializeBinaryFromReader(message: Logging, reader: jspb.BinaryReader): Logging;
    }

    export namespace Logging {
        export type AsObject = {
            logGroupId: string,
            resourceTypeList: Array<string>,
            resourceIdList: Array<string>,
            levelsList: Array<yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level>,
            batchSettings?: LoggingBatchSettings.AsObject,
            invokeFunction?: InvokeFunctionWithRetry.AsObject,
            invokeContainer?: InvokeContainerWithRetry.AsObject,
        }

        export enum ActionCase {
            ACTION_NOT_SET = 0,
            INVOKE_FUNCTION = 101,
            INVOKE_CONTAINER = 103,
        }

    }


    export enum ObjectStorageEventType {
    OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,
    OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,
    OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,
    OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
    }

    export enum ContainerRegistryEventType {
    CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    PAUSED = 2,
    }

}

export class InvokeFunctionOnce extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): InvokeFunctionOnce;
    getFunctionTag(): string;
    setFunctionTag(value: string): InvokeFunctionOnce;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): InvokeFunctionOnce;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeFunctionOnce.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeFunctionOnce): InvokeFunctionOnce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvokeFunctionOnce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeFunctionOnce;
    static deserializeBinaryFromReader(message: InvokeFunctionOnce, reader: jspb.BinaryReader): InvokeFunctionOnce;
}

export namespace InvokeFunctionOnce {
    export type AsObject = {
        functionId: string,
        functionTag: string,
        serviceAccountId: string,
    }
}

export class InvokeFunctionWithRetry extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): InvokeFunctionWithRetry;
    getFunctionTag(): string;
    setFunctionTag(value: string): InvokeFunctionWithRetry;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): InvokeFunctionWithRetry;

    hasRetrySettings(): boolean;
    clearRetrySettings(): void;
    getRetrySettings(): RetrySettings | undefined;
    setRetrySettings(value?: RetrySettings): InvokeFunctionWithRetry;

    hasDeadLetterQueue(): boolean;
    clearDeadLetterQueue(): void;
    getDeadLetterQueue(): PutQueueMessage | undefined;
    setDeadLetterQueue(value?: PutQueueMessage): InvokeFunctionWithRetry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeFunctionWithRetry.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeFunctionWithRetry): InvokeFunctionWithRetry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvokeFunctionWithRetry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeFunctionWithRetry;
    static deserializeBinaryFromReader(message: InvokeFunctionWithRetry, reader: jspb.BinaryReader): InvokeFunctionWithRetry;
}

export namespace InvokeFunctionWithRetry {
    export type AsObject = {
        functionId: string,
        functionTag: string,
        serviceAccountId: string,
        retrySettings?: RetrySettings.AsObject,
        deadLetterQueue?: PutQueueMessage.AsObject,
    }
}

export class InvokeContainerOnce extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): InvokeContainerOnce;
    getPath(): string;
    setPath(value: string): InvokeContainerOnce;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): InvokeContainerOnce;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeContainerOnce.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeContainerOnce): InvokeContainerOnce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvokeContainerOnce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeContainerOnce;
    static deserializeBinaryFromReader(message: InvokeContainerOnce, reader: jspb.BinaryReader): InvokeContainerOnce;
}

export namespace InvokeContainerOnce {
    export type AsObject = {
        containerId: string,
        path: string,
        serviceAccountId: string,
    }
}

export class InvokeContainerWithRetry extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): InvokeContainerWithRetry;
    getPath(): string;
    setPath(value: string): InvokeContainerWithRetry;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): InvokeContainerWithRetry;

    hasRetrySettings(): boolean;
    clearRetrySettings(): void;
    getRetrySettings(): RetrySettings | undefined;
    setRetrySettings(value?: RetrySettings): InvokeContainerWithRetry;

    hasDeadLetterQueue(): boolean;
    clearDeadLetterQueue(): void;
    getDeadLetterQueue(): PutQueueMessage | undefined;
    setDeadLetterQueue(value?: PutQueueMessage): InvokeContainerWithRetry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvokeContainerWithRetry.AsObject;
    static toObject(includeInstance: boolean, msg: InvokeContainerWithRetry): InvokeContainerWithRetry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvokeContainerWithRetry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvokeContainerWithRetry;
    static deserializeBinaryFromReader(message: InvokeContainerWithRetry, reader: jspb.BinaryReader): InvokeContainerWithRetry;
}

export namespace InvokeContainerWithRetry {
    export type AsObject = {
        containerId: string,
        path: string,
        serviceAccountId: string,
        retrySettings?: RetrySettings.AsObject,
        deadLetterQueue?: PutQueueMessage.AsObject,
    }
}

export class PutQueueMessage extends jspb.Message { 
    getQueueId(): string;
    setQueueId(value: string): PutQueueMessage;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): PutQueueMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutQueueMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PutQueueMessage): PutQueueMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutQueueMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutQueueMessage;
    static deserializeBinaryFromReader(message: PutQueueMessage, reader: jspb.BinaryReader): PutQueueMessage;
}

export namespace PutQueueMessage {
    export type AsObject = {
        queueId: string,
        serviceAccountId: string,
    }
}

export class BatchSettings extends jspb.Message { 
    getSize(): number;
    setSize(value: number): BatchSettings;

    hasCutoff(): boolean;
    clearCutoff(): void;
    getCutoff(): google_protobuf_duration_pb.Duration | undefined;
    setCutoff(value?: google_protobuf_duration_pb.Duration): BatchSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchSettings.AsObject;
    static toObject(includeInstance: boolean, msg: BatchSettings): BatchSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchSettings;
    static deserializeBinaryFromReader(message: BatchSettings, reader: jspb.BinaryReader): BatchSettings;
}

export namespace BatchSettings {
    export type AsObject = {
        size: number,
        cutoff?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class CloudLogsBatchSettings extends jspb.Message { 
    getSize(): number;
    setSize(value: number): CloudLogsBatchSettings;

    hasCutoff(): boolean;
    clearCutoff(): void;
    getCutoff(): google_protobuf_duration_pb.Duration | undefined;
    setCutoff(value?: google_protobuf_duration_pb.Duration): CloudLogsBatchSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudLogsBatchSettings.AsObject;
    static toObject(includeInstance: boolean, msg: CloudLogsBatchSettings): CloudLogsBatchSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudLogsBatchSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudLogsBatchSettings;
    static deserializeBinaryFromReader(message: CloudLogsBatchSettings, reader: jspb.BinaryReader): CloudLogsBatchSettings;
}

export namespace CloudLogsBatchSettings {
    export type AsObject = {
        size: number,
        cutoff?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class LoggingBatchSettings extends jspb.Message { 
    getSize(): number;
    setSize(value: number): LoggingBatchSettings;

    hasCutoff(): boolean;
    clearCutoff(): void;
    getCutoff(): google_protobuf_duration_pb.Duration | undefined;
    setCutoff(value?: google_protobuf_duration_pb.Duration): LoggingBatchSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoggingBatchSettings.AsObject;
    static toObject(includeInstance: boolean, msg: LoggingBatchSettings): LoggingBatchSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoggingBatchSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoggingBatchSettings;
    static deserializeBinaryFromReader(message: LoggingBatchSettings, reader: jspb.BinaryReader): LoggingBatchSettings;
}

export namespace LoggingBatchSettings {
    export type AsObject = {
        size: number,
        cutoff?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class RetrySettings extends jspb.Message { 
    getRetryAttempts(): number;
    setRetryAttempts(value: number): RetrySettings;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): google_protobuf_duration_pb.Duration | undefined;
    setInterval(value?: google_protobuf_duration_pb.Duration): RetrySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RetrySettings.AsObject;
    static toObject(includeInstance: boolean, msg: RetrySettings): RetrySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RetrySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RetrySettings;
    static deserializeBinaryFromReader(message: RetrySettings, reader: jspb.BinaryReader): RetrySettings;
}

export namespace RetrySettings {
    export type AsObject = {
        retryAttempts: number,
        interval?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class BillingBudget extends jspb.Message { 
    getBillingAccountId(): string;
    setBillingAccountId(value: string): BillingBudget;
    getBudgetId(): string;
    setBudgetId(value: string): BillingBudget;

    hasInvokeFunction(): boolean;
    clearInvokeFunction(): void;
    getInvokeFunction(): InvokeFunctionWithRetry | undefined;
    setInvokeFunction(value?: InvokeFunctionWithRetry): BillingBudget;

    hasInvokeContainer(): boolean;
    clearInvokeContainer(): void;
    getInvokeContainer(): InvokeContainerWithRetry | undefined;
    setInvokeContainer(value?: InvokeContainerWithRetry): BillingBudget;

    getActionCase(): BillingBudget.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BillingBudget.AsObject;
    static toObject(includeInstance: boolean, msg: BillingBudget): BillingBudget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BillingBudget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BillingBudget;
    static deserializeBinaryFromReader(message: BillingBudget, reader: jspb.BinaryReader): BillingBudget;
}

export namespace BillingBudget {
    export type AsObject = {
        billingAccountId: string,
        budgetId: string,
        invokeFunction?: InvokeFunctionWithRetry.AsObject,
        invokeContainer?: InvokeContainerWithRetry.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        INVOKE_FUNCTION = 101,
        INVOKE_CONTAINER = 103,
    }

}

export class DataStreamBatchSettings extends jspb.Message { 
    getSize(): number;
    setSize(value: number): DataStreamBatchSettings;

    hasCutoff(): boolean;
    clearCutoff(): void;
    getCutoff(): google_protobuf_duration_pb.Duration | undefined;
    setCutoff(value?: google_protobuf_duration_pb.Duration): DataStreamBatchSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataStreamBatchSettings.AsObject;
    static toObject(includeInstance: boolean, msg: DataStreamBatchSettings): DataStreamBatchSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataStreamBatchSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataStreamBatchSettings;
    static deserializeBinaryFromReader(message: DataStreamBatchSettings, reader: jspb.BinaryReader): DataStreamBatchSettings;
}

export namespace DataStreamBatchSettings {
    export type AsObject = {
        size: number,
        cutoff?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class DataStream extends jspb.Message { 
    getEndpoint(): string;
    setEndpoint(value: string): DataStream;
    getDatabase(): string;
    setDatabase(value: string): DataStream;
    getStream(): string;
    setStream(value: string): DataStream;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): DataStream;

    hasBatchSettings(): boolean;
    clearBatchSettings(): void;
    getBatchSettings(): DataStreamBatchSettings | undefined;
    setBatchSettings(value?: DataStreamBatchSettings): DataStream;

    hasInvokeFunction(): boolean;
    clearInvokeFunction(): void;
    getInvokeFunction(): InvokeFunctionWithRetry | undefined;
    setInvokeFunction(value?: InvokeFunctionWithRetry): DataStream;

    hasInvokeContainer(): boolean;
    clearInvokeContainer(): void;
    getInvokeContainer(): InvokeContainerWithRetry | undefined;
    setInvokeContainer(value?: InvokeContainerWithRetry): DataStream;

    getActionCase(): DataStream.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataStream.AsObject;
    static toObject(includeInstance: boolean, msg: DataStream): DataStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataStream;
    static deserializeBinaryFromReader(message: DataStream, reader: jspb.BinaryReader): DataStream;
}

export namespace DataStream {
    export type AsObject = {
        endpoint: string,
        database: string,
        stream: string,
        serviceAccountId: string,
        batchSettings?: DataStreamBatchSettings.AsObject,
        invokeFunction?: InvokeFunctionWithRetry.AsObject,
        invokeContainer?: InvokeContainerWithRetry.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        INVOKE_FUNCTION = 13,
        INVOKE_CONTAINER = 15,
    }

}

export enum TriggerType {
    TRIGGER_TYPE_UNSPECIFIED = 0,
    TIMER = 2,
    MESSAGE_QUEUE = 3,
    IOT_MESSAGE = 4,
    OBJECT_STORAGE = 5,
    CONTAINER_REGISTRY = 6,
    CLOUD_LOGS = 7,
    LOGGING = 8,
    BILLING_BUDGET = 9,
    YDS = 10,
}
