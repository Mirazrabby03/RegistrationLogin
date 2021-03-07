const express = require ("express");
const PORT = 8000;

// Route path
const userRouter = require('./routes/user');

//Database path
require("./db/Users");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Api

app.use('/users', userRouter);


app.listen(PORT, () => console.log("server listening on PORT 8000"));