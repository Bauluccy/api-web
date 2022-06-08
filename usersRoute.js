const fs = require("fs");

const { join } = fs;

const filePath = join(__dirname, "users.json");





const getUsers = () => {
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    try{
        return JSON.parse(data);
    }catch(e){
        return [];
    }
};

const userRouter = (app) => {
    app.route("/users/:id?").get((req,res) => {
        const users = getUsers();
        res.send({ users });
    });
};

module.exports = userRouter;