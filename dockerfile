# Definimos la imagen base
FROM node

# Creamos una carpeta donde vamos a guardar el proyecto
WORKDIR /app

# Copiamos el package de nuestra carpeta local a la carpeta de operaciones
COPY package*.json ./

# Corremos el comando para instalar las dependencias
RUN npm install

# Tomamos el codigo del aplicativo
COPY . .

# Habilitamos un puerto que escuche nuestra computadora
EXPOSE 8080

# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]