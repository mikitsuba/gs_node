import * as functions from 'firebase-functions';
import express from "express";
import axios from 'axios';

const app: express.Express = express();

const getBooks = async (keyword: string) => {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?country=JP&q='
    const result = await axios.get(`${baseUrl}${keyword}`);
    return result.data; 
};

app.get("/:keyword", async (request, response) => {
  const data = await getBooks(request.params.keyword);
  response.send(data);
});

export const books = functions.https.onRequest(app);
