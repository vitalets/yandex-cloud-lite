// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/virtual_host.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_apploadbalancer_v1_payload_pb from "../../../../yandex/cloud/apploadbalancer/v1/payload_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class VirtualHost extends jspb.Message { 
    getName(): string;
    setName(value: string): VirtualHost;
    clearAuthorityList(): void;
    getAuthorityList(): Array<string>;
    setAuthorityList(value: Array<string>): VirtualHost;
    addAuthority(value: string, index?: number): string;
    clearRoutesList(): void;
    getRoutesList(): Array<Route>;
    setRoutesList(value: Array<Route>): VirtualHost;
    addRoutes(value?: Route, index?: number): Route;
    clearModifyRequestHeadersList(): void;
    getModifyRequestHeadersList(): Array<HeaderModification>;
    setModifyRequestHeadersList(value: Array<HeaderModification>): VirtualHost;
    addModifyRequestHeaders(value?: HeaderModification, index?: number): HeaderModification;
    clearModifyResponseHeadersList(): void;
    getModifyResponseHeadersList(): Array<HeaderModification>;
    setModifyResponseHeadersList(value: Array<HeaderModification>): VirtualHost;
    addModifyResponseHeaders(value?: HeaderModification, index?: number): HeaderModification;

    hasRouteOptions(): boolean;
    clearRouteOptions(): void;
    getRouteOptions(): RouteOptions | undefined;
    setRouteOptions(value?: RouteOptions): VirtualHost;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VirtualHost.AsObject;
    static toObject(includeInstance: boolean, msg: VirtualHost): VirtualHost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VirtualHost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VirtualHost;
    static deserializeBinaryFromReader(message: VirtualHost, reader: jspb.BinaryReader): VirtualHost;
}

export namespace VirtualHost {
    export type AsObject = {
        name: string,
        authorityList: Array<string>,
        routesList: Array<Route.AsObject>,
        modifyRequestHeadersList: Array<HeaderModification.AsObject>,
        modifyResponseHeadersList: Array<HeaderModification.AsObject>,
        routeOptions?: RouteOptions.AsObject,
    }
}

export class RouteOptions extends jspb.Message { 
    clearModifyRequestHeadersList(): void;
    getModifyRequestHeadersList(): Array<HeaderModification>;
    setModifyRequestHeadersList(value: Array<HeaderModification>): RouteOptions;
    addModifyRequestHeaders(value?: HeaderModification, index?: number): HeaderModification;
    clearModifyResponseHeadersList(): void;
    getModifyResponseHeadersList(): Array<HeaderModification>;
    setModifyResponseHeadersList(value: Array<HeaderModification>): RouteOptions;
    addModifyResponseHeaders(value?: HeaderModification, index?: number): HeaderModification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RouteOptions): RouteOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteOptions;
    static deserializeBinaryFromReader(message: RouteOptions, reader: jspb.BinaryReader): RouteOptions;
}

export namespace RouteOptions {
    export type AsObject = {
        modifyRequestHeadersList: Array<HeaderModification.AsObject>,
        modifyResponseHeadersList: Array<HeaderModification.AsObject>,
    }
}

export class HeaderModification extends jspb.Message { 
    getName(): string;
    setName(value: string): HeaderModification;

    hasAppend(): boolean;
    clearAppend(): void;
    getAppend(): string;
    setAppend(value: string): HeaderModification;

    hasReplace(): boolean;
    clearReplace(): void;
    getReplace(): string;
    setReplace(value: string): HeaderModification;

    hasRemove(): boolean;
    clearRemove(): void;
    getRemove(): boolean;
    setRemove(value: boolean): HeaderModification;

    hasRename(): boolean;
    clearRename(): void;
    getRename(): string;
    setRename(value: string): HeaderModification;

    getOperationCase(): HeaderModification.OperationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderModification.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderModification): HeaderModification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeaderModification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderModification;
    static deserializeBinaryFromReader(message: HeaderModification, reader: jspb.BinaryReader): HeaderModification;
}

export namespace HeaderModification {
    export type AsObject = {
        name: string,
        append: string,
        replace: string,
        remove: boolean,
        rename: string,
    }

    export enum OperationCase {
        OPERATION_NOT_SET = 0,
        APPEND = 2,
        REPLACE = 3,
        REMOVE = 4,
        RENAME = 5,
    }

}

export class Route extends jspb.Message { 
    getName(): string;
    setName(value: string): Route;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HttpRoute | undefined;
    setHttp(value?: HttpRoute): Route;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): GrpcRoute | undefined;
    setGrpc(value?: GrpcRoute): Route;

    hasRouteOptions(): boolean;
    clearRouteOptions(): void;
    getRouteOptions(): RouteOptions | undefined;
    setRouteOptions(value?: RouteOptions): Route;

    getRouteCase(): Route.RouteCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Route.AsObject;
    static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Route;
    static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
    export type AsObject = {
        name: string,
        http?: HttpRoute.AsObject,
        grpc?: GrpcRoute.AsObject,
        routeOptions?: RouteOptions.AsObject,
    }

    export enum RouteCase {
        ROUTE_NOT_SET = 0,
        HTTP = 2,
        GRPC = 3,
    }

}

export class HttpRoute extends jspb.Message { 

    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): HttpRouteMatch | undefined;
    setMatch(value?: HttpRouteMatch): HttpRoute;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): HttpRouteAction | undefined;
    setRoute(value?: HttpRouteAction): HttpRoute;

    hasRedirect(): boolean;
    clearRedirect(): void;
    getRedirect(): RedirectAction | undefined;
    setRedirect(value?: RedirectAction): HttpRoute;

    hasDirectResponse(): boolean;
    clearDirectResponse(): void;
    getDirectResponse(): DirectResponseAction | undefined;
    setDirectResponse(value?: DirectResponseAction): HttpRoute;

    getActionCase(): HttpRoute.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpRoute.AsObject;
    static toObject(includeInstance: boolean, msg: HttpRoute): HttpRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpRoute;
    static deserializeBinaryFromReader(message: HttpRoute, reader: jspb.BinaryReader): HttpRoute;
}

export namespace HttpRoute {
    export type AsObject = {
        match?: HttpRouteMatch.AsObject,
        route?: HttpRouteAction.AsObject,
        redirect?: RedirectAction.AsObject,
        directResponse?: DirectResponseAction.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        ROUTE = 2,
        REDIRECT = 3,
        DIRECT_RESPONSE = 4,
    }

}

export class GrpcRoute extends jspb.Message { 

    hasMatch(): boolean;
    clearMatch(): void;
    getMatch(): GrpcRouteMatch | undefined;
    setMatch(value?: GrpcRouteMatch): GrpcRoute;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): GrpcRouteAction | undefined;
    setRoute(value?: GrpcRouteAction): GrpcRoute;

    hasStatusResponse(): boolean;
    clearStatusResponse(): void;
    getStatusResponse(): GrpcStatusResponseAction | undefined;
    setStatusResponse(value?: GrpcStatusResponseAction): GrpcRoute;

    getActionCase(): GrpcRoute.ActionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcRoute.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcRoute): GrpcRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcRoute;
    static deserializeBinaryFromReader(message: GrpcRoute, reader: jspb.BinaryReader): GrpcRoute;
}

export namespace GrpcRoute {
    export type AsObject = {
        match?: GrpcRouteMatch.AsObject,
        route?: GrpcRouteAction.AsObject,
        statusResponse?: GrpcStatusResponseAction.AsObject,
    }

    export enum ActionCase {
        ACTION_NOT_SET = 0,
        ROUTE = 2,
        STATUS_RESPONSE = 3,
    }

}

export class HttpRouteMatch extends jspb.Message { 
    clearHttpMethodList(): void;
    getHttpMethodList(): Array<string>;
    setHttpMethodList(value: Array<string>): HttpRouteMatch;
    addHttpMethod(value: string, index?: number): string;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): StringMatch | undefined;
    setPath(value?: StringMatch): HttpRouteMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpRouteMatch.AsObject;
    static toObject(includeInstance: boolean, msg: HttpRouteMatch): HttpRouteMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpRouteMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpRouteMatch;
    static deserializeBinaryFromReader(message: HttpRouteMatch, reader: jspb.BinaryReader): HttpRouteMatch;
}

export namespace HttpRouteMatch {
    export type AsObject = {
        httpMethodList: Array<string>,
        path?: StringMatch.AsObject,
    }
}

export class GrpcRouteMatch extends jspb.Message { 

    hasFqmn(): boolean;
    clearFqmn(): void;
    getFqmn(): StringMatch | undefined;
    setFqmn(value?: StringMatch): GrpcRouteMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcRouteMatch.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcRouteMatch): GrpcRouteMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcRouteMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcRouteMatch;
    static deserializeBinaryFromReader(message: GrpcRouteMatch, reader: jspb.BinaryReader): GrpcRouteMatch;
}

export namespace GrpcRouteMatch {
    export type AsObject = {
        fqmn?: StringMatch.AsObject,
    }
}

export class StringMatch extends jspb.Message { 

    hasExactMatch(): boolean;
    clearExactMatch(): void;
    getExactMatch(): string;
    setExactMatch(value: string): StringMatch;

    hasPrefixMatch(): boolean;
    clearPrefixMatch(): void;
    getPrefixMatch(): string;
    setPrefixMatch(value: string): StringMatch;

    getMatchCase(): StringMatch.MatchCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringMatch.AsObject;
    static toObject(includeInstance: boolean, msg: StringMatch): StringMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringMatch;
    static deserializeBinaryFromReader(message: StringMatch, reader: jspb.BinaryReader): StringMatch;
}

export namespace StringMatch {
    export type AsObject = {
        exactMatch: string,
        prefixMatch: string,
    }

    export enum MatchCase {
        MATCH_NOT_SET = 0,
        EXACT_MATCH = 1,
        PREFIX_MATCH = 2,
    }

}

export class RedirectAction extends jspb.Message { 
    getReplaceScheme(): string;
    setReplaceScheme(value: string): RedirectAction;
    getReplaceHost(): string;
    setReplaceHost(value: string): RedirectAction;
    getReplacePort(): number;
    setReplacePort(value: number): RedirectAction;

    hasReplacePath(): boolean;
    clearReplacePath(): void;
    getReplacePath(): string;
    setReplacePath(value: string): RedirectAction;

    hasReplacePrefix(): boolean;
    clearReplacePrefix(): void;
    getReplacePrefix(): string;
    setReplacePrefix(value: string): RedirectAction;
    getRemoveQuery(): boolean;
    setRemoveQuery(value: boolean): RedirectAction;
    getResponseCode(): RedirectAction.RedirectResponseCode;
    setResponseCode(value: RedirectAction.RedirectResponseCode): RedirectAction;

    getPathCase(): RedirectAction.PathCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedirectAction.AsObject;
    static toObject(includeInstance: boolean, msg: RedirectAction): RedirectAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedirectAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedirectAction;
    static deserializeBinaryFromReader(message: RedirectAction, reader: jspb.BinaryReader): RedirectAction;
}

export namespace RedirectAction {
    export type AsObject = {
        replaceScheme: string,
        replaceHost: string,
        replacePort: number,
        replacePath: string,
        replacePrefix: string,
        removeQuery: boolean,
        responseCode: RedirectAction.RedirectResponseCode,
    }

    export enum RedirectResponseCode {
    MOVED_PERMANENTLY = 0,
    FOUND = 1,
    SEE_OTHER = 2,
    TEMPORARY_REDIRECT = 3,
    PERMANENT_REDIRECT = 4,
    }


    export enum PathCase {
        PATH_NOT_SET = 0,
        REPLACE_PATH = 4,
        REPLACE_PREFIX = 5,
    }

}

export class DirectResponseAction extends jspb.Message { 
    getStatus(): number;
    setStatus(value: number): DirectResponseAction;

    hasBody(): boolean;
    clearBody(): void;
    getBody(): yandex_cloud_apploadbalancer_v1_payload_pb.Payload | undefined;
    setBody(value?: yandex_cloud_apploadbalancer_v1_payload_pb.Payload): DirectResponseAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DirectResponseAction.AsObject;
    static toObject(includeInstance: boolean, msg: DirectResponseAction): DirectResponseAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DirectResponseAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DirectResponseAction;
    static deserializeBinaryFromReader(message: DirectResponseAction, reader: jspb.BinaryReader): DirectResponseAction;
}

export namespace DirectResponseAction {
    export type AsObject = {
        status: number,
        body?: yandex_cloud_apploadbalancer_v1_payload_pb.Payload.AsObject,
    }
}

export class GrpcStatusResponseAction extends jspb.Message { 
    getStatus(): GrpcStatusResponseAction.Status;
    setStatus(value: GrpcStatusResponseAction.Status): GrpcStatusResponseAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcStatusResponseAction.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcStatusResponseAction): GrpcStatusResponseAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcStatusResponseAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcStatusResponseAction;
    static deserializeBinaryFromReader(message: GrpcStatusResponseAction, reader: jspb.BinaryReader): GrpcStatusResponseAction;
}

export namespace GrpcStatusResponseAction {
    export type AsObject = {
        status: GrpcStatusResponseAction.Status,
    }

    export enum Status {
    OK = 0,
    INVALID_ARGUMENT = 1,
    NOT_FOUND = 2,
    PERMISSION_DENIED = 3,
    UNAUTHENTICATED = 4,
    UNIMPLEMENTED = 5,
    INTERNAL = 6,
    UNAVAILABLE = 7,
    }

}

export class HttpRouteAction extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): HttpRouteAction;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): HttpRouteAction;

    hasIdleTimeout(): boolean;
    clearIdleTimeout(): void;
    getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setIdleTimeout(value?: google_protobuf_duration_pb.Duration): HttpRouteAction;

    hasHostRewrite(): boolean;
    clearHostRewrite(): void;
    getHostRewrite(): string;
    setHostRewrite(value: string): HttpRouteAction;

    hasAutoHostRewrite(): boolean;
    clearAutoHostRewrite(): void;
    getAutoHostRewrite(): boolean;
    setAutoHostRewrite(value: boolean): HttpRouteAction;
    getPrefixRewrite(): string;
    setPrefixRewrite(value: string): HttpRouteAction;
    clearUpgradeTypesList(): void;
    getUpgradeTypesList(): Array<string>;
    setUpgradeTypesList(value: Array<string>): HttpRouteAction;
    addUpgradeTypes(value: string, index?: number): string;

    getHostRewriteSpecifierCase(): HttpRouteAction.HostRewriteSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpRouteAction.AsObject;
    static toObject(includeInstance: boolean, msg: HttpRouteAction): HttpRouteAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpRouteAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpRouteAction;
    static deserializeBinaryFromReader(message: HttpRouteAction, reader: jspb.BinaryReader): HttpRouteAction;
}

export namespace HttpRouteAction {
    export type AsObject = {
        backendGroupId: string,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        hostRewrite: string,
        autoHostRewrite: boolean,
        prefixRewrite: string,
        upgradeTypesList: Array<string>,
    }

    export enum HostRewriteSpecifierCase {
        HOST_REWRITE_SPECIFIER_NOT_SET = 0,
        HOST_REWRITE = 4,
        AUTO_HOST_REWRITE = 5,
    }

}

export class GrpcRouteAction extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): GrpcRouteAction;

    hasMaxTimeout(): boolean;
    clearMaxTimeout(): void;
    getMaxTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setMaxTimeout(value?: google_protobuf_duration_pb.Duration): GrpcRouteAction;

    hasIdleTimeout(): boolean;
    clearIdleTimeout(): void;
    getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setIdleTimeout(value?: google_protobuf_duration_pb.Duration): GrpcRouteAction;

    hasHostRewrite(): boolean;
    clearHostRewrite(): void;
    getHostRewrite(): string;
    setHostRewrite(value: string): GrpcRouteAction;

    hasAutoHostRewrite(): boolean;
    clearAutoHostRewrite(): void;
    getAutoHostRewrite(): boolean;
    setAutoHostRewrite(value: boolean): GrpcRouteAction;

    getHostRewriteSpecifierCase(): GrpcRouteAction.HostRewriteSpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcRouteAction.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcRouteAction): GrpcRouteAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcRouteAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcRouteAction;
    static deserializeBinaryFromReader(message: GrpcRouteAction, reader: jspb.BinaryReader): GrpcRouteAction;
}

export namespace GrpcRouteAction {
    export type AsObject = {
        backendGroupId: string,
        maxTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        hostRewrite: string,
        autoHostRewrite: boolean,
    }

    export enum HostRewriteSpecifierCase {
        HOST_REWRITE_SPECIFIER_NOT_SET = 0,
        HOST_REWRITE = 4,
        AUTO_HOST_REWRITE = 5,
    }

}
