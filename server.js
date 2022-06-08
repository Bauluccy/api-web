const express = require("express");
const userRoute = require("./usersRoute");
const app = express();
const port = 3000;

userRoute(app);

app.get("/",(req,res) => {
    res.send("Olá sou uma APIREST em node!");
});

app.listen(port, ()  => {
    console.log(`APIREST rodando na porta ${port}!`)
});