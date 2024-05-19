import { create } from "zustand";
import axios from "axios";

const categoriesStore = (set: any) => ({
    loading: false,
    data: [],
    brand: [],
    error: null,
    fetchData: async (category: string[] | string) => {
        set(() => ({
            loading: true
        }))
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
            const data = await res.data
            set(() => ({
                data: data.products
            }))
        } catch (err) {
            set(() => ({
                error: (err as Error).message
            }))
        } finally {
            set(() => ({
                loading: false
            }))
        }
    },
    fetchBrandData: async () => {
        set(() => ({
            loading: true
        }))
        try {
            const res = await axios.get(`https://dummyjson.com/products?limit=100&select=brand`)
            const data = await res.data
            set(() => ({
                brand: data.products
            }))
        } catch (err) {
            set(() => ({
                error: (err as Error).message
            }))
        } finally {
            set(() => ({
                loading: false
            }))
        }
    },
})
const useCategoriesStore = create(categoriesStore)

export default useCategoriesStore