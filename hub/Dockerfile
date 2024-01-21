FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
RUN apt update -y && apt install python3 -y
RUN dotnet workload install wasm-tools
WORKDIR /src
COPY . ./
RUN dotnet publish -c Release -o /publish

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /publish/wwwroot .
EXPOSE 80