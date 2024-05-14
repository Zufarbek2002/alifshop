import { create } from "zustand";
import axios from "axios";

const dataStore = (set: any) => ({
    loading: false,
    data: [],
    error: null,
    fetchData: async () => {
        set(() => ({
            loading: true
        }))
        try {
            const res = await axios.get(`https://dummyjson.com/products?limit=100`)
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
    }
})
const useDataStore = create(dataStore)

export default useDataStore