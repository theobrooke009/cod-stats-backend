import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { dbURI } from './config/environment.js'
import { port } from './config/environment.js'
import router from './config/router.js'
import logger from './lib/logger.js'
import errorHandler from './lib/errorHandler.js'
import { connectDB } from './db/helpers.js'



const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)
app.use('/api', router)
app.use(errorHandler)


async function startServer() {
  try {
    await connectDB()
    console.log("Mongoose is connected")
    app.listen(port, () => console.log(`listening on port ${port}`))
  } catch (err) {
    console.log("something went wrong")
    console.log(err)
  }
} 

startServer()