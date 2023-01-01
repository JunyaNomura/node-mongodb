const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express.json());

const taskRoutes = require('./routes/tasks');
const PORT = 5000;

app.use('/api/v1/tasks', taskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log('server activated');
    });
  } catch(err) {
    console.log(err);
  };
};

start();