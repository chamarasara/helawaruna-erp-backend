const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

//connect DB
connectDB();

//init middleware
app.use(express.json({ extended: false }));
app.use(cors())

//define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/user-roles', require('./routes/api/userRoles'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/master-data/raw-material', require('./routes/api/masterdata/rawMaterial'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));