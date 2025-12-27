import { Router } from 'express';
import * as router_pageControllers from '../controllers/pageControllers.ts';

const router = Router();

router.get('/', router_pageControllers.home);
router.get('/dogs', router_pageControllers.dogs);
router.get('/cats', router_pageControllers.cats);
router.get('/fishes', router_pageControllers.fishes);

export default router;