// package: yandex.cloud.mdb.mongodb.v1.config
// file: yandex/cloud/mdb/mongodb/v1/config/mongodb4_0.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MongodConfig4_0 extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongodConfig4_0.Storage | undefined;
    setStorage(value?: MongodConfig4_0.Storage): MongodConfig4_0;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongodConfig4_0.OperationProfiling | undefined;
    setOperationProfiling(value?: MongodConfig4_0.OperationProfiling): MongodConfig4_0;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongodConfig4_0.Network | undefined;
    setNet(value?: MongodConfig4_0.Network): MongodConfig4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfig4_0.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfig4_0): MongodConfig4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfig4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfig4_0;
    static deserializeBinaryFromReader(message: MongodConfig4_0, reader: jspb.BinaryReader): MongodConfig4_0;
}

export namespace MongodConfig4_0 {
    export type AsObject = {
        storage?: MongodConfig4_0.Storage.AsObject,
        operationProfiling?: MongodConfig4_0.OperationProfiling.AsObject,
        net?: MongodConfig4_0.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongodConfig4_0.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongodConfig4_0.Storage.WiredTiger): Storage;

        hasJournal(): boolean;
        clearJournal(): void;
        getJournal(): MongodConfig4_0.Storage.Journal | undefined;
        setJournal(value?: MongodConfig4_0.Storage.Journal): Storage;

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
            wiredTiger?: MongodConfig4_0.Storage.WiredTiger.AsObject,
            journal?: MongodConfig4_0.Storage.Journal.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongodConfig4_0.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongodConfig4_0.Storage.WiredTiger.EngineConfig): WiredTiger;

            hasCollectionConfig(): boolean;
            clearCollectionConfig(): void;
            getCollectionConfig(): MongodConfig4_0.Storage.WiredTiger.CollectionConfig | undefined;
            setCollectionConfig(value?: MongodConfig4_0.Storage.WiredTiger.CollectionConfig): WiredTiger;

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
                engineConfig?: MongodConfig4_0.Storage.WiredTiger.EngineConfig.AsObject,
                collectionConfig?: MongodConfig4_0.Storage.WiredTiger.CollectionConfig.AsObject,
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
                getBlockCompressor(): MongodConfig4_0.Storage.WiredTiger.CollectionConfig.Compressor;
                setBlockCompressor(value: MongodConfig4_0.Storage.WiredTiger.CollectionConfig.Compressor): CollectionConfig;

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
                    blockCompressor: MongodConfig4_0.Storage.WiredTiger.CollectionConfig.Compressor,
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
                commitInterval?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            }
        }

    }

    export class OperationProfiling extends jspb.Message { 
        getMode(): MongodConfig4_0.OperationProfiling.Mode;
        setMode(value: MongodConfig4_0.OperationProfiling.Mode): OperationProfiling;

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
            mode: MongodConfig4_0.OperationProfiling.Mode,
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

export class MongoCfgConfig4_0 extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongoCfgConfig4_0.Storage | undefined;
    setStorage(value?: MongoCfgConfig4_0.Storage): MongoCfgConfig4_0;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongoCfgConfig4_0.OperationProfiling | undefined;
    setOperationProfiling(value?: MongoCfgConfig4_0.OperationProfiling): MongoCfgConfig4_0;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongoCfgConfig4_0.Network | undefined;
    setNet(value?: MongoCfgConfig4_0.Network): MongoCfgConfig4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfig4_0.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfig4_0): MongoCfgConfig4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfig4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfig4_0;
    static deserializeBinaryFromReader(message: MongoCfgConfig4_0, reader: jspb.BinaryReader): MongoCfgConfig4_0;
}

export namespace MongoCfgConfig4_0 {
    export type AsObject = {
        storage?: MongoCfgConfig4_0.Storage.AsObject,
        operationProfiling?: MongoCfgConfig4_0.OperationProfiling.AsObject,
        net?: MongoCfgConfig4_0.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongoCfgConfig4_0.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongoCfgConfig4_0.Storage.WiredTiger): Storage;

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
            wiredTiger?: MongoCfgConfig4_0.Storage.WiredTiger.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig): WiredTiger;

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
                engineConfig?: MongoCfgConfig4_0.Storage.WiredTiger.EngineConfig.AsObject,
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
        getMode(): MongoCfgConfig4_0.OperationProfiling.Mode;
        setMode(value: MongoCfgConfig4_0.OperationProfiling.Mode): OperationProfiling;

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
            mode: MongoCfgConfig4_0.OperationProfiling.Mode,
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

export class MongosConfig4_0 extends jspb.Message { 

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongosConfig4_0.Network | undefined;
    setNet(value?: MongosConfig4_0.Network): MongosConfig4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfig4_0.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfig4_0): MongosConfig4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfig4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfig4_0;
    static deserializeBinaryFromReader(message: MongosConfig4_0, reader: jspb.BinaryReader): MongosConfig4_0;
}

export namespace MongosConfig4_0 {
    export type AsObject = {
        net?: MongosConfig4_0.Network.AsObject,
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

export class MongodConfigSet4_0 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongodConfig4_0 | undefined;
    setEffectiveConfig(value?: MongodConfig4_0): MongodConfigSet4_0;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongodConfig4_0 | undefined;
    setUserConfig(value?: MongodConfig4_0): MongodConfigSet4_0;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongodConfig4_0 | undefined;
    setDefaultConfig(value?: MongodConfig4_0): MongodConfigSet4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfigSet4_0.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfigSet4_0): MongodConfigSet4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfigSet4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfigSet4_0;
    static deserializeBinaryFromReader(message: MongodConfigSet4_0, reader: jspb.BinaryReader): MongodConfigSet4_0;
}

export namespace MongodConfigSet4_0 {
    export type AsObject = {
        effectiveConfig?: MongodConfig4_0.AsObject,
        userConfig?: MongodConfig4_0.AsObject,
        defaultConfig?: MongodConfig4_0.AsObject,
    }
}

export class MongoCfgConfigSet4_0 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongoCfgConfig4_0 | undefined;
    setEffectiveConfig(value?: MongoCfgConfig4_0): MongoCfgConfigSet4_0;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongoCfgConfig4_0 | undefined;
    setUserConfig(value?: MongoCfgConfig4_0): MongoCfgConfigSet4_0;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongoCfgConfig4_0 | undefined;
    setDefaultConfig(value?: MongoCfgConfig4_0): MongoCfgConfigSet4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfigSet4_0.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfigSet4_0): MongoCfgConfigSet4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfigSet4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfigSet4_0;
    static deserializeBinaryFromReader(message: MongoCfgConfigSet4_0, reader: jspb.BinaryReader): MongoCfgConfigSet4_0;
}

export namespace MongoCfgConfigSet4_0 {
    export type AsObject = {
        effectiveConfig?: MongoCfgConfig4_0.AsObject,
        userConfig?: MongoCfgConfig4_0.AsObject,
        defaultConfig?: MongoCfgConfig4_0.AsObject,
    }
}

export class MongosConfigSet4_0 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongosConfig4_0 | undefined;
    setEffectiveConfig(value?: MongosConfig4_0): MongosConfigSet4_0;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongosConfig4_0 | undefined;
    setUserConfig(value?: MongosConfig4_0): MongosConfigSet4_0;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongosConfig4_0 | undefined;
    setDefaultConfig(value?: MongosConfig4_0): MongosConfigSet4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfigSet4_0.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfigSet4_0): MongosConfigSet4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfigSet4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfigSet4_0;
    static deserializeBinaryFromReader(message: MongosConfigSet4_0, reader: jspb.BinaryReader): MongosConfigSet4_0;
}

export namespace MongosConfigSet4_0 {
    export type AsObject = {
        effectiveConfig?: MongosConfig4_0.AsObject,
        userConfig?: MongosConfig4_0.AsObject,
        defaultConfig?: MongosConfig4_0.AsObject,
    }
}
