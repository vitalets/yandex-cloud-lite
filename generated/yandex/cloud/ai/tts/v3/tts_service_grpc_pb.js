// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ai_tts_v3_tts_pb = require('../../../../../yandex/cloud/ai/tts/v3/tts_pb.js');

function serialize_speechkit_tts_v3_UtteranceSynthesisRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest)) {
    throw new Error('Expected argument of type speechkit.tts.v3.UtteranceSynthesisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_tts_v3_UtteranceSynthesisRequest(buffer_arg) {
  return yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_tts_v3_UtteranceSynthesisResponse(arg) {
  if (!(arg instanceof yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse)) {
    throw new Error('Expected argument of type speechkit.tts.v3.UtteranceSynthesisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_tts_v3_UtteranceSynthesisResponse(buffer_arg) {
  return yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for voice synthesis.
var SynthesizerService = exports.SynthesizerService = {
  // Synthesizing text into speech.
utteranceSynthesis: {
    path: '/speechkit.tts.v3.Synthesizer/UtteranceSynthesis',
    requestStream: false,
    responseStream: true,
    requestType: yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest,
    responseType: yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse,
    requestSerialize: serialize_speechkit_tts_v3_UtteranceSynthesisRequest,
    requestDeserialize: deserialize_speechkit_tts_v3_UtteranceSynthesisRequest,
    responseSerialize: serialize_speechkit_tts_v3_UtteranceSynthesisResponse,
    responseDeserialize: deserialize_speechkit_tts_v3_UtteranceSynthesisResponse,
  },
};

exports.SynthesizerClient = grpc.makeGenericClientConstructor(SynthesizerService);
