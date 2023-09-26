'use client';
import { useColorStore } from '@/utils/store';
import { HexColorInput, HexColorPicker } from 'react-colorful';

const ColorPicker = () => {
  const { backgroundColor, changeBackgroundColor } = useColorStore();
  return (
    <>
      <HexColorPicker
        color={backgroundColor}
        onChange={(color) => changeBackgroundColor(color)}
      />
      <HexColorInput
        color={backgroundColor}
        onChange={(color) => changeBackgroundColor(color)}
      />
    </>
  );
};

export default ColorPicker;
