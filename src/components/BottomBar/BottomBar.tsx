import { useColorStore } from '@/utils/store';
import ButtonColor from '../ButtonColor/ButtonColor';
import styles from './bottom-bar.module.scss';

const BottomBar = () => {
  const { backgroundColor, textColor, primaryColor, secondaryColor } =
    useColorStore();

  return (
    <div className={styles['bottom-bar']}>
      <ButtonColor color={backgroundColor} id='Background' />
      <ButtonColor color={textColor} id='Text' />
      <ButtonColor color={primaryColor} id='Primary' />
      <ButtonColor color={secondaryColor} id='Secondary' />
    </div>
  );
};

export default BottomBar;
