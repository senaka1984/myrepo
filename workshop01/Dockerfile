
#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#https://docs.microsoft.com/en-us/visualstudio/containers/container-tools-react?view=vs-2022
#https://docs.microsoft.com/en-us/visualstudio/containers/container-tools?view=vs-2022
#https://github.com/erik1066/dotnet-react-docker-tutorial/blob/master/src/Dockerfile

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
WORKDIR /

COPY . .

RUN dotnet restore "workshop01.csproj"
COPY . .

WORKDIR /

RUN dotnet build "workshop01.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "workshop01.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "workshop01.dll"]