import { create } from 'zustand';

type colorStoreType = {
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

export const useColorStore = create<colorStoreType>()((set) => ({
  backgroundColor: '#ffffff',
  textColor: '#000000',
  primaryColor: '#78D6C6',
  secondaryColor: '#f1be9c',
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

type textStoreType = {
  text: string;
  changeText: (text: string) => void;
};

export const useTextStore = create<textStoreType>((set) => ({
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam. Amet consectetur adipiscing elit duis. Urna condimentum mattis pellentesque id nibh. Vel pharetra vel turpis nunc. Sit amet mattis vulputate enim. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Cursus eget nunc scelerisque viverra mauris in. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Viverra justo nec ultrices dui.',
  changeText: (text: string) => set({ text }),
}));
