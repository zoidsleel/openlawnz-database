const db = require('./db')

module.exports = sql => new Promise((res, rej) => {
  db.query(sql, (err, result) => {
    if (result) {
      res()
    } else if (err) {
      rej(err)
    }
  })
}) 