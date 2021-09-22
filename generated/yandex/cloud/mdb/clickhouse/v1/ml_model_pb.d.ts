// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/ml_model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MlModel extends jspb.Message { 
    getName(): string;
    setName(value: string): MlModel;
    getClusterId(): string;
    setClusterId(value: string): MlModel;
    getType(): MlModelType;
    setType(value: MlModelType): MlModel;
    getUri(): string;
    setUri(value: string): MlModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MlModel.AsObject;
    static toObject(includeInstance: boolean, msg: MlModel): MlModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MlModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MlModel;
    static deserializeBinaryFromReader(message: MlModel, reader: jspb.BinaryReader): MlModel;
}

export namespace MlModel {
    export type AsObject = {
        name: string,
        clusterId: string,
        type: MlModelType,
        uri: string,
    }
}

export enum MlModelType {
    ML_MODEL_TYPE_UNSPECIFIED = 0,
    ML_MODEL_TYPE_CATBOOST = 1,
}
