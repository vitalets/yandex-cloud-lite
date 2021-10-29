// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/customer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_billing_v1_customer_pb from "../../../../yandex/cloud/billing/v1/customer_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ListCustomersRequest extends jspb.Message { 
    getResellerId(): string;
    setResellerId(value: string): ListCustomersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCustomersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListCustomersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCustomersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCustomersRequest): ListCustomersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCustomersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCustomersRequest;
    static deserializeBinaryFromReader(message: ListCustomersRequest, reader: jspb.BinaryReader): ListCustomersRequest;
}

export namespace ListCustomersRequest {
    export type AsObject = {
        resellerId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListCustomersResponse extends jspb.Message { 
    clearCustomersList(): void;
    getCustomersList(): Array<yandex_cloud_billing_v1_customer_pb.Customer>;
    setCustomersList(value: Array<yandex_cloud_billing_v1_customer_pb.Customer>): ListCustomersResponse;
    addCustomers(value?: yandex_cloud_billing_v1_customer_pb.Customer, index?: number): yandex_cloud_billing_v1_customer_pb.Customer;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCustomersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCustomersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCustomersResponse): ListCustomersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCustomersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCustomersResponse;
    static deserializeBinaryFromReader(message: ListCustomersResponse, reader: jspb.BinaryReader): ListCustomersResponse;
}

export namespace ListCustomersResponse {
    export type AsObject = {
        customersList: Array<yandex_cloud_billing_v1_customer_pb.Customer.AsObject>,
        nextPageToken: string,
    }
}

export class InviteCustomerRequest extends jspb.Message { 
    getResellerId(): string;
    setResellerId(value: string): InviteCustomerRequest;
    getName(): string;
    setName(value: string): InviteCustomerRequest;
    getInvitationEmail(): string;
    setInvitationEmail(value: string): InviteCustomerRequest;

    hasPerson(): boolean;
    clearPerson(): void;
    getPerson(): yandex_cloud_billing_v1_customer_pb.CustomerPerson | undefined;
    setPerson(value?: yandex_cloud_billing_v1_customer_pb.CustomerPerson): InviteCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InviteCustomerRequest): InviteCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteCustomerRequest;
    static deserializeBinaryFromReader(message: InviteCustomerRequest, reader: jspb.BinaryReader): InviteCustomerRequest;
}

export namespace InviteCustomerRequest {
    export type AsObject = {
        resellerId: string,
        name: string,
        invitationEmail: string,
        person?: yandex_cloud_billing_v1_customer_pb.CustomerPerson.AsObject,
    }
}

export class ActivateCustomerRequest extends jspb.Message { 
    getCustomerId(): string;
    setCustomerId(value: string): ActivateCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateCustomerRequest): ActivateCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateCustomerRequest;
    static deserializeBinaryFromReader(message: ActivateCustomerRequest, reader: jspb.BinaryReader): ActivateCustomerRequest;
}

export namespace ActivateCustomerRequest {
    export type AsObject = {
        customerId: string,
    }
}

export class SuspendCustomerRequest extends jspb.Message { 
    getCustomerId(): string;
    setCustomerId(value: string): SuspendCustomerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuspendCustomerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SuspendCustomerRequest): SuspendCustomerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuspendCustomerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuspendCustomerRequest;
    static deserializeBinaryFromReader(message: SuspendCustomerRequest, reader: jspb.BinaryReader): SuspendCustomerRequest;
}

export namespace SuspendCustomerRequest {
    export type AsObject = {
        customerId: string,
    }
}

export class CustomerMetadata extends jspb.Message { 
    getResellerId(): string;
    setResellerId(value: string): CustomerMetadata;
    getCustomerId(): string;
    setCustomerId(value: string): CustomerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerMetadata): CustomerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerMetadata;
    static deserializeBinaryFromReader(message: CustomerMetadata, reader: jspb.BinaryReader): CustomerMetadata;
}

export namespace CustomerMetadata {
    export type AsObject = {
        resellerId: string,
        customerId: string,
    }
}
