import {Router} from 'express';
import {SummaryController} from './controller';
import AuthMiddleware from '../../middlewares/auth';

const router = Router();

router
    .route('/')
    .get(AuthMiddleware.isAuthenticated, SummaryController.get)

export {router as SummaryRouter};
