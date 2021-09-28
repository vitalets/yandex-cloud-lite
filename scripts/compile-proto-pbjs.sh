#!/bin/bash
# Experimantal.
# Build GRPC js and ts services from proto files via protobufjs.
# Usage: ./scripts/compile-proto-pbjs.sh

OUT_DIR=./generated

mkdir -p $OUT_DIR

# Compile js
npx pbjs \
  --target static-module \
  --wrap commonjs \
  --path ./proto/cloudapi-master \
  --path ./proto/cloudapi-master/third_party/googleapis \
  --out $OUT_DIR/bundle.js \
  --no-beautify \
  `find ./proto/cloudapi-master -iname "*.proto"`

# Compile d.ts
npx pbts -o $OUT_DIR/bundle.d.ts $OUT_DIR/bundle.js

