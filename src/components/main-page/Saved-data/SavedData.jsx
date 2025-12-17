import styles from "./styles.module.scss";
import Image from "next/image";

export default function SavedData() {
  return (
    <section className={styles.saved_data}>
      <div className={styles.mobile_saved__data}>
        <div className={styles.mobile_title}>
          <h2>
            БЕСПОКОИТЕСЬ <br /> ЗА СОХРАННОСТЬ ДАННЫХ?
          </h2>
        </div>

        <div className={styles.mobile_saved__data__image}>
          <img
            src="/images/saved/mobile.png"
            alt="cheef"
            className={styles.image}
          />
        </div>
        <div className={styles.mobile_checkbox_container}>
          <span>Оставьте заявку на бесплатный ИТ-аудит!</span>
          <div className={styles.mobile_checkbox}>
            <div className={styles.mobile_checkbox_item}>
              <Image
                src="/images/saved/checkbox.svg"
                alt="checkbox"
                width={20}
                height={20}
              />
              <span>проверим ИТ-инфраструктуру;</span>
            </div>
            <div className={styles.mobile_checkbox_item}>
              <Image
                src="/images/saved/checkbox.svg"
                alt="checkbox"
                width={20}
                height={20}
              />
              <span>выявим слабые места;</span>
            </div>
            <div className={styles.mobile_checkbox_item}>
              <Image
                src="/images/saved/checkbox.svg"
                alt="checkbox"
                width={20}
                height={20}
              />
              <span>предоставим отчет о состоянии дел;</span>
            </div>
            <div className={styles.mobile_checkbox_item}>
              <Image
                src="/images/saved/checkbox.svg"
                alt="checkbox"
                width={20}
                height={20}
              />
              <span>спланируем меры по исключению рисков.</span>
            </div>
          </div>
          <button className={styles.button_mobile}>
            <span>Получить аудит!</span>
          </button>
        </div>
      </div>
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
