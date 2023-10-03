import { useColorStore } from '@/utils/store';
import ButtonColor from '../ButtonColor/ButtonColor';
import styles from './BottomBar.module.scss';

const BottomBar = () => {
  const { backgroundColor } = useColorStore();

  return (
    <div className={styles['bottom-bar']}>
      <ButtonColor color={backgroundColor} />
    </div>
  );
};

export default BottomBar;
