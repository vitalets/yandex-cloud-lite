// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/user_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_iam_v1_user_account_pb from "../../../../yandex/cloud/iam/v1/user_account_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetUserAccountRequest extends jspb.Message { 
    getUserAccountId(): string;
    setUserAccountId(value: string): GetUserAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserAccountRequest): GetUserAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserAccountRequest;
    static deserializeBinaryFromReader(message: GetUserAccountRequest, reader: jspb.BinaryReader): GetUserAccountRequest;
}

export namespace GetUserAccountRequest {
    export type AsObject = {
        userAccountId: string,
    }
}
