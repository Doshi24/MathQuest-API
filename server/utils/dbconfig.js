import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({
    path:'./.env'
});

let db;
const connectdb = async () => {
  if (!db) {
    try {
      db = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        waitForConnections: true,
        connectionLimit: Number(process.env.CONNECTIONLIMIT), 
        queueLimit: Number(process.env.QUEUELIMIT) 
      });

      // Test connection
      const [rows] = await db.query("SELECT 1");
    } catch (error) {
        console.log("db error", error)
      throw error;
    }
  }
  return db;
};

const sql = async (query, params = []) => {
  if (!db) await connectdb();
  try {
    const [rows] = await db.query(query, params); 
    return rows;
  } catch (error) {
    logger.error("SQL Error:", error);
    throw error;
  }
};


export  {connectdb,sql};