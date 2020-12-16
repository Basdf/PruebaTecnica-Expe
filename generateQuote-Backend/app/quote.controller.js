const Quote = require("./quote.model")
const RandomQuote = require("./services").randomQuote
const ImageQuote = require("./services").imageQuote


exports.create = async (req, res) => {
    try {
        let randomQuote = await RandomQuote()
        let imageQuote = await ImageQuote()

        const quote = new Quote({
            quote: randomQuote.content,
            image: imageQuote.request.res.responseUrl
        });
        let data = await quote.save(quote)
        res.send(data);
    } catch (error) {
        console.error(error);
        res.send({ message: `Some error occurred while creating the Quote.` });
    }
}
exports.findById = async (req, res) => {
    let id = req.params.id
    try {
        let quote = await Quote.findById(id)
        if (!quote)
            res.send({ message: `Not found Quote with id = ${id}` });
        else res.send(quote);
    } catch (error) {
        console.error(error);
        res.send({ message: `Error retrieving Quote with id = ${id}` });
    }
}
exports.deleteById = async (req, res) => {
    let id = req.params.id
    try {
        let quote = await Quote.deleteOne({ _id: id })
        if (quote.deletedCount === 0)
            res.send({ message: `Cannot delete Quote with id = ${id}. Maybe Quote was not found!` });
        else res.send({ message: "Quote was deleted successfully!" });
    } catch (error) {
        console.error(error);
        res.send({ message: `Error retrieving Quote with id = ${id}` });
    }
}