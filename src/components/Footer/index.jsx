import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <nav className={styles.nav}>
          <a href="#contacts">Контакты</a>
          <a href="#about">О компании</a>
          <a href="#prices">Цены на услуги</a>
          <a href="#reviews">Отзывы</a>
          <a href="#faq">Частые вопросы</a>
          <a href="#jobs">Вакансии</a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© Все права защищены TransPark</p>
        <a href="#privacy">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}