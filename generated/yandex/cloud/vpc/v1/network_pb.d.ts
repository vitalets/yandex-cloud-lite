// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/network.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Network extends jspb.Message { 
    getId(): string;
    setId(value: string): Network;
    getFolderId(): string;
    setFolderId(value: string): Network;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Network;
    getName(): string;
    setName(value: string): Network;
    getDescription(): string;
    setDescription(value: string): Network;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDefaultSecurityGroupId(): string;
    setDefaultSecurityGroupId(value: string): Network;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Network.AsObject;
    static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Network;
    static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        defaultSecurityGroupId: string,
    }
}
