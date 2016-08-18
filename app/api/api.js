import express from 'express';
import articlesApi from './article.js';

const router = express.Router();

router.use('/article', articlesApi);

export  default router;