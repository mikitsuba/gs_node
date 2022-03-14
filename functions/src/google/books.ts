import * as functions from 'firebase-functions';
import express from "express";
import axios from 'axios';
import { GoogleBookResponse } from '../model/book';

const app = express();

const getBooks = async (keyword: string): Promise<GoogleBookResponse> => {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const result = await axios.get(baseUrl, {
        params: {
            country: "JP",
            q: keyword,
        }
    });
    return result.data; 
};

app.get("/:keyword", async (request, response) => {
  const data = await getBooks(request.params.keyword);
  response.send(data);
});

export const books = functions.https.onRequest(app);
