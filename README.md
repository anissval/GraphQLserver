# GraphQLserver using apollo server, graphql, mongodb and mongoose

1. It is required to have mongodb installed. 
2. Download this datatset https://drive.google.com/file/d/1JChB4tlR-hOXCZZ6RhYwFEf1SF1P_jOy/view?usp=sharing 
3. Run this command to add restaurants to your database : mongoimport --db restaurants-db --collection restaurants --drop --file restaurants-dataset.json
4. Download this repository and run **yarn dev** on the console to get this environment up and running,
5. Finally you can run queries on http://localhost:8000/


## CRUD Query/Mutation examples that you can run on Restaurants database

### Query to obtain one restaurant using a filter
```
query {
    restaurantOne( filter: {name:"Indian Oven"}) {
      _id,
      restaurant_id,
      name
    }
  }
```


### Query to obtain one restaurant using its ID
```
  query {
    restaurantById(_id : "60e38a0cefac407a835491ab") {
      restaurant_id,
      name,
      borough
    }
  }
```

### Mutation to create a Restaurant
```
  mutation {
  restaurantCreateOne(
    record: {
      address: {
        building: "2021",
        coord: [-80.856077, 30.848447],
        street: "San Martin Ave",
        zipcode: "5500"
      },
      borough: "Capital",
      cuisine: "Bakery",
      name: "Any Bake Shop",
      restaurant_id: "30070808"
    }
  ) {record{name,borough,restaurant_id,cuisine},recordId}
}
```
### Mutation to update a Restaurant using its ID 
```
mutation {
  restaurantUpdateById(_id: "60e946d4785c347453132eb6",
    record: {
      name: " The best Bake Shop",
    }
  ) {record{name,borough,restaurant_id,cuisine},recordId}
}
```
### Mutation to remove a Restaurant using a filter
```
mutation {
  restaurantRemoveOne(filter: {restaurant_id:"30070808"}){
    record{name,borough,restaurant_id,cuisine},
    recordId
  }
}
```
### Mutation to remove a Restaurant using its ID
```
mutation {
  restaurantRemoveById(_id:"60e94a5a785c347453132ebc"){
    record{name,borough,restaurant_id,cuisine},
    recordId
  }
}
```

All this material was created following https://getstream.io/blog/tutorial-create-a-graphql-api-with-node-mongoose-and-express/ tutorial.
