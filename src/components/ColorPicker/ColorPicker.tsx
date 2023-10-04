'use client';
import { useColorStore } from '@/utils/store';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styles from './color-picker.module.scss';

type propsColorPicker = {
  id: string;
};

const ColorPicker = ({ id }: propsColorPicker) => {
  const {
    backgroundColor,
    textColor,
    changeBackgroundColor,
    changeTextColor,
    primaryColor,
    secondaryColor,
    changePrimaryColor,
    changeSecondaryColor,
  } = useColorStore();
  let color: string;

  if (id === 'Background') {
    color = backgroundColor;
  } else if (id === 'Text') {
    color = textColor;
  } else if (id === 'Primary') {
    color = primaryColor;
  } else if (id === 'Secondary') {
    color = secondaryColor;
  }

  const setColor = (color: string) => {
    if (id === 'Background') {
      changeBackgroundColor(color);
    } else if (id === 'Text') {
      changeTextColor(color);
    } else if (id === 'Primary') {
      changePrimaryColor(color);
    } else if (id === 'Secondary') {
      changeSecondaryColor(color);
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
