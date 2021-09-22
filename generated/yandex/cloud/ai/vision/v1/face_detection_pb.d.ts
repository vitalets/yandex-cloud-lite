// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/face_detection.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_ai_vision_v1_primitives_pb from "../../../../../yandex/cloud/ai/vision/v1/primitives_pb";

export class FaceAnnotation extends jspb.Message { 
    clearFacesList(): void;
    getFacesList(): Array<Face>;
    setFacesList(value: Array<Face>): FaceAnnotation;
    addFaces(value?: Face, index?: number): Face;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FaceAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: FaceAnnotation): FaceAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FaceAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FaceAnnotation;
    static deserializeBinaryFromReader(message: FaceAnnotation, reader: jspb.BinaryReader): FaceAnnotation;
}

export namespace FaceAnnotation {
    export type AsObject = {
        facesList: Array<Face.AsObject>,
    }
}

export class Face extends jspb.Message { 

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): yandex_cloud_ai_vision_v1_primitives_pb.Polygon | undefined;
    setBoundingBox(value?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon): Face;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Face.AsObject;
    static toObject(includeInstance: boolean, msg: Face): Face.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Face, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Face;
    static deserializeBinaryFromReader(message: Face, reader: jspb.BinaryReader): Face;
}

export namespace Face {
    export type AsObject = {
        boundingBox?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon.AsObject,
    }
}
