'use client';
import { useColorStore } from '@/utils/store';
import styles from './topbar.module.scss';

const Topbar = () => {
  const { textColor, primaryColor } = useColorStore();
  return (
    <div className={styles['topbar']}>
      <h1 style={{ color: textColor }}>
        Colorz <span style={{ color: primaryColor }}>vizualization</span>
      </h1>
    </div>
  );
};

export default Topbar;
