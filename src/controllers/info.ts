import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Info } from '../models/info';


export const getInfo = async (req: Request, res: Response, next: NextFunction)  => {
    
    logging.info(`Incoming read for info`);

    try {
        const getall = await Info.findAll();
        if (!getall){
            res.status(404).json({ error: 'Info not found' });
        } else {
            res.status(200).json(getall);
        }

    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong'});
    }
    
};
export const getFunInfo = async (req: Request, res: Response, next: NextFunction)  => {
    
    logging.info(`Incoming fun read for info`);

    try {
        const getall = await Info.findAll();
        if (!getall){
            res.status(404).json({ error: 'Info not found' });
        } else {
            res.status(200).json(getall);
        }

    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong'});
    }
    
};
