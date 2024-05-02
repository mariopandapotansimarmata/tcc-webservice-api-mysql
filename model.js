var dbConn = require('./db')

var Task = function (todo) {
  this.name = todo.name
  this.time = todo.time
  this.status = todo.status ? todo.status : 0
}

Task.create = function (newTask, result) {
  dbConn.query(
    'INSERT INTO task (name, time, status) VALUES (?,?,?)',
    [newTask.name, newTask.time, Number(newTask.status)],
    function (err, res) {
      if (err) {
        console.log('error: ', err)
        result(err, null)
      } else {
        console.log(res.insertedId)
        result(null, res.insertedId)
      }
    }
  )
}

Task.findAll = function (result) {
  dbConn.query('SELECT * FROM task', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('task: ', res)
      result(null, res)
    }
  })
}

Task.findById = function (id, result) {
  dbConn.query('Select * FROM task WHERE id = ?', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Task.update = function (id, Task, result) {
  dbConn.query(
    'UPDATE task SET name = ?, time= ?,status = ? WHERE id = ?',
    [Task.name, Task.time, Task.status, id],
    function (err, res) {
      if (err) {
        console.log('error: ', err)
        result(err, null)
      } else {
        result(null, res)
      }
    }
  )
}

Task.delete = function (id, result) {
  dbConn.query('DELETE FROM task WHERE id = ?', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

module.exports = Task
