import logging from "../config/logging";
import firebaseAdmin from 'firebase-admin'
import {Request, Response, NextFunction} from 'express'

const extractFirebaseInfo = (req: Request, res: Response, next: NextFunction) => {
    logging.info('Validating firebase token...');

    let token = req.headers.authorization?.split(' ')[1];
    if (token)
    {
        firebaseAdmin
            .auth()
            .verifyIdToken(token)
            .then(result => {
                if (result)
                {
                    res.locals.firebase = result;
                    res.locals.fire_token = token;
                    next();
                }
                else{
                    logging.warn('Token invalid, unathorized...')
                    return res.status(401).json({
                        message: 'unauthorized'
                    });
                }
            })
            .catch(error => {
                logging.error(error);
                return res.status(401).json({
                    message: 'unauthorized'
                });
            });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
}

export default extractFirebaseInfo;