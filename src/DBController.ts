import { Request, Response } from 'express';
import { Client } from 'pg';

class DBController {

  async create(request: Request, response: Response) {
    const dataInicial = new Date().getTime();
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'teste',
      password: 'SENHA',
      user: 'USER'
    });

    await client.connect();

    const { rows } = await client.query('SELECT * FROM PHOTOS');

    const dataFinal = new Date().getTime();

    console.log('O resultado foi', (dataFinal - dataInicial))

    return response.json(rows);
  }

}

export default new DBController;