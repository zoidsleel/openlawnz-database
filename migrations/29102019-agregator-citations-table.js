const migrate = require('../migration')

const migrateIn = async () => {
  const sql = `CREATE TABLE IF NOT EXISTS aggregator_cases.citations (
    id SERIAL,
    file_key VARCHAR(255),
    citation TEXT,
    PRIMARY KEY(id)
  )`
  return migrate(sql)
}

const out = async () => {
  return migrate(`DROP TABLE IF EXISTS aggregator_cases.citations`)
}

module.exports = {
  migrateIn,
  out
}