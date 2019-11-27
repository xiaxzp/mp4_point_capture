const path = require('path')
const express = require('express')
const app = express()
// 代理
app.get('/index', (req, res) => {
  const page = require('fs').readFileSync('./index.html', 'utf-8');
  res.end(page);
})
app.get('/', (req, res) => {
  const page = require('fs').readFileSync('./index.html', 'utf-8');
  res.end(page);
})
app.use(express.static('./'));
// app.get('/video', (req, res) => {
//   const video = require('fs').readFileSync('./video.mp4');
//   res.end(video);
// })
app.get('/jquery', (req, res) => {
  const jquery = require('fs').readFileSync('./assets/js/jquery-3.4.1.min.js', 'utf-8');
  res.end(jquery);
})
app.listen(998, () => console.log('Example app listening on port 998!'))