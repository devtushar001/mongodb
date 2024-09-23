import express from 'express';
// import {insertMannyDoc } from './models/Movies.js';
import connectDb from './db/connectDb.js';
// import movieModel from './models/Movies.js';
const app = express();
const port = process.env.PORT || 8000;

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

connectDb(DATABASE_URL);
// movieModel();
// insertMannyDoc();

app.listen(port, () => 
    {console.log(`Server listening on port ${port}`);
});