# pagination-mongoose
ApiRest pagination mongoose


## Routes

#### POST

http://localhost/api/store

|  Parameters | Type  |
|---|---|
|  location |  String  |
|  name | String  |

#### GET

http://localhost/api/store

|  Query | Type  |
|---|---|
|  limit |  Number  |
|  page | Number  |

##### Example response

```
{
    "docs": [
        {
            "_id": "5f3982b95240ca33dcb99267",
            "name": "Santa Elena",
            "location": "Cuautitlan",
            "createdAt": "2020-08-16T19:02:17.931Z",
            "updatedAt": "2020-08-16T19:02:17.931Z",
            "__v": 0
        },
        {
            "_id": "5f3982bb5240ca33dcb99268",
            "name": "Santa Elena",
            "location": "Cuautitlan",
            "createdAt": "2020-08-16T19:02:19.819Z",
            "updatedAt": "2020-08-16T19:02:19.819Z",
            "__v": 0
        },
        {
            "_id": "5f3982bc5240ca33dcb99269",
            "name": "Santa Elena",
            "location": "Cuautitlan",
            "createdAt": "2020-08-16T19:02:20.539Z",
            "updatedAt": "2020-08-16T19:02:20.539Z",
            "__v": 0
        },
        {
            "_id": "5f3982bd5240ca33dcb9926a",
            "name": "Santa Elena",
            "location": "Cuautitlan",
            "createdAt": "2020-08-16T19:02:21.199Z",
            "updatedAt": "2020-08-16T19:02:21.199Z",
            "__v": 0
        }
    ],
    "totalDocs": 15,
    "limit": 4,
    "totalPages": 4,
    "page": 2,
    "pagingCounter": 5,
    "hasPrevPage": true,
    "hasNextPage": true,
    "prevPage": 1,
    "nextPage": 3
}
```

#### PUT

http://localhost/api/store/:id

|  Parameters | Type  |
|---|---|
|  location |  String  |
|  name | String  |

**id** is assigned by mongodb

#### DELETE 

http://localhost/api/store/:id

**id** is assigned by mongodb
