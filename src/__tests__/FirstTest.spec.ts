import request from 'supertest';
import path from 'path';
import { Connection, getRepository, getConnection } from 'typeorm';
import Database from '../database';
import app from '../app';

let connection: Connection;

describe('Transaction', () => {
  beforeAll(async () => {
    connection = await Database.MySQL('test-connection');
    await connection.query('DROP TABLE IF EXISTS users');
    await connection.runMigrations();
  });
  beforeEach(async () => {
    await connection.query('DELETE FROM users');
  });
  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });


})