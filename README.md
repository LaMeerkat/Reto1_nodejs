# Guía de configuración y ejecución del proyecto

Este archivo proporciona una guía paso a paso para configurar el entorno virtual y ejecutar los tests del proyecto.

## Requisitos previos

Asegúrate de tener instalados los siguientes elementos en tu sistema:

- Python (versión 3.x)
- Node.js (versión 12.x o superior)

## Pasos de configuración

Sigue estos pasos para configurar el entorno virtual y ejecutar los tests:

1. Clona el repositorio en tu máquina local.

2. Crea un entorno virtual para el proyecto:

   ```shell
   python -m venv env
   ```

3. Instala Node.js en tu entorno virtual

  -Primero, asegúrate de tener "nvm" instalado en tu sistema. Si no lo tienes, puedes seguir las instrucciones de instalación adecuadas para tu sistema operativo en el repositorio oficial de "nvm" en GitHub: https://github.com/nvm-sh/nvm.

  ```shell
  nvm install node
  npm init
  ```

  - Indicar la ruta de index.js como modulo de inicio para npm

  - Ejecutar el index.ls

  ```shell
  node index.js
  ```

4. Si dese correr un test automatico

  -primero instalamos la dependencia jest

  ```shell
  npm install --save-dev jest
  ```
  -Corremos el comando

  ```shell
  npx jest
  ```