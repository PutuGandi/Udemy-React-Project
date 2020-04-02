const express = require('express');

const app = express();

app.get('/',(req, res)=> {
    res.send('Hallo gandi');
});

app.listen(8080, () => {
    console.log('Listening in port 8080');
});

