#!/bin/bash
# Update proto files from https://github.com/yandex-cloud/cloudapi
# Usage: ./scripts/pull-proto.sh

set -euo pipefail

mkdir -p proto

wget "https://github.com/yandex-cloud/cloudapi/archive/master.zip" -O proto.zip
unzip -o proto.zip
rm -f proto.zip
