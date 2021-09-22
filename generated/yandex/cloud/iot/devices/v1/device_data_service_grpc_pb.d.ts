// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/device_data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iot_devices_v1_device_data_service_pb from "../../../../../yandex/cloud/iot/devices/v1/device_data_service_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IDeviceDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    publish: IDeviceDataServiceService_IPublish;
}

interface IDeviceDataServiceService_IPublish extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse> {
    path: "/yandex.cloud.iot.devices.v1.DeviceDataService/Publish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse>;
}

export const DeviceDataServiceService: IDeviceDataServiceService;

export interface IDeviceDataServiceServer {
    publish: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse>;
}

export interface IDeviceDataServiceClient {
    publish(request: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse) => void): grpc.ClientUnaryCall;
    publish(request: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse) => void): grpc.ClientUnaryCall;
    publish(request: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse) => void): grpc.ClientUnaryCall;
}

export class DeviceDataServiceClient extends grpc.Client implements IDeviceDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public publish(request: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse) => void): grpc.ClientUnaryCall;
    public publish(request: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse) => void): grpc.ClientUnaryCall;
    public publish(request: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse) => void): grpc.ClientUnaryCall;
}
