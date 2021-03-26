import { Request, Response } from "express";
import { Client } from "pg";
import getClient from "./client/elasticsearch";


class PhotoController {

  async create(request: Request, response: Response) {
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'teste',
      password: 'w996509518',
      user: 'admin'
    });

    await client.connect();

    const { rows } = await client.query('SELECT * FROM PHOTOS');

    for await (let row of rows) {
      await getClient().index({
        index: 'photos',
        type: 'type_photos',
        body: row
      }, (erro) => {
        if (erro) {
          return response.status(400).json({ error: erro })
        }
      })
    }

    return response.json({ message: 'Index ok!' })
  }

}

export default new PhotoController;