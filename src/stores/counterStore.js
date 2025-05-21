import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export const useCounterStore = create(
    devtools(

        (set) => ({
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
        }), 
        {
           name: 'CounterStore'
        }
    )
)