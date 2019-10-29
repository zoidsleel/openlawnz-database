const migrate = require('../migration')

const migrateIn = () => {
  const sql = `CREATE TABLE IF NOT EXISTS aggregator_cases.cases (
    file_key VARCHAR(255),
    file_provider VARCHAR(40),
    file_url VARCHAR(255),
    case_date VARCHAR(255),
    PRIMARY KEY(file_key)
  )`

  return migrate(sql)
}

const out = async () => {
  return migrate(`DROP TABLE IF EXISTS aggregator_cases.cases`)
}

module.exports = {
  migrateIn,
  out
}