const express = require('express'); 
const app = express();
const port = 5000;

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/api', async (req, res) => {
    res.json(await fetchMarta())    
});

const fetchMarta = async () => {

    const data = await fetch("http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals")
        .then (response => response.json())
        .then(json => json)
        .catch(e => e)
    return data;
}

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});