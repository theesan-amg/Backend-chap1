// Dans les prochains exercices ,on va faire une API en Express qui affichera les informations d’auteurs connus, on vous donne la liste de ces derniers :
const express = require("express");
const app = express();

const authors = require("./authors/authors.js")
const port = 3330;


// Créer un serveur qui, à la page d’accueil (la route `/`), renverra le message sur le render:
app.get("/", (req, res) => {
    res.send("Authors API")
});


// Créer les routes qui affichent les auteurs et leurs nationalités par leur ID : `/authors/1/`
app.get("/authors/:id" , (req, res) => {
    const indexId = req.params.id - 1
    res.send(`${authors[indexId].name} ${authors[indexId].nationality}`)
});

// Pour les routes /json/authors/:id/books, afficher :
app.get("/authors/:id/books", (req, res) => {
    const newBooks = {
        books: list[req.params.id - 1].books,
    }
    res.json(newBooks);
});













// On appelle le port 3330 (const port = 3330) sur le navigateur
app.listen(port, () => {
    console.log("Server started on port: " + port);
});



