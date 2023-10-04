'use client';
import { useColorStore } from '@/utils/store';
import BottomBar from '../../../components/BottomBar/BottomBar';
import Button from '@/components/Button/Button';
import styles from './main.module.scss';

const Main = () => {
  const { backgroundColor, textColor, primaryColor, secondaryColor } =
    useColorStore();

  return (
    <main style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      <h1 style={{ color: textColor }}>Colorz vizualization</h1>
      <div className={styles['container-actions']}>
        <Button backgroundColor={primaryColor} text='Get Started' />
        <Button backgroundColor={secondaryColor} text='Pricing' />
      </div>

      <BottomBar />
    </main>
  );
};

export default Main;
