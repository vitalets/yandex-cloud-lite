// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SecondaryHostnames extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): SecondaryHostnames;
    addValues(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecondaryHostnames.AsObject;
    static toObject(includeInstance: boolean, msg: SecondaryHostnames): SecondaryHostnames.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecondaryHostnames, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecondaryHostnames;
    static deserializeBinaryFromReader(message: SecondaryHostnames, reader: jspb.BinaryReader): SecondaryHostnames;
}

export namespace SecondaryHostnames {
    export type AsObject = {
        valuesList: Array<string>,
    }
}

export class Resource extends jspb.Message { 
    getId(): string;
    setId(value: string): Resource;
    getFolderId(): string;
    setFolderId(value: string): Resource;
    getCname(): string;
    setCname(value: string): Resource;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Resource;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Resource;
    getActive(): boolean;
    setActive(value: boolean): Resource;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): ResourceOptions | undefined;
    setOptions(value?: ResourceOptions): Resource;
    clearSecondaryHostnamesList(): void;
    getSecondaryHostnamesList(): Array<string>;
    setSecondaryHostnamesList(value: Array<string>): Resource;
    addSecondaryHostnames(value: string, index?: number): string;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): Resource;
    getOriginGroupName(): string;
    setOriginGroupName(value: string): Resource;
    getOriginProtocol(): OriginProtocol;
    setOriginProtocol(value: OriginProtocol): Resource;

    hasSslCertificate(): boolean;
    clearSslCertificate(): void;
    getSslCertificate(): SSLCertificate | undefined;
    setSslCertificate(value?: SSLCertificate): Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
    export type AsObject = {
        id: string,
        folderId: string,
        cname: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        active: boolean,
        options?: ResourceOptions.AsObject,
        secondaryHostnamesList: Array<string>,
        originGroupId: number,
        originGroupName: string,
        originProtocol: OriginProtocol,
        sslCertificate?: SSLCertificate.AsObject,
    }
}

export class ResourceOptions extends jspb.Message { 

    hasDisableCache(): boolean;
    clearDisableCache(): void;
    getDisableCache(): ResourceOptions.BoolOption | undefined;
    setDisableCache(value?: ResourceOptions.BoolOption): ResourceOptions;

    hasEdgeCacheSettings(): boolean;
    clearEdgeCacheSettings(): void;
    getEdgeCacheSettings(): ResourceOptions.EdgeCacheSettings | undefined;
    setEdgeCacheSettings(value?: ResourceOptions.EdgeCacheSettings): ResourceOptions;

    hasBrowserCacheSettings(): boolean;
    clearBrowserCacheSettings(): void;
    getBrowserCacheSettings(): ResourceOptions.Int64Option | undefined;
    setBrowserCacheSettings(value?: ResourceOptions.Int64Option): ResourceOptions;

    hasCacheHttpHeaders(): boolean;
    clearCacheHttpHeaders(): void;
    getCacheHttpHeaders(): ResourceOptions.StringsListOption | undefined;
    setCacheHttpHeaders(value?: ResourceOptions.StringsListOption): ResourceOptions;

    hasQueryParamsOptions(): boolean;
    clearQueryParamsOptions(): void;
    getQueryParamsOptions(): ResourceOptions.QueryParamsOptions | undefined;
    setQueryParamsOptions(value?: ResourceOptions.QueryParamsOptions): ResourceOptions;

    hasSlice(): boolean;
    clearSlice(): void;
    getSlice(): ResourceOptions.BoolOption | undefined;
    setSlice(value?: ResourceOptions.BoolOption): ResourceOptions;

    hasCompressionOptions(): boolean;
    clearCompressionOptions(): void;
    getCompressionOptions(): ResourceOptions.CompressionOptions | undefined;
    setCompressionOptions(value?: ResourceOptions.CompressionOptions): ResourceOptions;

    hasRedirectOptions(): boolean;
    clearRedirectOptions(): void;
    getRedirectOptions(): ResourceOptions.RedirectOptions | undefined;
    setRedirectOptions(value?: ResourceOptions.RedirectOptions): ResourceOptions;

    hasHostOptions(): boolean;
    clearHostOptions(): void;
    getHostOptions(): ResourceOptions.HostOptions | undefined;
    setHostOptions(value?: ResourceOptions.HostOptions): ResourceOptions;

    hasStaticHeaders(): boolean;
    clearStaticHeaders(): void;
    getStaticHeaders(): ResourceOptions.StringsMapOption | undefined;
    setStaticHeaders(value?: ResourceOptions.StringsMapOption): ResourceOptions;

    hasCors(): boolean;
    clearCors(): void;
    getCors(): ResourceOptions.StringsListOption | undefined;
    setCors(value?: ResourceOptions.StringsListOption): ResourceOptions;

    hasStale(): boolean;
    clearStale(): void;
    getStale(): ResourceOptions.StringsListOption | undefined;
    setStale(value?: ResourceOptions.StringsListOption): ResourceOptions;

    hasAllowedHttpMethods(): boolean;
    clearAllowedHttpMethods(): void;
    getAllowedHttpMethods(): ResourceOptions.StringsListOption | undefined;
    setAllowedHttpMethods(value?: ResourceOptions.StringsListOption): ResourceOptions;

    hasProxyCacheMethodsSet(): boolean;
    clearProxyCacheMethodsSet(): void;
    getProxyCacheMethodsSet(): ResourceOptions.BoolOption | undefined;
    setProxyCacheMethodsSet(value?: ResourceOptions.BoolOption): ResourceOptions;

    hasDisableProxyForceRanges(): boolean;
    clearDisableProxyForceRanges(): void;
    getDisableProxyForceRanges(): ResourceOptions.BoolOption | undefined;
    setDisableProxyForceRanges(value?: ResourceOptions.BoolOption): ResourceOptions;

    hasStaticRequestHeaders(): boolean;
    clearStaticRequestHeaders(): void;
    getStaticRequestHeaders(): ResourceOptions.StringsMapOption | undefined;
    setStaticRequestHeaders(value?: ResourceOptions.StringsMapOption): ResourceOptions;

    hasCustomServerName(): boolean;
    clearCustomServerName(): void;
    getCustomServerName(): ResourceOptions.StringOption | undefined;
    setCustomServerName(value?: ResourceOptions.StringOption): ResourceOptions;

    hasIgnoreCookie(): boolean;
    clearIgnoreCookie(): void;
    getIgnoreCookie(): ResourceOptions.BoolOption | undefined;
    setIgnoreCookie(value?: ResourceOptions.BoolOption): ResourceOptions;

    hasRewrite(): boolean;
    clearRewrite(): void;
    getRewrite(): ResourceOptions.RewriteOption | undefined;
    setRewrite(value?: ResourceOptions.RewriteOption): ResourceOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceOptions): ResourceOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceOptions;
    static deserializeBinaryFromReader(message: ResourceOptions, reader: jspb.BinaryReader): ResourceOptions;
}

export namespace ResourceOptions {
    export type AsObject = {
        disableCache?: ResourceOptions.BoolOption.AsObject,
        edgeCacheSettings?: ResourceOptions.EdgeCacheSettings.AsObject,
        browserCacheSettings?: ResourceOptions.Int64Option.AsObject,
        cacheHttpHeaders?: ResourceOptions.StringsListOption.AsObject,
        queryParamsOptions?: ResourceOptions.QueryParamsOptions.AsObject,
        slice?: ResourceOptions.BoolOption.AsObject,
        compressionOptions?: ResourceOptions.CompressionOptions.AsObject,
        redirectOptions?: ResourceOptions.RedirectOptions.AsObject,
        hostOptions?: ResourceOptions.HostOptions.AsObject,
        staticHeaders?: ResourceOptions.StringsMapOption.AsObject,
        cors?: ResourceOptions.StringsListOption.AsObject,
        stale?: ResourceOptions.StringsListOption.AsObject,
        allowedHttpMethods?: ResourceOptions.StringsListOption.AsObject,
        proxyCacheMethodsSet?: ResourceOptions.BoolOption.AsObject,
        disableProxyForceRanges?: ResourceOptions.BoolOption.AsObject,
        staticRequestHeaders?: ResourceOptions.StringsMapOption.AsObject,
        customServerName?: ResourceOptions.StringOption.AsObject,
        ignoreCookie?: ResourceOptions.BoolOption.AsObject,
        rewrite?: ResourceOptions.RewriteOption.AsObject,
    }


    export class BoolOption extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): BoolOption;
        getValue(): boolean;
        setValue(value: boolean): BoolOption;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BoolOption.AsObject;
        static toObject(includeInstance: boolean, msg: BoolOption): BoolOption.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BoolOption, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BoolOption;
        static deserializeBinaryFromReader(message: BoolOption, reader: jspb.BinaryReader): BoolOption;
    }

    export namespace BoolOption {
        export type AsObject = {
            enabled: boolean,
            value: boolean,
        }
    }

    export class StringOption extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): StringOption;
        getValue(): string;
        setValue(value: string): StringOption;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StringOption.AsObject;
        static toObject(includeInstance: boolean, msg: StringOption): StringOption.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StringOption, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StringOption;
        static deserializeBinaryFromReader(message: StringOption, reader: jspb.BinaryReader): StringOption;
    }

    export namespace StringOption {
        export type AsObject = {
            enabled: boolean,
            value: string,
        }
    }

    export class Int64Option extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): Int64Option;
        getValue(): number;
        setValue(value: number): Int64Option;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Int64Option.AsObject;
        static toObject(includeInstance: boolean, msg: Int64Option): Int64Option.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Int64Option, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Int64Option;
        static deserializeBinaryFromReader(message: Int64Option, reader: jspb.BinaryReader): Int64Option;
    }

    export namespace Int64Option {
        export type AsObject = {
            enabled: boolean,
            value: number,
        }
    }

    export class StringsListOption extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): StringsListOption;
        clearValueList(): void;
        getValueList(): Array<string>;
        setValueList(value: Array<string>): StringsListOption;
        addValue(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StringsListOption.AsObject;
        static toObject(includeInstance: boolean, msg: StringsListOption): StringsListOption.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StringsListOption, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StringsListOption;
        static deserializeBinaryFromReader(message: StringsListOption, reader: jspb.BinaryReader): StringsListOption;
    }

    export namespace StringsListOption {
        export type AsObject = {
            enabled: boolean,
            valueList: Array<string>,
        }
    }

    export class StringsMapOption extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): StringsMapOption;

        getValueMap(): jspb.Map<string, string>;
        clearValueMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StringsMapOption.AsObject;
        static toObject(includeInstance: boolean, msg: StringsMapOption): StringsMapOption.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StringsMapOption, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StringsMapOption;
        static deserializeBinaryFromReader(message: StringsMapOption, reader: jspb.BinaryReader): StringsMapOption;
    }

    export namespace StringsMapOption {
        export type AsObject = {
            enabled: boolean,

            valueMap: Array<[string, string]>,
        }
    }

    export class CachingTimes extends jspb.Message { 
        getSimpleValue(): number;
        setSimpleValue(value: number): CachingTimes;

        getCustomValuesMap(): jspb.Map<string, number>;
        clearCustomValuesMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CachingTimes.AsObject;
        static toObject(includeInstance: boolean, msg: CachingTimes): CachingTimes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CachingTimes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CachingTimes;
        static deserializeBinaryFromReader(message: CachingTimes, reader: jspb.BinaryReader): CachingTimes;
    }

    export namespace CachingTimes {
        export type AsObject = {
            simpleValue: number,

            customValuesMap: Array<[string, number]>,
        }
    }

    export class EdgeCacheSettings extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): EdgeCacheSettings;

        hasValue(): boolean;
        clearValue(): void;
        getValue(): ResourceOptions.CachingTimes | undefined;
        setValue(value?: ResourceOptions.CachingTimes): EdgeCacheSettings;

        hasDefaultValue(): boolean;
        clearDefaultValue(): void;
        getDefaultValue(): number;
        setDefaultValue(value: number): EdgeCacheSettings;

        getValuesVariantCase(): EdgeCacheSettings.ValuesVariantCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EdgeCacheSettings.AsObject;
        static toObject(includeInstance: boolean, msg: EdgeCacheSettings): EdgeCacheSettings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EdgeCacheSettings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EdgeCacheSettings;
        static deserializeBinaryFromReader(message: EdgeCacheSettings, reader: jspb.BinaryReader): EdgeCacheSettings;
    }

    export namespace EdgeCacheSettings {
        export type AsObject = {
            enabled: boolean,
            value?: ResourceOptions.CachingTimes.AsObject,
            defaultValue: number,
        }

        export enum ValuesVariantCase {
            VALUES_VARIANT_NOT_SET = 0,
            VALUE = 2,
            DEFAULT_VALUE = 3,
        }

    }

    export class StringVariableMapOption extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): StringVariableMapOption;

        getValueMap(): jspb.Map<string, ResourceOptions.StringVariableMapOption.OneofString>;
        clearValueMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StringVariableMapOption.AsObject;
        static toObject(includeInstance: boolean, msg: StringVariableMapOption): StringVariableMapOption.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StringVariableMapOption, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StringVariableMapOption;
        static deserializeBinaryFromReader(message: StringVariableMapOption, reader: jspb.BinaryReader): StringVariableMapOption;
    }

    export namespace StringVariableMapOption {
        export type AsObject = {
            enabled: boolean,

            valueMap: Array<[string, ResourceOptions.StringVariableMapOption.OneofString.AsObject]>,
        }


        export class OneofString extends jspb.Message { 

            hasValue(): boolean;
            clearValue(): void;
            getValue(): ResourceOptions.StringOption | undefined;
            setValue(value?: ResourceOptions.StringOption): OneofString;

            hasValues(): boolean;
            clearValues(): void;
            getValues(): ResourceOptions.StringsListOption | undefined;
            setValues(value?: ResourceOptions.StringsListOption): OneofString;

            getStringOptionCase(): OneofString.StringOptionCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): OneofString.AsObject;
            static toObject(includeInstance: boolean, msg: OneofString): OneofString.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: OneofString, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): OneofString;
            static deserializeBinaryFromReader(message: OneofString, reader: jspb.BinaryReader): OneofString;
        }

        export namespace OneofString {
            export type AsObject = {
                value?: ResourceOptions.StringOption.AsObject,
                values?: ResourceOptions.StringsListOption.AsObject,
            }

            export enum StringOptionCase {
                STRING_OPTION_NOT_SET = 0,
                VALUE = 1,
                VALUES = 2,
            }

        }

    }

    export class QueryParamsOptions extends jspb.Message { 

        hasIgnoreQueryString(): boolean;
        clearIgnoreQueryString(): void;
        getIgnoreQueryString(): ResourceOptions.BoolOption | undefined;
        setIgnoreQueryString(value?: ResourceOptions.BoolOption): QueryParamsOptions;

        hasQueryParamsWhitelist(): boolean;
        clearQueryParamsWhitelist(): void;
        getQueryParamsWhitelist(): ResourceOptions.StringsListOption | undefined;
        setQueryParamsWhitelist(value?: ResourceOptions.StringsListOption): QueryParamsOptions;

        hasQueryParamsBlacklist(): boolean;
        clearQueryParamsBlacklist(): void;
        getQueryParamsBlacklist(): ResourceOptions.StringsListOption | undefined;
        setQueryParamsBlacklist(value?: ResourceOptions.StringsListOption): QueryParamsOptions;

        getQueryParamsVariantCase(): QueryParamsOptions.QueryParamsVariantCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): QueryParamsOptions.AsObject;
        static toObject(includeInstance: boolean, msg: QueryParamsOptions): QueryParamsOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: QueryParamsOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): QueryParamsOptions;
        static deserializeBinaryFromReader(message: QueryParamsOptions, reader: jspb.BinaryReader): QueryParamsOptions;
    }

    export namespace QueryParamsOptions {
        export type AsObject = {
            ignoreQueryString?: ResourceOptions.BoolOption.AsObject,
            queryParamsWhitelist?: ResourceOptions.StringsListOption.AsObject,
            queryParamsBlacklist?: ResourceOptions.StringsListOption.AsObject,
        }

        export enum QueryParamsVariantCase {
            QUERY_PARAMS_VARIANT_NOT_SET = 0,
            IGNORE_QUERY_STRING = 1,
            QUERY_PARAMS_WHITELIST = 2,
            QUERY_PARAMS_BLACKLIST = 3,
        }

    }

    export class RedirectOptions extends jspb.Message { 

        hasRedirectHttpToHttps(): boolean;
        clearRedirectHttpToHttps(): void;
        getRedirectHttpToHttps(): ResourceOptions.BoolOption | undefined;
        setRedirectHttpToHttps(value?: ResourceOptions.BoolOption): RedirectOptions;

        hasRedirectHttpsToHttp(): boolean;
        clearRedirectHttpsToHttp(): void;
        getRedirectHttpsToHttp(): ResourceOptions.BoolOption | undefined;
        setRedirectHttpsToHttp(value?: ResourceOptions.BoolOption): RedirectOptions;

        getRedirectVariantCase(): RedirectOptions.RedirectVariantCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RedirectOptions.AsObject;
        static toObject(includeInstance: boolean, msg: RedirectOptions): RedirectOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RedirectOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RedirectOptions;
        static deserializeBinaryFromReader(message: RedirectOptions, reader: jspb.BinaryReader): RedirectOptions;
    }

    export namespace RedirectOptions {
        export type AsObject = {
            redirectHttpToHttps?: ResourceOptions.BoolOption.AsObject,
            redirectHttpsToHttp?: ResourceOptions.BoolOption.AsObject,
        }

        export enum RedirectVariantCase {
            REDIRECT_VARIANT_NOT_SET = 0,
            REDIRECT_HTTP_TO_HTTPS = 1,
            REDIRECT_HTTPS_TO_HTTP = 2,
        }

    }

    export class HostOptions extends jspb.Message { 

        hasHost(): boolean;
        clearHost(): void;
        getHost(): ResourceOptions.StringOption | undefined;
        setHost(value?: ResourceOptions.StringOption): HostOptions;

        hasForwardHostHeader(): boolean;
        clearForwardHostHeader(): void;
        getForwardHostHeader(): ResourceOptions.BoolOption | undefined;
        setForwardHostHeader(value?: ResourceOptions.BoolOption): HostOptions;

        getHostVariantCase(): HostOptions.HostVariantCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HostOptions.AsObject;
        static toObject(includeInstance: boolean, msg: HostOptions): HostOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HostOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HostOptions;
        static deserializeBinaryFromReader(message: HostOptions, reader: jspb.BinaryReader): HostOptions;
    }

    export namespace HostOptions {
        export type AsObject = {
            host?: ResourceOptions.StringOption.AsObject,
            forwardHostHeader?: ResourceOptions.BoolOption.AsObject,
        }

        export enum HostVariantCase {
            HOST_VARIANT_NOT_SET = 0,
            HOST = 1,
            FORWARD_HOST_HEADER = 2,
        }

    }

    export class CompressionOptions extends jspb.Message { 

        hasFetchCompressed(): boolean;
        clearFetchCompressed(): void;
        getFetchCompressed(): ResourceOptions.BoolOption | undefined;
        setFetchCompressed(value?: ResourceOptions.BoolOption): CompressionOptions;

        hasGzipOn(): boolean;
        clearGzipOn(): void;
        getGzipOn(): ResourceOptions.BoolOption | undefined;
        setGzipOn(value?: ResourceOptions.BoolOption): CompressionOptions;

        hasBrotliCompression(): boolean;
        clearBrotliCompression(): void;
        getBrotliCompression(): ResourceOptions.StringsListOption | undefined;
        setBrotliCompression(value?: ResourceOptions.StringsListOption): CompressionOptions;

        getCompressionVariantCase(): CompressionOptions.CompressionVariantCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CompressionOptions.AsObject;
        static toObject(includeInstance: boolean, msg: CompressionOptions): CompressionOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CompressionOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CompressionOptions;
        static deserializeBinaryFromReader(message: CompressionOptions, reader: jspb.BinaryReader): CompressionOptions;
    }

    export namespace CompressionOptions {
        export type AsObject = {
            fetchCompressed?: ResourceOptions.BoolOption.AsObject,
            gzipOn?: ResourceOptions.BoolOption.AsObject,
            brotliCompression?: ResourceOptions.StringsListOption.AsObject,
        }

        export enum CompressionVariantCase {
            COMPRESSION_VARIANT_NOT_SET = 0,
            FETCH_COMPRESSED = 1,
            GZIP_ON = 2,
            BROTLI_COMPRESSION = 3,
        }

    }

    export class RewriteOption extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): RewriteOption;
        getBody(): string;
        setBody(value: string): RewriteOption;
        getFlag(): RewriteFlag;
        setFlag(value: RewriteFlag): RewriteOption;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RewriteOption.AsObject;
        static toObject(includeInstance: boolean, msg: RewriteOption): RewriteOption.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RewriteOption, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RewriteOption;
        static deserializeBinaryFromReader(message: RewriteOption, reader: jspb.BinaryReader): RewriteOption;
    }

    export namespace RewriteOption {
        export type AsObject = {
            enabled: boolean,
            body: string,
            flag: RewriteFlag,
        }
    }

}

export class SSLTargetCertificate extends jspb.Message { 
    getType(): SSLCertificateType;
    setType(value: SSLCertificateType): SSLTargetCertificate;

    hasData(): boolean;
    clearData(): void;
    getData(): SSLCertificateData | undefined;
    setData(value?: SSLCertificateData): SSLTargetCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SSLTargetCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: SSLTargetCertificate): SSLTargetCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SSLTargetCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SSLTargetCertificate;
    static deserializeBinaryFromReader(message: SSLTargetCertificate, reader: jspb.BinaryReader): SSLTargetCertificate;
}

export namespace SSLTargetCertificate {
    export type AsObject = {
        type: SSLCertificateType,
        data?: SSLCertificateData.AsObject,
    }
}

export class SSLCertificate extends jspb.Message { 
    getType(): SSLCertificateType;
    setType(value: SSLCertificateType): SSLCertificate;
    getStatus(): SSLCertificateStatus;
    setStatus(value: SSLCertificateStatus): SSLCertificate;

    hasData(): boolean;
    clearData(): void;
    getData(): SSLCertificateData | undefined;
    setData(value?: SSLCertificateData): SSLCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SSLCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: SSLCertificate): SSLCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SSLCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SSLCertificate;
    static deserializeBinaryFromReader(message: SSLCertificate, reader: jspb.BinaryReader): SSLCertificate;
}

export namespace SSLCertificate {
    export type AsObject = {
        type: SSLCertificateType,
        status: SSLCertificateStatus,
        data?: SSLCertificateData.AsObject,
    }
}

export class SSLCertificateData extends jspb.Message { 

    hasCm(): boolean;
    clearCm(): void;
    getCm(): SSLCertificateCMData | undefined;
    setCm(value?: SSLCertificateCMData): SSLCertificateData;

    getSslCertificateDataVariantCase(): SSLCertificateData.SslCertificateDataVariantCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SSLCertificateData.AsObject;
    static toObject(includeInstance: boolean, msg: SSLCertificateData): SSLCertificateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SSLCertificateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SSLCertificateData;
    static deserializeBinaryFromReader(message: SSLCertificateData, reader: jspb.BinaryReader): SSLCertificateData;
}

export namespace SSLCertificateData {
    export type AsObject = {
        cm?: SSLCertificateCMData.AsObject,
    }

    export enum SslCertificateDataVariantCase {
        SSL_CERTIFICATE_DATA_VARIANT_NOT_SET = 0,
        CM = 1,
    }

}

export class SSLCertificateCMData extends jspb.Message { 
    getId(): string;
    setId(value: string): SSLCertificateCMData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SSLCertificateCMData.AsObject;
    static toObject(includeInstance: boolean, msg: SSLCertificateCMData): SSLCertificateCMData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SSLCertificateCMData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SSLCertificateCMData;
    static deserializeBinaryFromReader(message: SSLCertificateCMData, reader: jspb.BinaryReader): SSLCertificateCMData;
}

export namespace SSLCertificateCMData {
    export type AsObject = {
        id: string,
    }
}

export enum OriginProtocol {
    ORIGIN_PROTOCOL_UNSPECIFIED = 0,
    HTTP = 1,
    HTTPS = 2,
    MATCH = 3,
}

export enum RewriteFlag {
    REWRITE_FLAG_UNSPECIFIED = 0,
    LAST = 1,
    BREAK = 2,
    REDIRECT = 3,
    PERMANENT = 4,
}

export enum SSLCertificateType {
    SSL_CERTIFICATE_TYPE_UNSPECIFIED = 0,
    DONT_USE = 1,
    LETS_ENCRYPT_GCORE = 2,
    CM = 3,
}

export enum SSLCertificateStatus {
    SSL_CERTIFICATE_STATUS_UNSPECIFIED = 0,
    READY = 1,
    CREATING = 2,
}
