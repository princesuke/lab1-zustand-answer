import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
    persist(
        (set)=> ({
            theme: 'light',
            color: 'red',
            toggleTheme: ()=>set((state) => ({
                theme: state.theme === 'light' ? 'dark': 'light'
            }))
        }),
        {
           name:'theme-config',
        //    partialize: (state) => ({theme: state.theme}) //เลือกเฉพาะค่าที่เก็บ
        }
    )
)