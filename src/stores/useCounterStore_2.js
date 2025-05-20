import {create} from 'zustand'

export const useCounterStore2 = create((set) => ({
   count: 0,
   increment: ()=> set((state)=> ({count: state.count + 1})),
   decrement: ()=> set((state)=> ({count: state.count - 1}))
}))