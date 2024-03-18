# Use uma imagem base do Ubuntu
FROM ubuntu:latest

# Atualize os pacotes e instale as dependências necessárias
RUN apt-get update && apt-get install -y curl gnupg2 apt-transport-https  ca-certificates 

# Adicione a chave do repositório do Google Cloud para apt
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -

# Adicione o repositório do Google Cloud para apt
RUN echo "deb https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Atualize novamente os pacotes e instale o SDK do Google Cloud
RUN apt-get update && apt-get install -y curl google-cloud-sdk google-cloud-cli-pubsub-emulator 

# Baixe e instale o Node.js e o npm
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key |  gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg   
# RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" |  tee /etc/apt/sources.list.d/nodesource.list

# RUN apt-get update &&  apt-get install nodejs -y


# Baixe e configure o Cloud SDK do Google Pub/Sub
# RUN gcloud components install pubsub-emulator

# Exponha a porta em que o emulador Pub/Sub estará ouvindo (padrão: 8085)
EXPOSE 8085

# RUN npm install -g npm@latest

# WORKDIR /app

# COPY ./app .
# RUN npm install
# RUN npm run build
# RUN chmod +x start-pubsub.sh

# Inicie o emulador Pub/Sub quando o contêiner for iniciado


CMD ["gcloud", "beta", "emulators", "pubsub", "start","--project=abc" ,"--host-port=0.0.0.0:8085"]



