function getRequest(reqUrl) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", reqUrl, false);
    httpRequest.send(null);
    return httpRequest.responseText;
}

function getCryptocurrencyPrice(cryptocurrencyName) {
    return JSON.parse(getRequest(`https://api.binance.com/api/v3/ticker/price?symbol=${cryptocurrencyName}USDT`)).price;
}

function updateNow() {
    document.getElementById("btc").innerHTML = parseFloat(getCryptocurrencyPrice("BTC")).toFixed(2) + " $";
    document.getElementById("eth").innerHTML = parseFloat(getCryptocurrencyPrice("ETH")).toFixed(2) + " $";
    document.getElementById("bnb").innerHTML = parseFloat(getCryptocurrencyPrice("BNB")).toFixed(2) + " $";
}

document.getElementById("btc").innerHTML = parseFloat(getCryptocurrencyPrice("BTC")).toFixed(2) + " $";
document.getElementById("eth").innerHTML = parseFloat(getCryptocurrencyPrice("ETH")).toFixed(2) + " $";
document.getElementById("bnb").innerHTML = parseFloat(getCryptocurrencyPrice("BNB")).toFixed(2) + " $";