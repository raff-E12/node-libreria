
// Primo Middleware

function Loggerconsoleserver(req, res, next) {
    const method = req.method;
    const url = req.url;
    next()
    return console.log(`Log: url:http://localhost:8000${url} method:${method}`);
}

module.exports = Loggerconsoleserver;