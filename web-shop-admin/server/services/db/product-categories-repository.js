import { db } from "../../index.js";

export async function getCategories() {
    const selectAllCategoriesQuery = 'select id, name from categories'
    const [result, fields] = await db.execute(selectAllCategoriesQuery)
    return result
}

export async function getCategoryDetails(categoryId) {
    const query = 'select id, name from categories where id = ?'
    const [result, fields] = await db.execute(query, [categoryId])
    return result
}