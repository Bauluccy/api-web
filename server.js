const express = require("express");
const userRoute = require("./usersRoute");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const usersRouteDB = require("./usersRoutDB");



app.use(bodyParser.urlencoded({ extended: false}));

// userRoute(app);
usersRouteDB(app);

app.get("/",(req,res) => {
    res.send("Olá sou uma APIREST em node!");
});

app.listen(port, ()  => {
    console.log(`APIREST rodando na porta ${port}!`)
});