module.exports = (err, req, res) => {
    res.status(400).render('error', { error: err });
}