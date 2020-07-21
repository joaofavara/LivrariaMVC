module.exports = (err, req, res, next) => {
    res.status(err.httpStatusCode || 500).json({ error: err.message });
}