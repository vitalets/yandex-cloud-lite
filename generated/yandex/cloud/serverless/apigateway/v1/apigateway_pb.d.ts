// package: yandex.cloud.serverless.apigateway.v1
// file: yandex/cloud/serverless/apigateway/v1/apigateway.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ApiGateway extends jspb.Message { 
    getId(): string;
    setId(value: string): ApiGateway;
    getFolderId(): string;
    setFolderId(value: string): ApiGateway;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ApiGateway;
    getName(): string;
    setName(value: string): ApiGateway;
    getDescription(): string;
    setDescription(value: string): ApiGateway;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): ApiGateway.Status;
    setStatus(value: ApiGateway.Status): ApiGateway;
    getDomain(): string;
    setDomain(value: string): ApiGateway;
    getLogGroupId(): string;
    setLogGroupId(value: string): ApiGateway;
    clearAttachedDomainsList(): void;
    getAttachedDomainsList(): Array<AttachedDomain>;
    setAttachedDomainsList(value: Array<AttachedDomain>): ApiGateway;
    addAttachedDomains(value?: AttachedDomain, index?: number): AttachedDomain;

    hasConnectivity(): boolean;
    clearConnectivity(): void;
    getConnectivity(): Connectivity | undefined;
    setConnectivity(value?: Connectivity): ApiGateway;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiGateway.AsObject;
    static toObject(includeInstance: boolean, msg: ApiGateway): ApiGateway.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiGateway, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiGateway;
    static deserializeBinaryFromReader(message: ApiGateway, reader: jspb.BinaryReader): ApiGateway;
}

export namespace ApiGateway {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: ApiGateway.Status,
        domain: string,
        logGroupId: string,
        attachedDomainsList: Array<AttachedDomain.AsObject>,
        connectivity?: Connectivity.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    UPDATING = 5,
    }

}

export class AttachedDomain extends jspb.Message { 
    getDomainId(): string;
    setDomainId(value: string): AttachedDomain;
    getCertificateId(): string;
    setCertificateId(value: string): AttachedDomain;
    getEnabled(): boolean;
    setEnabled(value: boolean): AttachedDomain;
    getDomain(): string;
    setDomain(value: string): AttachedDomain;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedDomain.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedDomain): AttachedDomain.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedDomain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedDomain;
    static deserializeBinaryFromReader(message: AttachedDomain, reader: jspb.BinaryReader): AttachedDomain;
}

export namespace AttachedDomain {
    export type AsObject = {
        domainId: string,
        certificateId: string,
        enabled: boolean,
        domain: string,
    }
}

export class Connectivity extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): Connectivity;
    clearSubnetIdList(): void;
    getSubnetIdList(): Array<string>;
    setSubnetIdList(value: Array<string>): Connectivity;
    addSubnetId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Connectivity.AsObject;
    static toObject(includeInstance: boolean, msg: Connectivity): Connectivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Connectivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Connectivity;
    static deserializeBinaryFromReader(message: Connectivity, reader: jspb.BinaryReader): Connectivity;
}

export namespace Connectivity {
    export type AsObject = {
        networkId: string,
        subnetIdList: Array<string>,
    }
}
