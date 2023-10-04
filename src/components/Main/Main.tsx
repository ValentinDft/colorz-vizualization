'use client';
import { useColorStore } from '@/utils/store';
import BottomBar from '../BottomBar/BottomBar';

const Main = () => {
  const { backgroundColor, textColor } = useColorStore();

  return (
    <main style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      <h1 style={{ color: textColor }}>Colorz vizualization</h1>
      <BottomBar />
    </main>
  );
};

export default Main;
