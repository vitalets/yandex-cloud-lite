// package: yandex.cloud.access
// file: yandex/cloud/access/access.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../yandex/cloud/validation_pb";

export class Subject extends jspb.Message { 
    getId(): string;
    setId(value: string): Subject;
    getType(): string;
    setType(value: string): Subject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subject.AsObject;
    static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subject;
    static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
    export type AsObject = {
        id: string,
        type: string,
    }
}

export class AccessBinding extends jspb.Message { 
    getRoleId(): string;
    setRoleId(value: string): AccessBinding;

    hasSubject(): boolean;
    clearSubject(): void;
    getSubject(): Subject | undefined;
    setSubject(value?: Subject): AccessBinding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessBinding.AsObject;
    static toObject(includeInstance: boolean, msg: AccessBinding): AccessBinding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessBinding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessBinding;
    static deserializeBinaryFromReader(message: AccessBinding, reader: jspb.BinaryReader): AccessBinding;
}

export namespace AccessBinding {
    export type AsObject = {
        roleId: string,
        subject?: Subject.AsObject,
    }
}

export class ListAccessBindingsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): ListAccessBindingsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAccessBindingsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAccessBindingsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccessBindingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccessBindingsRequest): ListAccessBindingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccessBindingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccessBindingsRequest;
    static deserializeBinaryFromReader(message: ListAccessBindingsRequest, reader: jspb.BinaryReader): ListAccessBindingsRequest;
}

export namespace ListAccessBindingsRequest {
    export type AsObject = {
        resourceId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAccessBindingsResponse extends jspb.Message { 
    clearAccessBindingsList(): void;
    getAccessBindingsList(): Array<AccessBinding>;
    setAccessBindingsList(value: Array<AccessBinding>): ListAccessBindingsResponse;
    addAccessBindings(value?: AccessBinding, index?: number): AccessBinding;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAccessBindingsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccessBindingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccessBindingsResponse): ListAccessBindingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccessBindingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccessBindingsResponse;
    static deserializeBinaryFromReader(message: ListAccessBindingsResponse, reader: jspb.BinaryReader): ListAccessBindingsResponse;
}

export namespace ListAccessBindingsResponse {
    export type AsObject = {
        accessBindingsList: Array<AccessBinding.AsObject>,
        nextPageToken: string,
    }
}

export class SetAccessBindingsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): SetAccessBindingsRequest;
    clearAccessBindingsList(): void;
    getAccessBindingsList(): Array<AccessBinding>;
    setAccessBindingsList(value: Array<AccessBinding>): SetAccessBindingsRequest;
    addAccessBindings(value?: AccessBinding, index?: number): AccessBinding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAccessBindingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetAccessBindingsRequest): SetAccessBindingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAccessBindingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAccessBindingsRequest;
    static deserializeBinaryFromReader(message: SetAccessBindingsRequest, reader: jspb.BinaryReader): SetAccessBindingsRequest;
}

export namespace SetAccessBindingsRequest {
    export type AsObject = {
        resourceId: string,
        accessBindingsList: Array<AccessBinding.AsObject>,
    }
}

export class SetAccessBindingsMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): SetAccessBindingsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetAccessBindingsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: SetAccessBindingsMetadata): SetAccessBindingsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetAccessBindingsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetAccessBindingsMetadata;
    static deserializeBinaryFromReader(message: SetAccessBindingsMetadata, reader: jspb.BinaryReader): SetAccessBindingsMetadata;
}

export namespace SetAccessBindingsMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class UpdateAccessBindingsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): UpdateAccessBindingsRequest;
    clearAccessBindingDeltasList(): void;
    getAccessBindingDeltasList(): Array<AccessBindingDelta>;
    setAccessBindingDeltasList(value: Array<AccessBindingDelta>): UpdateAccessBindingsRequest;
    addAccessBindingDeltas(value?: AccessBindingDelta, index?: number): AccessBindingDelta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccessBindingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccessBindingsRequest): UpdateAccessBindingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccessBindingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccessBindingsRequest;
    static deserializeBinaryFromReader(message: UpdateAccessBindingsRequest, reader: jspb.BinaryReader): UpdateAccessBindingsRequest;
}

export namespace UpdateAccessBindingsRequest {
    export type AsObject = {
        resourceId: string,
        accessBindingDeltasList: Array<AccessBindingDelta.AsObject>,
    }
}

export class UpdateAccessBindingsMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): UpdateAccessBindingsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccessBindingsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccessBindingsMetadata): UpdateAccessBindingsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccessBindingsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccessBindingsMetadata;
    static deserializeBinaryFromReader(message: UpdateAccessBindingsMetadata, reader: jspb.BinaryReader): UpdateAccessBindingsMetadata;
}

export namespace UpdateAccessBindingsMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class AccessBindingDelta extends jspb.Message { 
    getAction(): AccessBindingAction;
    setAction(value: AccessBindingAction): AccessBindingDelta;

    hasAccessBinding(): boolean;
    clearAccessBinding(): void;
    getAccessBinding(): AccessBinding | undefined;
    setAccessBinding(value?: AccessBinding): AccessBindingDelta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessBindingDelta.AsObject;
    static toObject(includeInstance: boolean, msg: AccessBindingDelta): AccessBindingDelta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessBindingDelta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessBindingDelta;
    static deserializeBinaryFromReader(message: AccessBindingDelta, reader: jspb.BinaryReader): AccessBindingDelta;
}

export namespace AccessBindingDelta {
    export type AsObject = {
        action: AccessBindingAction,
        accessBinding?: AccessBinding.AsObject,
    }
}

export enum AccessBindingAction {
    ACCESS_BINDING_ACTION_UNSPECIFIED = 0,
    ADD = 1,
    REMOVE = 2,
}
