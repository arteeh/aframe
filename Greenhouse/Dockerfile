FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG TARGETARCH
ARG BUILDPLATFORM

RUN apt update -y && apt install python3 -y
RUN dotnet workload install wasm-tools
WORKDIR /src
COPY . ./
RUN dotnet publish ./Greenhouse/Greenhouse.csproj -a $TARGETARCH -c Release -o /publish

FROM --platform=$TARGETARCH nginx:alpine
ARG TARGETARCH
ARG BUILDPLATFORM

WORKDIR /usr/share/nginx/html
COPY --from=build /publish/wwwroot .
EXPOSE 80