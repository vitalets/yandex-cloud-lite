// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/ml_model_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_ml_model_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model_pb";

interface IMlModelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IMlModelServiceService_IGet;
    list: IMlModelServiceService_IList;
    create: IMlModelServiceService_ICreate;
    update: IMlModelServiceService_IUpdate;
    delete: IMlModelServiceService_IDelete;
}

interface IMlModelServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel> {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel>;
}
interface IMlModelServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse> {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse>;
}
interface IMlModelServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IMlModelServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IMlModelServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.clickhouse.v1.MlModelService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const MlModelServiceService: IMlModelServiceService;

export interface IMlModelServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IMlModelServiceClient {
    get(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class MlModelServiceClient extends grpc.Client implements IMlModelServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.GetMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.ListMlModelsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.CreateMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.UpdateMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_clickhouse_v1_ml_model_service_pb.DeleteMlModelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
