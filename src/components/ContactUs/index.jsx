import { useState } from 'react';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const token = import.meta.env.VITE_TELEGRAM_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const text = `🚀 Новая заявка!\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📝 Доп информация: ${info}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        alert('Заявка отправлена!');
        setName('');
        setPhone('');
        setInfo('');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.formSection}>
      <form onSubmit={sendMessage} className={styles.form}>
        <h2 className={styles.title}>
          Оставьте заявку на расчет услуги грузоперевозок:
        </h2>
        <div className={styles.application_form}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Доп информация"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </div>
      </form>
    </section>
  );
}
