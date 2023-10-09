import styles from './overlay-mobile.module.scss';

const OverlayMobile = () => {
  return (
    <div className={styles['overlay-mobile']}>
      <div className={styles['card']}>
        <h2>Your device is too small to display our app properly !</h2>
      </div>
    </div>
  );
};

export default OverlayMobile;
