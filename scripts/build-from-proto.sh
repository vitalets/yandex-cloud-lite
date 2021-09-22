#!/bin/bash
# Build GRPC services from proto files.
# Usage: ./scripts/build-from-proto.sh

PROTO_SRC=$(find ./proto/cloudapi-master -iname "*.proto")
OUT_DIR=./generated

mkdir -p $OUT_DIR
rm -rf $OUT_DIR/**

npx grpc_tools_node_protoc \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--plugin="protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin" \
--js_out="import_style=commonjs,binary:$OUT_DIR" \
--ts_out="service=grpc-node,mode=grpc-js:$OUT_DIR" \
--grpc_out="grpc_js:$OUT_DIR" \
-I ./proto/cloudapi-master/third_party/googleapis \
-I ./proto/cloudapi-master \
$PROTO_SRC
