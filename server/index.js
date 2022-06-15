import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import customerRoutes from './routes/customers.js'
import filterRoutes from './routes/filters.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use(express.static('uploads'));
app.use('/customers', customerRoutes)
app.use('/filters', filterRoutes)

// const CONNECTION_URL = 'mongodb://localhost:27017/fresher_test'

// URL deploy
const CONNECTION_URL = 'mongodb+srv://ducmanh:manh1403@cluster1.cxmm0.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(
        ()=> app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
    )
    .catch((error) => console.log(`${error} did not connect`))
