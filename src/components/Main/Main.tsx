'use client';
import { useColorStore } from '@/utils/store';
import ColorPicker from '@/components/ColorPicker/ColorPicker';
import { useState } from 'react';

const Main = () => {
  const { backgroundColor } = useColorStore();
  const [openBackground, setOpenBackground] = useState(false);
  return (
    <main style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      Colorz vizualization
      <button onClick={() => setOpenBackground(!openBackground)}>
        Background
      </button>
      {openBackground && <ColorPicker />}
    </main>
  );
};

export default Main;
