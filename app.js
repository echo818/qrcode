const http = require('http')
const fs = require('fs')

const root = '/Users/echo/Desktop/qrcode'

http.createServer((req, res) => {
  let url = req.url
  let file = root + url

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHeader(404, {'content-type': 'text/html;charset="utf-8"'})
      res.write('<h1>404错误</h1><p>你要找的页面不存在</p>')
      res.end()
    } else {
      res.writeHeader(200, {'content-type': 'text/html;charset="utf-8"'})
      res.write(data)
      res.end()
    }
  })
}).listen(3000)

console.log('server is running...')