# VIDEOGAMES RATING REST API

Tenemos que pasar [express-rpc-videogames-rating](https://github.com/yurigo/express-rpc-videogames-rating) a REST

## Tareas

- [x] Analizar el sistema
- [x] Diseñar los [recursos](./REST.md#Identification_of_resources)
- [x] Diseñar las [representaciones](./REST.md#Manipulation_of_resources_through_representations)
- [x] Diseñar [HATEOAS](./REST.md#Hypermedia_as_the_engine_of_Application_State_(HATEOAS))
- [ ] Implementar


### Analizar el sistema
```
tabla users
id
name
login
password

tabla videogames
id
name

tabla scores
user //id usuario
videogame //id videogame
score //puntuacion
```

### Diseñar los recursos

Definir endpoints

- `/users`
- `/videogames`
- `/scores`

### Diseñar las representaciones

#### Users

- `GET /users` //colección de user
- `GET /users/id`  //user
- `POST /users` 
- `PUT /users/id`
- `DELETE /users/id`

- `GET /users/id/videogames` //colección de videogames por user.


#### Videogames

- `GET /videogames`
- `GET /videogames/id`
- `POST /videogames` 
- `PUT /videogames/id`
- `DELETE /videogames/id`

- `GET /videogames/id/users` //coleccion de users que han puntuado al videogame.


#### Scores

- `POST /scores` 
```
POST /scores
{
    user: 2,
    videogame: 3,
    score: 5
}
```

### HATEOAS

#### User

El usuario contendrá la información (sin el password) de la base de datos más hipervinculos para implementar _hipermedia as the engine of aplication state_ (HATEOAS)

```
{
    id: 3,
    login: "dave"
    name: "Dave",
    self: "http://localhost:3000/api/users/3"
    videogames: "http://localhost:3000/api/users/3/videogames"
}
```


#### Videogames

El videojuego contendrá la información de la tabla videogames la base de datos más la puntuación que será el resultado del sumatorio de todas las puntuaciones recibidas más hipervinculos para implementar _hipermedia as the engine of aplication state_ (HATEOAS)

```
{
    id: 3,
    name: "Lorem ipsum dolor sit amet",
    score: 5,
    count: 40134592348
    self: "http://localhost:3000/api/videogames/3"
    users: "http://localhost:3000/api/videogames/3/users"
}
```


# Resumen

## Endpoints

| Endpoint | Descripcion |
| - | - |
| `GET /api/users` |  Obtiene todos los usuarios de la base de datos.|
| `GET /api/users/ID` | Obtiene un usuario con id = ID. |
| `DELETE /api/users/ID` | Borra el usuario con id = ID de la base de datos |
| `POST /api/users` | Añade un usuario con la información del body a la base de datos |
| `PUT /api/users/ID` | Modifica la información de un usuario con la información del body de la base de datos con id = ID |
| `GET /api/users/ID/videogames`| Muestra la colección de videogames del usuario con id = ID |
| | | 
| `GET /api/videogames` | Obtiene todos los videojuegos de la base de datos. |
| `GET /api/videogames/ID` | Obtiene un videojuego con id = ID |
| `POST /api/videogames` | Añade un videojuego con la información del body a la base de datos |
| `DELETE /api/videogames` | Borra un videojuego con el id = ID de la base de datos |
| `GET /api/videogames/ID/users`| Muestra la colección de usuarios del videojuego con id = ID |
| | |
| `POST /scores` | Añade o modifica una puntuación de un usuario a un videojuego con la información contenida en el body |
| | |
| `ALL *` | Fallback para retornar un error si el endpoint no existe |

<br>
<br>
<br>

## Objetos

#### Usuario
```
{
    id: 3,
    login: "dave"
    name: "Dave",
    self: "http://localhost:3000/api/users/3"
    videogames: "http://localhost:3000/api/users/3/videogames"
}
```
#### Videojuego
```
{
    id: 3,
    name: "Lorem ipsum dolor sit amet",
    score: 5,
    count: 40134592348
    self: "http://localhost:3000/api/videogames/3"
    users: "http://localhost:3000/api/videogames/3/users"
}
```
