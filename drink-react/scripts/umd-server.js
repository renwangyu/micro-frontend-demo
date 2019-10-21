
const express = require('express');
const app = express();

const options = {
  setHeaders: function (res) {
    res.set('Access-Control-Allow-Origin', '*')
  }
}
app.use('/',express.static('umd', options));
app.listen(8083, () => {
  console.log("🚧 Listening at http://localhost:8083");
});
