import { calculateTextColor } from '@/utils/calculateTextColor';
import styles from './button.module.scss';

type propsButton = {
  backgroundColor: string;
  text: string;
};

const Button = ({ backgroundColor, text }: propsButton) => {
  const textColor = calculateTextColor(backgroundColor);
  return (
    <button
      className={styles['button']}
      style={{ backgroundColor, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Button;
