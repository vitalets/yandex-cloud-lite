// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_kms_v1_symmetric_crypto_service_pb = require('../../../../yandex/cloud/kms/v1/symmetric_crypto_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_kms_v1_symmetric_key_pb = require('../../../../yandex/cloud/kms/v1/symmetric_key_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_kms_v1_GenerateDataKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.GenerateDataKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_GenerateDataKeyRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_GenerateDataKeyResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.GenerateDataKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_GenerateDataKeyResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricDecryptRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricDecryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricDecryptRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricDecryptResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricDecryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricDecryptResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricEncryptRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricEncryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricEncryptRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricEncryptResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricEncryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricEncryptResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricReEncryptRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricReEncryptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricReEncryptRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricReEncryptResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricReEncryptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricReEncryptResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// --- Data plane for KMS symmetric cryptography operations
//
// Set of methods that perform symmetric encryption and decryption.
var SymmetricCryptoServiceService = exports.SymmetricCryptoServiceService = {
  // Encrypts given plaintext with the specified key.
encrypt: {
    path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Encrypt',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptRequest,
    responseType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricEncryptResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_SymmetricEncryptRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricEncryptRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_SymmetricEncryptResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricEncryptResponse,
  },
  // Decrypts the given ciphertext with the specified key.
decrypt: {
    path: '/yandex.cloud.kms.v1.SymmetricCryptoService/Decrypt',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptRequest,
    responseType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricDecryptResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_SymmetricDecryptRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricDecryptRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_SymmetricDecryptResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricDecryptResponse,
  },
  // Re-encrypts a ciphertext with the specified KMS key.
reEncrypt: {
    path: '/yandex.cloud.kms.v1.SymmetricCryptoService/ReEncrypt',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptRequest,
    responseType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.SymmetricReEncryptResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_SymmetricReEncryptRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricReEncryptRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_SymmetricReEncryptResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricReEncryptResponse,
  },
  // Generates a new symmetric data encryption key (not a KMS key) and returns
// the generated key as plaintext and as ciphertext encrypted with the specified symmetric KMS key.
generateDataKey: {
    path: '/yandex.cloud.kms.v1.SymmetricCryptoService/GenerateDataKey',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyRequest,
    responseType: yandex_cloud_kms_v1_symmetric_crypto_service_pb.GenerateDataKeyResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_GenerateDataKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_GenerateDataKeyRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_GenerateDataKeyResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_GenerateDataKeyResponse,
  },
};

exports.SymmetricCryptoServiceClient = grpc.makeGenericClientConstructor(SymmetricCryptoServiceService);
