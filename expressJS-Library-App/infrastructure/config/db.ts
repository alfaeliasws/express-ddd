import mysql from "mysql2/promise"
import configuration from "./config";

const pool = mysql.createPool(configuration.dbPool);

export default async function query(sql: string, params: any[]) {
  const connection = await pool.getConnection();
  
  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  } finally {
    connection.release();
  }

}