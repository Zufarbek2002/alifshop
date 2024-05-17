import axios from "axios";
import { create } from "zustand";

const singleData = (set: any) => ({
    loading: false,
    data: [],
    error: null,
    fetchData: async (id: string | string[]) => {
        set(() => ({
            loading: true
        }))
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            const data = await res.data
            console.log(data)
            set(() => ({
                data: data
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

const useSingleDataStore = create(singleData)
export default useSingleDataStore