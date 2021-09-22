// package: speechkit.tts.v3
// file: yandex/cloud/ai/tts/v3/tts_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_ai_tts_v3_tts_service_pb from "../../../../../yandex/cloud/ai/tts/v3/tts_service_pb";
import * as yandex_cloud_ai_tts_v3_tts_pb from "../../../../../yandex/cloud/ai/tts/v3/tts_pb";

interface ISynthesizerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    utteranceSynthesis: ISynthesizerService_IUtteranceSynthesis;
}

interface ISynthesizerService_IUtteranceSynthesis extends grpc.MethodDefinition<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest, yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse> {
    path: "/speechkit.tts.v3.Synthesizer/UtteranceSynthesis";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
}

export const SynthesizerService: ISynthesizerService;

export interface ISynthesizerServer {
    utteranceSynthesis: grpc.handleServerStreamingCall<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest, yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
}

export interface ISynthesizerClient {
    utteranceSynthesis(request: yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
    utteranceSynthesis(request: yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
}

export class SynthesizerClient extends grpc.Client implements ISynthesizerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public utteranceSynthesis(request: yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
    public utteranceSynthesis(request: yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_ai_tts_v3_tts_pb.UtteranceSynthesisResponse>;
}
