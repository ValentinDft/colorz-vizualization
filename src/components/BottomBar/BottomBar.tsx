import { useColorStore } from '@/utils/store';
import ButtonColor from '../ButtonColor/ButtonColor';
import styles from './bottom-bar.module.scss';

const BottomBar = () => {
  const { backgroundColor } = useColorStore();

  return (
    <div className={styles['bottom-bar']}>
      <ButtonColor color={backgroundColor} id='Background' />
      <ButtonColor color={backgroundColor} id='Text' />
    </div>
  );
};

export default BottomBar;
