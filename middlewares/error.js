module.exports = (err, req, res) => {
    res.status(err.httpStatusCode).render({ error: err });
}