import axios from "axios";
import { create } from "zustand";

const searchData = (set: any) => ({
    loading: false,
    data: [],
    error: null,
    fetchData: async (text: string | string[]) => {
        set(() => ({
            loading: true
        }))
        try {
            const res = await axios.get(`https://dummyjson.com/products/search?q=${text}`)
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

const useSearchData = create(searchData)
export default useSearchData