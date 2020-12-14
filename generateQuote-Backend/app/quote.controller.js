const Quote = require("./quote.model")
const RandomQuote = require("./services").randomQuote
const ImageQuote = require("./services").imageQuote


exports.create = async (req, res) => {
    let randomQuote = await RandomQuote().catch(() => { })
    let imageQuote = await ImageQuote().catch(() => { })
    const quote = new Quote({
        quote: randomQuote.content,
        image: imageQuote.request.res.responseUrl
    });
    let data = await quote.save(quote)
        .catch(() => {
            res.status(500).send({ message: `Some error occurred while creating the Quote.` });
        });
    res.send(data);

}
exports.findById = async (req, res) => {
    let id = req.params.id
    let quote = await Quote.findById(id)
        .catch(() => {
            res.status(500).send({ message: `Error retrieving Quote with id=${id}` });
        });
    if (!quote)
        res.status(404).send({ message: `Not found Quote with id=${id}` });
    else res.send(quote);

}
exports.deleteById = async (req, res) => {
    let id = req.params.id
    let quote = await Quote.deleteOne({ _id: id })
        .catch(() => {
            res.status(500).send({ message: `Error retrieving Quote with id=${id}` });
        });
    if (!quote)
        res.status(404).send({ message: `Cannot delete Quote with id=${id}. Maybe Quote was not found!` });
    else
        res.send({
            message: "Quote was deleted successfully!"
        });
}