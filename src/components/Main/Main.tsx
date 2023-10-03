'use client';
import { useColorStore } from '@/utils/store';
import BottomBar from '../BottomBar/BottomBar';

const Main = () => {
  const { backgroundColor } = useColorStore();

  return (
    <main style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      Colorz vizualization
      <BottomBar />
    </main>
  );
};

export default Main;
