import { create } from 'zustand';

type ColorStore = {
  backgroundColor: string;
  openColorPicker: boolean;
  changeBackgroundColor: (color: string) => void;
  changeOpenColorPicker: () => void;
};

export const useColorStore = create<ColorStore>()((set) => ({
  backgroundColor: '#ffffff',
  openColorPicker: false,
  changeBackgroundColor: (color: string) => set({ backgroundColor: color }),
  changeOpenColorPicker: () =>
    set((state) => ({ openColorPicker: !state.openColorPicker })),
}));
