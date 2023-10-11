'use client';
import { useColorStore, useTextStore } from '@/utils/store';
import BottomBar from '../../../components/BottomBar/BottomBar';
import Button from '@/components/Button/Button';
import styles from './main.module.scss';
import ImageIllustration from '../ImageIllustration/ImageIllustration';

const Main = () => {
  const { backgroundColor, textColor, primaryColor, secondaryColor } =
    useColorStore();
  const { text, changeText } = useTextStore();

  return (
    <main
      style={{ backgroundColor: backgroundColor }}
      className={styles['container']}
    >
      <div className={styles['left-panel']}>
        <h1 style={{ color: textColor }}>Visualize Your Colors</h1>
        <p style={{ color: textColor }}>
          You can change the{' '}
          <span style={{ color: secondaryColor }}>color</span> of an element, to
          simulate a <span style={{ color: secondaryColor }}>color</span>{' '}
          palette for your website.
        </p>

        <div className={styles['container-actions']}>
          <Button backgroundColor={primaryColor} text='Get Started' />
          <Button backgroundColor={secondaryColor} text='Pricing' />
        </div>
        <textarea
          className={styles['paragraph-input']}
          value={text}
          onChange={(e) => changeText(e.target.value)}
          style={{ color: textColor }}
        />
      </div>
      <div className={styles['right-panel']}>
        <ImageIllustration />
      </div>

      <BottomBar />
    </main>
  );
};

export default Main;
