// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/lifecycle_policy_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb from "../../../../yandex/cloud/containerregistry/v1/lifecycle_policy_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_containerregistry_v1_image_pb from "../../../../yandex/cloud/containerregistry/v1/image_pb";
import * as yandex_cloud_containerregistry_v1_lifecycle_policy_pb from "../../../../yandex/cloud/containerregistry/v1/lifecycle_policy_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ILifecyclePolicyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ILifecyclePolicyServiceService_IGet;
    list: ILifecyclePolicyServiceService_IList;
    create: ILifecyclePolicyServiceService_ICreate;
    update: ILifecyclePolicyServiceService_IUpdate;
    delete: ILifecyclePolicyServiceService_IDelete;
    dryRun: ILifecyclePolicyServiceService_IDryRun;
    getDryRunResult: ILifecyclePolicyServiceService_IGetDryRunResult;
    listDryRunResults: ILifecyclePolicyServiceService_IListDryRunResults;
    listDryRunResultAffectedImages: ILifecyclePolicyServiceService_IListDryRunResultAffectedImages;
}

interface ILifecyclePolicyServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy>;
}
interface ILifecyclePolicyServiceService_IList extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse>;
}
interface ILifecyclePolicyServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILifecyclePolicyServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILifecyclePolicyServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILifecyclePolicyServiceService_IDryRun extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILifecyclePolicyServiceService_IGetDryRunResult extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult>;
}
interface ILifecyclePolicyServiceService_IListDryRunResults extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse>;
}
interface ILifecyclePolicyServiceService_IListDryRunResultAffectedImages extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse> {
    path: "/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse>;
}

export const LifecyclePolicyServiceService: ILifecyclePolicyServiceService;

export interface ILifecyclePolicyServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy>;
    list: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation>;
    dryRun: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, yandex_cloud_operation_operation_pb.Operation>;
    getDryRunResult: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult>;
    listDryRunResults: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse>;
    listDryRunResultAffectedImages: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse>;
}

export interface ILifecyclePolicyServiceClient {
    get(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    dryRun(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    dryRun(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    dryRun(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getDryRunResult(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult) => void): grpc.ClientUnaryCall;
    getDryRunResult(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult) => void): grpc.ClientUnaryCall;
    getDryRunResult(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult) => void): grpc.ClientUnaryCall;
    listDryRunResults(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse) => void): grpc.ClientUnaryCall;
    listDryRunResults(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse) => void): grpc.ClientUnaryCall;
    listDryRunResults(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse) => void): grpc.ClientUnaryCall;
    listDryRunResultAffectedImages(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): grpc.ClientUnaryCall;
    listDryRunResultAffectedImages(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): grpc.ClientUnaryCall;
    listDryRunResultAffectedImages(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): grpc.ClientUnaryCall;
}

export class LifecyclePolicyServiceClient extends grpc.Client implements ILifecyclePolicyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public dryRun(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public dryRun(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public dryRun(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getDryRunResult(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult) => void): grpc.ClientUnaryCall;
    public getDryRunResult(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult) => void): grpc.ClientUnaryCall;
    public getDryRunResult(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult) => void): grpc.ClientUnaryCall;
    public listDryRunResults(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse) => void): grpc.ClientUnaryCall;
    public listDryRunResults(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse) => void): grpc.ClientUnaryCall;
    public listDryRunResults(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse) => void): grpc.ClientUnaryCall;
    public listDryRunResultAffectedImages(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): grpc.ClientUnaryCall;
    public listDryRunResultAffectedImages(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): grpc.ClientUnaryCall;
    public listDryRunResultAffectedImages(request: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse) => void): grpc.ClientUnaryCall;
}
