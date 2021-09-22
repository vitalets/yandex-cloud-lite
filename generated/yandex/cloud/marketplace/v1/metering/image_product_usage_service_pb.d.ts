// package: yandex.cloud.marketplace.v1.metering
// file: yandex/cloud/marketplace/v1/metering/image_product_usage_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_marketplace_v1_metering_usage_record_pb from "../../../../../yandex/cloud/marketplace/v1/metering/usage_record_pb";

export class WriteImageProductUsageRequest extends jspb.Message { 
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): WriteImageProductUsageRequest;
    getProductId(): string;
    setProductId(value: string): WriteImageProductUsageRequest;
    clearUsageRecordsList(): void;
    getUsageRecordsList(): Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.UsageRecord>;
    setUsageRecordsList(value: Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.UsageRecord>): WriteImageProductUsageRequest;
    addUsageRecords(value?: yandex_cloud_marketplace_v1_metering_usage_record_pb.UsageRecord, index?: number): yandex_cloud_marketplace_v1_metering_usage_record_pb.UsageRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteImageProductUsageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WriteImageProductUsageRequest): WriteImageProductUsageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteImageProductUsageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteImageProductUsageRequest;
    static deserializeBinaryFromReader(message: WriteImageProductUsageRequest, reader: jspb.BinaryReader): WriteImageProductUsageRequest;
}

export namespace WriteImageProductUsageRequest {
    export type AsObject = {
        validateOnly: boolean,
        productId: string,
        usageRecordsList: Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.UsageRecord.AsObject>,
    }
}

export class WriteImageProductUsageResponse extends jspb.Message { 
    clearAcceptedList(): void;
    getAcceptedList(): Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.AcceptedUsageRecord>;
    setAcceptedList(value: Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.AcceptedUsageRecord>): WriteImageProductUsageResponse;
    addAccepted(value?: yandex_cloud_marketplace_v1_metering_usage_record_pb.AcceptedUsageRecord, index?: number): yandex_cloud_marketplace_v1_metering_usage_record_pb.AcceptedUsageRecord;
    clearRejectedList(): void;
    getRejectedList(): Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.RejectedUsageRecord>;
    setRejectedList(value: Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.RejectedUsageRecord>): WriteImageProductUsageResponse;
    addRejected(value?: yandex_cloud_marketplace_v1_metering_usage_record_pb.RejectedUsageRecord, index?: number): yandex_cloud_marketplace_v1_metering_usage_record_pb.RejectedUsageRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WriteImageProductUsageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WriteImageProductUsageResponse): WriteImageProductUsageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WriteImageProductUsageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WriteImageProductUsageResponse;
    static deserializeBinaryFromReader(message: WriteImageProductUsageResponse, reader: jspb.BinaryReader): WriteImageProductUsageResponse;
}

export namespace WriteImageProductUsageResponse {
    export type AsObject = {
        acceptedList: Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.AcceptedUsageRecord.AsObject>,
        rejectedList: Array<yandex_cloud_marketplace_v1_metering_usage_record_pb.RejectedUsageRecord.AsObject>,
    }
}
