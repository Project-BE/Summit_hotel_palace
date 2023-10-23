const express = require('express');
const cors = require('cors');

const UserRoutes = require('./routes/UserRoutes')

const app = express();

//Config JSON response
app.use(express.json());

//Solve cors
app.use(cors({ credentials: true, origin: 'http://localhost:5000' }))

// Public folder
app.use(express.static('public'))

//Routes
app.use('/user', UserRoutes)


app.listen(5000)