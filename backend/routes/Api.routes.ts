import express from 'express';
import { getListCategories, getListGamesByCategoryId } from '../controllers/Category.controller'

const router = express.Router();

router.get('/categories', getListCategories);
router.get('/categories/:categoryId/games', getListGamesByCategoryId);

export default router;
