#/bin/sh
docker buildx build --platform="linux/arm64" -t arteeh/banter-greenhouse:latest --push .