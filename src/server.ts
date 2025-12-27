import express from 'express';
import dotenv from 'dotenv';
import helmet  from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import mustache from 'mustache-express';
import routerMain from './routes/router.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = process.env.PORT;

const server = express();

server.use(helmet());
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: true }));
server.use(express.json());

server.set('mustache', mustache());
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));

server.use('/', routerMain);

server.listen(PORT, () => {
    console.log("Servidor rodando ok 123");
})