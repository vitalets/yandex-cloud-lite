// package: yandex.cloud.serverless.containers.v1
// file: yandex/cloud/serverless/containers/v1/container.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Container extends jspb.Message { 
    getId(): string;
    setId(value: string): Container;
    getFolderId(): string;
    setFolderId(value: string): Container;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Container;
    getName(): string;
    setName(value: string): Container;
    getDescription(): string;
    setDescription(value: string): Container;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getUrl(): string;
    setUrl(value: string): Container;
    getStatus(): Container.Status;
    setStatus(value: Container.Status): Container;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Container.AsObject;
    static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Container;
    static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
}

export namespace Container {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        url: string,
        status: Container.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    }

}

export class Revision extends jspb.Message { 
    getId(): string;
    setId(value: string): Revision;
    getContainerId(): string;
    setContainerId(value: string): Revision;
    getDescription(): string;
    setDescription(value: string): Revision;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Revision;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): Image | undefined;
    setImage(value?: Image): Revision;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): Revision;

    hasExecutionTimeout(): boolean;
    clearExecutionTimeout(): void;
    getExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setExecutionTimeout(value?: google_protobuf_duration_pb.Duration): Revision;
    getConcurrency(): number;
    setConcurrency(value: number): Revision;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Revision;
    getStatus(): Revision.Status;
    setStatus(value: Revision.Status): Revision;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Revision.AsObject;
    static toObject(includeInstance: boolean, msg: Revision): Revision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Revision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Revision;
    static deserializeBinaryFromReader(message: Revision, reader: jspb.BinaryReader): Revision;
}

export namespace Revision {
    export type AsObject = {
        id: string,
        containerId: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        image?: Image.AsObject,
        resources?: Resources.AsObject,
        executionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        concurrency: number,
        serviceAccountId: string,
        status: Revision.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    OBSOLETE = 3,
    }

}

export class Image extends jspb.Message { 
    getImageUrl(): string;
    setImageUrl(value: string): Image;
    getImageDigest(): string;
    setImageDigest(value: string): Image;

    hasCommand(): boolean;
    clearCommand(): void;
    getCommand(): Command | undefined;
    setCommand(value?: Command): Image;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): Args | undefined;
    setArgs(value?: Args): Image;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;
    getWorkingDir(): string;
    setWorkingDir(value: string): Image;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        imageUrl: string,
        imageDigest: string,
        command?: Command.AsObject,
        args?: Args.AsObject,

        environmentMap: Array<[string, string]>,
        workingDir: string,
    }
}

export class Command extends jspb.Message { 
    clearCommandList(): void;
    getCommandList(): Array<string>;
    setCommandList(value: Array<string>): Command;
    addCommand(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Command.AsObject;
    static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Command;
    static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
    export type AsObject = {
        commandList: Array<string>,
    }
}

export class Args extends jspb.Message { 
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): Args;
    addArgs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Args.AsObject;
    static toObject(includeInstance: boolean, msg: Args): Args.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Args, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Args;
    static deserializeBinaryFromReader(message: Args, reader: jspb.BinaryReader): Args;
}

export namespace Args {
    export type AsObject = {
        argsList: Array<string>,
    }
}

export class Resources extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): Resources;
    getCores(): number;
    setCores(value: number): Resources;
    getCoreFraction(): number;
    setCoreFraction(value: number): Resources;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resources.AsObject;
    static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resources;
    static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
    export type AsObject = {
        memory: number,
        cores: number,
        coreFraction: number,
    }
}
