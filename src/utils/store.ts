import { create } from 'zustand';

type ColorStore = {
  backgroundColor: string;
  changeBackgroundColor: (color: string) => void;
};

export const useColorStore = create<ColorStore>()((set) => ({
  backgroundColor: 'ffffff',
  changeBackgroundColor: (color: string) => set({ backgroundColor: color }),
}));
