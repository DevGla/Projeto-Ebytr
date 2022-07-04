require('dotenv').config();

const options = {
  dialect: 'mysql',
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT || '5721',
  define: {
    timestamps: false
}
};

module.exports = {
  development: {
    ...options,
  },
};

