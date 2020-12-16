# PruebaTecnica - Experimentality

Este es el repositorio donde se codifico la solucion a la prueba tecnica.
El backend se realizo en node.js conectado a una base de datos mongodb, el frontend se realizo en react.js.

## Endpoint Backend

### Ruta http://localhost:8080/api/v1/generate-changing-life-quote/
Metodo Post
```json
{
  "id" : "",
  "quote" : "",
  "image": ""
}
```
### Ruta http://localhost:8080/api/v1/generate-changing-life-quote/:id
Metodo Get
```json
{
  "id" : "",
  "quote" : "",
  "image": ""
}
```
### Ruta http://localhost:8080/api/v1/generate-changing-life-quote/:id
Metodo Delete
```json
{
  "message" : "",
}
```


## Configuracion para desplegar en local

En la carpeta del backend (generateQuote-Backend) se cambia la url de la base de datos en el archivo "app\dbConfig.js".
En caso de que el backend se despliegue en otro puerto, se debe cambiar la url de la api en el archivo generateQuote-Frontend\src\Context\QuoteContext.jsx
