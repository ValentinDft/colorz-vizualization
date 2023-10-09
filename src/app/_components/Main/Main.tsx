'use client';
import { useColorStore } from '@/utils/store';
import BottomBar from '../../../components/BottomBar/BottomBar';
import Button from '@/components/Button/Button';
import styles from './main.module.scss';
import { useWindowSize } from '@/utils/useWindowSize';
import OverlayMobile from '@/components/OverlayMobile/OverlayMobile';

const Main = () => {
  const { backgroundColor, textColor, primaryColor, secondaryColor } =
    useColorStore();
  const onMobileDevice = useWindowSize(768);
  return (
    <main
      style={{ backgroundColor: backgroundColor }}
      className={styles['container']}
    >
      <h1>Visualize Your Colors</h1>
      <p style={{ color: textColor }}>
        You can change the <span style={{ color: secondaryColor }}>color</span>{' '}
        of any element, to simulate a color palette for your website.
      </p>
      <div className={styles['container-actions']}>
        <Button backgroundColor={primaryColor} text='Get Started' />
        <Button backgroundColor={secondaryColor} text='Pricing' />
      </div>

      <BottomBar />
      {onMobileDevice && <OverlayMobile />}
    </main>
  );
};

export default Main;
