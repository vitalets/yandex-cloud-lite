// package: yandex.cloud.dataproc.manager.v1
// file: yandex/cloud/dataproc/manager/v1/manager_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class HbaseNodeInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): HbaseNodeInfo;
    getRequests(): number;
    setRequests(value: number): HbaseNodeInfo;
    getHeapSizeMb(): number;
    setHeapSizeMb(value: number): HbaseNodeInfo;
    getMaxHeapSizeMb(): number;
    setMaxHeapSizeMb(value: number): HbaseNodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HbaseNodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HbaseNodeInfo): HbaseNodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HbaseNodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HbaseNodeInfo;
    static deserializeBinaryFromReader(message: HbaseNodeInfo, reader: jspb.BinaryReader): HbaseNodeInfo;
}

export namespace HbaseNodeInfo {
    export type AsObject = {
        name: string,
        requests: number,
        heapSizeMb: number,
        maxHeapSizeMb: number,
    }
}

export class HbaseInfo extends jspb.Message { 
    getAvailable(): boolean;
    setAvailable(value: boolean): HbaseInfo;
    getRegions(): number;
    setRegions(value: number): HbaseInfo;
    getRequests(): number;
    setRequests(value: number): HbaseInfo;
    getAverageLoad(): number;
    setAverageLoad(value: number): HbaseInfo;
    clearLiveNodesList(): void;
    getLiveNodesList(): Array<HbaseNodeInfo>;
    setLiveNodesList(value: Array<HbaseNodeInfo>): HbaseInfo;
    addLiveNodes(value?: HbaseNodeInfo, index?: number): HbaseNodeInfo;
    clearDeadNodesList(): void;
    getDeadNodesList(): Array<HbaseNodeInfo>;
    setDeadNodesList(value: Array<HbaseNodeInfo>): HbaseInfo;
    addDeadNodes(value?: HbaseNodeInfo, index?: number): HbaseNodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HbaseInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HbaseInfo): HbaseInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HbaseInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HbaseInfo;
    static deserializeBinaryFromReader(message: HbaseInfo, reader: jspb.BinaryReader): HbaseInfo;
}

export namespace HbaseInfo {
    export type AsObject = {
        available: boolean,
        regions: number,
        requests: number,
        averageLoad: number,
        liveNodesList: Array<HbaseNodeInfo.AsObject>,
        deadNodesList: Array<HbaseNodeInfo.AsObject>,
    }
}

export class HDFSNodeInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): HDFSNodeInfo;
    getUsed(): number;
    setUsed(value: number): HDFSNodeInfo;
    getRemaining(): number;
    setRemaining(value: number): HDFSNodeInfo;
    getCapacity(): number;
    setCapacity(value: number): HDFSNodeInfo;
    getNumBlocks(): number;
    setNumBlocks(value: number): HDFSNodeInfo;
    getState(): string;
    setState(value: string): HDFSNodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HDFSNodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HDFSNodeInfo): HDFSNodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HDFSNodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HDFSNodeInfo;
    static deserializeBinaryFromReader(message: HDFSNodeInfo, reader: jspb.BinaryReader): HDFSNodeInfo;
}

export namespace HDFSNodeInfo {
    export type AsObject = {
        name: string,
        used: number,
        remaining: number,
        capacity: number,
        numBlocks: number,
        state: string,
    }
}

export class HDFSInfo extends jspb.Message { 
    getAvailable(): boolean;
    setAvailable(value: boolean): HDFSInfo;
    getPercentRemaining(): number;
    setPercentRemaining(value: number): HDFSInfo;
    getUsed(): number;
    setUsed(value: number): HDFSInfo;
    getFree(): number;
    setFree(value: number): HDFSInfo;
    getTotalBlocks(): number;
    setTotalBlocks(value: number): HDFSInfo;
    getMissingBlocks(): number;
    setMissingBlocks(value: number): HDFSInfo;
    getMissingBlocksReplicaOne(): number;
    setMissingBlocksReplicaOne(value: number): HDFSInfo;
    clearLiveNodesList(): void;
    getLiveNodesList(): Array<HDFSNodeInfo>;
    setLiveNodesList(value: Array<HDFSNodeInfo>): HDFSInfo;
    addLiveNodes(value?: HDFSNodeInfo, index?: number): HDFSNodeInfo;
    clearDeadNodesList(): void;
    getDeadNodesList(): Array<HDFSNodeInfo>;
    setDeadNodesList(value: Array<HDFSNodeInfo>): HDFSInfo;
    addDeadNodes(value?: HDFSNodeInfo, index?: number): HDFSNodeInfo;
    getSafemode(): string;
    setSafemode(value: string): HDFSInfo;
    clearDecommissioningNodesList(): void;
    getDecommissioningNodesList(): Array<HDFSNodeInfo>;
    setDecommissioningNodesList(value: Array<HDFSNodeInfo>): HDFSInfo;
    addDecommissioningNodes(value?: HDFSNodeInfo, index?: number): HDFSNodeInfo;
    clearDecommissionedNodesList(): void;
    getDecommissionedNodesList(): Array<HDFSNodeInfo>;
    setDecommissionedNodesList(value: Array<HDFSNodeInfo>): HDFSInfo;
    addDecommissionedNodes(value?: HDFSNodeInfo, index?: number): HDFSNodeInfo;
    clearRequestedDecommissionHostsList(): void;
    getRequestedDecommissionHostsList(): Array<string>;
    setRequestedDecommissionHostsList(value: Array<string>): HDFSInfo;
    addRequestedDecommissionHosts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HDFSInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HDFSInfo): HDFSInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HDFSInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HDFSInfo;
    static deserializeBinaryFromReader(message: HDFSInfo, reader: jspb.BinaryReader): HDFSInfo;
}

export namespace HDFSInfo {
    export type AsObject = {
        available: boolean,
        percentRemaining: number,
        used: number,
        free: number,
        totalBlocks: number,
        missingBlocks: number,
        missingBlocksReplicaOne: number,
        liveNodesList: Array<HDFSNodeInfo.AsObject>,
        deadNodesList: Array<HDFSNodeInfo.AsObject>,
        safemode: string,
        decommissioningNodesList: Array<HDFSNodeInfo.AsObject>,
        decommissionedNodesList: Array<HDFSNodeInfo.AsObject>,
        requestedDecommissionHostsList: Array<string>,
    }
}

export class HiveInfo extends jspb.Message { 
    getAvailable(): boolean;
    setAvailable(value: boolean): HiveInfo;
    getQueriesSucceeded(): number;
    setQueriesSucceeded(value: number): HiveInfo;
    getQueriesFailed(): number;
    setQueriesFailed(value: number): HiveInfo;
    getQueriesExecuting(): number;
    setQueriesExecuting(value: number): HiveInfo;
    getSessionsOpen(): number;
    setSessionsOpen(value: number): HiveInfo;
    getSessionsActive(): number;
    setSessionsActive(value: number): HiveInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HiveInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HiveInfo): HiveInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HiveInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HiveInfo;
    static deserializeBinaryFromReader(message: HiveInfo, reader: jspb.BinaryReader): HiveInfo;
}

export namespace HiveInfo {
    export type AsObject = {
        available: boolean,
        queriesSucceeded: number,
        queriesFailed: number,
        queriesExecuting: number,
        sessionsOpen: number,
        sessionsActive: number,
    }
}

export class YarnNodeInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): YarnNodeInfo;
    getState(): string;
    setState(value: string): YarnNodeInfo;
    getNumContainers(): number;
    setNumContainers(value: number): YarnNodeInfo;
    getUsedMemoryMb(): number;
    setUsedMemoryMb(value: number): YarnNodeInfo;
    getAvailableMemoryMb(): number;
    setAvailableMemoryMb(value: number): YarnNodeInfo;
    getUpdateTime(): number;
    setUpdateTime(value: number): YarnNodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): YarnNodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: YarnNodeInfo): YarnNodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: YarnNodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): YarnNodeInfo;
    static deserializeBinaryFromReader(message: YarnNodeInfo, reader: jspb.BinaryReader): YarnNodeInfo;
}

export namespace YarnNodeInfo {
    export type AsObject = {
        name: string,
        state: string,
        numContainers: number,
        usedMemoryMb: number,
        availableMemoryMb: number,
        updateTime: number,
    }
}

export class YarnInfo extends jspb.Message { 
    getAvailable(): boolean;
    setAvailable(value: boolean): YarnInfo;
    clearLiveNodesList(): void;
    getLiveNodesList(): Array<YarnNodeInfo>;
    setLiveNodesList(value: Array<YarnNodeInfo>): YarnInfo;
    addLiveNodes(value?: YarnNodeInfo, index?: number): YarnNodeInfo;
    clearRequestedDecommissionHostsList(): void;
    getRequestedDecommissionHostsList(): Array<string>;
    setRequestedDecommissionHostsList(value: Array<string>): YarnInfo;
    addRequestedDecommissionHosts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): YarnInfo.AsObject;
    static toObject(includeInstance: boolean, msg: YarnInfo): YarnInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: YarnInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): YarnInfo;
    static deserializeBinaryFromReader(message: YarnInfo, reader: jspb.BinaryReader): YarnInfo;
}

export namespace YarnInfo {
    export type AsObject = {
        available: boolean,
        liveNodesList: Array<YarnNodeInfo.AsObject>,
        requestedDecommissionHostsList: Array<string>,
    }
}

export class ZookeeperInfo extends jspb.Message { 
    getAlive(): boolean;
    setAlive(value: boolean): ZookeeperInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZookeeperInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ZookeeperInfo): ZookeeperInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZookeeperInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZookeeperInfo;
    static deserializeBinaryFromReader(message: ZookeeperInfo, reader: jspb.BinaryReader): ZookeeperInfo;
}

export namespace ZookeeperInfo {
    export type AsObject = {
        alive: boolean,
    }
}

export class OozieInfo extends jspb.Message { 
    getAlive(): boolean;
    setAlive(value: boolean): OozieInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OozieInfo.AsObject;
    static toObject(includeInstance: boolean, msg: OozieInfo): OozieInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OozieInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OozieInfo;
    static deserializeBinaryFromReader(message: OozieInfo, reader: jspb.BinaryReader): OozieInfo;
}

export namespace OozieInfo {
    export type AsObject = {
        alive: boolean,
    }
}

export class LivyInfo extends jspb.Message { 
    getAlive(): boolean;
    setAlive(value: boolean): LivyInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LivyInfo.AsObject;
    static toObject(includeInstance: boolean, msg: LivyInfo): LivyInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LivyInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LivyInfo;
    static deserializeBinaryFromReader(message: LivyInfo, reader: jspb.BinaryReader): LivyInfo;
}

export namespace LivyInfo {
    export type AsObject = {
        alive: boolean,
    }
}

export class Info extends jspb.Message { 

    hasHdfs(): boolean;
    clearHdfs(): void;
    getHdfs(): HDFSInfo | undefined;
    setHdfs(value?: HDFSInfo): Info;

    hasYarn(): boolean;
    clearYarn(): void;
    getYarn(): YarnInfo | undefined;
    setYarn(value?: YarnInfo): Info;

    hasHive(): boolean;
    clearHive(): void;
    getHive(): HiveInfo | undefined;
    setHive(value?: HiveInfo): Info;

    hasZookeeper(): boolean;
    clearZookeeper(): void;
    getZookeeper(): ZookeeperInfo | undefined;
    setZookeeper(value?: ZookeeperInfo): Info;

    hasHbase(): boolean;
    clearHbase(): void;
    getHbase(): HbaseInfo | undefined;
    setHbase(value?: HbaseInfo): Info;

    hasOozie(): boolean;
    clearOozie(): void;
    getOozie(): OozieInfo | undefined;
    setOozie(value?: OozieInfo): Info;
    getReportCount(): number;
    setReportCount(value: number): Info;

    hasLivy(): boolean;
    clearLivy(): void;
    getLivy(): LivyInfo | undefined;
    setLivy(value?: LivyInfo): Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
}

export namespace Info {
    export type AsObject = {
        hdfs?: HDFSInfo.AsObject,
        yarn?: YarnInfo.AsObject,
        hive?: HiveInfo.AsObject,
        zookeeper?: ZookeeperInfo.AsObject,
        hbase?: HbaseInfo.AsObject,
        oozie?: OozieInfo.AsObject,
        reportCount: number,
        livy?: LivyInfo.AsObject,
    }
}

export class ReportRequest extends jspb.Message { 
    getCid(): string;
    setCid(value: string): ReportRequest;
    getTopologyRevision(): number;
    setTopologyRevision(value: number): ReportRequest;

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): Info | undefined;
    setInfo(value?: Info): ReportRequest;

    hasCollectedAt(): boolean;
    clearCollectedAt(): void;
    getCollectedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCollectedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReportRequest): ReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportRequest;
    static deserializeBinaryFromReader(message: ReportRequest, reader: jspb.BinaryReader): ReportRequest;
}

export namespace ReportRequest {
    export type AsObject = {
        cid: string,
        topologyRevision: number,
        info?: Info.AsObject,
        collectedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReportReply extends jspb.Message { 
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): ReportReply;
    clearYarnHostsToDecommissionList(): void;
    getYarnHostsToDecommissionList(): Array<string>;
    setYarnHostsToDecommissionList(value: Array<string>): ReportReply;
    addYarnHostsToDecommission(value: string, index?: number): string;
    clearHdfsHostsToDecommissionList(): void;
    getHdfsHostsToDecommissionList(): Array<string>;
    setHdfsHostsToDecommissionList(value: Array<string>): ReportReply;
    addHdfsHostsToDecommission(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportReply.AsObject;
    static toObject(includeInstance: boolean, msg: ReportReply): ReportReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportReply;
    static deserializeBinaryFromReader(message: ReportReply, reader: jspb.BinaryReader): ReportReply;
}

export namespace ReportReply {
    export type AsObject = {
        decommissionTimeout: number,
        yarnHostsToDecommissionList: Array<string>,
        hdfsHostsToDecommissionList: Array<string>,
    }
}
