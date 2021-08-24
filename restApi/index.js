const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet')
const morgan = require('morgan');

const userRoutes = require('./Routes/users')
const authRoutes = require('./Routes/auth')

const postRoute = require('./Routes/posts')


dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useFindAndModify: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, 
    () => {
  console.log('Connected');
})

const app = express();

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.get('/', (req, res) => {
  res.send('darova')
})

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.use("/api/posts", postRoute) 

app.listen(process.env.PORT, () => {console.log('server is started on ' + process.env.PORT);})