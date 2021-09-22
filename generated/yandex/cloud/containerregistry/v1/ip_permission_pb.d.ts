// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/ip_permission.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class IpPermission extends jspb.Message { 
    getAction(): IpPermission.Action;
    setAction(value: IpPermission.Action): IpPermission;
    getIp(): string;
    setIp(value: string): IpPermission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IpPermission.AsObject;
    static toObject(includeInstance: boolean, msg: IpPermission): IpPermission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IpPermission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IpPermission;
    static deserializeBinaryFromReader(message: IpPermission, reader: jspb.BinaryReader): IpPermission;
}

export namespace IpPermission {
    export type AsObject = {
        action: IpPermission.Action,
        ip: string,
    }

    export enum Action {
    ACTION_UNSPECIFIED = 0,
    PULL = 1,
    PUSH = 2,
    }

}

export class IpPermissionDelta extends jspb.Message { 
    getAction(): IpPermissionAction;
    setAction(value: IpPermissionAction): IpPermissionDelta;

    hasIpPermission(): boolean;
    clearIpPermission(): void;
    getIpPermission(): IpPermission | undefined;
    setIpPermission(value?: IpPermission): IpPermissionDelta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IpPermissionDelta.AsObject;
    static toObject(includeInstance: boolean, msg: IpPermissionDelta): IpPermissionDelta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IpPermissionDelta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IpPermissionDelta;
    static deserializeBinaryFromReader(message: IpPermissionDelta, reader: jspb.BinaryReader): IpPermissionDelta;
}

export namespace IpPermissionDelta {
    export type AsObject = {
        action: IpPermissionAction,
        ipPermission?: IpPermission.AsObject,
    }
}

export enum IpPermissionAction {
    IP_PERMISSION_ACTION_UNSPECIFIED = 0,
    ADD = 1,
    REMOVE = 2,
}
