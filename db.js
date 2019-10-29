require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  port: 5432,
  password: process.env.DB_PASS
})

pool.on('error', (err)=>{
  console.error('Unexpected Error: ', err)
  process.exit(-1)
})

module.exports = pool