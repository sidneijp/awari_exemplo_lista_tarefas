import express from 'express'
import routes from './routes.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

app.set('view engine', 'pug')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})