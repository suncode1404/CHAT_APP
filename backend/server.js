import express from 'express'
import dotenv from 'dotenv'
import authRoutes from '../backend/router/auth.routes.js'
import conectToMonogoDB from './db/connectToMongoDB.js'
const PORT = process.env.PORT || 8000

const app = express()

dotenv.config()

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth/", authRoutes)

// app.get("/", (req, res) => {
//     //root route http://localhost:8000
//     res.send('Hello World!')
// })

app.listen(PORT, () => {
    conectToMonogoDB()
    console.log(`Server Running http://localhost:${PORT}`)
})