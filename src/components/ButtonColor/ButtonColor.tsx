import { useColorStore } from '@/utils/store';
import styles from './ButtonColor.module.scss';
import ColorPicker from '../ColorPicker/ColorPicker';

type propsButtonColor = {
  color: string;
};

const ButtonColor = ({ color }: propsButtonColor) => {
  const { changeOpenColorPicker, openColorPicker } = useColorStore();
  return (
    <>
      {openColorPicker && (
        <div className={styles['container-color-picker']}>
          <ColorPicker />
        </div>
      )}

      <button
        className={styles['button']}
        style={{ backgroundColor: color }}
        onClick={() => changeOpenColorPicker()}
      >
        Background
      </button>
    </>
  );
};

export default ButtonColor;
