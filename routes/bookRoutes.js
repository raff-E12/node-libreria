
// esportazione dei file
const express = require("express");
const list_books = require("../data/books.json");
const { Welcomepage, Alllistbooks, IdSearchbooks, Addbookslist, Deletebookslist, AddbookslistModified } = require("../controllers/BookControllers.js")

const routes = express.Router();

// Welcome Page
routes.get("/welcome", Welcomepage);

// Lista Completa di libri
routes.get("/", Alllistbooks);

// Cercare il libro nella lista
routes.get("/:id", IdSearchbooks);

// Aggiungere il libro nella lista
routes.post("/", Addbookslist);

// Rimouvere il libro nella lista
routes.delete("/:id", Deletebookslist);

// Modificare il libro esistente nella lista
routes.put("/:id", AddbookslistModified);

module.exports = routes;