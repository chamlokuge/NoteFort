import { loginRegistrationRouter } from './routes/loginRegistrationRoutes';
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { dbConnect } from './utilities/dbConnection' ;
import { noteRouter } from './routes/noteRoutes';
import dotenv from 'dotenv';
import { checkToken } from './utilities/manageWebTokens';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));

app.use('/api/v1/notes', checkToken, noteRouter);
app.use('/api/v1/auth',loginRegistrationRouter);

app.listen(process.env.PORT, async () => {
    console.log(`server started on port ${process.env.PORT}`);
    await dbConnect(process.env.DBLINK);
})