const fs = require("fs");

const { join } = require("path");


const filePath = join(__dirname, "users.json");

function getUsers(){
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    try{
        return JSON.parse(data);
    }catch(e){
        throw e;
    }
};

function saveUsers(user){
    const users = getUsers();
    users.push(user);

    fs.writeFileSync(filePath, JSON.stringify(users, null, "\t"));
}

function userExists(id){
    const users = getUsers();
    var res = false;
    users.filter((user) => {
        if (user.id === id){
            return (res = true);
        }
    });
    return res;
}

const userRouter = (app) => {
    app
    .route("/users/:id?")
    .get((req,res) => {
        try{
            const users = getUsers();
    
            if(users.lengh === 0){
                return res.status(404).send("Dados não encontrados!");
            }else{
                return res.status(200).json(users);
            }
        }catch(e){
            return res.status(500).json({
            filename: e.filename,
            linenumber: e.linenumber,
            message: e.message});
        }
            
        // res.send({ users });
    })
    .post((req, res) => {
        console.log(req.body);
        var idade = req.body.idade;
        var nome = req.body.name;
        var id = req.body.id;
        const user = req.body;

        if(idade === "" || nome === ""){
            return res.status(400).send("Preencha todos os campos!!!");
        }

        if (!userExists(id)){
            saveUsers(user);
            return res.status(201).send("Usuario criado com sucesso!");
        }else{
            return res.status(400).send("Id ja cadastrado!");
        }

        
        console.log(nome);
    });
};

module.exports = userRouter;