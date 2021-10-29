// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/load_balancer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_apploadbalancer_v1_target_group_pb from "../../../../yandex/cloud/apploadbalancer/v1/target_group_pb";

export class LoadBalancer extends jspb.Message { 
    getId(): string;
    setId(value: string): LoadBalancer;
    getName(): string;
    setName(value: string): LoadBalancer;
    getDescription(): string;
    setDescription(value: string): LoadBalancer;
    getFolderId(): string;
    setFolderId(value: string): LoadBalancer;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): LoadBalancer.Status;
    setStatus(value: LoadBalancer.Status): LoadBalancer;
    getRegionId(): string;
    setRegionId(value: string): LoadBalancer;
    getNetworkId(): string;
    setNetworkId(value: string): LoadBalancer;
    clearListenersList(): void;
    getListenersList(): Array<Listener>;
    setListenersList(value: Array<Listener>): LoadBalancer;
    addListeners(value?: Listener, index?: number): Listener;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): AllocationPolicy | undefined;
    setAllocationPolicy(value?: AllocationPolicy): LoadBalancer;
    getLogGroupId(): string;
    setLogGroupId(value: string): LoadBalancer;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): LoadBalancer;
    addSecurityGroupIds(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LoadBalancer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadBalancer.AsObject;
    static toObject(includeInstance: boolean, msg: LoadBalancer): LoadBalancer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadBalancer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadBalancer;
    static deserializeBinaryFromReader(message: LoadBalancer, reader: jspb.BinaryReader): LoadBalancer;
}

export namespace LoadBalancer {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        folderId: string,

        labelsMap: Array<[string, string]>,
        status: LoadBalancer.Status,
        regionId: string,
        networkId: string,
        listenersList: Array<Listener.AsObject>,
        allocationPolicy?: AllocationPolicy.AsObject,
        logGroupId: string,
        securityGroupIdsList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    STARTING = 2,
    ACTIVE = 3,
    STOPPING = 4,
    STOPPED = 5,
    DELETING = 6,
    }

}

export class Address extends jspb.Message { 

    hasExternalIpv4Address(): boolean;
    clearExternalIpv4Address(): void;
    getExternalIpv4Address(): ExternalIpv4Address | undefined;
    setExternalIpv4Address(value?: ExternalIpv4Address): Address;

    hasInternalIpv4Address(): boolean;
    clearInternalIpv4Address(): void;
    getInternalIpv4Address(): InternalIpv4Address | undefined;
    setInternalIpv4Address(value?: InternalIpv4Address): Address;

    hasExternalIpv6Address(): boolean;
    clearExternalIpv6Address(): void;
    getExternalIpv6Address(): ExternalIpv6Address | undefined;
    setExternalIpv6Address(value?: ExternalIpv6Address): Address;

    getAddressCase(): Address.AddressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        externalIpv4Address?: ExternalIpv4Address.AsObject,
        internalIpv4Address?: InternalIpv4Address.AsObject,
        externalIpv6Address?: ExternalIpv6Address.AsObject,
    }

    export enum AddressCase {
        ADDRESS_NOT_SET = 0,
        EXTERNAL_IPV4_ADDRESS = 1,
        INTERNAL_IPV4_ADDRESS = 2,
        EXTERNAL_IPV6_ADDRESS = 3,
    }

}

export class ExternalIpv4Address extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalIpv4Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIpv4Address.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIpv4Address): ExternalIpv4Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalIpv4Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIpv4Address;
    static deserializeBinaryFromReader(message: ExternalIpv4Address, reader: jspb.BinaryReader): ExternalIpv4Address;
}

export namespace ExternalIpv4Address {
    export type AsObject = {
        address: string,
    }
}

export class InternalIpv4Address extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): InternalIpv4Address;
    getSubnetId(): string;
    setSubnetId(value: string): InternalIpv4Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalIpv4Address.AsObject;
    static toObject(includeInstance: boolean, msg: InternalIpv4Address): InternalIpv4Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalIpv4Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalIpv4Address;
    static deserializeBinaryFromReader(message: InternalIpv4Address, reader: jspb.BinaryReader): InternalIpv4Address;
}

export namespace InternalIpv4Address {
    export type AsObject = {
        address: string,
        subnetId: string,
    }
}

export class ExternalIpv6Address extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalIpv6Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIpv6Address.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIpv6Address): ExternalIpv6Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalIpv6Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIpv6Address;
    static deserializeBinaryFromReader(message: ExternalIpv6Address, reader: jspb.BinaryReader): ExternalIpv6Address;
}

export namespace ExternalIpv6Address {
    export type AsObject = {
        address: string,
    }
}

export class Location extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): Location;
    getSubnetId(): string;
    setSubnetId(value: string): Location;
    getDisableTraffic(): boolean;
    setDisableTraffic(value: boolean): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        zoneId: string,
        subnetId: string,
        disableTraffic: boolean,
    }
}

export class AllocationPolicy extends jspb.Message { 
    clearLocationsList(): void;
    getLocationsList(): Array<Location>;
    setLocationsList(value: Array<Location>): AllocationPolicy;
    addLocations(value?: Location, index?: number): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllocationPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: AllocationPolicy): AllocationPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllocationPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllocationPolicy;
    static deserializeBinaryFromReader(message: AllocationPolicy, reader: jspb.BinaryReader): AllocationPolicy;
}

export namespace AllocationPolicy {
    export type AsObject = {
        locationsList: Array<Location.AsObject>,
    }
}

export class Listener extends jspb.Message { 
    getName(): string;
    setName(value: string): Listener;
    clearEndpointsList(): void;
    getEndpointsList(): Array<Endpoint>;
    setEndpointsList(value: Array<Endpoint>): Listener;
    addEndpoints(value?: Endpoint, index?: number): Endpoint;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HttpListener | undefined;
    setHttp(value?: HttpListener): Listener;

    hasTls(): boolean;
    clearTls(): void;
    getTls(): TlsListener | undefined;
    setTls(value?: TlsListener): Listener;

    hasTcp(): boolean;
    clearTcp(): void;
    getTcp(): TcpListener | undefined;
    setTcp(value?: TcpListener): Listener;

    getListenerCase(): Listener.ListenerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Listener.AsObject;
    static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Listener;
    static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
}

export namespace Listener {
    export type AsObject = {
        name: string,
        endpointsList: Array<Endpoint.AsObject>,
        http?: HttpListener.AsObject,
        tls?: TlsListener.AsObject,
        tcp?: TcpListener.AsObject,
    }

    export enum ListenerCase {
        LISTENER_NOT_SET = 0,
        HTTP = 3,
        TLS = 4,
        TCP = 5,
    }

}

export class Endpoint extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<Address>;
    setAddressesList(value: Array<Address>): Endpoint;
    addAddresses(value?: Address, index?: number): Address;
    clearPortsList(): void;
    getPortsList(): Array<number>;
    setPortsList(value: Array<number>): Endpoint;
    addPorts(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        addressesList: Array<Address.AsObject>,
        portsList: Array<number>,
    }
}

export class HttpListener extends jspb.Message { 

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): HttpHandler | undefined;
    setHandler(value?: HttpHandler): HttpListener;

    hasRedirects(): boolean;
    clearRedirects(): void;
    getRedirects(): Redirects | undefined;
    setRedirects(value?: Redirects): HttpListener;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpListener.AsObject;
    static toObject(includeInstance: boolean, msg: HttpListener): HttpListener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpListener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpListener;
    static deserializeBinaryFromReader(message: HttpListener, reader: jspb.BinaryReader): HttpListener;
}

export namespace HttpListener {
    export type AsObject = {
        handler?: HttpHandler.AsObject,
        redirects?: Redirects.AsObject,
    }
}

export class TlsListener extends jspb.Message { 

    hasDefaultHandler(): boolean;
    clearDefaultHandler(): void;
    getDefaultHandler(): TlsHandler | undefined;
    setDefaultHandler(value?: TlsHandler): TlsListener;
    clearSniHandlersList(): void;
    getSniHandlersList(): Array<SniMatch>;
    setSniHandlersList(value: Array<SniMatch>): TlsListener;
    addSniHandlers(value?: SniMatch, index?: number): SniMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TlsListener.AsObject;
    static toObject(includeInstance: boolean, msg: TlsListener): TlsListener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TlsListener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TlsListener;
    static deserializeBinaryFromReader(message: TlsListener, reader: jspb.BinaryReader): TlsListener;
}

export namespace TlsListener {
    export type AsObject = {
        defaultHandler?: TlsHandler.AsObject,
        sniHandlersList: Array<SniMatch.AsObject>,
    }
}

export class TcpListener extends jspb.Message { 

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): StreamHandler | undefined;
    setHandler(value?: StreamHandler): TcpListener;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpListener.AsObject;
    static toObject(includeInstance: boolean, msg: TcpListener): TcpListener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpListener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpListener;
    static deserializeBinaryFromReader(message: TcpListener, reader: jspb.BinaryReader): TcpListener;
}

export namespace TcpListener {
    export type AsObject = {
        handler?: StreamHandler.AsObject,
    }
}

export class Http2Options extends jspb.Message { 
    getMaxConcurrentStreams(): number;
    setMaxConcurrentStreams(value: number): Http2Options;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Http2Options.AsObject;
    static toObject(includeInstance: boolean, msg: Http2Options): Http2Options.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Http2Options, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Http2Options;
    static deserializeBinaryFromReader(message: Http2Options, reader: jspb.BinaryReader): Http2Options;
}

export namespace Http2Options {
    export type AsObject = {
        maxConcurrentStreams: number,
    }
}

export class StreamHandler extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): StreamHandler;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamHandler.AsObject;
    static toObject(includeInstance: boolean, msg: StreamHandler): StreamHandler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamHandler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamHandler;
    static deserializeBinaryFromReader(message: StreamHandler, reader: jspb.BinaryReader): StreamHandler;
}

export namespace StreamHandler {
    export type AsObject = {
        backendGroupId: string,
    }
}

export class HttpHandler extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): HttpHandler;

    hasHttp2Options(): boolean;
    clearHttp2Options(): void;
    getHttp2Options(): Http2Options | undefined;
    setHttp2Options(value?: Http2Options): HttpHandler;

    hasAllowHttp10(): boolean;
    clearAllowHttp10(): void;
    getAllowHttp10(): boolean;
    setAllowHttp10(value: boolean): HttpHandler;

    getProtocolSettingsCase(): HttpHandler.ProtocolSettingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpHandler.AsObject;
    static toObject(includeInstance: boolean, msg: HttpHandler): HttpHandler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpHandler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpHandler;
    static deserializeBinaryFromReader(message: HttpHandler, reader: jspb.BinaryReader): HttpHandler;
}

export namespace HttpHandler {
    export type AsObject = {
        httpRouterId: string,
        http2Options?: Http2Options.AsObject,
        allowHttp10: boolean,
    }

    export enum ProtocolSettingsCase {
        PROTOCOL_SETTINGS_NOT_SET = 0,
        HTTP2_OPTIONS = 2,
        ALLOW_HTTP10 = 3,
    }

}

export class Redirects extends jspb.Message { 
    getHttpToHttps(): boolean;
    setHttpToHttps(value: boolean): Redirects;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Redirects.AsObject;
    static toObject(includeInstance: boolean, msg: Redirects): Redirects.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Redirects, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Redirects;
    static deserializeBinaryFromReader(message: Redirects, reader: jspb.BinaryReader): Redirects;
}

export namespace Redirects {
    export type AsObject = {
        httpToHttps: boolean,
    }
}

export class SniMatch extends jspb.Message { 
    getName(): string;
    setName(value: string): SniMatch;
    clearServerNamesList(): void;
    getServerNamesList(): Array<string>;
    setServerNamesList(value: Array<string>): SniMatch;
    addServerNames(value: string, index?: number): string;

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): TlsHandler | undefined;
    setHandler(value?: TlsHandler): SniMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SniMatch.AsObject;
    static toObject(includeInstance: boolean, msg: SniMatch): SniMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SniMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SniMatch;
    static deserializeBinaryFromReader(message: SniMatch, reader: jspb.BinaryReader): SniMatch;
}

export namespace SniMatch {
    export type AsObject = {
        name: string,
        serverNamesList: Array<string>,
        handler?: TlsHandler.AsObject,
    }
}

export class TlsHandler extends jspb.Message { 

    hasHttpHandler(): boolean;
    clearHttpHandler(): void;
    getHttpHandler(): HttpHandler | undefined;
    setHttpHandler(value?: HttpHandler): TlsHandler;

    hasStreamHandler(): boolean;
    clearStreamHandler(): void;
    getStreamHandler(): StreamHandler | undefined;
    setStreamHandler(value?: StreamHandler): TlsHandler;
    clearCertificateIdsList(): void;
    getCertificateIdsList(): Array<string>;
    setCertificateIdsList(value: Array<string>): TlsHandler;
    addCertificateIds(value: string, index?: number): string;

    getHandlerCase(): TlsHandler.HandlerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TlsHandler.AsObject;
    static toObject(includeInstance: boolean, msg: TlsHandler): TlsHandler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TlsHandler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TlsHandler;
    static deserializeBinaryFromReader(message: TlsHandler, reader: jspb.BinaryReader): TlsHandler;
}

export namespace TlsHandler {
    export type AsObject = {
        httpHandler?: HttpHandler.AsObject,
        streamHandler?: StreamHandler.AsObject,
        certificateIdsList: Array<string>,
    }

    export enum HandlerCase {
        HANDLER_NOT_SET = 0,
        HTTP_HANDLER = 2,
        STREAM_HANDLER = 4,
    }

}

export class TargetState extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): TargetState.HealthcheckStatus | undefined;
    setStatus(value?: TargetState.HealthcheckStatus): TargetState;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): yandex_cloud_apploadbalancer_v1_target_group_pb.Target | undefined;
    setTarget(value?: yandex_cloud_apploadbalancer_v1_target_group_pb.Target): TargetState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetState.AsObject;
    static toObject(includeInstance: boolean, msg: TargetState): TargetState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetState;
    static deserializeBinaryFromReader(message: TargetState, reader: jspb.BinaryReader): TargetState;
}

export namespace TargetState {
    export type AsObject = {
        status?: TargetState.HealthcheckStatus.AsObject,
        target?: yandex_cloud_apploadbalancer_v1_target_group_pb.Target.AsObject,
    }


    export class HealthcheckStatus extends jspb.Message { 
        clearZoneStatusesList(): void;
        getZoneStatusesList(): Array<TargetState.ZoneHealthcheckStatus>;
        setZoneStatusesList(value: Array<TargetState.ZoneHealthcheckStatus>): HealthcheckStatus;
        addZoneStatuses(value?: TargetState.ZoneHealthcheckStatus, index?: number): TargetState.ZoneHealthcheckStatus;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HealthcheckStatus.AsObject;
        static toObject(includeInstance: boolean, msg: HealthcheckStatus): HealthcheckStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HealthcheckStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HealthcheckStatus;
        static deserializeBinaryFromReader(message: HealthcheckStatus, reader: jspb.BinaryReader): HealthcheckStatus;
    }

    export namespace HealthcheckStatus {
        export type AsObject = {
            zoneStatusesList: Array<TargetState.ZoneHealthcheckStatus.AsObject>,
        }
    }

    export class ZoneHealthcheckStatus extends jspb.Message { 
        getZoneId(): string;
        setZoneId(value: string): ZoneHealthcheckStatus;
        getStatus(): TargetState.Status;
        setStatus(value: TargetState.Status): ZoneHealthcheckStatus;
        getFailedActiveHc(): boolean;
        setFailedActiveHc(value: boolean): ZoneHealthcheckStatus;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ZoneHealthcheckStatus.AsObject;
        static toObject(includeInstance: boolean, msg: ZoneHealthcheckStatus): ZoneHealthcheckStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ZoneHealthcheckStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ZoneHealthcheckStatus;
        static deserializeBinaryFromReader(message: ZoneHealthcheckStatus, reader: jspb.BinaryReader): ZoneHealthcheckStatus;
    }

    export namespace ZoneHealthcheckStatus {
        export type AsObject = {
            zoneId: string,
            status: TargetState.Status,
            failedActiveHc: boolean,
        }
    }


    export enum Status {
    STATUS_UNSPECIFIED = 0,
    HEALTHY = 1,
    PARTIALLY_HEALTHY = 2,
    UNHEALTHY = 3,
    DRAINING = 4,
    TIMEOUT = 5,
    }

}
