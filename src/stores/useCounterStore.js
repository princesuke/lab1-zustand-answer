import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    history: [],
    increase: (amount) => 
        set((state) => {
            const newCount = state.count + amount;
            return {
                count: newCount,
                history: [...state.history, `+${amount}`]
            }
        }),
    reset: ()=> set({ count: 0, history: [] }) 
}))