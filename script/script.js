function getRequest(reqUrl) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", reqUrl, false);
    httpRequest.send(null);
    return httpRequest.responseText;
}

function getCryptocurrencyPrice(cryptocurrencyName){
    return JSON.parse(getRequest(`https://api.binance.com/api/v3/ticker/price?symbol=${cryptocurrencyName}USDT`)).price;
}

document.getElementById("btc").innerHTML = getCryptocurrencyPrice("BTC") + " USDT";
document.getElementById("eth").innerHTML = getCryptocurrencyPrice("ETH") + " USDT";
document.getElementById("bnb").innerHTML = getCryptocurrencyPrice("BNB") + " USDT";