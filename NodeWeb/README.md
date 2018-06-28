#  Node.js en la web

## [Express.js](http://expressjs.com/)

### ¿Qué es?

> Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.<br><br>
> Con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla.<br><br>
>Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.

* [Express.js en español](http://expressjs.com/es)
* [Documentación](http://expressjs.com/en/4x/api.html)
* Express API:
  * [Express](http://expressjs.com/4x/api.html#express)
  * [Application](http://expressjs.com/4x/api.html#app)
  * [Require](http://expressjs.com/4x/api.html#req)
  * [Response](http://expressjs.com/4x/api.html#res)
  * [Router](http://expressjs.com/4x/api.html#router)
* [Generador de Express](http://expressjs.com/en/starter/generator.html)

#### Características

* Estrictamente web (microframework).
* Sencillo, flexible y minimalista.
* Muy popular.
* Se adapta muy bien a la filosofía de Node.
* Similar a Sinatra, Sylex, Flask, Spark, etc.

#### Útil para:

* Rutas.
* Parámetros.
* Formularios.
* Subida de ficheros.
* Cookies.
* Sesiones.
* Templates.

#### NO es útil para:

* Base de datos / ORM.
* Autenticación de usuarios.
* Seguridad.
* Migraciones.
* Deployment.
* Testing.
* Organización del código.

#### CONCRETAMENTE:

* Construye sobre `http`.
* Procesa la petición a través middlewares.
* Asocia rutas a manejadores.
* Procesa los objetos de petición y respuesta.
* Visualiza templates.
* Nosotros escogemos qué middlewares queremos usar, y en qué orden.

#### Frameworks inspirados o basados en Express:

* [Koa](https://koajs.com/)
* [Hapi](https://hapijs.com/)
* [Kraken](http://krakenjs.com/)
* [Sails](https://sailsjs.com/)
* [Adonis](https://adonisjs.com/)
* [Total](https://www.totaljs.com/)
* [Locomotive](http://www.locomotivejs.org/)
* [Geddy](http://geddyjs.org/)
