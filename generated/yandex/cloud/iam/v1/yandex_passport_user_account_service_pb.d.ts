// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/yandex_passport_user_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_iam_v1_user_account_pb from "../../../../yandex/cloud/iam/v1/user_account_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetUserAccountByLoginRequest extends jspb.Message { 
    getLogin(): string;
    setLogin(value: string): GetUserAccountByLoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserAccountByLoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserAccountByLoginRequest): GetUserAccountByLoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserAccountByLoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserAccountByLoginRequest;
    static deserializeBinaryFromReader(message: GetUserAccountByLoginRequest, reader: jspb.BinaryReader): GetUserAccountByLoginRequest;
}

export namespace GetUserAccountByLoginRequest {
    export type AsObject = {
        login: string,
    }
}
