'use client';
import { useColorStore } from '@/utils/store';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styles from './color-picker.module.scss';

type propsColorPicker = {
  id: string;
};

const ColorPicker = ({ id }: propsColorPicker) => {
  const { backgroundColor, textColor, changeBackgroundColor, changeTextColor } =
    useColorStore();
  let color: string;

  if (id === 'Background') {
    color = backgroundColor;
  } else if (id === 'Text') {
    color = textColor;
  }

  const setColor = (color: string) => {
    if (id === 'Background') {
      changeBackgroundColor(color);
    } else if (id === 'Text') {
      changeTextColor(color);
    }
  };

  return (
    <div className={styles['card']}>
      <span>{id} color</span>
      <HexColorPicker color={color} onChange={(color) => setColor(color)} />
      <HexColorInput color={color} onChange={(color) => setColor(color)} />
    </div>
  );
};

export default ColorPicker;
