//Import graphql
const graphql = require('graphql');

//Imported the required GraphQL types
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

/*Added a root query that will print Welcome to GraphQL when the query contains a field named status.
*The field status is of type GraphQLString.
*/
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        status: {
            type: GraphQLString,
            resolve(parent, args){
                return "Welcome to GraphQL"
            }
        }
    }
});

/**
 * Exported the query written above to be used in index.js. 
 * Exported the query as GraphQLSchema type so that GraphQL can parse it as its schema. 
 * The GraphQLSchema takes an object with key-value pairs. 
 * One key is query. 
 * To this key, passed the above created RootQuery as a value.
 */
module.exports = new GraphQLSchema({
    query: RootQuery
});