const fs = require('fs').promises
const path = require('path')
const migrationsFolder = path.join(__dirname, '/migrations')

const main = async () => {
  try {
    const files = await fs.readdir(migrationsFolder)
    const promises = files
      .map(file => {
        console.log('Migrating', file)
        return require(path.join(migrationsFolder, file))
          .migrateIn()
      })
    Promise.all(promises)
    .then(() => {
      console.log("Finished")
      process.exit()
    })
  } catch (e) {
    console.error(e);
  }
}


main()
