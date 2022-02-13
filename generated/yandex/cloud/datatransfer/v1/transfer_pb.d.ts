// package: yandex.cloud.datatransfer.v1
// file: yandex/cloud/datatransfer/v1/transfer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_datatransfer_v1_endpoint_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint_pb";

export class Transfer extends jspb.Message { 
    getId(): string;
    setId(value: string): Transfer;
    getFolderId(): string;
    setFolderId(value: string): Transfer;
    getName(): string;
    setName(value: string): Transfer;
    getDescription(): string;
    setDescription(value: string): Transfer;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint | undefined;
    setSource(value?: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint): Transfer;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint | undefined;
    setTarget(value?: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint): Transfer;
    getStatus(): TransferStatus;
    setStatus(value: TransferStatus): Transfer;
    getType(): TransferType;
    setType(value: TransferType): Transfer;
    getWarning(): string;
    setWarning(value: string): Transfer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transfer.AsObject;
    static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transfer;
    static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
    export type AsObject = {
        id: string,
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        source?: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.AsObject,
        target?: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.AsObject,
        status: TransferStatus,
        type: TransferType,
        warning: string,
    }
}

export enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    SNAPSHOT_AND_INCREMENT = 1,
    SNAPSHOT_ONLY = 2,
    INCREMENT_ONLY = 3,
}

export enum TransferStatus {
    TRANSFER_STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    CREATED = 2,
    RUNNING = 3,
    STOPPING = 4,
    STOPPED = 5,
    ERROR = 6,
    SNAPSHOTTING = 7,
    DONE = 8,
}
