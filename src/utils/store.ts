import { create } from 'zustand';

type ColorStore = {
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  openColorPicker: boolean;
  selectedPicker: string | null;
  changeBackgroundColor: (color: string) => void;
  changeTextColor: (color: string) => void;
  changePrimaryColor: (color: string) => void;
  changeSecondaryColor: (color: string) => void;
  changeOpenColorPicker: (id: string) => void;
  closeColorPicker: (id: string) => void;
};

export const useColorStore = create<ColorStore>()((set) => ({
  backgroundColor: '#ffffff',
  textColor: '#000000',
  primaryColor: '#78D6C6',
  secondaryColor: '#FFD9C0',
  openColorPicker: false,
  selectedPicker: null,
  changeBackgroundColor: (color: string) => set({ backgroundColor: color }),
  changeTextColor: (color: string) => set({ textColor: color }),
  changePrimaryColor: (color: string) => set({ primaryColor: color }),
  changeSecondaryColor: (color: string) => set({ secondaryColor: color }),
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
