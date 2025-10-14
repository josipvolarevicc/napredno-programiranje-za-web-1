import { db } from "../../index.js";

export async function getCategories() {
    const selectAllCategoriesQuery = 'select id, name from categories'
        const [result, fields] = await db.execute(selectAllCategoriesQuery)
        return result
}

export async function getProductsByName(productName) {
    const [result, fields] = await db.query(`select * from products
    where name like '%${productName}%';`)
    return result
}

export async function getProductById(productId) {
    const getProductByIdQuery = `select * from products
  where id = ?`
  const [result, fields] = await db.execute(getProductByIdQuery, [productId])
  return result[0]
}


export async function updateProduct(params) {
    const updateProductQuery = `update products
  set name = ?, price = ?, stock = ?, specs = ?, warranty = ?, description = ?
  where id = ?`
    const [results, fields] = await db.execute(updateProductQuery, [
      product.name,
      product.price.toString(),
      product.stock.toString(),
      product.specs,
      product.warranty.toString(),
      product.description,
      product.id.toString()
    ])   
}