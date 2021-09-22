// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/primitives.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Polygon extends jspb.Message { 
    clearVerticesList(): void;
    getVerticesList(): Array<Vertex>;
    setVerticesList(value: Array<Vertex>): Polygon;
    addVertices(value?: Vertex, index?: number): Vertex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Polygon.AsObject;
    static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Polygon;
    static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
    export type AsObject = {
        verticesList: Array<Vertex.AsObject>,
    }
}

export class Vertex extends jspb.Message { 
    getX(): number;
    setX(value: number): Vertex;
    getY(): number;
    setY(value: number): Vertex;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vertex.AsObject;
    static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vertex;
    static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
    export type AsObject = {
        x: number,
        y: number,
    }
}
