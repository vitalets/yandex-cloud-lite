#!/bin/bash
# Update proto files from https://github.com/yandex-cloud/cloudapi
# Usage: ./scripts/pull-proto.sh

set -euo pipefail

mkdir -p proto

wget "https://github.com/yandex-cloud/cloudapi/archive/master.zip" -O myfile.zip
unzip myfile.zip -d proto
rm -f myfile.zip
