// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/address_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_vpc_v1_address_pb from "../../../../yandex/cloud/vpc/v1/address_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetAddressRequest extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): GetAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressRequest): GetAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressRequest;
    static deserializeBinaryFromReader(message: GetAddressRequest, reader: jspb.BinaryReader): GetAddressRequest;
}

export namespace GetAddressRequest {
    export type AsObject = {
        addressId: string,
    }
}

export class GetAddressByValueRequest extends jspb.Message { 

    hasExternalIpv4Address(): boolean;
    clearExternalIpv4Address(): void;
    getExternalIpv4Address(): string;
    setExternalIpv4Address(value: string): GetAddressByValueRequest;

    getAddressCase(): GetAddressByValueRequest.AddressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressByValueRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressByValueRequest): GetAddressByValueRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressByValueRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressByValueRequest;
    static deserializeBinaryFromReader(message: GetAddressByValueRequest, reader: jspb.BinaryReader): GetAddressByValueRequest;
}

export namespace GetAddressByValueRequest {
    export type AsObject = {
        externalIpv4Address: string,
    }

    export enum AddressCase {
        ADDRESS_NOT_SET = 0,
        EXTERNAL_IPV4_ADDRESS = 1,
    }

}

export class ListAddressesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListAddressesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAddressesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAddressesRequest;
    getFilter(): string;
    setFilter(value: string): ListAddressesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesRequest): ListAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesRequest;
    static deserializeBinaryFromReader(message: ListAddressesRequest, reader: jspb.BinaryReader): ListAddressesRequest;
}

export namespace ListAddressesRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListAddressesResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<yandex_cloud_vpc_v1_address_pb.Address>;
    setAddressesList(value: Array<yandex_cloud_vpc_v1_address_pb.Address>): ListAddressesResponse;
    addAddresses(value?: yandex_cloud_vpc_v1_address_pb.Address, index?: number): yandex_cloud_vpc_v1_address_pb.Address;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAddressesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesResponse): ListAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesResponse;
    static deserializeBinaryFromReader(message: ListAddressesResponse, reader: jspb.BinaryReader): ListAddressesResponse;
}

export namespace ListAddressesResponse {
    export type AsObject = {
        addressesList: Array<yandex_cloud_vpc_v1_address_pb.Address.AsObject>,
        nextPageToken: string,
    }
}

export class CreateAddressRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateAddressRequest;
    getName(): string;
    setName(value: string): CreateAddressRequest;
    getDescription(): string;
    setDescription(value: string): CreateAddressRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasExternalIpv4AddressSpec(): boolean;
    clearExternalIpv4AddressSpec(): void;
    getExternalIpv4AddressSpec(): ExternalIpv4AddressSpec | undefined;
    setExternalIpv4AddressSpec(value?: ExternalIpv4AddressSpec): CreateAddressRequest;

    getAddressSpecCase(): CreateAddressRequest.AddressSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAddressRequest): CreateAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAddressRequest;
    static deserializeBinaryFromReader(message: CreateAddressRequest, reader: jspb.BinaryReader): CreateAddressRequest;
}

export namespace CreateAddressRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        externalIpv4AddressSpec?: ExternalIpv4AddressSpec.AsObject,
    }

    export enum AddressSpecCase {
        ADDRESS_SPEC_NOT_SET = 0,
        EXTERNAL_IPV4_ADDRESS_SPEC = 5,
    }

}

export class ExternalIpv4AddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalIpv4AddressSpec;
    getZoneId(): string;
    setZoneId(value: string): ExternalIpv4AddressSpec;

    hasRequirements(): boolean;
    clearRequirements(): void;
    getRequirements(): yandex_cloud_vpc_v1_address_pb.AddressRequirements | undefined;
    setRequirements(value?: yandex_cloud_vpc_v1_address_pb.AddressRequirements): ExternalIpv4AddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIpv4AddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIpv4AddressSpec): ExternalIpv4AddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalIpv4AddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIpv4AddressSpec;
    static deserializeBinaryFromReader(message: ExternalIpv4AddressSpec, reader: jspb.BinaryReader): ExternalIpv4AddressSpec;
}

export namespace ExternalIpv4AddressSpec {
    export type AsObject = {
        address: string,
        zoneId: string,
        requirements?: yandex_cloud_vpc_v1_address_pb.AddressRequirements.AsObject,
    }
}

export class CreateAddressMetadata extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): CreateAddressMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAddressMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAddressMetadata): CreateAddressMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAddressMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAddressMetadata;
    static deserializeBinaryFromReader(message: CreateAddressMetadata, reader: jspb.BinaryReader): CreateAddressMetadata;
}

export namespace CreateAddressMetadata {
    export type AsObject = {
        addressId: string,
    }
}

export class UpdateAddressRequest extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): UpdateAddressRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAddressRequest;
    getName(): string;
    setName(value: string): UpdateAddressRequest;
    getDescription(): string;
    setDescription(value: string): UpdateAddressRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getReserved(): boolean;
    setReserved(value: boolean): UpdateAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAddressRequest): UpdateAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAddressRequest;
    static deserializeBinaryFromReader(message: UpdateAddressRequest, reader: jspb.BinaryReader): UpdateAddressRequest;
}

export namespace UpdateAddressRequest {
    export type AsObject = {
        addressId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        reserved: boolean,
    }
}

export class UpdateAddressMetadata extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): UpdateAddressMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAddressMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAddressMetadata): UpdateAddressMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAddressMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAddressMetadata;
    static deserializeBinaryFromReader(message: UpdateAddressMetadata, reader: jspb.BinaryReader): UpdateAddressMetadata;
}

export namespace UpdateAddressMetadata {
    export type AsObject = {
        addressId: string,
    }
}

export class DeleteAddressRequest extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): DeleteAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAddressRequest): DeleteAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAddressRequest;
    static deserializeBinaryFromReader(message: DeleteAddressRequest, reader: jspb.BinaryReader): DeleteAddressRequest;
}

export namespace DeleteAddressRequest {
    export type AsObject = {
        addressId: string,
    }
}

export class DeleteAddressMetadata extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): DeleteAddressMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAddressMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAddressMetadata): DeleteAddressMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAddressMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAddressMetadata;
    static deserializeBinaryFromReader(message: DeleteAddressMetadata, reader: jspb.BinaryReader): DeleteAddressMetadata;
}

export namespace DeleteAddressMetadata {
    export type AsObject = {
        addressId: string,
    }
}

export class ListAddressOperationsRequest extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): ListAddressOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAddressOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAddressOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressOperationsRequest): ListAddressOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressOperationsRequest;
    static deserializeBinaryFromReader(message: ListAddressOperationsRequest, reader: jspb.BinaryReader): ListAddressOperationsRequest;
}

export namespace ListAddressOperationsRequest {
    export type AsObject = {
        addressId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAddressOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListAddressOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAddressOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressOperationsResponse): ListAddressOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressOperationsResponse;
    static deserializeBinaryFromReader(message: ListAddressOperationsResponse, reader: jspb.BinaryReader): ListAddressOperationsResponse;
}

export namespace ListAddressOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class MoveAddressRequest extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): MoveAddressRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveAddressRequest): MoveAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveAddressRequest;
    static deserializeBinaryFromReader(message: MoveAddressRequest, reader: jspb.BinaryReader): MoveAddressRequest;
}

export namespace MoveAddressRequest {
    export type AsObject = {
        addressId: string,
        destinationFolderId: string,
    }
}

export class MoveAddressMetadata extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): MoveAddressMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveAddressMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveAddressMetadata): MoveAddressMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveAddressMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveAddressMetadata;
    static deserializeBinaryFromReader(message: MoveAddressMetadata, reader: jspb.BinaryReader): MoveAddressMetadata;
}

export namespace MoveAddressMetadata {
    export type AsObject = {
        addressId: string,
    }
}
