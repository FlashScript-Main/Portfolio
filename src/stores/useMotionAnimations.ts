import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
  
const useMotionAnimations = create<WantMotionAnimationType>()(
    persist(
        (set) => ({
            wantAnimations: true, 
            setWantAnimations: (value) => set({ wantAnimations: value }),
        }),
        {
            name: 'wantAnimations-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useMotionAnimations;