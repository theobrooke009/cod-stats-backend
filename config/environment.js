import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.DB_URI || 'mongodb://127.0.0.1/warzone-three-db'

export const port = process.env.PORT || 4000
export const secret = process.env.SECRET || 'this is the secret, throw all your hands up'

// export const port = 4000
// export const dbURI = 'mongodb://127.0.0.1/warzone-three-db'
// export const secret = 'this is the secret, throw all your hands up'