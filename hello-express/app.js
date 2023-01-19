const express = require('express');
const app = express();
const PORT = 5001;
const labController = require('./controllers/lab.controller');




app.use('/lab', labController);
// in url type http://localhost:5001/lab








app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));