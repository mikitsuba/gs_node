import * as functions from "firebase-functions";
import express from "express";

const app:express.Express = express();

app.get("/", (request, response) => {
	response.send("Hello, Express!!");
});

export const hello = functions.https.onRequest(app);
