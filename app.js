// Express Server Book

const express = require("express");
const routes = require("./routes/bookRoutes.js");
const first_middleware = require("./middlewares/logger.js");
const app = express();
const port = 8000;

// Primo Maddleware
app.use(express.json());

// Route definitiva
app.get("/", (req, res) => {
    return res.status(200).json({ msg: "Benvenuto nella pagina" , code: 200})
})

// Logger
app.use(first_middleware);

// Le route principali
app.use("/books", routes)

app.listen(port, () =>{
    return console.log("Porta in ascolto, in http://localhost:8000/");
})

