const mysql = require('mysql')

const dbConn = mysql.createConnection({
  host: '34.101.209.22',
  user: 'root',
  password: '',
  database: 'todolist'
})

dbConn.connect(function (err) {
  if (err) throw err
  console.log('Database Connected')
})

module.exports = dbConn
