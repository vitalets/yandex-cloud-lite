// package: yandex.cloud.kms.v1
// file: yandex/cloud/kms/v1/symmetric_crypto_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_kms_v1_symmetric_crypto_service_pb from "../../../../yandex/cloud/kms/v1/symmetric_crypto_service_pb";
import * as yandex_cloud_kms_v1_symmetric_key_pb from "../../../../yandex/cloud/kms/v1/symmetric_key_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ISymmetricCryptoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    encrypt: ISymmetricCryptoServiceService_IEncrypt;
    decrypt: ISymmetricCryptoServiceService_IDecrypt;
    reEncrypt: ISymmetricCryptoServiceService_IReEncrypt;
    generateDataKey: ISymmetricCryptoServiceService_IGenerateDataKey;
}

interface ISymmetricCryptoServiceService_IEncrypt extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse>;
}
interface ISymmetricCryptoServiceService_IDecrypt extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse>;
}
interface ISymmetricCryptoServiceService_IReEncrypt extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse>;
}
interface ISymmetricCryptoServiceService_IGenerateDataKey extends grpc.MethodDefinition<yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse> {
    path: "/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse>;
}

export const SymmetricCryptoServiceService: ISymmetricCryptoServiceService;

export interface ISymmetricCryptoServiceServer {
    encrypt: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse>;
    decrypt: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse>;
    reEncrypt: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse>;
    generateDataKey: grpc.handleUnaryCall<yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse>;
}

export interface ISymmetricCryptoServiceClient {
    encrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse) => void): grpc.ClientUnaryCall;
    encrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse) => void): grpc.ClientUnaryCall;
    encrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse) => void): grpc.ClientUnaryCall;
    decrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse) => void): grpc.ClientUnaryCall;
    decrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse) => void): grpc.ClientUnaryCall;
    decrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse) => void): grpc.ClientUnaryCall;
    reEncrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse) => void): grpc.ClientUnaryCall;
    reEncrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse) => void): grpc.ClientUnaryCall;
    reEncrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse) => void): grpc.ClientUnaryCall;
    generateDataKey(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse) => void): grpc.ClientUnaryCall;
    generateDataKey(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse) => void): grpc.ClientUnaryCall;
    generateDataKey(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse) => void): grpc.ClientUnaryCall;
}

export class SymmetricCryptoServiceClient extends grpc.Client implements ISymmetricCryptoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public encrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse) => void): grpc.ClientUnaryCall;
    public encrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse) => void): grpc.ClientUnaryCall;
    public encrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse) => void): grpc.ClientUnaryCall;
    public decrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse) => void): grpc.ClientUnaryCall;
    public decrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse) => void): grpc.ClientUnaryCall;
    public decrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse) => void): grpc.ClientUnaryCall;
    public reEncrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse) => void): grpc.ClientUnaryCall;
    public reEncrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse) => void): grpc.ClientUnaryCall;
    public reEncrypt(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse) => void): grpc.ClientUnaryCall;
    public generateDataKey(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse) => void): grpc.ClientUnaryCall;
    public generateDataKey(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse) => void): grpc.ClientUnaryCall;
    public generateDataKey(request: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse) => void): grpc.ClientUnaryCall;
}
