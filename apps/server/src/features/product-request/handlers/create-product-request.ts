import mysql from 'mysql2/promise';
import { Environment } from '../../../global/environment';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ProductRequestParser } from '../parsers/product-request';

const pool: mysql.Pool = mysql.createPool({
  connectionLimit: 1,
  host: Environment.Database.Host,
  user: Environment.Database.User,
  password: Environment.Database.Password,
  database: Environment.Database.Name,
  port: Environment.Database.Port
});

async function createProductRequest(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) return { statusCode: 400, body: 'Bad request' };
    const { upvotes, category, title, description, status } = ProductRequestParser.parse(
      JSON.parse(event.body)
    );

    const result = await pool.query(
      `
      INSERT INTO ProductRequest
      (title, category, upvotes, status, description) values
      (?, ?, ?, ?, ?)
    `,
      [title, category, upvotes, status, description]
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result, null, 2),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.log('error', error);
    return {
      statusCode: 400,
      body: 'Bad request'
    };
  }
}

export { createProductRequest };
