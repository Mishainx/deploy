import  express  from "express";

export const app = express();

//Configuración del servidor
const httpServer = app.listen(8080,'154.49.246.83', async () => {
    console.log(`Server running on port 8080`);
});

app.get("/", (req,res)=>{
    res.send("probando")
})