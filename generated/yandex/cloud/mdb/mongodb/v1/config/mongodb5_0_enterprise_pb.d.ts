// package: yandex.cloud.mdb.mongodb.v1.config
// file: yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_enterprise.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MongodConfig5_0_enterprise extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongodConfig5_0_enterprise.Storage | undefined;
    setStorage(value?: MongodConfig5_0_enterprise.Storage): MongodConfig5_0_enterprise;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongodConfig5_0_enterprise.OperationProfiling | undefined;
    setOperationProfiling(value?: MongodConfig5_0_enterprise.OperationProfiling): MongodConfig5_0_enterprise;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongodConfig5_0_enterprise.Network | undefined;
    setNet(value?: MongodConfig5_0_enterprise.Network): MongodConfig5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfig5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfig5_0_enterprise): MongodConfig5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfig5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfig5_0_enterprise;
    static deserializeBinaryFromReader(message: MongodConfig5_0_enterprise, reader: jspb.BinaryReader): MongodConfig5_0_enterprise;
}

export namespace MongodConfig5_0_enterprise {
    export type AsObject = {
        storage?: MongodConfig5_0_enterprise.Storage.AsObject,
        operationProfiling?: MongodConfig5_0_enterprise.OperationProfiling.AsObject,
        net?: MongodConfig5_0_enterprise.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongodConfig5_0_enterprise.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongodConfig5_0_enterprise.Storage.WiredTiger): Storage;

        hasJournal(): boolean;
        clearJournal(): void;
        getJournal(): MongodConfig5_0_enterprise.Storage.Journal | undefined;
        setJournal(value?: MongodConfig5_0_enterprise.Storage.Journal): Storage;

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
            wiredTiger?: MongodConfig5_0_enterprise.Storage.WiredTiger.AsObject,
            journal?: MongodConfig5_0_enterprise.Storage.Journal.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongodConfig5_0_enterprise.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongodConfig5_0_enterprise.Storage.WiredTiger.EngineConfig): WiredTiger;

            hasCollectionConfig(): boolean;
            clearCollectionConfig(): void;
            getCollectionConfig(): MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig | undefined;
            setCollectionConfig(value?: MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig): WiredTiger;

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
                engineConfig?: MongodConfig5_0_enterprise.Storage.WiredTiger.EngineConfig.AsObject,
                collectionConfig?: MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig.AsObject,
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
                getBlockCompressor(): MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig.Compressor;
                setBlockCompressor(value: MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig.Compressor): CollectionConfig;

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
                    blockCompressor: MongodConfig5_0_enterprise.Storage.WiredTiger.CollectionConfig.Compressor,
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
        getMode(): MongodConfig5_0_enterprise.OperationProfiling.Mode;
        setMode(value: MongodConfig5_0_enterprise.OperationProfiling.Mode): OperationProfiling;

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
            mode: MongodConfig5_0_enterprise.OperationProfiling.Mode,
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

export class MongoCfgConfig5_0_enterprise extends jspb.Message { 

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): MongoCfgConfig5_0_enterprise.Storage | undefined;
    setStorage(value?: MongoCfgConfig5_0_enterprise.Storage): MongoCfgConfig5_0_enterprise;

    hasOperationProfiling(): boolean;
    clearOperationProfiling(): void;
    getOperationProfiling(): MongoCfgConfig5_0_enterprise.OperationProfiling | undefined;
    setOperationProfiling(value?: MongoCfgConfig5_0_enterprise.OperationProfiling): MongoCfgConfig5_0_enterprise;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongoCfgConfig5_0_enterprise.Network | undefined;
    setNet(value?: MongoCfgConfig5_0_enterprise.Network): MongoCfgConfig5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfig5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfig5_0_enterprise): MongoCfgConfig5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfig5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfig5_0_enterprise;
    static deserializeBinaryFromReader(message: MongoCfgConfig5_0_enterprise, reader: jspb.BinaryReader): MongoCfgConfig5_0_enterprise;
}

export namespace MongoCfgConfig5_0_enterprise {
    export type AsObject = {
        storage?: MongoCfgConfig5_0_enterprise.Storage.AsObject,
        operationProfiling?: MongoCfgConfig5_0_enterprise.OperationProfiling.AsObject,
        net?: MongoCfgConfig5_0_enterprise.Network.AsObject,
    }


    export class Storage extends jspb.Message { 

        hasWiredTiger(): boolean;
        clearWiredTiger(): void;
        getWiredTiger(): MongoCfgConfig5_0_enterprise.Storage.WiredTiger | undefined;
        setWiredTiger(value?: MongoCfgConfig5_0_enterprise.Storage.WiredTiger): Storage;

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
            wiredTiger?: MongoCfgConfig5_0_enterprise.Storage.WiredTiger.AsObject,
        }


        export class WiredTiger extends jspb.Message { 

            hasEngineConfig(): boolean;
            clearEngineConfig(): void;
            getEngineConfig(): MongoCfgConfig5_0_enterprise.Storage.WiredTiger.EngineConfig | undefined;
            setEngineConfig(value?: MongoCfgConfig5_0_enterprise.Storage.WiredTiger.EngineConfig): WiredTiger;

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
                engineConfig?: MongoCfgConfig5_0_enterprise.Storage.WiredTiger.EngineConfig.AsObject,
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
        getMode(): MongoCfgConfig5_0_enterprise.OperationProfiling.Mode;
        setMode(value: MongoCfgConfig5_0_enterprise.OperationProfiling.Mode): OperationProfiling;

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
            mode: MongoCfgConfig5_0_enterprise.OperationProfiling.Mode,
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

export class MongosConfig5_0_enterprise extends jspb.Message { 

    hasNet(): boolean;
    clearNet(): void;
    getNet(): MongosConfig5_0_enterprise.Network | undefined;
    setNet(value?: MongosConfig5_0_enterprise.Network): MongosConfig5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfig5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfig5_0_enterprise): MongosConfig5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfig5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfig5_0_enterprise;
    static deserializeBinaryFromReader(message: MongosConfig5_0_enterprise, reader: jspb.BinaryReader): MongosConfig5_0_enterprise;
}

export namespace MongosConfig5_0_enterprise {
    export type AsObject = {
        net?: MongosConfig5_0_enterprise.Network.AsObject,
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

export class MongodConfigSet5_0_enterprise extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongodConfig5_0_enterprise | undefined;
    setEffectiveConfig(value?: MongodConfig5_0_enterprise): MongodConfigSet5_0_enterprise;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongodConfig5_0_enterprise | undefined;
    setUserConfig(value?: MongodConfig5_0_enterprise): MongodConfigSet5_0_enterprise;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongodConfig5_0_enterprise | undefined;
    setDefaultConfig(value?: MongodConfig5_0_enterprise): MongodConfigSet5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongodConfigSet5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongodConfigSet5_0_enterprise): MongodConfigSet5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongodConfigSet5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongodConfigSet5_0_enterprise;
    static deserializeBinaryFromReader(message: MongodConfigSet5_0_enterprise, reader: jspb.BinaryReader): MongodConfigSet5_0_enterprise;
}

export namespace MongodConfigSet5_0_enterprise {
    export type AsObject = {
        effectiveConfig?: MongodConfig5_0_enterprise.AsObject,
        userConfig?: MongodConfig5_0_enterprise.AsObject,
        defaultConfig?: MongodConfig5_0_enterprise.AsObject,
    }
}

export class MongoCfgConfigSet5_0_enterprise extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongoCfgConfig5_0_enterprise | undefined;
    setEffectiveConfig(value?: MongoCfgConfig5_0_enterprise): MongoCfgConfigSet5_0_enterprise;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongoCfgConfig5_0_enterprise | undefined;
    setUserConfig(value?: MongoCfgConfig5_0_enterprise): MongoCfgConfigSet5_0_enterprise;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongoCfgConfig5_0_enterprise | undefined;
    setDefaultConfig(value?: MongoCfgConfig5_0_enterprise): MongoCfgConfigSet5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongoCfgConfigSet5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongoCfgConfigSet5_0_enterprise): MongoCfgConfigSet5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongoCfgConfigSet5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongoCfgConfigSet5_0_enterprise;
    static deserializeBinaryFromReader(message: MongoCfgConfigSet5_0_enterprise, reader: jspb.BinaryReader): MongoCfgConfigSet5_0_enterprise;
}

export namespace MongoCfgConfigSet5_0_enterprise {
    export type AsObject = {
        effectiveConfig?: MongoCfgConfig5_0_enterprise.AsObject,
        userConfig?: MongoCfgConfig5_0_enterprise.AsObject,
        defaultConfig?: MongoCfgConfig5_0_enterprise.AsObject,
    }
}

export class MongosConfigSet5_0_enterprise extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MongosConfig5_0_enterprise | undefined;
    setEffectiveConfig(value?: MongosConfig5_0_enterprise): MongosConfigSet5_0_enterprise;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MongosConfig5_0_enterprise | undefined;
    setUserConfig(value?: MongosConfig5_0_enterprise): MongosConfigSet5_0_enterprise;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MongosConfig5_0_enterprise | undefined;
    setDefaultConfig(value?: MongosConfig5_0_enterprise): MongosConfigSet5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MongosConfigSet5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: MongosConfigSet5_0_enterprise): MongosConfigSet5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MongosConfigSet5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MongosConfigSet5_0_enterprise;
    static deserializeBinaryFromReader(message: MongosConfigSet5_0_enterprise, reader: jspb.BinaryReader): MongosConfigSet5_0_enterprise;
}

export namespace MongosConfigSet5_0_enterprise {
    export type AsObject = {
        effectiveConfig?: MongosConfig5_0_enterprise.AsObject,
        userConfig?: MongosConfig5_0_enterprise.AsObject,
        defaultConfig?: MongosConfig5_0_enterprise.AsObject,
    }
}
