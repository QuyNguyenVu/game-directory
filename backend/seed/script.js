const dotenv = require('dotenv');
var mysql = require('mysql');
const categoryData = require("./data_category.json");
const gameData = require("./data_game.json");

dotenv.config();

let con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

con.connect(function(err) {
  if (err) throw err;
  console.info("Connected!");

  // Insert mock data for table categories
  console.info("Starting insert mocked data for categories ...");
  for(let i = 0; i < categoryData.length; i++) {
    let q = `INSERT INTO categories (id, name, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?);`;
    con.query(q, [categoryData[i].id, categoryData[i].name, true, new Date(), new Date()], function (err, rows) {
      if (err) throw err;
    });
  }

  // Insert mock data for table games
  console.info("Starting insert mocked data for games ...");
  const iconUrl = "https://placehold.co/600x600/png";
  for(let i = 0; i < gameData.length; i++) {
    let q = `INSERT INTO games (id, name, status, thumbnail, category_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?);`;
    con.query(q, [gameData[i].id, gameData[i].name, true, iconUrl, gameData[i].category_id, new Date(), new Date()], function (err, rows) {
      if (err) throw err;
    });
  }

  console.info("Finish insert mock data! Bye bye!");
  con.end();
});