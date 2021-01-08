import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { dbConnect } from './utilities/dbConnection' ;

const app = express();
const port = process.env.PORT || 4000

dbConnect();

app.listen(port, () => {
    console.log('Server started on port ' +port)
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// console.log("aaaaaaaa")

app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));