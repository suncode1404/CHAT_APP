import express from 'express'
import dotenv from 'dotenv'
import authRoutes from '../backend/router/auth.routes.js'
const PORT = process.env.PORT || 8000

const app = express()

dotenv.config()
app.get("/", (req, res) => {
    //root route http://localhost:8000
    res.send('Hello World!')
})

app.use("/api/auth/", authRoutes)
app.listen(PORT, () => console.log(`Server Running http://localhost:${PORT}`))