import { useColorStore } from '@/utils/store';
import styles from './button-color.module.scss';
import ColorPicker from '../ColorPicker/ColorPicker';

type propsButtonColor = {
  color: string;
  id: string;
};

const ButtonColor = ({ color, id }: propsButtonColor) => {
  const {
    changeOpenColorPicker,
    openColorPicker,
    selectedPicker,
    closeColorPicker,
    textColor,
  } = useColorStore();

  const displayPicker = () => {
    if (openColorPicker && selectedPicker === id) {
      return (
        <div className={styles['container-color-picker']}>
          <ColorPicker id={id} />
        </div>
      );
    }
  };

  const clickButton = (id: string) => {
    changeOpenColorPicker(id);
    if (openColorPicker && selectedPicker === id) {
      closeColorPicker(id);
    }
  };

  return (
    <>
      {displayPicker()}

      <button
        className={styles['button']}
        style={{ backgroundColor: color, color: textColor }}
        onClick={() => clickButton(id)}
      >
        {id}
      </button>
    </>
  );
};

export default ButtonColor;
