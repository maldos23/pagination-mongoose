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
