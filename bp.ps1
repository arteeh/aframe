docker buildx bake --push --set *.platform=linux/amd64,linux/arm64/v8
docker push arteeh/banter-hub:latest
docker push arteeh/banter-greenhouse:latest
