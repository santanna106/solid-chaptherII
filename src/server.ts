import express from 'express';
import { app } from ".";
import swaggerUI from 'swagger-ui-express';

const swaggerFile = require('./swagger.json');

app.use(express.json());

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerFile));

app.listen(3333, () => console.log("Server is running!"));
