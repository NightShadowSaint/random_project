//Imports.
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');


const app = express();

//Added GraphQL endpoint to the server
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));  

//Started the server to listen at PORT 1337.
app.listen(1337, () => {
    console.log('Now listening for requests on port 1337');
});
