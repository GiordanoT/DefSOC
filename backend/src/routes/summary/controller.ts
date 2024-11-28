import {Request, Response} from 'express';

export class SummaryController {
    static get = async (req: Request, res: Response): Promise<Response> => {
        try {
            return res.status(200).send('Hello World');
        } catch (error) {return res.status(400).send(error);}
    }
}
