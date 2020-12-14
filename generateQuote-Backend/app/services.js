const axios = require("axios").default;


exports.randomQuote = async () => {
    
    let response = await axios.get(`https://api.quotable.io/random`)
    .catch((error) => {
            console.error(error);
        });
    return response.data;
}
exports.imageQuote = async () => {
    let resolutions = [[1080, 1080], [1080, 608], [1920, 1080]];
    let pair = resolutions[Math.floor(Math.random() * resolutions.length)];
    let response = await axios.get(`https://picsum.photos/${pair[0]}/${pair[1]}`)
    .catch((error) => {
        console.error(error);
    });
    return response
}


