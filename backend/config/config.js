const vambiente = require('dotenv').config().parsed;

const options = {
  dialect: 'mysql',
  host: vambiente.HOST,
  username: vambiente.USER,
  password: vambiente.PASSWORD,
  database: vambiente.DATABASE,
  port: vambiente.PORT || '5555',
  define: {
    timestamps: false
}
};

module.exports = {
  development: {
    ...options,
  },
};