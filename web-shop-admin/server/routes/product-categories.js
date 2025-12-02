import express from 'express'
const router = express.Router()
import { getCategories, getCategoryDetails } from '../services/db/product-categories-repository.js'

router.get('/', async (req, res) => {
    try {
        const result = await getCategories()
        res.json(result)
    } catch (error) {
        return res.status(400).json('api error')
    }
})

router.get('/categoryDetails', async (req, res) => {
    const id = parseInt(req.query.id)
    if (isNaN(id)) {
        res.status(404).json({ message: 'Category not found' })
        return
    }
    try {
        const result = await getCategoryDetails(id)
        if (result.length === 0) {
            res.status(404).json({ message: 'category not found' })
            return
        }
        res.json(result[0])
    } catch (error) {
        return res.status(400).json('api error')
    }
})

export default router


