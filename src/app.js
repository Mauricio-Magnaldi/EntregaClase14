import express from 'express'
import usersRouter from "./routes/users.router.js"
import toysRouter from "./routes/toys.router.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRouter)
app.use('/api/toys', toysRouter)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}.`)
})