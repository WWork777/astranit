import styles from "./styles.module.scss";
import Image from "next/image";

export default function UnderHero() {
  return (
    <section className={styles.container}>
      <div className={styles.underhero_container}>
        <div className={styles.underhero_item}>
          <div className={styles.image_container}>
            <Image
              src="/svg/underhero/first.svg"
              alt="specialists"
              width={120}
              height={120}
              className={styles.underhero_image}
            />
          </div>
          <div className={styles.text_container}>
            <h3 className={styles.title}>Грамотные специалисты</h3>
            <p className={styles.description}>
              Благодаря тщательному отбору, тестированиюи стажировке в нашей
              компании нет студентов и неопытных сотрудников. Только грамотные
              специалисты с многолетней практикой в ИТ.
            </p>
          </div>
        </div>

        <div className={styles.underhero_item}>
          <div className={styles.image_container}>
            <Image
              src="/svg/underhero/second.svg"
              alt="reaction"
              width={120}
              height={120}
              className={styles.underhero_image}
            />
          </div>
          <div className={styles.text_container}>
            <h3 className={styles.title}>Мгновенная реакция</h3>
            <p className={styles.description}>
              Начинаем работу с большинством заявок сразу после поступления.
              Срочные выезды к заказчику выполняем в течение 90 минут.
            </p>
          </div>
        </div>

        <div className={styles.underhero_item}>
          <div className={styles.image_container}>
            <Image
              src="/svg/underhero/three.svg"
              alt="service"
              width={120}
              height={120}
              className={styles.underhero_image}
            />
          </div>
          <div className={styles.text_container}>
            <h3 className={styles.title}>Сервис 24/7</h3>
            <p className={styles.description}>
              Приступаем к устранению критической аварии в любое время суток.
              Работы, требующие остановку сервера и других узловых элементов,
              запланируем на вечернее время или выходной день.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
