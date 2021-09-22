// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_ingestion_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as yandex_cloud_logging_v1_log_entry_pb from "../../../../yandex/cloud/logging/v1/log_entry_pb";
import * as yandex_cloud_logging_v1_log_resource_pb from "../../../../yandex/cloud/logging/v1/log_resource_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class WriteRequest extends jspb.Message { 

    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): yandex_cloud_logging_v1_log_entry_pb.Destination | undefined;
    setDestination(value?: yandex_cloud_logging_v1_log_entry_pb.Destination): WriteRequest;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): yandex_cloud_logging_v1_log_resource_pb.LogEntryResource | undefined;
    setResource(value?: yandex_cloud_logging_v1_log_resource_pb.LogEntryResource): WriteRequest;
    clearEntriesList(): void;
    getEntriesList(): Array<yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry>;
    setEntriesList(value: Array<yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry>): WriteRequest;
    addEntries(value?: yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry, index?: number): yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry;

    hasDefaults(): boolean;
    clearDefaults(): void;
    getDefaults(): yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults | undefined;
    setDefaults(value?: yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults): WriteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteRequest;
    static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
    export type AsObject = {
        destination?: yandex_cloud_logging_v1_log_entry_pb.Destination.AsObject,
        resource?: yandex_cloud_logging_v1_log_resource_pb.LogEntryResource.AsObject,
        entriesList: Array<yandex_cloud_logging_v1_log_entry_pb.IncomingLogEntry.AsObject>,
        defaults?: yandex_cloud_logging_v1_log_entry_pb.LogEntryDefaults.AsObject,
    }
}

export class WriteResponse extends jspb.Message { 

    getErrorsMap(): jspb.Map<number, google_rpc_status_pb.Status>;
    clearErrorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteResponse): WriteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteResponse;
    static deserializeBinaryFromReader(message: WriteResponse, reader: jspb.BinaryReader): WriteResponse;
}

export namespace WriteResponse {
    export type AsObject = {

        errorsMap: Array<[number, google_rpc_status_pb.Status.AsObject]>,
    }
}
