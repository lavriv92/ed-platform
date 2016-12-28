const fs = require('fs');
const express = require('express');


const app = express();


app.get('/:name', (req, res) => {
  res.json(require(`./fixtures/${req.params.name}.json`));
});

app.listen(3000, () => console.log('Fake server started'));
