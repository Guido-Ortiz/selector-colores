# Prueba Tecnica - OXYGEN

## Selector de Colores

- El usuario dispone de 5 círculos que representan una selección de colores. La posición inicial deben ser 5 círculos vacíos, los cuales deben tener el mismo aspecto que los últimos 2 en el ejemplo del diseño.
- Cuando el usuario haga clic en un círculo, el círculo aumenta de tamaño (como se muestra en el tercer círculo del diseño) y pasa a tener un color activo por defecto.
- El “color-picker” selecciona y modifica el color del círculo.
- El usuario podrá escribir un nombre en el campo de texto. La selección de colores no debe poder guardarse si el usuario no ha indicado un nombre.
- Cuando el usuario haga clic en el botón ‘+’, se guarda la selección en la parte inferior y desaparecen los colores de la zona de selección del inicio.
- Cuando el usuario haga clic en el icono de ‘🗑’ (basura) se debe eliminar la selección de la lista.

## Comenzando

El repositorio cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `palette`

El contenido de `client` fue creado usando: Create React App.

## Tecnologías usadas:
- React
- Redux
- Express
- Sequelize - Postgres
