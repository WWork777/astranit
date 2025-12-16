import styles from "./styles.module.scss";

export default function SavedData() {
  return (
    <section className={styles.saved_data}>
      <div className={styles.clipped}>
        <div className={styles.clipped_left}>
          <img
            src="/images/saved/cheef.png"
            alt="cheef"
            className={styles.image}
          />
        </div>
        <div className={styles.clipped_right}>
          <div className={styles.clipped_right_inner}>
            <h1 className={styles.title}>
              БЕСПОКОИТЕСЬ <br /> ЗА СОХРАННОСТЬ ДАННЫХ?
            </h1>
            <p className={styles.subtitle}>
              Оставьте заявку на бесплатный ИТ-аудит!
            </p>
            <ul className={styles.list}>
              <li>проверим ИТ-инфраструктуру;</li>
              <li>выявим слабые места;</li>
              <li>предоставим отчет о состоянии дел;</li>
              <li>спланируем меры по исключению рисков.</li>
            </ul>
            <button className={styles.button}>
              <span>Получить аудит!</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
