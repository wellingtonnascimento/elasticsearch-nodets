import express, { Request, Response } from 'express';
import getClient from './client/elasticsearch';
import DBController from './DBController';
import PhotoController from './PhotoController';


const app = express();


app.get('/', async (request: Request, response: Response) => {

  const client = getClient();

  // Criar um registro no elasticsearch
  const result = await client.index({
    index: 'elastic_teste',
    type: 'type_elastic_teste',
    body: {
      user: 'Wellington',
      password: 'w897665',
      email: 'wellingto_07@hotmail.com'
    }
  });

  // Fazer uma busca

  return response.json(result);
})








app.listen(3333, () => console.log('Running'));