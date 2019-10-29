# Welcome to the migrations script  

## Setup  
```bash
yarn install
```

## Creating a migration  
Add your migration to the migrations folder. I have the date before the  {schema}.{table_name}.js

### Inside Migration file eg.
```javascript
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
```

## Run  

### You Can Run migrations  

```bash
yarn start
```

### You can Rollback All  
```bash
yarn run rollback
```