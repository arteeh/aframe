FROM --platform=$TARGETARCH mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG TARGETARCH
ARG BUILDPLATFORM

WORKDIR /src
COPY . .
RUN dotnet publish "banter.csproj" -a $TARGETARCH -c Release -o /publish


FROM --platform=$TARGETARCH mcr.microsoft.com/dotnet/aspnet:8.0 AS base
ARG TARGETARCH
ARG BUILDPLATFORM

WORKDIR /app
COPY --from=build /publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "banter.dll"]