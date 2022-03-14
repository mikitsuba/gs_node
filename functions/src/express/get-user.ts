import * as functions from "firebase-functions";
import express from "express";

type User = {
	id: number,
	name: string
};

const app = express();

app.get("/:userId", (request, response) => {
  const users: User[] = [
		{id: 1, name: "unko"},
		{id: 2, name: "unkounko"},
		{id: 3, name: "unkounkounko"},
	];
	const targetUser: User | undefined = users.find(user => user.id === Number(request.params.userId));
	response.send(targetUser);
});

export const user = functions.https.onRequest(app);
