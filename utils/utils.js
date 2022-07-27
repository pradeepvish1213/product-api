const superagent = require('superagent')

async function currentCurrency(currency = 'USD') {
    try {
        let currencyResponse = await superagent.get('https://api.exchangerate-api.com/v4/latest/' + currency);
        return currencyResponse.body
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {currentCurrency}