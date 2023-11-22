import Sequelize from "sequelize";
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "260602",
  database: "app_bpk23",
});
export default db;
