// package: yandex.cloud.mdb.mongodb.v1.config
// file: yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_enterprise.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MongodConfig4_4_enterprise extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongodConfig4_4_enterprise.Storage | undefined;
    setStorage(value?: MongodConfig4_4_enterprise.Storage): MongodConfig4_4_enterprise;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongodConfig4_4_enterprise.OperationProfiling | undefined;
    setOperationProfiling(value?: MongodConfig4_4_enterprise.OperationProfiling): MongodConfig4_4_enterprise;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongodConfig4_4_enterprise.Network | undefined;
    setNet(value?: MongodConfig4_4_enterprise.Network): MongodConfig4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfig4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfig4_4_enterprise): MongodConfig4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfig4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfig4_4_enterprise;
    static deserializeBinaryFromReader(message: MongodConfig4_4_enterprise, reader: jspb.BinaryReader): MongodConfig4_4_enterprise;
}

export namespace MongodConfig4_4_enterprise {
    export type AsObject = {
        storage?: MongodConfig4_4_enterprise.Storage.AsObject,
        operationProfiling?: MongodConfig4_4_enterprise.OperationProfiling.AsObject,
        net?: MongodConfig4_4_enterprise.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongodConfig4_4_enterprise.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongodConfig4_4_enterprise.Storage.WiredTiger): Storage;

        hasJournal(): boolean;
        clearJournal(): void;
        getJournal(): MongodConfig4_4_enterprise.Storage.Journal | undefined;
        setJournal(value?: MongodConfig4_4_enterprise.Storage.Journal): Storage;

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
            wiredTiger?: MongodConfig4_4_enterprise.Storage.WiredTiger.AsObject,
            journal?: MongodConfig4_4_enterprise.Storage.Journal.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig): WiredTiger;

            hasCollectionConfig(): boolean;
            clearCollectionConfig(): void;
            getCollectionConfig(): MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig | undefined;
            setCollectionConfig(value?: MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig): WiredTiger;

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
                engineConfig?: MongodConfig4_4_enterprise.Storage.WiredTiger.EngineConfig.AsObject,
                collectionConfig?: MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig.AsObject,
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
                getBlockCompressor(): MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig.Compressor;
                setBlockCompressor(value: MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig.Compressor): CollectionConfig;

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
                    blockCompressor: MongodConfig4_4_enterprise.Storage.WiredTiger.CollectionConfig.Compressor,
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
        getMode(): MongodConfig4_4_enterprise.OperationProfiling.Mode;
        setMode(value: MongodConfig4_4_enterprise.OperationProfiling.Mode): OperationProfiling;

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
            mode: MongodConfig4_4_enterprise.OperationProfiling.Mode,
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

export class MongoCfgConfig4_4_enterprise extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongoCfgConfig4_4_enterprise.Storage | undefined;
    setStorage(value?: MongoCfgConfig4_4_enterprise.Storage): MongoCfgConfig4_4_enterprise;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongoCfgConfig4_4_enterprise.OperationProfiling | undefined;
    setOperationProfiling(value?: MongoCfgConfig4_4_enterprise.OperationProfiling): MongoCfgConfig4_4_enterprise;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongoCfgConfig4_4_enterprise.Network | undefined;
    setNet(value?: MongoCfgConfig4_4_enterprise.Network): MongoCfgConfig4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfig4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfig4_4_enterprise): MongoCfgConfig4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfig4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfig4_4_enterprise;
    static deserializeBinaryFromReader(message: MongoCfgConfig4_4_enterprise, reader: jspb.BinaryReader): MongoCfgConfig4_4_enterprise;
}

export namespace MongoCfgConfig4_4_enterprise {
    export type AsObject = {
        storage?: MongoCfgConfig4_4_enterprise.Storage.AsObject,
        operationProfiling?: MongoCfgConfig4_4_enterprise.OperationProfiling.AsObject,
        net?: MongoCfgConfig4_4_enterprise.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongoCfgConfig4_4_enterprise.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongoCfgConfig4_4_enterprise.Storage.WiredTiger): Storage;

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
            wiredTiger?: MongoCfgConfig4_4_enterprise.Storage.WiredTiger.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig): WiredTiger;

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
                engineConfig?: MongoCfgConfig4_4_enterprise.Storage.WiredTiger.EngineConfig.AsObject,
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
        getMode(): MongoCfgConfig4_4_enterprise.OperationProfiling.Mode;
        setMode(value: MongoCfgConfig4_4_enterprise.OperationProfiling.Mode): OperationProfiling;

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
            mode: MongoCfgConfig4_4_enterprise.OperationProfiling.Mode,
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

export class MongosConfig4_4_enterprise extends jspb.Message { 

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongosConfig4_4_enterprise.Network | undefined;
    setNet(value?: MongosConfig4_4_enterprise.Network): MongosConfig4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfig4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfig4_4_enterprise): MongosConfig4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfig4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfig4_4_enterprise;
    static deserializeBinaryFromReader(message: MongosConfig4_4_enterprise, reader: jspb.BinaryReader): MongosConfig4_4_enterprise;
}

export namespace MongosConfig4_4_enterprise {
    export type AsObject = {
        net?: MongosConfig4_4_enterprise.Network.AsObject,
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

export class MongodConfigSet4_4_enterprise extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongodConfig4_4_enterprise | undefined;
    setEffectiveConfig(value?: MongodConfig4_4_enterprise): MongodConfigSet4_4_enterprise;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongodConfig4_4_enterprise | undefined;
    setUserConfig(value?: MongodConfig4_4_enterprise): MongodConfigSet4_4_enterprise;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongodConfig4_4_enterprise | undefined;
    setDefaultConfig(value?: MongodConfig4_4_enterprise): MongodConfigSet4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfigSet4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfigSet4_4_enterprise): MongodConfigSet4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfigSet4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfigSet4_4_enterprise;
    static deserializeBinaryFromReader(message: MongodConfigSet4_4_enterprise, reader: jspb.BinaryReader): MongodConfigSet4_4_enterprise;
}

export namespace MongodConfigSet4_4_enterprise {
    export type AsObject = {
        effectiveConfig?: MongodConfig4_4_enterprise.AsObject,
        userConfig?: MongodConfig4_4_enterprise.AsObject,
        defaultConfig?: MongodConfig4_4_enterprise.AsObject,
    }
}

export class MongoCfgConfigSet4_4_enterprise extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongoCfgConfig4_4_enterprise | undefined;
    setEffectiveConfig(value?: MongoCfgConfig4_4_enterprise): MongoCfgConfigSet4_4_enterprise;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongoCfgConfig4_4_enterprise | undefined;
    setUserConfig(value?: MongoCfgConfig4_4_enterprise): MongoCfgConfigSet4_4_enterprise;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongoCfgConfig4_4_enterprise | undefined;
    setDefaultConfig(value?: MongoCfgConfig4_4_enterprise): MongoCfgConfigSet4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfigSet4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfigSet4_4_enterprise): MongoCfgConfigSet4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfigSet4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfigSet4_4_enterprise;
    static deserializeBinaryFromReader(message: MongoCfgConfigSet4_4_enterprise, reader: jspb.BinaryReader): MongoCfgConfigSet4_4_enterprise;
}

export namespace MongoCfgConfigSet4_4_enterprise {
    export type AsObject = {
        effectiveConfig?: MongoCfgConfig4_4_enterprise.AsObject,
        userConfig?: MongoCfgConfig4_4_enterprise.AsObject,
        defaultConfig?: MongoCfgConfig4_4_enterprise.AsObject,
    }
}

export class MongosConfigSet4_4_enterprise extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongosConfig4_4_enterprise | undefined;
    setEffectiveConfig(value?: MongosConfig4_4_enterprise): MongosConfigSet4_4_enterprise;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongosConfig4_4_enterprise | undefined;
    setUserConfig(value?: MongosConfig4_4_enterprise): MongosConfigSet4_4_enterprise;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongosConfig4_4_enterprise | undefined;
    setDefaultConfig(value?: MongosConfig4_4_enterprise): MongosConfigSet4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfigSet4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfigSet4_4_enterprise): MongosConfigSet4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfigSet4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfigSet4_4_enterprise;
    static deserializeBinaryFromReader(message: MongosConfigSet4_4_enterprise, reader: jspb.BinaryReader): MongosConfigSet4_4_enterprise;
}

export namespace MongosConfigSet4_4_enterprise {
    export type AsObject = {
        effectiveConfig?: MongosConfig4_4_enterprise.AsObject,
        userConfig?: MongosConfig4_4_enterprise.AsObject,
        defaultConfig?: MongosConfig4_4_enterprise.AsObject,
    }
}
