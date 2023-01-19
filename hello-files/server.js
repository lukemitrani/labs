
const express = require('express'); 
const app = express(); 
const PORT = 5002;
// runs off of http://localhost:5002/



app.get('/', (req, res) => {
res.sendFile(__dirname + "/public/");
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/greet.html");
//     });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/hello.html");
//     });


app.use(express.static(`${__dirname}/server.js
`));



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));