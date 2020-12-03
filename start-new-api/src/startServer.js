const { ApolloServer } = require("apollo-server")
import mongoose, { connection } from "mongoose"

function startServer({ typeDefs, resolvers }) {
    
    mongoose.connect("mongodb://localhost:27017/graphql", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = mongoose.connection

    db.on('open', () => console.log('MongoDB: Ok'))
    db.on('errpr', err => console.error('MongoDB: Error', err))

    const server = new ApolloServer({ typeDefs, resolvers })
    server.listen({ port: parseInt(process.env.PORT) }).then(({ url }) => console.log(`Server at url: ${url}`))
}

export default startServer