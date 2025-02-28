const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Ciao, il server Express sta funzionando!');
});


app.listen(port, () => {
  console.log(`Server in ascolto sulla porta: {port}`);
});
