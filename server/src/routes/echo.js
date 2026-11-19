import express from 'express';

const router = express.Router();

router.post('/echo', (req, res) => {
    res.json(req.body);
});

export default router;