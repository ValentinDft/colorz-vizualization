'use client';
import { useColorStore } from '@/utils/store';
import styles from './topbar.module.scss';

const Topbar = () => {
  const { textColor, primaryColor, backgroundColor } = useColorStore();
  return (
    <div className={styles['topbar']} style={{ backgroundColor }}>
      <h1 style={{ color: textColor }}>
        Colorz <span style={{ color: primaryColor }}>vizualization</span>
      </h1>
    </div>
  );
};

export default Topbar;
