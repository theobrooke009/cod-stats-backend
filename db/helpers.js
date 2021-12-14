import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

export function connectDB() {
  const opts = {
    useNewUrlParser: true,
  }
  return mongoose.connect(dbURI, opts)
}

