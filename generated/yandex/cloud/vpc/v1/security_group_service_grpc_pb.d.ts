// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/security_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_vpc_v1_security_group_service_pb from "../../../../yandex/cloud/vpc/v1/security_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_security_group_pb from "../../../../yandex/cloud/vpc/v1/security_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ISecurityGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ISecurityGroupServiceService_IGet;
    list: ISecurityGroupServiceService_IList;
    create: ISecurityGroupServiceService_ICreate;
    update: ISecurityGroupServiceService_IUpdate;
    updateRules: ISecurityGroupServiceService_IUpdateRules;
    updateRule: ISecurityGroupServiceService_IUpdateRule;
    delete: ISecurityGroupServiceService_IDelete;
    move: ISecurityGroupServiceService_IMove;
    listOperations: ISecurityGroupServiceService_IListOperations;
}

interface ISecurityGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, yandex_cloud_vpc_v1_security_group_pb.SecurityGroup> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>;
}
interface ISecurityGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse>;
}
interface ISecurityGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecurityGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecurityGroupServiceService_IUpdateRules extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecurityGroupServiceService_IUpdateRule extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecurityGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecurityGroupServiceService_IMove extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISecurityGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse> {
    path: "/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse>;
}

export const SecurityGroupServiceService: ISecurityGroupServiceService;

export interface ISecurityGroupServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateRules: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateRule: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    move: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse>;
}

export interface ISecurityGroupServiceClient {
    get(request: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRules(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRules(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRules(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRule(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRule(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateRule(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class SecurityGroupServiceClient extends grpc.Client implements ISecurityGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRules(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRules(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRules(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRule(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRule(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateRule(request: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}
