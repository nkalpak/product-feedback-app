import mysql from 'mysql2/promise';
import middy from 'middy';
import { cors } from 'middy/middlewares';
import { Environment } from '../../../global/environment';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Api } from '@pfa/api';

const pool: mysql.Pool = mysql.createPool({
  connectionLimit: 1,
  host: Environment.Database.Host,
  user: Environment.Database.User,
  password: Environment.Database.Password,
  database: Environment.Database.Name,
  port: Environment.Database.Port
});

const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) return { statusCode: 400, body: 'Bad request' };
    const { upvotes, category, title, description, status } = Api.ProductRequest.ProductFeedbackParser.parse(
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
      body: JSON.stringify(result),
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
};

const createProductRequest = middy(handler).use(cors());

export { createProductRequest };
