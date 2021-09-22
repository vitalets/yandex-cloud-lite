#!/bin/bash
# Update proto files from https://github.com/yandex-cloud/cloudapi
# Usage: ./scripts/update-proto.sh

set -euo pipefail

mkdir -p temp
mkdir -p proto

wget "https://github.com/yandex-cloud/cloudapi/archive/master.zip" -O temp/myfile.zip
unzip temp/myfile.zip -d proto
rm -f temp/myfile.zip
