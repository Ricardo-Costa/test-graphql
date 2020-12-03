import path from "path"
import dotenv from "dotenv"

dotenv.config({ path: path.resolve("./", ".env") })

import startServer from "./startServer"
import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"

startServer({ typeDefs, resolvers })