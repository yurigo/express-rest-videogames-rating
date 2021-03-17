# [REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

> 2000

> Roy Fielding

> `RE`presentational `S`tate `T`ransfer

Es más un conjunto de normas que un protocolo.

## Client-Server

La arquitectura debe ser cliente servidor

## Stateless

Cada petición no debe tener estado y en el caso de tener que manejar el estado, éste lo tiene que controlar el cliente y enviarlo en cada petición

## Cache

La arquitectura debe permitir cachear las respuestas del servidor a cualquier nivel y así mejorar el rendimiento

## Uniform Interface

La interfaz debe ofrecer siempre lo mismo independientemente quien vaya a ser quien la consuma. Simplifica y desacopla la arquitectura, cosa que permite a cada parte (clientes y servidor) a evolucionar independientemente.
Se divide en los siguientes puntos:

- Identification of resources
- Manipulation of resources through representations (Representations)
- Self-descriptive Messages
- Hypermedia as the engine of Application State (HATEOAS)

### Identification of resources

Los recursos son conceptos separados de las representaciones que se devuelven al cliente. Por ejemplo, el servidor no devuelve la base de datos sinó html, xml, json que representa algunos registros de la base de datos.

```
/users      //es la identificación de un recurso o colección de recurso
/users/3    //es la identificación de un recurso
```

### Manipulation of resources through representations

Cuando un cliente recibe una **representación** de un recurso, incluyendo cualquier metadato adjunto, tiene toda la información para modificar o borrar el recurso en el servidor (siempre y cuando tenga permisos).

Cada operacion puede ser llevada a cabo sobre un recurso utilizando el metodo HTTP y la URI. Esto hace que sea todo más facil de seguir, como desarrollador del servicio no se necesita proveer la documentación para cada uno de los endpoint relacionados con un recurso.

```
GET /users     // representacion obtener los usuarios
POST /users    // representacion para crear un usuario
```

### Self-descriptive Messages

Cada mensaje incluye suficiente información para describir como procesar el mensaje. Por ejemplo, qué parser utilizar para obtener un objeto MIME. Por ejemplo, la respuesta puede indicar su cacheabilidad.

```
Content-Type: application/json
Cache-Control: no-cache
```

### Hypermedia as the engine of Application State ([HATEOAS](./HATEOAS.md))

El cliente envia el estado vía body, querystring, cabeceras y la URI requerida. El servicio devuelve el estado al cliente viá el body, codigos de respuesta, cabeceras.

Cuando sea necesario, en el body de la respuesta del servidor se tienen que indicar links para obtener el mismo objeto u objetos relacionados.

```
{
   id: 3,
   name: "Lorem"
   href: {
      _self: "http://example.com/api/users/3"
      _next: "http://example.com/api/users/4"
      _videogames: "http://example.com/api/users/3/videogames"
   }
}
```

## Layered System

El cliente no puede decir si está conectado al servidor o a un servidor intermedio. Para el cliente una petición debe ser trasparente y no tiene que afectar a la comunicación

## Code-On-Demand (opcional)

Los servicios pueden extender o customizar la funcionalidad de un cliente transfiliendole código ejecutable.

<br><br><br>

# Richardson Maturity Model

> Leonard Richardson

0. ### The swamp of pox

   Un unico endpoint que se usará para todo tipo de operaciones

1. ### Recursos

   Un endpoints por cada operación.

   > Reduce la complegidad a traves de divide y vencerás. Rompe un servicio grande en múltiples recursos.

2. ### HTTP Verbs

   Un enpoint por cada recurso.
   Se usan los verbos HTTP para definir la operación:

   - GET
   - POST
   - PUT
   - PATCH
   - DELETE

   > Introduce un conjunto de verbos standard que se manejan de la misma manera en situaciones similares, eliminando variaciones innecesarias.

3. ### HATEOAS

   El resultado provee links de navegación, acciones relevantes que describen casos de uso de diferentes recursos.

   > Introduce descubrimiento, haciendo que el protocolo sea más autodocumentado.

<br><br><br>

# [Best Practices](https://s3.amazonaws.com/tfpearsonecollege/bestpractices/RESTful+Best+Practices.pdf)

- Aceptar y responder con json. (Content-Type: application/json) Y si se puede XML también (Content-Type: application/xml)
- Utilizar nombres en lugar de verbos com URI.
  - Utilizar los verbos HTTP
    - No utilizar GET para alterar el estado.
- Colecciones en plural.
- Anidar recursos para objetos jerárquicos (subrecurso).
- Manejar errores con elegancia y devolver códigos de error standard
- Permitir proyección, filtrado, ordenamiento y paginación
- Mantener Buenas prácticas de seguridad
- Cachear datos para mejorar el rendimiento
- Versionar
