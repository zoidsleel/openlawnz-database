const migrate = require('../migration')

const migrateIn = () => {
  const sql = `CREATE TABLE IF NOT EXISTS aggregator_cases.case_names (
    id SERIAL,
    file_key VARCHAR(255),
    citation TEXT,
    PRIMARY KEY(id)
  )`
  return migrate(sql)
}

const out = async () => migrate(`DROP TABLE IF EXISTS aggregator_cases.case_names`)


module.exports = {
  migrateIn,
  out
}