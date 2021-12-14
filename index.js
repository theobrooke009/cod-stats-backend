import express from 'express'
import mongoose from 'mongoose'
import { dbURI } from './config/environment.js'
import { port } from './config/environment.js'
import router from './config/router.js'
import logger from './lib/logger.js'
import errorHandler from './lib/errorHandler.js'

const app = express()
app.use(express.json())
app.use(logger)
app.use(router)
app.use(errorHandler)


async function connectToMongoose() {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Mongoose is connected')
  } catch (err) {
    console.log('Mongoose did not connect')
    console.log(err)
  }
}

app.listen(port, () => console.log(`app is listening on ${port}`))
connectToMongoose()