const express = require('express');
const app = express();

const taskRoutes = require('./routes/tasks');
const PORT = 5000;

app.use('/api/v1/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log('server activated');
});