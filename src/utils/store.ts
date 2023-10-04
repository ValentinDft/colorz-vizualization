import { create } from 'zustand';

type ColorStore = {
  backgroundColor: string;
  textColor: string;
  openColorPicker: boolean;
  selectedPicker: string | null;
  changeBackgroundColor: (color: string) => void;
  changeTextColor: (color: string) => void;
  changeOpenColorPicker: (id: string) => void;
  closeColorPicker: (id: string) => void;
};

export const useColorStore = create<ColorStore>()((set) => ({
  backgroundColor: '#ffffff',
  textColor: '#000000',
  openColorPicker: false,
  selectedPicker: null,
  changeBackgroundColor: (color: string) => set({ backgroundColor: color }),
  changeTextColor: (color: string) => set({ textColor: color }),
  changeOpenColorPicker: (id: string) =>
    set((state) => ({
      openColorPicker: true,
      selectedPicker: id,
    })),
  closeColorPicker: (id: string) =>
    set((state) => ({
      openColorPicker: false,
      selectedPicker: id,
    })),
}));
