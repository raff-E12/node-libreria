
const list_books = require("../data/books.json");

function Welcomepage(req, res) {
    return res.status(200).json({ msg: "Benvenuto nell'api" , code: 200});
}

function Alllistbooks(req, res) {
    return res.status(200).json({ msg: "List Books:", list: list_books, code: 200});
}

function IdSearchbooks(req, res) {
        // console.log(req.params.id);
        const number_index = parseInt(req.params.id);
        if (isNaN(number_index)) return res.status(401).json({ msg: "Il parametro deve essere un numero.", code: 401});
        // console.log(number_index);
        const finder_books = list_books.find( books => books.id === number_index);
        // console.log(finder_books);
        if (!finder_books) return res.status(404).json({ msg: "Il libro non è stato trovato", code: 404});
        return res.status(200).json({ msg: "Ecco il libro trovato", book: finder_books, code: 200});
}

function Addbookslist(req, res) {
        // console.log(req.body);
        const body = req.body;
        // console.log(body);
        const new_books = { id: list_books[list_books.length - 1].id + 1, ...body};
        list_books.push(new_books);
        return res.status(201).json({ msg: "Il libro è stato aggiunto con successo", code: 201});
}

function Deletebookslist(req, res) {
     // console.log(req.params.id);
     const number_index = parseInt(req.params.id);
     if (isNaN(number_index)) return res.status(401).json({ msg: "Il parametro deve essere un numero.", code: 401});
     const finder_books = list_books.findIndex( book => book.id === number_index);
    //  console.log(finder_books);
     if (!finder_books) return res.status(404).json({ msg: "Il libro non è stato trovato", code: 404});
     list_books.splice(finder_books, 1);
     return res.status(200).json({msg: "Il libro è stato rimosso con successo.", code: 200});
}

function AddbookslistModified(req, res) {
     // console.log(req.params.id);
    // console.log(req.body);
    const id = parseInt(req.params.id);
    const body = req.body;
    if (isNaN(id)) return res.status(401).json({ msg: "Il parametro deve essere un numero.", code: 401});
    if (body === "") return res.status(401).json({ msg: "La tua richiesta è vuota", code: 401});
    const index_book = list_books.findIndex( books => books.id === id);
    // console.log(index_book);
    if (!index_book) return res.status(404).json({ msg: "Il libro non è stato trovato", code: 404});
    list_books[index_book] = { ...list_books[index_book], ...body};
    // console.log(list_books);
    return res.status(200).json({ msg: "Il libro è stato aggiornato", code: 200});
}

module.exports = {
    Welcomepage,
    Alllistbooks,
    IdSearchbooks,
    Addbookslist,
    Deletebookslist,
    AddbookslistModified
}