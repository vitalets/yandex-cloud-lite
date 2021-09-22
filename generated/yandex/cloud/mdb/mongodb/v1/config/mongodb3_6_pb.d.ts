// package: yandex.cloud.mdb.mongodb.v1.config
// file: yandex/cloud/mdb/mongodb/v1/config/mongodb3_6.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MongodConfig3_6 extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongodConfig3_6.Storage | undefined;
    setStorage(value?: MongodConfig3_6.Storage): MongodConfig3_6;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongodConfig3_6.OperationProfiling | undefined;
    setOperationProfiling(value?: MongodConfig3_6.OperationProfiling): MongodConfig3_6;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongodConfig3_6.Network | undefined;
    setNet(value?: MongodConfig3_6.Network): MongodConfig3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfig3_6.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfig3_6): MongodConfig3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfig3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfig3_6;
    static deserializeBinaryFromReader(message: MongodConfig3_6, reader: jspb.BinaryReader): MongodConfig3_6;
}

export namespace MongodConfig3_6 {
    export type AsObject = {
        storage?: MongodConfig3_6.Storage.AsObject,
        operationProfiling?: MongodConfig3_6.OperationProfiling.AsObject,
        net?: MongodConfig3_6.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongodConfig3_6.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongodConfig3_6.Storage.WiredTiger): Storage;

        hasJournal(): boolean;
        clearJournal(): void;
        getJournal(): MongodConfig3_6.Storage.Journal | undefined;
        setJournal(value?: MongodConfig3_6.Storage.Journal): Storage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Storage.AsObject;
        static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Storage;
        static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
    }

    export namespace Storage {
        export type AsObject = {
            wiredTiger?: MongodConfig3_6.Storage.WiredTiger.AsObject,
            journal?: MongodConfig3_6.Storage.Journal.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongodConfig3_6.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongodConfig3_6.Storage.WiredTiger.EngineConfig): WiredTiger;

            hasCollectionConfig(): boolean;
            clearCollectionConfig(): void;
            getCollectionConfig(): MongodConfig3_6.Storage.WiredTiger.CollectionConfig | undefined;
            setCollectionConfig(value?: MongodConfig3_6.Storage.WiredTiger.CollectionConfig): WiredTiger;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): WiredTiger.AsObject;
            static toObject(includeInstance: boolean, msg: WiredTiger): WiredTiger.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: WiredTiger, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): WiredTiger;
            static deserializeBinaryFromReader(message: WiredTiger, reader: jspb.BinaryReader): WiredTiger;
        }

        export namespace WiredTiger {
            export type AsObject = {
                engineConfig?: MongodConfig3_6.Storage.WiredTiger.EngineConfig.AsObject,
                collectionConfig?: MongodConfig3_6.Storage.WiredTiger.CollectionConfig.AsObject,
            }


            export class EngineConfig extends jspb.Message { 

                hasCacheSizeGb(): boolean;
                clearCacheSizeGb(): void;
                getCacheSizeGb(): google_protobuf_wrappers_pb.DoubleValue | undefined;
                setCacheSizeGb(value?: google_protobuf_wrappers_pb.DoubleValue): EngineConfig;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): EngineConfig.AsObject;
                static toObject(includeInstance: boolean, msg: EngineConfig): EngineConfig.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: EngineConfig, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): EngineConfig;
                static deserializeBinaryFromReader(message: EngineConfig, reader: jspb.BinaryReader): EngineConfig;
            }

            export namespace EngineConfig {
                export type AsObject = {
                    cacheSizeGb?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
                }
            }

            export class CollectionConfig extends jspb.Message { 
                getBlockCompressor(): MongodConfig3_6.Storage.WiredTiger.CollectionConfig.Compressor;
                setBlockCompressor(value: MongodConfig3_6.Storage.WiredTiger.CollectionConfig.Compressor): CollectionConfig;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): CollectionConfig.AsObject;
                static toObject(includeInstance: boolean, msg: CollectionConfig): CollectionConfig.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: CollectionConfig, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): CollectionConfig;
                static deserializeBinaryFromReader(message: CollectionConfig, reader: jspb.BinaryReader): CollectionConfig;
            }

            export namespace CollectionConfig {
                export type AsObject = {
                    blockCompressor: MongodConfig3_6.Storage.WiredTiger.CollectionConfig.Compressor,
                }

                export enum Compressor {
    COMPRESSOR_UNSPECIFIED = 0,
    NONE = 1,
    SNAPPY = 2,
    ZLIB = 3,
                }

            }

        }

        export class Journal extends jspb.Message { 

            hasEnabled(): boolean;
            clearEnabled(): void;
            getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
            setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): Journal;

            hasCommitInterval(): boolean;
            clearCommitInterval(): void;
            getCommitInterval(): google_protobuf_wrappers_pb.Int64Value | undefined;
            setCommitInterval(value?: google_protobuf_wrappers_pb.Int64Value): Journal;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Journal.AsObject;
            static toObject(includeInstance: boolean, msg: Journal): Journal.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Journal, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Journal;
            static deserializeBinaryFromReader(message: Journal, reader: jspb.BinaryReader): Journal;
        }

        export namespace Journal {
            export type AsObject = {
                enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
                commitInterval?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            }
        }

    }

    export class OperationProfiling extends jspb.Message { 
        getMode(): MongodConfig3_6.OperationProfiling.Mode;
        setMode(value: MongodConfig3_6.OperationProfiling.Mode): OperationProfiling;

        hasSlowOpThreshold(): boolean;
        clearSlowOpThreshold(): void;
        getSlowOpThreshold(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setSlowOpThreshold(value?: google_protobuf_wrappers_pb.Int64Value): OperationProfiling;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OperationProfiling.AsObject;
        static toObject(includeInstance: boolean, msg: OperationProfiling): OperationProfiling.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OperationProfiling, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OperationProfiling;
        static deserializeBinaryFromReader(message: OperationProfiling, reader: jspb.BinaryReader): OperationProfiling;
    }

    export namespace OperationProfiling {
        export type AsObject = {
            mode: MongodConfig3_6.OperationProfiling.Mode,
            slowOpThreshold?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }

        export enum Mode {
    MODE_UNSPECIFIED = 0,
    OFF = 1,
    SLOW_OP = 2,
    ALL = 3,
        }

    }

    export class Network extends jspb.Message { 

        hasMaxIncomingConnections(): boolean;
        clearMaxIncomingConnections(): void;
        getMaxIncomingConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxIncomingConnections(value?: google_protobuf_wrappers_pb.Int64Value): Network;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Network.AsObject;
        static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Network;
        static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
    }

    export namespace Network {
        export type AsObject = {
            maxIncomingConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}

export class MongoCfgConfig3_6 extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongoCfgConfig3_6.Storage | undefined;
    setStorage(value?: MongoCfgConfig3_6.Storage): MongoCfgConfig3_6;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongoCfgConfig3_6.OperationProfiling | undefined;
    setOperationProfiling(value?: MongoCfgConfig3_6.OperationProfiling): MongoCfgConfig3_6;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongoCfgConfig3_6.Network | undefined;
    setNet(value?: MongoCfgConfig3_6.Network): MongoCfgConfig3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfig3_6.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfig3_6): MongoCfgConfig3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfig3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfig3_6;
    static deserializeBinaryFromReader(message: MongoCfgConfig3_6, reader: jspb.BinaryReader): MongoCfgConfig3_6;
}

export namespace MongoCfgConfig3_6 {
    export type AsObject = {
        storage?: MongoCfgConfig3_6.Storage.AsObject,
        operationProfiling?: MongoCfgConfig3_6.OperationProfiling.AsObject,
        net?: MongoCfgConfig3_6.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongoCfgConfig3_6.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongoCfgConfig3_6.Storage.WiredTiger): Storage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Storage.AsObject;
        static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Storage;
        static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
    }

    export namespace Storage {
        export type AsObject = {
            wiredTiger?: MongoCfgConfig3_6.Storage.WiredTiger.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig): WiredTiger;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): WiredTiger.AsObject;
            static toObject(includeInstance: boolean, msg: WiredTiger): WiredTiger.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: WiredTiger, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): WiredTiger;
            static deserializeBinaryFromReader(message: WiredTiger, reader: jspb.BinaryReader): WiredTiger;
        }

        export namespace WiredTiger {
            export type AsObject = {
                engineConfig?: MongoCfgConfig3_6.Storage.WiredTiger.EngineConfig.AsObject,
            }


            export class EngineConfig extends jspb.Message { 

                hasCacheSizeGb(): boolean;
                clearCacheSizeGb(): void;
                getCacheSizeGb(): google_protobuf_wrappers_pb.DoubleValue | undefined;
                setCacheSizeGb(value?: google_protobuf_wrappers_pb.DoubleValue): EngineConfig;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): EngineConfig.AsObject;
                static toObject(includeInstance: boolean, msg: EngineConfig): EngineConfig.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: EngineConfig, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): EngineConfig;
                static deserializeBinaryFromReader(message: EngineConfig, reader: jspb.BinaryReader): EngineConfig;
            }

            export namespace EngineConfig {
                export type AsObject = {
                    cacheSizeGb?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
                }
            }

        }

    }

    export class OperationProfiling extends jspb.Message { 
        getMode(): MongoCfgConfig3_6.OperationProfiling.Mode;
        setMode(value: MongoCfgConfig3_6.OperationProfiling.Mode): OperationProfiling;

        hasSlowOpThreshold(): boolean;
        clearSlowOpThreshold(): void;
        getSlowOpThreshold(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setSlowOpThreshold(value?: google_protobuf_wrappers_pb.Int64Value): OperationProfiling;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OperationProfiling.AsObject;
        static toObject(includeInstance: boolean, msg: OperationProfiling): OperationProfiling.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OperationProfiling, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OperationProfiling;
        static deserializeBinaryFromReader(message: OperationProfiling, reader: jspb.BinaryReader): OperationProfiling;
    }

    export namespace OperationProfiling {
        export type AsObject = {
            mode: MongoCfgConfig3_6.OperationProfiling.Mode,
            slowOpThreshold?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }

        export enum Mode {
    MODE_UNSPECIFIED = 0,
    OFF = 1,
    SLOW_OP = 2,
    ALL = 3,
        }

    }

    export class Network extends jspb.Message { 

        hasMaxIncomingConnections(): boolean;
        clearMaxIncomingConnections(): void;
        getMaxIncomingConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxIncomingConnections(value?: google_protobuf_wrappers_pb.Int64Value): Network;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Network.AsObject;
        static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Network;
        static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
    }

    export namespace Network {
        export type AsObject = {
            maxIncomingConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}

export class MongosConfig3_6 extends jspb.Message { 

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongosConfig3_6.Network | undefined;
    setNet(value?: MongosConfig3_6.Network): MongosConfig3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfig3_6.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfig3_6): MongosConfig3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfig3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfig3_6;
    static deserializeBinaryFromReader(message: MongosConfig3_6, reader: jspb.BinaryReader): MongosConfig3_6;
}

export namespace MongosConfig3_6 {
    export type AsObject = {
        net?: MongosConfig3_6.Network.AsObject,
    }


    export class Network extends jspb.Message { 

        hasMaxIncomingConnections(): boolean;
        clearMaxIncomingConnections(): void;
        getMaxIncomingConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxIncomingConnections(value?: google_protobuf_wrappers_pb.Int64Value): Network;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Network.AsObject;
        static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Network;
        static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
    }

    export namespace Network {
        export type AsObject = {
            maxIncomingConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}

export class MongodConfigSet3_6 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongodConfig3_6 | undefined;
    setEffectiveConfig(value?: MongodConfig3_6): MongodConfigSet3_6;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongodConfig3_6 | undefined;
    setUserConfig(value?: MongodConfig3_6): MongodConfigSet3_6;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongodConfig3_6 | undefined;
    setDefaultConfig(value?: MongodConfig3_6): MongodConfigSet3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfigSet3_6.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfigSet3_6): MongodConfigSet3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfigSet3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfigSet3_6;
    static deserializeBinaryFromReader(message: MongodConfigSet3_6, reader: jspb.BinaryReader): MongodConfigSet3_6;
}

export namespace MongodConfigSet3_6 {
    export type AsObject = {
        effectiveConfig?: MongodConfig3_6.AsObject,
        userConfig?: MongodConfig3_6.AsObject,
        defaultConfig?: MongodConfig3_6.AsObject,
    }
}

export class MongoCfgConfigSet3_6 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongoCfgConfig3_6 | undefined;
    setEffectiveConfig(value?: MongoCfgConfig3_6): MongoCfgConfigSet3_6;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongoCfgConfig3_6 | undefined;
    setUserConfig(value?: MongoCfgConfig3_6): MongoCfgConfigSet3_6;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongoCfgConfig3_6 | undefined;
    setDefaultConfig(value?: MongoCfgConfig3_6): MongoCfgConfigSet3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfigSet3_6.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfigSet3_6): MongoCfgConfigSet3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfigSet3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfigSet3_6;
    static deserializeBinaryFromReader(message: MongoCfgConfigSet3_6, reader: jspb.BinaryReader): MongoCfgConfigSet3_6;
}

export namespace MongoCfgConfigSet3_6 {
    export type AsObject = {
        effectiveConfig?: MongoCfgConfig3_6.AsObject,
        userConfig?: MongoCfgConfig3_6.AsObject,
        defaultConfig?: MongoCfgConfig3_6.AsObject,
    }
}

export class MongosConfigSet3_6 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongosConfig3_6 | undefined;
    setEffectiveConfig(value?: MongosConfig3_6): MongosConfigSet3_6;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongosConfig3_6 | undefined;
    setUserConfig(value?: MongosConfig3_6): MongosConfigSet3_6;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongosConfig3_6 | undefined;
    setDefaultConfig(value?: MongosConfig3_6): MongosConfigSet3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfigSet3_6.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfigSet3_6): MongosConfigSet3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfigSet3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfigSet3_6;
    static deserializeBinaryFromReader(message: MongosConfigSet3_6, reader: jspb.BinaryReader): MongosConfigSet3_6;
}

export namespace MongosConfigSet3_6 {
    export type AsObject = {
        effectiveConfig?: MongosConfig3_6.AsObject,
        userConfig?: MongosConfig3_6.AsObject,
        defaultConfig?: MongosConfig3_6.AsObject,
    }
}
