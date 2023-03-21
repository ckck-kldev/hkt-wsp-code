import { Client } from "pg";
import dotenv from "dotenv";
import xlsx from "xlsx";

const workbook = xlsx.readFile('test.xlsx');
const sheet_name_list = workbook.SheetNames;
const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);


dotenv.config();

export const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});


async function main() {
    await client.connect(); // "dial-in" to the postgres server

    for (let i = 0; i < xlData.length; i++) {
        const user: any = xlData[i]; 
        await client.query("INSERT INTO users (username,password) values ($1,$2)", [
            user.username,
            user.password,
        ]);
    }

    const result = await client.query("SELECT * from users where username = $1", [
      "gordon",
    ]);
  
    console.log(result.rows[0].username); // gordon
    await client.end(); // close connection with the database
  }
  
  main();


