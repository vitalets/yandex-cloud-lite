#!/bin/bash
# Build GRPC services from proto files.
# Usage: ./scripts/compile-proto.sh

PROTO_SRC=$(find ./proto/cloudapi-master -iname "*.proto")
OUT_DIR=./generated

mkdir -p $OUT_DIR
rm -rf $OUT_DIR/**

npx grpc_tools_node_protoc \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--js_out="import_style=commonjs,binary:$OUT_DIR" \
--ts_out="grpc_js:$OUT_DIR" \
--grpc_out="grpc_js:$OUT_DIR" \
-I ./proto/cloudapi-master/third_party/googleapis \
-I ./proto/cloudapi-master \
$PROTO_SRC
