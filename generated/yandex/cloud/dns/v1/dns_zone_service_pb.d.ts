// package: yandex.cloud.dns.v1
// file: yandex/cloud/dns/v1/dns_zone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_dns_v1_dns_zone_pb from "../../../../yandex/cloud/dns/v1/dns_zone_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetDnsZoneRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): GetDnsZoneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDnsZoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDnsZoneRequest): GetDnsZoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDnsZoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDnsZoneRequest;
    static deserializeBinaryFromReader(message: GetDnsZoneRequest, reader: jspb.BinaryReader): GetDnsZoneRequest;
}

export namespace GetDnsZoneRequest {
    export type AsObject = {
        dnsZoneId: string,
    }
}

export class ListDnsZonesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListDnsZonesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDnsZonesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDnsZonesRequest;
    getFilter(): string;
    setFilter(value: string): ListDnsZonesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDnsZonesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDnsZonesRequest): ListDnsZonesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDnsZonesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDnsZonesRequest;
    static deserializeBinaryFromReader(message: ListDnsZonesRequest, reader: jspb.BinaryReader): ListDnsZonesRequest;
}

export namespace ListDnsZonesRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListDnsZonesResponse extends jspb.Message { 
    clearDnsZonesList(): void;
    getDnsZonesList(): Array<yandex_cloud_dns_v1_dns_zone_pb.DnsZone>;
    setDnsZonesList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.DnsZone>): ListDnsZonesResponse;
    addDnsZones(value?: yandex_cloud_dns_v1_dns_zone_pb.DnsZone, index?: number): yandex_cloud_dns_v1_dns_zone_pb.DnsZone;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDnsZonesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDnsZonesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDnsZonesResponse): ListDnsZonesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDnsZonesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDnsZonesResponse;
    static deserializeBinaryFromReader(message: ListDnsZonesResponse, reader: jspb.BinaryReader): ListDnsZonesResponse;
}

export namespace ListDnsZonesResponse {
    export type AsObject = {
        dnsZonesList: Array<yandex_cloud_dns_v1_dns_zone_pb.DnsZone.AsObject>,
        nextPageToken: string,
    }
}

export class CreateDnsZoneRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateDnsZoneRequest;
    getName(): string;
    setName(value: string): CreateDnsZoneRequest;
    getDescription(): string;
    setDescription(value: string): CreateDnsZoneRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZone(): string;
    setZone(value: string): CreateDnsZoneRequest;

    hasPrivateVisibility(): boolean;
    clearPrivateVisibility(): void;
    getPrivateVisibility(): yandex_cloud_dns_v1_dns_zone_pb.PrivateVisibility | undefined;
    setPrivateVisibility(value?: yandex_cloud_dns_v1_dns_zone_pb.PrivateVisibility): CreateDnsZoneRequest;

    hasPublicVisibility(): boolean;
    clearPublicVisibility(): void;
    getPublicVisibility(): yandex_cloud_dns_v1_dns_zone_pb.PublicVisibility | undefined;
    setPublicVisibility(value?: yandex_cloud_dns_v1_dns_zone_pb.PublicVisibility): CreateDnsZoneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDnsZoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDnsZoneRequest): CreateDnsZoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDnsZoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDnsZoneRequest;
    static deserializeBinaryFromReader(message: CreateDnsZoneRequest, reader: jspb.BinaryReader): CreateDnsZoneRequest;
}

export namespace CreateDnsZoneRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zone: string,
        privateVisibility?: yandex_cloud_dns_v1_dns_zone_pb.PrivateVisibility.AsObject,
        publicVisibility?: yandex_cloud_dns_v1_dns_zone_pb.PublicVisibility.AsObject,
    }
}

export class CreateDnsZoneMetadata extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): CreateDnsZoneMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDnsZoneMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDnsZoneMetadata): CreateDnsZoneMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDnsZoneMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDnsZoneMetadata;
    static deserializeBinaryFromReader(message: CreateDnsZoneMetadata, reader: jspb.BinaryReader): CreateDnsZoneMetadata;
}

export namespace CreateDnsZoneMetadata {
    export type AsObject = {
        dnsZoneId: string,
    }
}

export class UpdateDnsZoneRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): UpdateDnsZoneRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDnsZoneRequest;
    getName(): string;
    setName(value: string): UpdateDnsZoneRequest;
    getDescription(): string;
    setDescription(value: string): UpdateDnsZoneRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasPrivateVisibility(): boolean;
    clearPrivateVisibility(): void;
    getPrivateVisibility(): yandex_cloud_dns_v1_dns_zone_pb.PrivateVisibility | undefined;
    setPrivateVisibility(value?: yandex_cloud_dns_v1_dns_zone_pb.PrivateVisibility): UpdateDnsZoneRequest;

    hasPublicVisibility(): boolean;
    clearPublicVisibility(): void;
    getPublicVisibility(): yandex_cloud_dns_v1_dns_zone_pb.PublicVisibility | undefined;
    setPublicVisibility(value?: yandex_cloud_dns_v1_dns_zone_pb.PublicVisibility): UpdateDnsZoneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDnsZoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDnsZoneRequest): UpdateDnsZoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDnsZoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDnsZoneRequest;
    static deserializeBinaryFromReader(message: UpdateDnsZoneRequest, reader: jspb.BinaryReader): UpdateDnsZoneRequest;
}

export namespace UpdateDnsZoneRequest {
    export type AsObject = {
        dnsZoneId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        privateVisibility?: yandex_cloud_dns_v1_dns_zone_pb.PrivateVisibility.AsObject,
        publicVisibility?: yandex_cloud_dns_v1_dns_zone_pb.PublicVisibility.AsObject,
    }
}

export class UpdateDnsZoneMetadata extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): UpdateDnsZoneMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDnsZoneMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDnsZoneMetadata): UpdateDnsZoneMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDnsZoneMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDnsZoneMetadata;
    static deserializeBinaryFromReader(message: UpdateDnsZoneMetadata, reader: jspb.BinaryReader): UpdateDnsZoneMetadata;
}

export namespace UpdateDnsZoneMetadata {
    export type AsObject = {
        dnsZoneId: string,
    }
}

export class DeleteDnsZoneRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): DeleteDnsZoneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDnsZoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDnsZoneRequest): DeleteDnsZoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDnsZoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDnsZoneRequest;
    static deserializeBinaryFromReader(message: DeleteDnsZoneRequest, reader: jspb.BinaryReader): DeleteDnsZoneRequest;
}

export namespace DeleteDnsZoneRequest {
    export type AsObject = {
        dnsZoneId: string,
    }
}

export class DeleteDnsZoneMetadata extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): DeleteDnsZoneMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDnsZoneMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDnsZoneMetadata): DeleteDnsZoneMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDnsZoneMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDnsZoneMetadata;
    static deserializeBinaryFromReader(message: DeleteDnsZoneMetadata, reader: jspb.BinaryReader): DeleteDnsZoneMetadata;
}

export namespace DeleteDnsZoneMetadata {
    export type AsObject = {
        dnsZoneId: string,
    }
}

export class GetDnsZoneRecordSetRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): GetDnsZoneRecordSetRequest;
    getName(): string;
    setName(value: string): GetDnsZoneRecordSetRequest;
    getType(): string;
    setType(value: string): GetDnsZoneRecordSetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDnsZoneRecordSetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDnsZoneRecordSetRequest): GetDnsZoneRecordSetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDnsZoneRecordSetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDnsZoneRecordSetRequest;
    static deserializeBinaryFromReader(message: GetDnsZoneRecordSetRequest, reader: jspb.BinaryReader): GetDnsZoneRecordSetRequest;
}

export namespace GetDnsZoneRecordSetRequest {
    export type AsObject = {
        dnsZoneId: string,
        name: string,
        type: string,
    }
}

export class ListDnsZoneRecordSetsRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): ListDnsZoneRecordSetsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDnsZoneRecordSetsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDnsZoneRecordSetsRequest;
    getFilter(): string;
    setFilter(value: string): ListDnsZoneRecordSetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDnsZoneRecordSetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDnsZoneRecordSetsRequest): ListDnsZoneRecordSetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDnsZoneRecordSetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDnsZoneRecordSetsRequest;
    static deserializeBinaryFromReader(message: ListDnsZoneRecordSetsRequest, reader: jspb.BinaryReader): ListDnsZoneRecordSetsRequest;
}

export namespace ListDnsZoneRecordSetsRequest {
    export type AsObject = {
        dnsZoneId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListDnsZoneRecordSetsResponse extends jspb.Message { 
    clearRecordSetsList(): void;
    getRecordSetsList(): Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    setRecordSetsList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>): ListDnsZoneRecordSetsResponse;
    addRecordSets(value?: yandex_cloud_dns_v1_dns_zone_pb.RecordSet, index?: number): yandex_cloud_dns_v1_dns_zone_pb.RecordSet;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDnsZoneRecordSetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDnsZoneRecordSetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDnsZoneRecordSetsResponse): ListDnsZoneRecordSetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDnsZoneRecordSetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDnsZoneRecordSetsResponse;
    static deserializeBinaryFromReader(message: ListDnsZoneRecordSetsResponse, reader: jspb.BinaryReader): ListDnsZoneRecordSetsResponse;
}

export namespace ListDnsZoneRecordSetsResponse {
    export type AsObject = {
        recordSetsList: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateRecordSetsRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): UpdateRecordSetsRequest;
    clearDeletionsList(): void;
    getDeletionsList(): Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    setDeletionsList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>): UpdateRecordSetsRequest;
    addDeletions(value?: yandex_cloud_dns_v1_dns_zone_pb.RecordSet, index?: number): yandex_cloud_dns_v1_dns_zone_pb.RecordSet;
    clearAdditionsList(): void;
    getAdditionsList(): Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    setAdditionsList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>): UpdateRecordSetsRequest;
    addAdditions(value?: yandex_cloud_dns_v1_dns_zone_pb.RecordSet, index?: number): yandex_cloud_dns_v1_dns_zone_pb.RecordSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRecordSetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRecordSetsRequest): UpdateRecordSetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRecordSetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRecordSetsRequest;
    static deserializeBinaryFromReader(message: UpdateRecordSetsRequest, reader: jspb.BinaryReader): UpdateRecordSetsRequest;
}

export namespace UpdateRecordSetsRequest {
    export type AsObject = {
        dnsZoneId: string,
        deletionsList: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet.AsObject>,
        additionsList: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet.AsObject>,
    }
}

export class UpdateRecordSetsMetadata extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRecordSetsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRecordSetsMetadata): UpdateRecordSetsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRecordSetsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRecordSetsMetadata;
    static deserializeBinaryFromReader(message: UpdateRecordSetsMetadata, reader: jspb.BinaryReader): UpdateRecordSetsMetadata;
}

export namespace UpdateRecordSetsMetadata {
    export type AsObject = {
    }
}

export class UpsertRecordSetsRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): UpsertRecordSetsRequest;
    clearDeletionsList(): void;
    getDeletionsList(): Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    setDeletionsList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>): UpsertRecordSetsRequest;
    addDeletions(value?: yandex_cloud_dns_v1_dns_zone_pb.RecordSet, index?: number): yandex_cloud_dns_v1_dns_zone_pb.RecordSet;
    clearReplacementsList(): void;
    getReplacementsList(): Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    setReplacementsList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>): UpsertRecordSetsRequest;
    addReplacements(value?: yandex_cloud_dns_v1_dns_zone_pb.RecordSet, index?: number): yandex_cloud_dns_v1_dns_zone_pb.RecordSet;
    clearMergesList(): void;
    getMergesList(): Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>;
    setMergesList(value: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet>): UpsertRecordSetsRequest;
    addMerges(value?: yandex_cloud_dns_v1_dns_zone_pb.RecordSet, index?: number): yandex_cloud_dns_v1_dns_zone_pb.RecordSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertRecordSetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertRecordSetsRequest): UpsertRecordSetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertRecordSetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertRecordSetsRequest;
    static deserializeBinaryFromReader(message: UpsertRecordSetsRequest, reader: jspb.BinaryReader): UpsertRecordSetsRequest;
}

export namespace UpsertRecordSetsRequest {
    export type AsObject = {
        dnsZoneId: string,
        deletionsList: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet.AsObject>,
        replacementsList: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet.AsObject>,
        mergesList: Array<yandex_cloud_dns_v1_dns_zone_pb.RecordSet.AsObject>,
    }
}

export class UpsertRecordSetsMetadata extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertRecordSetsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertRecordSetsMetadata): UpsertRecordSetsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertRecordSetsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertRecordSetsMetadata;
    static deserializeBinaryFromReader(message: UpsertRecordSetsMetadata, reader: jspb.BinaryReader): UpsertRecordSetsMetadata;
}

export namespace UpsertRecordSetsMetadata {
    export type AsObject = {
    }
}

export class ListDnsZoneOperationsRequest extends jspb.Message { 
    getDnsZoneId(): string;
    setDnsZoneId(value: string): ListDnsZoneOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDnsZoneOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDnsZoneOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListDnsZoneOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDnsZoneOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDnsZoneOperationsRequest): ListDnsZoneOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDnsZoneOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDnsZoneOperationsRequest;
    static deserializeBinaryFromReader(message: ListDnsZoneOperationsRequest, reader: jspb.BinaryReader): ListDnsZoneOperationsRequest;
}

export namespace ListDnsZoneOperationsRequest {
    export type AsObject = {
        dnsZoneId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListDnsZoneOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListDnsZoneOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDnsZoneOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDnsZoneOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDnsZoneOperationsResponse): ListDnsZoneOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDnsZoneOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDnsZoneOperationsResponse;
    static deserializeBinaryFromReader(message: ListDnsZoneOperationsResponse, reader: jspb.BinaryReader): ListDnsZoneOperationsResponse;
}

export namespace ListDnsZoneOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
