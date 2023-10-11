import styles from './overlay-mobile.module.scss';

const OverlayMobile = () => {
  return (
    <div className={styles['overlay-mobile']}>
      <div className={styles['card']}>
        <h2>The mobile version is in comming !</h2>
      </div>
    </div>
  );
};

export default OverlayMobile;
