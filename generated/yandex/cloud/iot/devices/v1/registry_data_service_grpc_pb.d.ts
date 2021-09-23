// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/registry_data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_iot_devices_v1_registry_data_service_pb from "../../../../../yandex/cloud/iot/devices/v1/registry_data_service_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IRegistryDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    publish: IRegistryDataServiceService_IPublish;
}

interface IRegistryDataServiceService_IPublish extends grpc.MethodDefinition<yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse> {
    path: "/yandex.cloud.iot.devices.v1.RegistryDataService/Publish";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse>;
}

export const RegistryDataServiceService: IRegistryDataServiceService;

export interface IRegistryDataServiceServer extends grpc.UntypedServiceImplementation {
    publish: grpc.handleUnaryCall<yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse>;
}

export interface IRegistryDataServiceClient {
    publish(request: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse) => void): grpc.ClientUnaryCall;
    publish(request: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse) => void): grpc.ClientUnaryCall;
    publish(request: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse) => void): grpc.ClientUnaryCall;
}

export class RegistryDataServiceClient extends grpc.Client implements IRegistryDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public publish(request: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse) => void): grpc.ClientUnaryCall;
    public publish(request: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse) => void): grpc.ClientUnaryCall;
    public publish(request: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse) => void): grpc.ClientUnaryCall;
}
