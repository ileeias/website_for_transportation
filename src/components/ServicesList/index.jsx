import styles from './ServicesList.module.css';

export default function ServicesList() {
  const services = [
    { id: 1, title: 'Междугородние грузоперевозки', description: 'Доставка грузов по всей территории Казахстана.' },
    { id: 2, title: 'Экспресс-доставка', description: 'Срочная доставка в кратчайшие сроки.' },
    { id: 3, title: 'Услуги складирования', description: 'Хранение и обработка грузов на складе.' },
    { id: 4, title: 'Страхование грузов', description: 'Надёжная защита вашего груза от рисков.' },
    { id: 5, title: 'Консультации и сопровождение', description: 'Помощь в оформлении документов и логистике.' },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.servicesGrid}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}