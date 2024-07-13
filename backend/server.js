import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from '../backend/router/auth.routes.js'
import messageRoutes from '../backend/router/message.routes.js'
import userRoutes from '../backend/router/user.routes.js'
import conectToMonogoDB from './db/connectToMongoDB.js'
const PORT = process.env.PORT || 8000

const app = express()

dotenv.config()

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); //to parse the incoming cookies from req.cookies

app.use("/api/auth/", authRoutes)
app.use("/api/messages/", messageRoutes);
app.use("/api/users/", userRoutes);


app.listen(PORT, () => {
    conectToMonogoDB()
    console.log(`Server Running http://localhost:${PORT}`)
})