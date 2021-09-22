// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_dns_v1_dns_zone_service_pb = require('../../../../yandex/cloud/dns/v1/dns_zone_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_dns_v1_dns_zone_pb = require('../../../../yandex/cloud/dns/v1/dns_zone_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_access_ListAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_ListAccessBindingsResponse(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsResponse(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_SetAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.SetAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.SetAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_SetAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.SetAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_UpdateAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.UpdateAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.UpdateAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_UpdateAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.UpdateAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_CreateDnsZoneRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.CreateDnsZoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_CreateDnsZoneRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_DeleteDnsZoneRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.DeleteDnsZoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_DeleteDnsZoneRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_DnsZone(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_pb.DnsZone)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.DnsZone');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_DnsZone(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_pb.DnsZone.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_GetDnsZoneRecordSetRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_GetDnsZoneRecordSetRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_GetDnsZoneRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.GetDnsZoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_GetDnsZoneRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_ListDnsZoneOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.ListDnsZoneOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_ListDnsZoneOperationsRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_ListDnsZoneOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.ListDnsZoneOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_ListDnsZoneOperationsResponse(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsResponse(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsResponse(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_ListDnsZonesRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.ListDnsZonesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_ListDnsZonesRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_ListDnsZonesResponse(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.ListDnsZonesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_ListDnsZonesResponse(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_RecordSet(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_pb.RecordSet)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.RecordSet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_RecordSet(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_pb.RecordSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_UpdateDnsZoneRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.UpdateDnsZoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_UpdateDnsZoneRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_UpdateRecordSetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.UpdateRecordSetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_UpdateRecordSetsRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dns_v1_UpsertRecordSetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dns.v1.UpsertRecordSetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dns_v1_UpsertRecordSetsRequest(buffer_arg) {
  return yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing DNS zones.
var DnsZoneServiceService = exports.DnsZoneServiceService = {
  // Returns the specified DNS zone.
//
// To get the list of all available DNS zones, make a [List] request.
get: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRequest,
    responseType: yandex_cloud_dns_v1_dns_zone_pb.DnsZone,
    requestSerialize: serialize_yandex_cloud_dns_v1_GetDnsZoneRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_GetDnsZoneRequest,
    responseSerialize: serialize_yandex_cloud_dns_v1_DnsZone,
    responseDeserialize: deserialize_yandex_cloud_dns_v1_DnsZone,
  },
  // Retrieves the list of DNS zones in the specified folder.
list: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesRequest,
    responseType: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZonesResponse,
    requestSerialize: serialize_yandex_cloud_dns_v1_ListDnsZonesRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_ListDnsZonesRequest,
    responseSerialize: serialize_yandex_cloud_dns_v1_ListDnsZonesResponse,
    responseDeserialize: deserialize_yandex_cloud_dns_v1_ListDnsZonesResponse,
  },
  // Creates a DNS zone in the specified folder.
create: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.CreateDnsZoneRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dns_v1_CreateDnsZoneRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_CreateDnsZoneRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified DNS zone.
update: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateDnsZoneRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dns_v1_UpdateDnsZoneRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_UpdateDnsZoneRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified DNS zone. 
delete: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.DeleteDnsZoneRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dns_v1_DeleteDnsZoneRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_DeleteDnsZoneRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified record set.
getRecordSet: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.GetDnsZoneRecordSetRequest,
    responseType: yandex_cloud_dns_v1_dns_zone_pb.RecordSet,
    requestSerialize: serialize_yandex_cloud_dns_v1_GetDnsZoneRecordSetRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_GetDnsZoneRecordSetRequest,
    responseSerialize: serialize_yandex_cloud_dns_v1_RecordSet,
    responseDeserialize: deserialize_yandex_cloud_dns_v1_RecordSet,
  },
  // Retrieves the list of record sets in the specified folder.
listRecordSets: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsRequest,
    responseType: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneRecordSetsResponse,
    requestSerialize: serialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsRequest,
    responseSerialize: serialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsResponse,
    responseDeserialize: deserialize_yandex_cloud_dns_v1_ListDnsZoneRecordSetsResponse,
  },
  // Method with strict control for changing zone state. Returns error when:
// 1. Deleted record is not found.
// 2. Found record with matched type and name but different TTL or value.
// 3. Attempted to add record with existing name and type.
// Deletions happen first. If a record with the same name and type exists in both lists,
// then the existing record will be deleted, and a new one added.
updateRecordSets: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.UpdateRecordSetsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dns_v1_UpdateRecordSetsRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_UpdateRecordSetsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
// Deletes records that match all specified fields which allows to delete only specified records from a record set.
upsertRecordSets: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.UpsertRecordSetsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dns_v1_UpsertRecordSetsRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_UpsertRecordSetsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified DNS zone.
listOperations: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsRequest,
    responseType: yandex_cloud_dns_v1_dns_zone_service_pb.ListDnsZoneOperationsResponse,
    requestSerialize: serialize_yandex_cloud_dns_v1_ListDnsZoneOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_dns_v1_ListDnsZoneOperationsRequest,
    responseSerialize: serialize_yandex_cloud_dns_v1_ListDnsZoneOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_dns_v1_ListDnsZoneOperationsResponse,
  },
  // Lists existing access bindings for the specified DNS zone.
listAccessBindings: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified DNS zone.
setAccessBindings: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified DNS zone.
updateAccessBindings: {
    path: '/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.DnsZoneServiceClient = grpc.makeGenericClientConstructor(DnsZoneServiceService);
