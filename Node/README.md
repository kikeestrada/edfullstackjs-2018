# Node.js Desde Cero

## [¿Qué es Node.js?](https://nodejs.org/)

> Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

* [Node.js en español](https://nodejs.org/es/)
* Instalación
  * Tipos de Versiones
    * **LTS** - *Long Term Support*
    * **Current**
  * Tipos de Instalación
    * [Stand Alone](https://nodejs.org/en/download/)
    * Node Version Manager
      * [NVM para Linux / Mac](https://github.com/creationix/nvm)
      * [NVM para Windows](https://github.com/coreybutler/nvm-windows)

## Ciclo de vida de un proceso

1. Pila de Procesos (Requests & Response)
1. Pila de Subprocesos (Async Requests)
1. Cola de Callbacks (Async Responses)

![Event Loop](../assets/event-loop.png)

## Blocking vs Non Blocking I/O

Comensales VS Meseros

![Comensales VS Meseros](../assets/comensales.jpg)
