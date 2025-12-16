import styles from "./style.module.scss";
import Image from "next/image";

export default function ProtectionRing() {
  return (
    <section className={styles.protection_ring}>
      <div className={styles.container}>
        <h1 className={styles.mobile_title}>
          ТРИ КОЛЬЦА ЗАЩИТЫ <br /> ДЛЯ СОХРАННОСТИ ваших данных!
        </h1>
        <div className={styles.grid}>
          <div className={styles.grid_cols_1}>
            <h1 className={styles.desktop_title}>
              ТРИ КОЛЬЦА ЗАЩИТЫ <br /> ДЛЯ СОХРАННОСТИ ваших данных!
            </h1>
            <ul className={styles.ring_list}>
              <li>
                <div className={styles.ring_info}>
                  <h2>#1. Минимизация рисков</h2>
                  <p>
                    Радикально снизим риски для ваших данных, задействуя
                    зеркальные дисковые массивы, сетевые экраны, антивирусную
                    защиту и разграничение доступа пользователей.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.ring_info}>
                  <h2>#2. Резервное копирование по расписанию</h2>
                  <p>
                    Настроим расписание резервного копирования с учетом ваших
                    пожеланий по периодичности копирования и сроку хранения
                    резервных копий. Задействуем ежедневный мониторинг с
                    контролем создания копий и обеспечим непрерывную
                    работоспособность инструментов резервирования.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.ring_info}>
                  <h2>#3. Репликация резервных копий</h2>
                  <p>
                    Создадим облачное хранилище реплик резервных копий. Настроим
                    репликацию, обеспечим мониторинг и поддержку ее непрерывной
                    работы. Информация останется с вами даже при утрате
                    оборудования в результате пожара, залива, кражи или изъятия!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.grid_cols_2}>
            <div className={styles.rings}>
              <div className={styles.rings_1}></div>
              <div className={styles.rings_2}></div>
              <div className={styles.rings_3}>
                <Image
                  src="/images/ring/data.svg"
                  alt="data"
                  width={150}
                  height={150}
                  className={styles.ring_image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
