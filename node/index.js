const express = require('express'); 
const path = require('path');
const app = express();
const port = 5000;

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.static(path.resolve(__dirname, "../build")));
app.get('/api', async (req, res) => {
    res.json(await fetchMarta())    
});

const fetchMarta = async () => {

    const data = await fetch("http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals")
        .then (response => response.json())
        .then(json => formatStations(json))
        .catch(e => e)
    return data;
}

const formatStations = (filteredList) => {
    const newList = filteredList;
    for (let i = 0; i < newList.length; i++) {
        const newListItem = newList[i];
        const tmpItem = newListItem.STATION.split(" ")
        for (let i = 0; i < tmpItem.length; i++) {
            const word = tmpItem[i].toLowerCase();
            tmpItem[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
        tmpItem.join(" ")
        newListItem.STATION = tmpItem.join(" ");
        newListItem.NEXT_ARR = `${getFormattedDate()} ${newListItem.NEXT_ARR}`;
    }
   return newList;
}

const formatArrivalTimes = () => {
    
}

const getFormattedDate = () => {
    // api results seem to be from current day. 
    const date = new Date();
    const year = date.getFullYear();
    let month = 1 + date.getMonth();
    let day = date.getDate();

    month = month < 9 ? "0" + month : month;
    day = day < 9 ? "0" + day : day;

    return `${month}/${day}/${year}`;
}

app.listen(process.env.PORT || port)