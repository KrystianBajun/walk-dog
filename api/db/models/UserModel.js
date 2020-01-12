const connection = require("../connection.js");
const tableName = "users";

const insertUser = () => {
  const sql = `
      INSERT INTO ${tableName}
      VALUES (
          DEFAULT, 'email@test.pl', 'password_salt', 'password_hash', 'imie', 'nazwisko', 'polska', 'warszawa', '00-000', 'region', 'ulica', '11', '7a', POINT(32.3, 12.4), 'gender'
      )
      `;
          return connection.query(sql);
};

const getUsers = () => {
    const sql = `
    SELECT * FROM ${tableName};
    `;
    return connection.query(sql);
};


insertUser();