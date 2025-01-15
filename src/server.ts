import http from 'http';
import express from 'express';
import './config/logging';
import firebaseAdmin from 'firebase-admin'

import { corsHandler } from './middleware/corsHandler';
import { loggingHandler } from './middleware/loggingHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { server } from './config/config';
import { sequelize } from './config/db';
import userRouter from './routes/info';



/*SERVER HANDLING*/
export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

/*CONNECTING TO FIREBASE ADMIN*/
let serviceAccountKey = require('./config/serviceAccountKey.json');
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccountKey)
})


/*CONNECTING TO POSTGRESS*/

async function connect() {
    try {
    await sequelize.authenticate();
    
    console.log('Connected to PostgreSQL');
    
    } catch (err) {
    console.error('Error connecting to PostgreSQL:', err);
    }
}
  
connect();


export const Main = () => {
    logging.log('----------------------------------------');
    logging.log('Initializing API');
    logging.log('----------------------------------------');
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.log('----------------------------------------');
    logging.log('Logging & Configuration');
    logging.log('----------------------------------------');
    application.use(loggingHandler);
    application.use(corsHandler);

    logging.log('----------------------------------------');
    logging.log('Define Controller Routing');
    logging.log('----------------------------------------');
    application.get('/main/healthcheck', (req, res, next) => {
        return res.status(200).json({ hello: 'world!' });
    });

    application.use('/', userRouter)

    application.use('/awesome', userRouter)
    

    logging.log('----------------------------------------');
    logging.log('Define Routing Error');
    logging.log('----------------------------------------');
    application.use(routeNotFound);

    logging.info('----------------------------------------');
    logging.info('Starting Server');
    logging.info('----------------------------------------');
    httpServer = http.createServer(application);
    httpServer.listen(server.SERVER_PORT, () => {
        logging.info('----------------------------------------');
        logging.info(`Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`);
        logging.info('----------------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
