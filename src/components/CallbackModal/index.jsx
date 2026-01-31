import ContactUs from '../ContactUs';
import styles from './CallbackModal.module.css';

export default function CallbackModal({changeModalClose}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={changeModalClose}>
          ×
        </button>
        <h2 className={styles.title}>Вам перезвонить?</h2>
        <p className={styles.text}>
          Оставьте свои контакты и мы свяжемся с вами в течение 5 минут
        </p>
        <ContactUs />
      </div>
    </div>
  );
}
