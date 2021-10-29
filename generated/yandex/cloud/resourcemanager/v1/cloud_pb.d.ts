// package: yandex.cloud.resourcemanager.v1
// file: yandex/cloud/resourcemanager/v1/cloud.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Cloud extends jspb.Message { 
    getId(): string;
    setId(value: string): Cloud;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cloud;
    getName(): string;
    setName(value: string): Cloud;
    getDescription(): string;
    setDescription(value: string): Cloud;
    getOrganizationId(): string;
    setOrganizationId(value: string): Cloud;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cloud.AsObject;
    static toObject(includeInstance: boolean, msg: Cloud): Cloud.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cloud, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cloud;
    static deserializeBinaryFromReader(message: Cloud, reader: jspb.BinaryReader): Cloud;
}

export namespace Cloud {
    export type AsObject = {
        id: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,
        organizationId: string,

        labelsMap: Array<[string, string]>,
    }
}
