module.exports = {
  host: process.env.SQL_URL || 'localhost',
  dialect: process.env.SQL_DIALECT || 'mssql',
  passoperatorsAliasesword: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
}
