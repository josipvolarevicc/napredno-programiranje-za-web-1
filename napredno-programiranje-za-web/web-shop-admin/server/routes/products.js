import express from 'express';
const router = express.Router();

router.get("/", async (req, res) => {
    const db = req.app.locals.db;
    try {
        const [result, fields] = await db.execute('SELECT * FROM products')
        res.json(result);
    } catch (error) {
        res.json('error')
    }
});

export default router;