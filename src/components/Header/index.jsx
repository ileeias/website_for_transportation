import styles from './Header.module.css';

export default function Header({changeModal}) {

  return (
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.logo}>TRANSPARK</div>
          <div className={styles.contact}>
            <span className={styles.phone}>+7 777 888 02 02</span>
            <button
              className={styles.callbackBtn}
              onClick={changeModal}
            >
              Вам перезвонить?
            </button>
          </div>
        </div>
        <hr className={styles.divider} />
        <nav className={styles.navMenu}>
          <a href="#">Главная</a>
          <a href="#">Услуги</a>
          <a href="#">Частые вопросы</a>
          <a href="#">Отзывы</a>
          <a href="#">О компании</a>
        </nav>
      </header>
  );
}
