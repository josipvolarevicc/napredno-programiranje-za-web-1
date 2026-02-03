import express from 'express'
const router = express.Router()
import { getCategories, getCategoryDetails, updateCategory } from '../services/db/product-categories-repository.js'
import { z } from 'zod'

const updateCategorySchema = z.object({
    id: z.number().min(1),
    name: z.string().min(3)
})

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

router.put('/', async (req, res) => {
    const validationResult = updateCategorySchema.safeParse(req.body)
    if (!validationResult.success) {
        return res.status(400).json({
            error: 'Validation error',
            issues: validationResult.error.errors
        })
    }
    const validCategory = validationResult.data
    try {
        await updateCategory(validCategory)
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json(error)
    }
})

export default router


