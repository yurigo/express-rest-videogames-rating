# VIDEOGAMES RATING REST API

Tenemos que pasar [express-rpc-videogames-rating](https://github.com/yurigo/express-rpc-videogames-rating) a REST

## Tareas

- [x] Analizar el sistema
- [ ] Diseñar los [recursos](./REST.md#Identification_of_resources)
- [ ] Diseñar las [representaciones](./REST.md#Manipulation_of_resources_through_representations)
- [ ] Diseñar [HATEOAS](./REST.md#Hypermedia_as_the_engine_of_Application_State_(HATEOAS))
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

- `GET /users`
- `GET /users/id`
- `POST /users` 
- `PUT /users/id`
- `DELETE /users/id`


#### Videogames

- `GET /videogames`
- `GET /videogames/id`
- `POST /videogames` 
- `PUT /videogames/id`
- `DELETE /videogames/id`

### HATEOAS

#### User
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
```
{
    id: 3,
    name: "Lorem ipsum dolor sit amet",
    score: 5,
    count: 40134592348
    self: "http://localhost:3000/api/videogames/3"
    videogames: "http://localhost:3000/api/videogames/3/users"
}
```

