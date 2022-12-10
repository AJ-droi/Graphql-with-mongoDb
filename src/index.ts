// import express from 'express'
// import logger from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {ApolloServer} from "apollo-server"
import typeDefs from "./Graphql/type-def"
import resolvers from './Graphql'
dotenv.config()

// const app = express()

// app.use(logger('dev'))

const server = new ApolloServer({
    typeDefs,
    resolvers
})


mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log('Connected to database')
})

const Port = 4000

server.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})