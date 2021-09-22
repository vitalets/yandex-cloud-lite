// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/version_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_k8s_v1_cluster_pb from "../../../../yandex/cloud/k8s/v1/cluster_pb";

export class ListVersionsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsRequest): ListVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsRequest;
    static deserializeBinaryFromReader(message: ListVersionsRequest, reader: jspb.BinaryReader): ListVersionsRequest;
}

export namespace ListVersionsRequest {
    export type AsObject = {
    }
}

export class ListVersionsResponse extends jspb.Message { 
    clearAvailableVersionsList(): void;
    getAvailableVersionsList(): Array<AvailableVersions>;
    setAvailableVersionsList(value: Array<AvailableVersions>): ListVersionsResponse;
    addAvailableVersions(value?: AvailableVersions, index?: number): AvailableVersions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsResponse): ListVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsResponse;
    static deserializeBinaryFromReader(message: ListVersionsResponse, reader: jspb.BinaryReader): ListVersionsResponse;
}

export namespace ListVersionsResponse {
    export type AsObject = {
        availableVersionsList: Array<AvailableVersions.AsObject>,
    }
}

export class AvailableVersions extends jspb.Message { 
    getReleaseChannel(): yandex_cloud_k8s_v1_cluster_pb.ReleaseChannel;
    setReleaseChannel(value: yandex_cloud_k8s_v1_cluster_pb.ReleaseChannel): AvailableVersions;
    clearVersionsList(): void;
    getVersionsList(): Array<string>;
    setVersionsList(value: Array<string>): AvailableVersions;
    addVersions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvailableVersions.AsObject;
    static toObject(includeInstance: boolean, msg: AvailableVersions): AvailableVersions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvailableVersions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvailableVersions;
    static deserializeBinaryFromReader(message: AvailableVersions, reader: jspb.BinaryReader): AvailableVersions;
}

export namespace AvailableVersions {
    export type AsObject = {
        releaseChannel: yandex_cloud_k8s_v1_cluster_pb.ReleaseChannel,
        versionsList: Array<string>,
    }
}
