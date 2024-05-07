import { data } from "../data/data.js"
import { categories } from "../data/categories.js"

export const dataReader = () => {
    const formatedData = data.map(item => {
        return {
            category: categories[item.category_id],
            ...item
        }
    })
    console.log(formatedData[0]);
}