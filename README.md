# Repaso M3 | Breaking Bad Server

Para este proyecto estaremos creando un servidor utilizando el framework ExpressJS. La idea general va a ser crear un REST API con diferentes rutas que podamos consultar desde el navegador o desde una aplicación como Postman. Utilizaremos un archivo JSON con información de personajes de Breaking Bad como base de datos de prueba.

## Objetivos del Proyecto

- Construir un servidor de NodeJS utilizando el framework ExpressJS.
- Afirmar y conectar los conceptos aprendidos en el M3.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

## Comenzando

1. Forkear el repositorio para tener una copia del mismo en sus cuentas.
2. Clonar el repositorio en sus computadoras para comenzar a trabajar.

# Rutas

## GET /

Cuando nos hagan una petición GET en la ruta principal o raíz '/' vamos a responder con un JSON de la siguiente manera: { status: 200, msg: "Bienvenidos a la API REST de Breaking Bad" }

## GET /characters

Cuando nos hagan una petición GET en la ruta '/characters' vamos a responder con la información de todos los personajes.

## GET /characters/:id

Cuando nos hagan una petición GET en la ruta '/characters/:id' vamos a responder con la información de un personaje especifico.

## POST /characters

Cuando nos hagan una petición POST en la ruta '/characters' vamos a crear un personaje con los datos recibidos por el body, lo agregaremos al archivo de la base de datos y responderemos indicando que el personaje fue creado.

## PUT /characters/:id

Cuando nos hagan una petición PUT en la ruta '/characters/:id' vamos a editar la información de un personaje especifico en el archivo de la base de datos con los datos recibidos por el body y responderemos que el personaje fue editado.

## DELETE /characters/:id

Cuando nos hagan una petición DELETE en la ruta '/characters/:id' vamos a eliminar un personaje del archivo de la base de datos y responderemos que el personaje fue eliminado.

## TAs (Teaching Asistants)

- **José Mella**
- **Leandro Morales**
