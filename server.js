const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//Connect Database

connectDB()

app.use(express.json({extended: false}))
app.use(cors())

// app.get('/', (req,res) => res.send('api running'))

app.use('/api/users', require('./routes/api/users'));
app.use('/api', require('./routes/api/channel'));
app.use('/api', require('./routes/api/auth'));

// app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))