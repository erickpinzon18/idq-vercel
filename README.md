# IDQ - Identificación Digital Queretana

## Descripción

IDQ (Identificación Digital Queretana) es una aplicación desarrollada como parte de un hackatón que tiene como objetivo brindar a los usuarios la posibilidad de almacenar todas sus credenciales y documentos oficiales en un único lugar seguro y accesible. La aplicación permite a los usuarios cargar sus archivos, generar códigos QR para acceder a los datos en caso de que el servidor no esté disponible, y proporciona un control de acceso para garantizar la seguridad de los datos sensibles.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [API y Base de Datos](#api-y-base-de-datos)
- [Documentación](#documentación)
- [Presentación](#presentación)
- [Proyectos Relacionados](#proyectos-relacionados)
- [Contribución](#contribución)
- [Créditos](#créditos)
- [Licencia](#licencia)

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Clona este repositorio: `git clone https://github.com/TuUsuario/IDQ`
2. Navega a la carpeta del proyecto: `cd IDQ`
3. Instala las dependencias: `npm install`
4. Configura la conexión a la base de datos y otros parámetros en `config.js`
5. Ejecuta el servidor: `npm start`

## Uso

1. Accede a la aplicación a través de tu navegador web: [http://localhost:3000](http://localhost:3000)
2. Regístrate con tu cuenta para comenzar a utilizar la plataforma.
3. Sube tus documentos y credenciales oficiales. Puedes organizarlos en categorías para un acceso más sencillo.
4. Genera códigos QR para tus documentos, lo que te permitirá acceder a ellos incluso cuando no tengas conexión a Internet.

## Características

- Almacenamiento seguro de documentos oficiales y credenciales en línea.
- Generación de códigos QR para acceder a los documentos en dispositivos sin conexión.
- Organización de archivos en categorías para una mejor administración.
- Control de acceso basado en roles para garantizar la seguridad de los datos sensibles.
- Interfaz de usuario intuitiva y fácil de usar.

## API y Base de Datos

La aplicación utiliza una API REST para gestionar los documentos y la autenticación de usuarios. Los datos se almacenan en una base de datos segura. La API proporciona endpoints para:

- Registro y autenticación de usuarios.
- Carga y descarga de documentos.
- Generación de códigos QR para documentos.
- Administración de categorías y organización de documentos.

## Documentación

- [Documentación Técnica](https://docs.google.com/document/d/1QxlpP-ROawh3xvM8S_HzHmWLFMLtmj_siKDzXbN0xaQ/edit?usp=sharing)

## Presentación

- [Presentación en Google Slides](https://docs.google.com/presentation/d/1flYl4w_tBPO0VpfHNz3eY5SE5Ozynt_f/edit?usp=sharing&ouid=105847790403881410959&rtpof=true&sd=true)

## Proyectos Relacionados

- [Página Web Consumiendo la API](https://github.com/SrCosmicCat/idq-use-api)
<!-- [Aplicación Móvil Consumiendo la API](link_al_repositorio_de_la_app_movil) -->

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu función: `git checkout -b mi-nueva-caracteristica`
3. Realiza tus cambios y commits: `git commit -m "Agregar nueva característica"`
4. Sube tus cambios a tu repositorio: `git push origin mi-nueva-caracteristica`
5. Abre una Pull Request en GitHub.

## Créditos

Este proyecto fue desarrollado por:

- CampTech
- [Gerardo Alvarez Alvarez](https://github.com/gerardoaaxg) - Gerardo Alvarez Alvarez
- [Miguel Angel Diosdado Rodriguez](https://github.com/SrCosmicCat) - Miguel Angel Diosdado Rodriguez
- [Erick Pinzon Huerta](https://github.com/erickpinzon18) - Erick Pinzon Huerta

