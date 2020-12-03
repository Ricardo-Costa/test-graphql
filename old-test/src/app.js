const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        _id: ID
        name: String!
        email: String!
        password: String!
        active: Boolean!
    }

    type Query {
        hello: String
        # [<obj>] // retornar array de objs || [] || [null] || null
        # [<obj>]! // retornar array de objs || [] || [null]
        # [<obj>!]! // retornar array de objs || []
        users: [User!]!,
        getUserByEmail(email: String!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!, passowrd: String!): User!
    }

`
const users = [
    {
        _id: String(Math.random()),
        name: 'Ricardo Costa',
        email: 'r@mail.com',
        passowrd: '123456',
        active: true
    },
    {
        _id: String(Math.random()),
        name: 'Jose Silva',
        email: 'j@mail.com',
        passowrd: '123456',
        active: true
    }
]

const resolvers = {
    Query: {
        hello: () => 'Hello, World!!',
        users: () => users,
        getUserByEmail: (_, { email }) => {
            return users.find( user => user.email === email )
        }
    },
    Mutation: {
        createUser: (_, { name, email, passowrd }) => {
            let newUser = {
                _id: String(Math.random()),
                name,
                email,
                passowrd,
                active: false
            }
            users.push(newUser)
            return newUser
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => console.log(`Server started at ${url}`))