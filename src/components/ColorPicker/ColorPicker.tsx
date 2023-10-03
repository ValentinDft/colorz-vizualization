'use client';
import { useColorStore } from '@/utils/store';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styles from './ColorPicker.module.scss';

const ColorPicker = () => {
  const { backgroundColor, changeBackgroundColor } = useColorStore();
  return (
    <div className={styles['card']}>
      <HexColorPicker
        color={backgroundColor}
        onChange={(color) => changeBackgroundColor(color)}
      />
      <HexColorInput
        color={backgroundColor}
        onChange={(color) => changeBackgroundColor(color)}
      />
    </div>
  );
};

export default ColorPicker;
